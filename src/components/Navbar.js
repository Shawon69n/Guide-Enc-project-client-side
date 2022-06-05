import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="navbar bg-black bg-opacity-40">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>Contact</Link></li>

          </ul>
        </div>
        <a href="/" class="btn btn-ghost normal-case text-3xl ml-5">GuideEnc</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li className='font-thin text-xl'><Link to='/'>Home</Link></li>
          <li className='font-thin text-xl'><Link to='/package'>Packages</Link></li>
          <li className='font-thin text-xl'><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      <div class="navbar-end mr-5">
        <Link to='/login' className='border-yellow-400 text-xl font-bold rounded-xl p-2 border-b-2'>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;