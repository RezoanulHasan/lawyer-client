import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wave } from 'react-animated-text';
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
const Service = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch the services' data from the database
    fetch('http://localhost:5000/services')
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  }, []);

  const handleView = (_id) => {
    navigate(`/services/view/${_id}`);
  };

  return (
    <div className='m-5 mb-20 mt-10'>
        <Fade direction="left" > 
      <div  style={{textShadow: '0 0 3px #FF0000,0 0 4px #FF0000 '}}   className="text-white     hero-overlay  font-bold text-3xl mt-10 text-center">
        <Wave text="Our Service"   effect="stretch" effectChange={2} />
      
      </div>
      </Fade> 
      <Fade direction="right" > 
      <div className="grid  mt-10 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  ">      
        {services.map((service) => (
          <div key={service._id} className="card  rotate-12  h-full bg-black shadow-xl">
             <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >     
    <figure>  <img src={service.photo}alt="Service" />     </figure >
            </motion.div>    
            <div className="card-body">
              <h2 className="card-title text-white  ">{service.name}</h2>
              <p className='text-white '>Success Rate:{service.successRate}% </p>
              <div className="card-actions justify-end">
                <button
                  className="btn  btn-outline btn-info"
                  onClick={() => handleView(service._id)} >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Fade> 
    </div>
  );
};

export default Service;
