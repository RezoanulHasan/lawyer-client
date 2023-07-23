import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';
import { Wave } from 'react-animated-text';
import { Fade } from "react-awesome-reveal";
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import useAuth from '../../../../Hooks/useAuth';
const Booking = () => {
  const { user} = useAuth(); 
  const displayName = user?.displayName;
  const photoURL = user?.photoURL;
  const userEmail = user?.email;
  const phoneNumber = user?.phoneNumber;

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  
const formRef = useRef(null);
    useTitle("Booking"); 
    const  Lawyers= useLoaderData();
    const { _id, name, category, photo, price, experience, email:lawyerEmail } = Lawyers;
    const [isBooked, setIsBooked] = useState(false); 

    const navigate = useNavigate();
    const handleBack = () => {
      navigate(-1);
    };
  
    useEffect(() => {
      // Fetch the user's bookings from the server here
      fetch('http://localhost:5000/bookings') // Replace the URL with the actual endpoint to fetch user bookings
        .then((res) => res.json())
        .then((data) => {
          // Assuming data is an array of lawyer IDs that the user has booked
          const userBookings = data.map((booking) => booking.lawyerId);
          const isAlreadyBooked = userBookings.includes(_id);
          setIsBooked(isAlreadyBooked);
        })
        .catch((error) => {
          console.error('Error fetching user bookings:', error);
        });
    }, [_id]);


    const handleBooking = (event) => {
      event.preventDefault();
      const form = formRef.current;
      const name = form.name.value;
      const price = form.price.value;
      const category = form.category.value;
      const time = form.time.value;
    
      const booking = {
        userPhoto: photoURL,
        username: displayName,
        userNumber: phoneNumber,
        userEmail: userEmail, // Assuming userEmail is the variable containing the user's email from authentication
        time,
        name,
        price,
        category,
        email:lawyerEmail,// Assuming email is the variable containing the lawyer's email from Lawyers object
        photo,
        experience,
        status: 'pending', // Set the initial status as 'pending'
      };
      console.log(booking);
    
 
  // send data to the server
  fetch('http://localhost:5000/bookings', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(booking),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: ' Booking Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      }
      setIsBooked(true); 
      form.reset();
    });
};
 
  
    return (
        <div className='m-5 mt-20'>
            <h1 className='mt-20'>.</h1>
            <div className="overflow-hidden">
        <div className=" p-12">
        <Fade direction="left" > 
      <div  style={{textShadow: '0 0 3px #FF0000,0 0 4px #FF0000 '}}   className="text-white     mb-5 font-bold text-3xl mt-10 text-center">
        <Wave text="Booking Now" effect="stretch" effectChange={2} />
      
      </div>
      </Fade> 
 
   <form  ref={formRef}   onSubmit={handleBooking}>
            {/* form Name and   Category */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-400">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full"
                  defaultValue={name}
                   required readOnly

                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text text-yellow-400">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="category"
                    name="category"
                    className="input input-bordered w-full"
                  defaultValue={category}
                    required readOnly
                  
                  />
                </label>
              </div>
            </div>

 {/* form prise and   time */}
 <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-400"> Price TK</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="price"          
                    className="input input-bordered w-full"
                  defaultValue={price}
                   required readOnly

                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
        <span className="label-text text-yellow-400">Set time 10am - 6pm </span>
                </label>
                <label className="input-group">
                  <input
                    type="time"
                    placeholder="time"
                    className="input input-bordered w-full"
                    name="time"
                  required 
                  
                  />
                </label>
              </div>
            </div>



  {/* submit button */}
  <div className="form-control mt-6">
              <button type="submit" className="btn btn-warning btn-outline w-full" disabled={isBooked}>
                {isBooked ? 'Already Booked' : 'Booking'}
              </button>
            </div>
          </form>

</div>


</div>

                            
   <div className="card-actions justify-center">
      <button  className="btn mt-1 btn-outline btn-warning" onClick={handleBack}>Go Back</button>   
      </div>
 
 

        </div>
    );
};

export default Booking;