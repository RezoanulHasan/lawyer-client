import React from 'react';
import useTitle from '../../../../hooks/useTitle';
import { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ShowService = () => {
  useTitle("All-Service");
  const [services, setServices] = useState([]);
  const url = "https://lawyer-hiring.vercel.app/services";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [url]);

  const refetch = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to delete ${item.name}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://lawyer-hiring.vercel.app/services/${item._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount) {
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${item.name} has been deleted!`,
                showConfirmButton: false,
                timer: 1500
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className='m-5 mt-10'>
        <Fade direction="left">
          <h1 className='text-red-200 text-center mt-5 mb-5
           text-xl font-bold'>All Services: {services.length}</h1>
        </Fade>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr className='text-white text-xl'>
                <th className="py-2 px-4">Num</th>
                <th className="py-2 px-4">Img</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                services.map((item, index) => (
                  <tr className="border border-gray-300 "   key={item._id}>
                    <td className='text-white py-2 px-4  font-bold'>
                      {index + 1}
                    </td>
                    <td className="py-2 px-4" >
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </td>
                    <td className='text-red-200 py-2 px-4'>
                      {item.name}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-ghost bg-red-600 text-white"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowService;
