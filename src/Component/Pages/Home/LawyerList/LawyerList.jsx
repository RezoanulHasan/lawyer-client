import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {  Wave } from 'react-animated-text';
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import "../../../Shared/Marquee.css"
const LawyerList = () => {
  const navigate = useNavigate();
  const [lawyers, setLawyers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch the lawyers' data from the database
    fetch('http://localhost:5000/lawyers')
      .then((response) => response.json())
      .then((data) => {
        setLawyers(data);
        setCategories([...new Set(data.map((lawyer) => lawyer.category))]);
      })
      .catch((error) => {
        console.error('Error fetching lawyers:', error);
      });
  }, []);

  const handleView = (_id) => {
    navigate(`/lawyers/view/${_id}`);
  };

  return (
    <div className="mt-20  m-10">
 
 <div className="marquee-container">
      <h1 className=" marquee-text  font-bold text-yellow-400 font-sans text-2xl">⚖️Legal Advice Online From Top Rated Lawyers⚖️  </h1>
    </div>

    <div className="text-white  font-bold text-2xl text-center">
    <Wave    
    text="All Lawyers"   effect="stretch" effectChange={2} />  
    {lawyers.length} 
  </div>




      <Tabs>
        <TabList className="className mb-2 text-white">
          <Tab>All</Tab>
          {categories.map((category) => (
            <Tab key={category}>{category}</Tab>
          ))}
        </TabList>

        <TabPanel>
        <Fade direction="down" > 
        <div className='grid lg:grid-cols-3  grid-cols-1  '  >
          {lawyers.map((lawyer) => (
            <div  key={lawyer._id}>
  <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
    >  
  <img  className ="w-80 h-80"src={lawyer.photo} alt="Lawyer" />
</motion.div>

<div className=  'text-white text-bold text-xl  mt-2 flex gap-3'>
              <h2> Name:-{lawyer.name}</h2>
              <p>Exp:-{lawyer.experience}years</p>
              </div>
              <p className=  'text-white text-bold text-xl mb-4 mt-2 flex gap-3'>Category:-{lawyer.category}</p>
              {/* Render additional lawyer information */}
              <button   className='btn mb-4 btn-outline btn-warning  hover:btn'   onClick={() => handleView(lawyer._id)}>View Details</button>
            </div>
          ))}
</div>
           </Fade>

        </TabPanel>
        <Fade direction="down" > 
        <div className='grid lg:grid-cols-3  grid-cols-1  '  >
        {categories.map((category) => (
          <TabPanel key={category}>
            {lawyers
              .filter((lawyer) => lawyer.category === category)
              .map((lawyer) => (
                <div key={lawyer._id}>
     <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
    >  
           <img  className ="w-80 h-80"src={lawyer.photo} alt="Lawyer" /> 

           </motion.div>
           <div className=  'text-white text-bold text-xl  mt-2 flex gap-3'>
              <h2> Name:-{lawyer.name}</h2>
              <p>Exp:-{lawyer.experience}years</p>
              </div>
     {/* Render additional lawyer information */}
   <button   className='btn btn-outline btn-warning mt-5 hover:btn'  onClick={() => handleView(lawyer._id)}>View Details</button>
       </div>
              ))}
          </TabPanel>
          
        ))}
        </div>
          </Fade>
      </Tabs>
    </div>
  );
};

export default LawyerList;
