import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

import { app } from '../Firebase/firebase.config';

const auth =getAuth(app);
export const AuthContext=createContext();
const UseContext = ({children}) => {
   const [user,setUser]=useState(null);
   const [loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const sharedInfo={createUser,signIn,logOut,signInWithGoogle,loading,user}
    return (

        <div>
            <AuthContext.Provider value={sharedInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;