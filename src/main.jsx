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
import PrivateRoute from './privetroutes/PrivateRoute.jsx';





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
  element:<Terms></Terms>
},

{
  path: "lawyer",
  element:<LawyerList></LawyerList>,
},

{
  path:  "/lawyers/view/:id",
 element:<PrivateRoute><Details></Details></PrivateRoute> ,
 loader: ({params}) => fetch(`http://localhost:5000/lawyers/${params.id}`),
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
  path: "terms",
  element:<Terms></Terms>
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
