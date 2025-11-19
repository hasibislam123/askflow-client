import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const Socallogin = () => {

    const location = useLocation();
    const navigate = useNavigate();
   //  console.log('location in social',location)
   const {signinGoogle} = useAuth();
   const handelGoogleSignIn = () => {
       signinGoogle()
       .then(result => {
         console.log(result.user)
         navigate(location?.state || '/')
       })
       .catch(error =>{
         console.log(error)
       })
   }

   return (
      <div>
         <p className='text-center'>OR</p>
         <button
         onClick={handelGoogleSignIn}
            type="button"
            className="w-full py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition duration-150 flex items-center justify-center font-medium"
         >
            <img
               src="https://img.icons8.com/color/16/000000/google-logo.png"
               alt="Google icon"
               className="w-4 h-4 mr-2"
            />
            Login with google
         </button>
      </div>
   );
};

export default Socallogin;