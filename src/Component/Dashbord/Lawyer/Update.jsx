import React, { useEffect } from 'react';
import useTitle from '../../../hooks/useTitle';
import useSingleLawyer from '../../../Hooks/useSingleLawyer';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';
const Update = () => { // Destructure "match" prop to get URL parameters

    useTitle("Update Info");
    const [card, refetch] = useSingleLawyer(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };  
  const  Lawyers =  useLoaderData();
  const { _id } = Lawyers ;
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedName = form.name.value;
    const updatedPrice = form.price.value;
    const updatedExperience= form.experience.value;
    const updatedTime= form.time.value;
    const updatedCategory = form.category.value;
    const updatedDetails = form.details.value;
 
    const updateLawyer  = {
      name: updatedName,
      time : updatedTime,
      price: updatedPrice,
      experience: updatedExperience,
      category: updatedCategory,
      details: updatedDetails,
    
    };

    console.log(updateLawyer);
  
        const url = `https://lawyer-hiring.vercel.app/lawyers/${_id}`;
        fetch(url, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updateLawyer),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error('Failed to update Info');
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: 'Success!',
                text: 'Info Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool',
              });
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: 'Error',
              text: 'Failed to update Info',
              icon: 'error',
              confirmButtonText: 'OK',
            });
          });
      

    };
  



  return (
    <div className="m-4 overflow-hidden">
      {card.map((cart) => (
        <div key={cart._id} className="card w-100 shadow-xl">
          <figure>
            <img className="w-80 h-80" src={cart.photo} alt="Lawyer" />
          </figure>



 <h2 className="text-xl mb-5 text-center text-red-200 font-bold">Update-Info</h2>
          <form onSubmit={handleUpdate}>  

        {/* form lawyerName and email row */}
        <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
        <label className="label">
        <span className="label-text text-yellow-400">Lawyer-Name</span>
          </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full"
                    defaultValue={cart.name}
                    required readOnly
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text text-yellow-400 ">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    className="input input-bordered w-full"
                    required
                    defaultValue={cart.category}
                  />
                </label>
              </div>
            </div>
{/* form experience and  solving Case */}
<div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-400 ">Experience</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="experience"
                    placeholder="Experience"
                    className="input input-bordered w-full"
                    required
                    defaultValue={cart.experience}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text text-yellow-400 "> Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                    required
                    defaultValue={cart.price}
                  />
                </label>
              </div>
            </div>

  {/* form details and time */}
  <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-400 ">Time </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                     name="time"
                    placeholder="Time"
                    className="input input-bordered w-full"
                    required 
                    defaultValue={cart.time}
                  />
                </label>
              </div>

              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
                <span className="label-text text-yellow-400">Details</span>
              </label>
              <label className="input-group">
                <input
                type="textarea" 
                  name="details"
                  placeholder="Enter class details"
                  className="input input-bordered w-full"
                    required
                    defaultValue={cart.details}
                  />
                </label>
              </div>
            </div>



{/* submit button */}
<div className="form-control mt-6">
 <button type="submit" className="btn btn-outline btn-warning text-white w-full">
                update Info
              </button>
            </div>
          </form>





          
        </div>
      ))}

<div className="card-actions justify-center">
      <button  className="btn mt-10 btn-outline btn-warning" onClick={handleBack}>Go Back</button>   
      </div>
    
    </div>
  );
};

export default Update;



