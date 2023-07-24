import React from 'react';
import { FaUserShield ,FaTrashAlt} from 'react-icons/fa';
import {FcBusinessman } from "react-icons/fc";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useTitle from '../../../hooks/useTitle';
import { useQuery } from 'react-query';
import Swal from "sweetalert2";
const AllUsers = () => {

    useTitle("AllUsers");

    const [axiosSecure] = useAxiosSecure(); 
    const { data: users = [], refetch } = useQuery(['users'], async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    });
  
    const handleMakeAdmin = user => {
      fetch(`https://lawyer-hiring.vercel.app/users/admin/${user._id}`, {
        method: 'PATCH'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is an Admin Now!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    };
  
    const handleMakeLawyer = user => {
      fetch(`https://lawyer-hiring.vercel.app/users/lawyer/${user._id}`, {
        method: 'PATCH'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is an Lawyer Now!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    };
  
    const handleDelete = user => {
      Swal.fire({
        title: 'Are you sure?',
        text: `You want to delete ${user.name}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      }).then(result => {
        if (result.isConfirmed) {
          fetch(`https://lawyer-hiring.vercel.app/users/${user._id}`, {
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
                  title: `${user.name} has been deleted!`,
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            });
        }
      });
    };
  
    return (
  <div className="m-5 mb-10">
    <h3 className="text-2xl text-center text-yellow-500 font-bold my-4">Total Users: {users.length}</h3>


    <div className="w-full lg:max-w-5xl max-w-xl overflow-x-auto">
  <table className="border table-auto">
    <thead>
      <tr className="bg-gray-100 text-blue-500">
        <th className="py-2 px-4">No.</th>
        <th className="py-2 px-4">Name</th>
        <th className="py-2 px-4">Email</th>
        <th className="py-2 px-4">Role</th>
        <th className="py-2 px-4">Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={user._id}>
          <td className="py-2 px-4 text-green-400">{index + 1}</td>
          <td className="py-2 px-4 text-red-400">{user.name}</td>
          <td className="py-2 px-4 text-yellow-400">{user.email}</td>
          <td className="py-2 px-4 text-green-600 font-bold">
            {user.role === 'admin' ? (
              'Admin'
            ) : user.role === 'lawyer' ? (
              'Lawyer'
            ) : (
              <div className="space-x-2 space-y-2">
                <button
                  onClick={() => handleMakeAdmin(user)}
                  className="btn btn-outline btn-warning text-white"
                >
                  Admin <FaUserShield />
                </button>
                <button
                  onClick={() => handleMakeLawyer(user)}
                  className="btn btn-info btn-outline text-white"
                >
                  Lawyer <FcBusinessman/>
                </button>
              </div>
            )}
          </td>
          <td className="py-2 px-4">
            <button
              onClick={() => handleDelete(user)}
              className="btn btn-ghost bg-red-600 text-white"
            >
              <FaTrashAlt />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
  

  
    );
  };
  
  export default AllUsers;
  