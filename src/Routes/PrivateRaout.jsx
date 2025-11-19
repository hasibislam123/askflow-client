import { Navigate, useLocation } from 'react-router';
import { SyncLoader } from 'react-spinners';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const location = useLocation();
   // console.log('location',location)


   if (loading) {
      return (
         <div className="flex justify-center items-center min-h-screen">
            <SyncLoader color="#CAEB66" />
         </div>
      );
   }


   if (!user) {
      return <Navigate state={location.pathname} to="/login" />;
   }


   return children;
};

export default PrivateRoute;