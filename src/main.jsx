import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Error from './Component/Shared/Error/Error';
import Home from './Component/Pages/Home/Home';
import AuthProvider from './Component/Providers/AuthProvider.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Regestasion/Register.jsx';
import Terms from './Component/Pages/Terms/Terms';
import Dashbord from './Component/Dashbord/Dashbord.jsx';
import AllUsers from './Component/Dashbord/Admin/AllUsers.jsx';
import AddLawyerInfo from './Component/Dashbord/Lawyer/AddLawyerInfo.jsx';
import SingleLawyerInfo from './Component/Dashbord/Lawyer/SingleLawyerInfo.jsx';
import LawyerList from './Component/Pages/Home/LawyerList/LawyerList.jsx';
import Details from './Component/Pages/Home/Deatils/Details .jsx';
import AddService from './Component/Dashbord/Admin/AddService/AddService';
import Service from './Component/Pages/Service/Service.jsx';
import ServiceDetalis from './Component/Pages/Service/ServiceDetalis';
import UserProfile from './Component/Dashbord/User/UserProfile';
import Booking from './Component/Dashbord/User/Booking/Booking.jsx';
import Choose from './Component/Pages/Home/WhyChoseUs/Choose.jsx';
import ShowSingleBooking from './Component/Dashbord/User/ShowSingleBooking/ShowSingleBooking.jsx';
import AllBooking from './Component/Dashbord/Admin/AllBooking/AllBooking.jsx';
import Privet from './Route/Privet.jsx';
import ShowService from './Component/Dashbord/Admin/ShowService/ShowService.jsx';
import Update from './Component/Dashbord/Lawyer/Update.jsx';


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
 },

 {
  path: "login",
  element: <Login/>,
},
{
  path: "signUp",
  element: <Register></Register>,
},
{
  path: "terms",
  element:<Terms></Terms>,
},

{
  path: "choose",
  element:<Choose></Choose>,
},

{
  path: "lawyers",
  element:<LawyerList></LawyerList>,
},

{
  path:  "/lawyers/view/:id",
 element:<Privet><Details></Details></Privet> ,
 loader: ({params}) => fetch(`http://localhost:5000/lawyers/${params.id}`),
  },


{
  path:  "/lawyers/booking/:id",
 element:<Booking></Booking>,
 loader: ({params}) => fetch(`http://localhost:5000/lawyers/${params.id}`),
  },

{
  path: "services",
  element:<Service></Service>,
},

  {
    path:"/services/view/:id",
   element:<Privet><ServiceDetalis></ServiceDetalis></Privet> ,
   loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
    },
    
  


    ],
  },


  {
    path: "dashboard",
    element:<Dashbord></Dashbord>,
    errorElement: <Error/>,
    children: [

      //admin
      {
        path: "allUser",
        element: <AllUsers></AllUsers>,
 },

 {
  path: "services",
  element: <AddService></AddService>,
},
{
  path: "showService",
  element:<ShowService></ShowService>,
},

{
  path: "allBooking",
  element: <AllBooking></AllBooking>,
},



  //lawyer

 {
  path: "addLawyerInfo",
  element:<AddLawyerInfo></AddLawyerInfo> ,
},
{
  path: "LawyerInfo",
  element: <SingleLawyerInfo></SingleLawyerInfo>,
},

{
  path:  "update/:id",
 element:<Update></Update> ,
 loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
  },



//user

{
  path:"userInfo",
  element:<UserProfile></UserProfile>,
},

{
  path:"singleBooking",
  element:<ShowSingleBooking></ShowSingleBooking>,
},


    ],
  },






]);







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<AuthProvider>
      <QueryClientProvider client={queryClient}>
 <RouterProvider router={router} />
 </QueryClientProvider>
 </AuthProvider>

  </React.StrictMode>,
)
