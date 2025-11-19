import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Socallogin from '../Sociallogin/Socallogin';

const Login = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const { signinUser } = useAuth();
   const location = useLocation();
   const navigate = useNavigate();

   // console.log('in the login page',location)
   const handelLogin = (data) => {
      console.log(data);
      signinUser(data.email, data.password)
         .then(result => {
            console.log(result.user)
            navigate(location?.state || '/')
         })
         .catch(error => {
            console.log(error)
         })
   }

   return (
      <div className='w-full max-w-sm   p-6 md:p-8'>
         <h1 className="text-4xl font-extrabold ">Welcome Back</h1>
         <p className="text-sm text-gray-700 mb-5">Login with AskFlow</p>
         <form onSubmit={handleSubmit(handelLogin)} >

            <div className="mb-4">
               <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
               </label>
               <input
                  {...register('email', { required: true, minLength: 6 })}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
               />
               {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}

            </div>

            <div className="mb-2">
               <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
                  Password
               </label>
               <input
                  {...register('password', { required: true, minLength: 6 })}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
               />
               {errors.password?.type === 'required' && <p className='text-red-500'>Email is required</p>}
               {errors.password?.type === 'minLength' && (<p className="text-red-500">Password must be at least 6 characters</p>)}
            </div>

            <a href="#" className="block text-sm text-gray-600 hover:text-gray-800 mb-6">
               Forget Password?
            </a>

            <button
               type="submit"
               className="w-full py-3 bg-[#CAEB66] text-gray-800 font-bold rounded-md shadow-md"
            >
               Login
            </button>
         </form>

         <div className="mt-6 text-center text-sm">
            <p className="text-gray-700">
               Don't have any account?{' '}
               <Link state={location?.state} to={'/register'} className="text-[#CAEB66] font-semibold underline ">
                  Register
               </Link>
            </p>
         </div>
         
         <Socallogin></Socallogin>

      </div>

   );
};

export default Login;