import React from 'react';
import Logo from '../../../Component/Logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
   const { user, logOut } = useAuth();

   const handelLogOut = () => {
      logOut()
         .then()
         .catch(error => {
            console.log(error)
         })
   }
   const links = <>
      <li><NavLink to=''>Service</NavLink></li>
      <li><NavLink to='/coverage'>Coverage</NavLink></li>
      <li><NavLink to='/aboutus'>About Us</NavLink></li>
      <li><NavLink to='/sendparcel'>Pricing</NavLink></li>
      <li><NavLink to=''>Blog</NavLink></li>
      <li><NavLink to=''>Contact</NavLink></li>


      {
         user && <>
         <li><NavLink to='/dashboard/my-parcels'>My parcels</NavLink></li>
         </>
      }

   </>
   return (
      <div className="navbar bg-base-100 shadow-sm">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
               </div>
               <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  {links}
               </ul>
            </div>
            <a className=" text-xl"><Logo></Logo></a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {links}
            </ul>
         </div>
         <div className="navbar-end flex gap-2">
            {
               user ? <Link onClick={handelLogOut} className="btn p-3">log out</Link> : <Link to={'/login'} className="btn p-3">login</Link>
            }
            <Link to={'/rider'} className="flex items-center justify-center p-2 bg-[#CAEB66] text-[#1F1F1F] font-semibold rounded-md shadow-md transition duration-400">
               Be a Rider
            </Link>

            <div className='bg-[#1F1F1F] h-11 w-11 rounded-4xl flex justify-center items-center'>
               <FaArrowRight className="rotate-[300deg] h-5 w-5 text-[#CAEB66]" />
            </div>
         </div>
      </div>
   );
};

export default Navbar;