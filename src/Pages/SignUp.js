import React, { useContext, useState } from "react";
import banner from '../Assets/3426526.jpg'
import { FaMailBulk,FaUserEdit,FaKey } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignUpBtn from "../Components/SignUpBtn";
import { AuthContext } from "../Context/UseContext";
import toast from "react-hot-toast";



const SignUp = () => {
  const {createUser,googleSignIn}=useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || '/';
  const [error,setError]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;

    createUser(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      navigate(from,{replace:true})
      toast.success("Account Created Successfully")
    })
    .catch(err=>setError(err.message));
    
  }

  /* Google */
const handleGoogle=()=>{
  googleSignIn()
  .then(result=>{
   const user=result.user;
    console.log(user);
  })
  .catch((err)=>{
    setError(err.message);
  })
}
  /* Google */

  return (
    <div>
      <div className="w-full mt-[-20px] py-10 px-1 sm:px-5 flex flex-col items-center bg-gradient-to-t from-gray-100 via-white to-[#b2eac9] font-body">
        {" "}
        {/* Container */}
        {/* :TITLE */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
           Sign Up
          </h1>
        </div>
        {/* :LOGIN CONTAINER */}
        <div className="w-full md:w-3/4 max-w-5xl grid grid-cols-2 border border-gray-200 rounded-2xl bg-white text-gray-500 shadow-lg overflow-hidden">
          {/* ::Login Side */}
          <div className="col-span-2 lg:col-span-1 py-10 px-10">
            {/* :::Login form */}
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col items-center justify-center"
            >
              {/* Full Name */}
              <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
                <span className="pl-2 pr-4 border-r border-gray-200">
                  <FaUserEdit></FaUserEdit>
                </span>
                <label  className="py-2">
                  <input
                    
                    type="text"
                    name="name"
                    className="form-input h-8 py-5 px-5 border-none text-yellow-600 focus:ring-0 focus:outline-none"
                    placeholder="Full Name"
                    required
                  />
                </label>
              </div>
              {/* Email */}
              <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
                <span className="pl-2 pr-4 border-r border-gray-200">
                <FaMailBulk></FaMailBulk>
                </span>
                <label htmlFor="email" className="py-2">
                  <input
                    
                    type="email"
                    name="email"
                    className="form-input h-8 py-5 px-5 border-none text-yellow-600 focus:ring-0 focus:outline-none"
                    placeholder="Email"
                    required
                  />
                </label>
              </div>
              {/* Password */}
              <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
                <span className="pl-2 pr-4 border-r border-gray-200">
                  <FaKey></FaKey>
                </span>
                <label htmlFor="password" className="py-2">
                  <input
                    
                    type="password"
                    name="password"
                    className="form-input h-8 py-5 px-5 border-none text-yellow-600 focus:ring-0 focus:outline-none"
                    placeholder="Password"
                    required
                  />
                </label>
              </div>
              {/* Options and Login */}
              <div className="w-full py-3 flex justify-between sm:justify-around items-center">
                {/* Remember me */}
                <label htmlFor="remember" className="text-gray-500">
                  <input
                    id="remember"
                    type="checkbox"
                    className="input-checkbox mr-2 w-3.5 h-3.5 text-yellow-400 focus:ring-yellow-600"
                  />
                  Remember me
                </label>
                {/* Button Login */}
                <button type="submit">
                    <SignUpBtn>Sign Up</SignUpBtn>
                </button>
              </div>
            </form>

            {/* :::Additional options */}
            <div className="mt-2 flex justify-around items-center text-sm">
              {/* Register now */}
              <Link to='/signin'
                href="#link"
                className="text-yellow-500 transition duration-150 transform hover:scale-105"
              >
                Already Have An Acoount! Login
              </Link>
              {/* Forgot password */}
              <a href="#link" className="hover:underline">
                Forgot password?
              </a>
            </div>
            <p className="mt-5 text-red-700">{error}</p>

            {/* :::Divide line */}
            <div className="my-10 flex items-center justify-center text-xl">
              <span className="w-full mr-4 h-px bg-gray-300" />
              or
              <span className="w-full ml-4 h-px bg-gray-300" />
            </div>

            {/* :::External Autentification */}
            <div className="flex flex-col items-center text-white">
              
              <button onClick={handleGoogle} className="mb-2.5 py-3 px-7 rounded-md flex justify-between items-center bg-red-500 font-semibold uppercase tracking-wider hover:bg-red-600">
                <svg
                  role="img"
                  className="flex-shrink-0 w-5 h-5 mr-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                Login with Google
              </button>
            </div>
          </div>

          {/* ::Illustration */}
          <div className="relative hidden lg:block lg:col-span-1 w-full h-full bg-gray-200">
            <img
              src={banner}
              alt=""
              className="absolute h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
