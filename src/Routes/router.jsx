import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Covarage from "../Pages/Coverage/Covarage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRaout";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import AboutUs from "../Pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
         {
            index: true,
            element: <Home></Home>
         },
         {
            path: 'rider',
            element: <PrivateRoute>   <Rider></Rider>  </PrivateRoute>
         },
         {
            path: 'coverage',
            element: <Covarage></Covarage>,
            loader: () => fetch('/ServiceCenter.json').then(res => res.json())
         },
         {
            path: 'sendparcel',
            element: <PrivateRoute> <SendParcel></SendParcel> </PrivateRoute>,
            loader: () => fetch('/ServiceCenter.json').then(res => res.json())
            
         },
         {
            path: 'aboutus',
            element:<AboutUs></AboutUs> ,
         }
      ]
   },
   {
      path: '/',
      element: <AuthLayout></AuthLayout>,
      children: [
         {
            path: 'login',
            element: <Login></Login>
         },
         {
            path: 'register',
            element: <Register></Register>
         }
      ]
   }
]);

