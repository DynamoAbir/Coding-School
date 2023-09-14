import React from 'react';
import logo from '../Assets/logo_transparent.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#f3fdf7] text-[#49a99a]">
  <aside>
    <img src={logo} className='w-24' alt="" />
    <p>Providing reliable knowledge since 2018</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer items-center p-4 bg-[#49a99a] text-[#f3fdf7]">
  <aside className="items-center grid-flow-col">
    <img src={logo} className='w-10' alt="" />
    <p>Copyright © 2023 - All right reserved</p>
  </aside> 
  
</footer>
        </div>
    );
};

export default Footer;