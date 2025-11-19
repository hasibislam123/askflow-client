import React, { use } from 'react';
import { Authcontext } from '../contexts/Authcontext/AuthContext';

const useAuth = () => {
   const authInfo = use(Authcontext)
   return authInfo
};

export default useAuth;