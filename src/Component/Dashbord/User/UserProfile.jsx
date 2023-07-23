import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import {FcBusinessContact ,FcFeedback} from "react-icons/fc";
import useTitle from '../../../hooks/useTitle';
const UserProfile = () => {
    const { user} = useAuth();   
    useTitle("User Profile"); 
    return (
        <div>

            <div className='card-actions justify-center  '> 
<div  className=' m-20   text-red-50 font-bold'>
    <div>
 <img className='w-60 h-40 'src={user?.photoURL} alt="User profile" />
 </div>
 <div className='card mt-10'>
        <h1 className='card-title text-bold text-yellow-500  text-2xl'><FcBusinessContact></FcBusinessContact>Name :{user?.displayName} </h1>
        <h1  className='card-title  font-bold text-xl'><FcFeedback></FcFeedback>
Email: {user?.email} </h1>
        <h1  className='font-bold text-green-300 text-xl'>{user?.phone} </h1>
        </div>

        </div>
        </div>
        </div>
    );
};

export default UserProfile;