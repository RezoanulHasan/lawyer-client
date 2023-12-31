import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../Hooks/useAuth';
import Spinner from '../Component/Shared/Spinner/Spinner';

const Privet = ({ children }) => {
    const { user, loading } = useAuth(); 
    const location = useLocation(); 
    if (loading) {
      return <Spinner></Spinner>
    }
  
    if (user) {
      return (
        <>
          {children}
          <ToastContainer />
        </>
      );
    }
  
    const handleNavigate = () => {
      toast.error('Please log in to access this page.');
      return <Navigate to="/login" state={{ from: location }} replace />;
    };
  
    return handleNavigate();
  };

export default Privet;