import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo_transparent.png";
import { AuthContext } from "../Context/UseContext";
import userImg from '../Assets/user.jpg'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <header className="w-full bg-[#49a99a] text-white body-font mb-4 shadow-sm">
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* ::Site logo and Name */}
        <a
          href="#link"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <nav>
            <Link className="flex gap-3" to="/">
              <img src={logo} alt="logo" className="w-16 h-16" />
            </Link>
          </nav>
          <h1 className="text-white  text-3xl ms-5 hidden lg:block">Coding School</h1>
        </a>
        {/* ::Navbar */}
        <nav className="hidden md:flex flex-wrap items-center justify-center text-xl font-semibold tracking-wide">
          <Link to="/" className="mr-8 hover:text-indigo-500">
            Home
          </Link>
          <Link to="/courses" className="mr-8 hover:text-indigo-500">
            Courses
          </Link>
          <Link to="/faq" className="mr-8 hover:text-indigo-500">
            FAQ
          </Link>
          <Link to="/blog" className="mr-8 hover:text-indigo-500">
            Blog
          </Link>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </nav>

        {/* ::Avatar */}
       {user?.email? <Link onClick={handleLogOut} className="mr-8 text-xl hover:text-indigo-500">
          Sign Out
        </Link>: <Link to="/signin" className="mr-8 text-xl hover:text-indigo-500">
          Sign In
        </Link>}
        <nav>
          <Link className="flex  gap-3" to="/">
           {user?.email?  <img
            
              src={user?.photoURL}
              alt="logo"
              className="w-12 h-12  rounded-xl"
            />: <img className="h-12 w-12 rounded-3xl" src={userImg}></img>}
          </Link>
        </nav>
        {/* ::Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-500 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-purple-500 hover:to-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* ::MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-[#f3fdf7] text-black uppercase text-center  font-semibold">
          <Link to="/" className="mr-8 hover:text-indigo-500">
            Home
          </Link>
          <Link to="/courses" className="mr-8 hover:text-indigo-500">
            Courses
          </Link>
          <Link to="/faq" className="mr-8 hover:text-indigo-500">
            FAQ
          </Link>
          <Link to="/blog" className="mr-8 hover:text-indigo-500">
            Blog
          </Link>
          <div className="mr-8 mt-3">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
