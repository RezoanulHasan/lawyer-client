import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Fade } from "react-awesome-reveal";
const AddLawyerInfo = () => {
 const [axiosSecure] = useAxiosSecure(); 
 const { user} = useAuth();  
    useTitle("Add Lawyer Info");
  

    const handleAdd = (event) => {
        event.preventDefault();
        const form = event.target;   
        const name = form.name.value;
        const email = form.email.value;
        const experience= form.experience.value;
        const price = form.price.value;
        const cases = form.cases.value;
        const category = form.category.value;
      const photo =form.photo.value;
         const details = form.details.value;
         const  eduction = form.eduction.value;
          const  time = form.time.value;
          const number = user?.phone; 
        const newLawyer = {
         experience,
          price,
          cases,
          category,
          details,
          name ,
          email,
           photo,
           eduction,
           time,
           number,
          status: 'pending', // Set the initial status as 'pending'
        };
    
        console.log(newLawyer );






  // send data to the server
  fetch('https://lawyer-hiring.vercel.app/lawyers', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newLawyer),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Add Info Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      }
      form.reset();
    });
};


    return (
        <>
         <Fade direction="down" > 
        <div className="m-10 overflow-hidden">
        <div className=" 12"> <h2 className="text-3xl mb-5 text-center text-red-200 font-extrabold">ADD-INF0</h2>
          <form onSubmit={handleAdd}>  


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
                    defaultValue={user?.displayName}
                    required readOnly
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text text-yellow-400">Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    required readOnly
                    defaultValue={user?.email} 
                  />
                </label>
              </div>
            </div>







            {/* form price and category row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-400 ">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                    required
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
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text text-yellow-400 ">Solving Cases</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="cases"
                    placeholder="Cases"
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
            </div>
  {/* form eduction and  photo row */}
  <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-400 ">Eduction </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                     name="eduction"
                    placeholder="Eduction"
                    className="input input-bordered w-full"
                    required 
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text text-yellow-400 ">Photo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    className="input input-bordered w-full"
                    readOnly  defaultValue={user?.photoURL}
                    required
                  />
                </label>
              </div>
            </div>

  {/* form eduction and  photo row */}
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
                  />
                </label>
              </div>
            </div>

{/* submit button */}
<div className="form-control mt-6">
 <button type="submit" className="btn btn-outline btn-warning text-white w-full">
                Add Info
              </button>
            </div>
          </form>

            </div> </div> 
            </Fade> 
        </>
    );
};

export default AddLawyerInfo;