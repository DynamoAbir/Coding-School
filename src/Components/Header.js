import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import { AuthContext } from '../Context/UseContext';

const Header = () => {
  const {user,logOut}=useContext(AuthContext);
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const handleLogOut=()=>{
    logOut()
    
  }
  const items=<>
    <li><Link to='/'>Home</Link></li>
        <li><Link to='/courses'>Courses</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>
    return (
      <header className="w-full bg-[#49a99a] text-white body-font mb-4 shadow-sm">

      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* ::Site logo and Name */}
        <a href="#link" className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
        <nav>
              <Link className="flex gap-3" to="/">
                <img src={logo} alt="logo" className="w-12 h-12" />
                <h3 className="text-2xl font-bold text-white">Coding School</h3>
              </Link>
            </nav>
         
        </a>
        {/* ::Navbar */}
        <nav className="hidden md:flex flex-wrap items-center justify-center text-xl font-semibold tracking-wide">
          <Link to="/" className="mr-8 hover:text-indigo-500">Home</Link>
          <Link to="/" className="mr-8 hover:text-indigo-500">Courses</Link>
          <Link to="/" className="mr-8 hover:text-indigo-500">FAQ</Link>
          <Link to="/" className="mr-8 hover:text-indigo-500">Blog</Link>
        </nav>
        {/* ::Avatar */}
        <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
        {user?.email?<button onClick={handleLogOut} className="mr-8 text-xl hover:text-indigo-500">Sign Out</button>:<Link to="/signup" className="mr-8 text-xl hover:text-indigo-500">Sign In</Link>
        }
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        {/* ::Burger icon standard */}
        <button 
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-500 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-purple-500 hover:to-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ::MOBILE MENU */}
      { isOpen &&
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-50 text-base uppercase text-center  font-semibold">
          <Link to="/" className="mr-8 hover:text-indigo-500">Solutions</Link>
          <Link to="/" className="mr-8 hover:text-indigo-500">Prices</Link>
          <Link to="/" className="mr-8 hover:text-indigo-500">About</Link>
          <Link to="/" className="mr-8 hover:text-indigo-500">Contact</Link>
        </div>
      }
    </header>
    );
};

export default Header;