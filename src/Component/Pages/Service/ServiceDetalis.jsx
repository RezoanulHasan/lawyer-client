import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Lottie from 'lottie-react';
import law from '../../../assets/law.json'
const ServiceDetalis = () => {

  const navigate = useNavigate();
  const  Services= useLoaderData();

  const handleBack = () => {
    navigate(-1);
  };

  const { name,details,photo,_id,
    rating,about,
    successStory} = Services;
  return (
    <div className='m-5 mt-20'>
      
      <h1 className='mt-20' > .</h1>
      <div className="card-actions justify-center">

      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >     
    <figure>  <img  className='lg:w-96 w-80 h-72 ' src={photo}alt="Service" />     </figure >
            </motion.div> 
            </div>
 
  <h1  style={{textShadow: '0 0 3px #FF0000,0 0 4px #FF0000 '}}  className='text-center mt-10 mb-10 text-white text-3xl  hero-overlay'>{name}</h1>

<div className='flex  lg:flex-row md-flex-row  flex-col'>

<div className='  m-4 lg:w-1/2  md:w-1/2 w-full' >
  
<Fade direction="down"> 

<h1  className='text-white'>{details} </h1>
<h1  className= 'text-white text-xl font-bold mt-10'>{about} </h1>
</Fade>
</div>

<div className='lg:w-1/2  md:w-1/2 w-full'> 
<Fade direction="down"> 
<Lottie  className='h-80 w-full h- '      animationData={law} loop={true} />
</Fade>

    
     </div>


</div>




<Fade direction="down"> 
            <div className="card w-96 bg-black  lg:w-full md:w-full: shadow-xl">
  <div className="card-body">
  <div className="badge badge-secondary text-xl font-bold">Our Success Story</div>
  <h2 className="card-title text-white">{successStory}
    </h2>
  </div>
</div>

</Fade>


<div className="card-actions justify-center">
      <button  className="btn mt-5 btn-outline btn-info" onClick={handleBack}>Go Back</button>   
      </div>

      <div className="card-actions justify-center">
<Link  to="/lawyers">
      <button  className="btn mt-5 btn-outline btn-error">Lawyer List</button>   </Link>
      </div>

    </div>
  );
};

export default ServiceDetalis;