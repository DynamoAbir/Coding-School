import React from 'react';
import BtnSchool from './BtnSchool/BtnSchool';

const NavBar = () => {
    return (
        <div className="navbar bg-[#262626] text-white h-[100px]" >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <li><a>Home</a></li>
                        <li><a>Courses</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl ">Coding School</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Courses</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-5">

                <BtnSchool>Login</BtnSchool>
                <button class="btn bg-white text-black">Sign In</button>

            </div>
        </div>
    );
};

export default NavBar;