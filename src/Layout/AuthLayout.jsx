import React from 'react';
import Logo from '../Component/Logo/Logo';
import authimg from '../assets/authImage.png';
import { Outlet } from 'react-router';

const AuthLayout = () => {
   return (
      <div className='max-w-7xl mx-auto'>
         <Logo></Logo>

         <div className='flex items-center'>
            <div className='flex-1'>
               <Outlet></Outlet>
            </div>
            <div className='flex-1 bg-[#FAFDF0] rounded-3xl'>
               <img src={authimg} alt="" />
            </div>
         </div>
      </div>
   );
};

export default AuthLayout;