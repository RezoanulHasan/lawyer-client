import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import useTitle from '../../../../hooks/useTitle';
import useAuth from '../../../../Hooks/useAuth';

const ShowSingleBooking = () => {
  useTitle('My-Bookings');
  const { user } = useAuth();
  const [bookings, setBooking] = useState([]);


  const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setBooking(data);
        });
    }, [url]);



  return (
    <div className="m-5">
      <Fade direction="left">
        <h1 className="text-red-200 text-center mt-5 mb-5 text-xl font-bold">  All Bookings -{bookings.length}</h1>
      </Fade>
      <div className="overflow-x-auto w-full">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className='text-white font-bold text-xl'>
              <th>Num</th>
              <th>lawyer Img</th>
              <th>lawyer Name</th>
           
              <th>Category</th>
              <th>Time</th>
              <th>User Name</th>

            </tr>
          </thead>
          <tbody>
            {bookings.map((item, index) => (
              <tr className="border border-gray-300 "  key={item._id}>
                <td className=" text-white font-bold" >{index + 1}</td>
                <td className=''>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td className="text-green-500  font-bold ">{item.name}</td>
                <td className="text-yellow-500 font-bold">{item.category}</td>
                <td className="text-white " >{item.time}</td>
                <td className="text-green-500  font-bold ">{item.username}</td>
             
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowSingleBooking;

