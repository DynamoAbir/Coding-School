import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();
const UseContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitProvider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const sharedInfo = {
    createUser,
    signIn,
    logOut,
    loading,
    user,
    googleSignIn,
    gitHubSignIn,
  };
  return (
    <div>
      <AuthContext.Provider value={sharedInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UseContext;
