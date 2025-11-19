import React, { useEffect, useState } from "react";
import { Authcontext } from "./AuthContext";
import {
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";


const googleprovider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);


   // Register user
   const registerUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
         .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
               throw new Error("This email is already registered. Try logging in.");
            } else {
               throw new Error(error.message);
            }
         });
   };

   // Signin user
   const signinUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
         .catch((error) => {
            throw new Error(error.message);
         });
   };

   //   Signin google
   const signinGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleprovider)
   }

    const logOut = () => {
      setLoading(true)
      return signOut(auth)
    } 


    const updateUserProfile = (profile) =>{
      return updateProfile(auth.currentUser, profile)
    }


   // observe user state 
   useEffect(() => {
      const unSubscrive = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false)
      })
      return () => {
         unSubscrive()
      }
   }, [])


   const authInfo = {
      user,
      loading,
      registerUser,
      signinUser,
      signinGoogle,
      logOut,
      updateUserProfile
   };

   return (
      <Authcontext.Provider value={authInfo}>
         {children}
      </Authcontext.Provider>
   );
};

export default AuthProvider;