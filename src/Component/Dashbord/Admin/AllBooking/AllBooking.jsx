import React from 'react';
import { Fade } from "react-awesome-reveal";
import useTitle from '../../../../hooks/useTitle';
import { useEffect } from 'react';
import { useState } from 'react';

const AllBooking = () => {

    useTitle("All-Bookings");
    const [bookings, setBookings] = useState([]); // Change 'booking' to 'bookings' for consistency
    const url = "http://localhost:5000/bookings";
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
        });
    }, [url]);
    return (
        <div className='m-5'>
               <Fade direction="left" > 
        <h1 className='text-red-200 text-center mt-5 mb-5 text-xl font-bold '
         >Total Booking: {bookings.length}</h1>
        </Fade> 
  
        <div className="overflow-x-auto  w-full">
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr className='text-white text-xl'>
                    <th className="py-2 px-4" >Num</th>
                    <th className="py-2 px-4" >Lawyer-Img</th>
                    <th className="py-2 px-4" > Lawyer Name</th>
                    <th  className="py-2 px-4">Category</th>
                    <th className="py-2 px-4" >User-Img</th>
                    <th  className="py-2 px-4"> User-name</th>
           
                 
             
                </tr>
            </thead>
            <tbody>
                {
                    bookings.map((item, index) => 
                    <tr className="border border-gray-300" key={item._id}>
         <td className='text-white font-bold py-2 px-4 '>
             {index + 1}
             </td>
             <td className=' py-2 px-4' >
            <div className="avatar">
                 <div className="mask mask-squircle w-12 h-12">
                 <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                         </div>
                            </div>
                        </td>
                        <td className='text-red-200 py-2 px-4'>
                            {item.name}
                        </td>
                        <td className='text-white py-2 px-4'>
                            {item.category}
                        </td>

                        <td className=' py-2 px-4' >
                         <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.userPhoto} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </td>

                        <td className='text-red-200 py-2 px-4'>
                            {item.username}
                        
                        </td>
                  
      
                    </tr>)
                }


            </tbody>
        </table>

    </div>
    </div>

    );
};

export default AllBooking;