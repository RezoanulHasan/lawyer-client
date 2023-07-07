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
import AuthProvider from './Providers/AuthProvider.jsx';




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
