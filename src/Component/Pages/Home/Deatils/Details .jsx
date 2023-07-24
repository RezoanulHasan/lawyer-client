import {  useNavigate, useLoaderData, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import {  Wave } from 'react-animated-text';
import Marquee from "react-fast-marquee";
import useTitle from '../../../../hooks/useTitle';
import { useEffect } from 'react';
const LawyerDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  useTitle("Lawyer detail's");
  const navigate = useNavigate();
  const  Lawyers= useLoaderData();

  const handleBooking = (_id) => {
    navigate(`/lawyers/booking/${_id}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

 

  const { name, category, details,photo,cases,price,experience,time,email,eduction,
    
    _id }
   = Lawyers ;

  return (
    <div className='m-5 mt-20'>

        <h1 className='mt-20' > .</h1>


 



        <Fade direction="up">  
<div className='card-actions  mt-10
  justify-center'>


        <div className="card   bg-gray-600 w-96 shadow-xl">

  
        <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
> 
        <figure>
  <img className="lg:object-cover    w-80 h-80"src={photo} alt="Lawyer"
  />
</figure>
</motion.div>     


 <div className="card-body   text-white">    


               <h2 className="card-title   text-2xl">Name:- {name}</h2>
               <div className='flex gap-10'>
                        <h2 className="card-title text-red-200">{category}</h2>
                        <p className="card-title text-red-200 " >Price:{price}Tk</p>
                        </div>
                        <p className='card-title'>Email:-{email}</p>
                        </div>
                     
                        </div>   



                        </div>            
                        </Fade >      
                     





      <div className='text-center font-bold text-white font-mono  mb-5 mt-20 text-3xl'>
    <Wave    text=" Awards " effect="stretch" effectChange={2} />  
  </div>
 

  <Marquee speed={200}>

 <div className="grid  grid-cols-10 gap-4">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxFDoZEK1Z2dr5F6xv-ajIapGtLZA9l2PjTmLIoJ0EakMCt2dbZ4-Z3NYnoew602sb00&usqp=CAU"
            className="rounded  h-44 w-56"
            alt="Award"
          />



          <img
            src="https://blackwell-attorneys.com/wp-content/uploads/2022/03/Untitled-design-3-copy-2.png"
            className="rounded h-44 w-56 "
            alt="Award"
          />




<img
            src="https://www.thelegalawards.com/uploads/images/cms/original/1687255893SLA_MasterLogo_Colour_2023.png"
            className="rounded h-44 w-56 "
            alt="Award"
          />


<img
          className='h-44 w-56'  src= "https://www.crystocraft.com/wp-content/uploads/2022/02/U0362-TTZ-CC1B-1.jpg"
            alt="Award"
          />

    

          <img
            src="https://cdn.blrankings.com/best-lawyers/article-images/georgia-lawyer-of-the-year-2022-4407-2"
            className="rounded h-44 w-56 "
            alt="Award"
          />
  
  <img
            src="https://www.cincottaadvisory.com/wp-content/uploads/2020/02/award-cincotta1.jpg"
            className="rounded h-44 w-56 "
            alt="Award"
          />

          <img
            src="https://www.bdlplaw.com/____impro/1/onewebmedia/asialaw-profile-rosette.png?etag=%221e2e8-6001cffe%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=197%2B212"
            className="rounded h-44 w-56 "
            alt="Award"
          />

  <img
            src="https://static.wixstatic.com/media/e674c2_a0e0dfe6293e4a2b8f39880a971cd24b~mv2_d_1500_1501_s_2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e674c2_a0e0dfe6293e4a2b8f39880a971cd24b~mv2_d_1500_1501_s_2.jpg"
            className="rounded h-44 w-56 "
            alt="Award"
          />

<img
            src="https://www.fenchurchlaw.co.uk/wp-content/uploads/2020/05/the-lawyer-award-2018.jpg"
            className="rounded h-44 w-56 "
            alt="Award"
          />
  
  <img
          className='h-44 w-56'  src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZiSdgtqjQc5l2fJDCgsB3DnUbKEr2azrfIC6CVVnF7zktL9uhO5o0rsDGAmwoj23pLI&usqp=CAU"
          />
  

    </div>
  
   </Marquee>






   <Fade direction="down">   
   <div className="card-body lg:m-20 m-1   bg-gray-700  shadow-xl    text-white">

   <div className=' gap-10  '>
                   <div className=' text-red-200  lg:flex-row  md:flex-row   flex-col gap-0 lg:gap-5 md:gap-5' >
                <p className='card-title   '>Solving-cases:   {cases}+ </p>
              <p className="card-title" >Experience:     {experience}
                         yr+</p>
                         </div>

                         </div>
                         <div className=' gap-10  '>
                        
                        
             
                         </div>
       <div className='flex gap-10 text-green-500 '>
                         <p className="card-title  " >Eduction : {eduction}</p>
                         <p className="card-title" >Time: {time}</p>
                         </div>
          
  <p  className='flex gap-10 text-white' >{details}</p>


                        </div>

                       </Fade>   


    
                       <div className='card-actions justify-center mt-5 lg:mt-0'>

           <Link to="https://www.google.com/maps/dir/%E0%A6%9F%E0%A6%BF%E0%A6%8F%E0%A6%AE%E0%A6%8F%E0%A6%B8%E0%A6%8F%E0%A6%B8+%E0%A6%AB%E0%A6%BE%E0%A6%89%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A7%87%E0%A6%B6%E0%A6%A8+%E0%A6%85%E0%A6%AB%E0%A6%BF%E0%A6%B8,+Bogra+-+Rangpur+Hwy,+Gokul/Judge+Court,+Bogura/@24.8752054,89.3251,11239m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x39fcff7dc233b713:0xae4db9e1cb64272a!2m2!1d89.3552512!2d24.9048655!1m5!1m1!1s0x39fc552b7541a7fd:0xf97071f072c51fd4!2m2!1d89.3761175!2d24.846855!3e0?entry=ttu" >           
  <div className="grid w-40 h-40 rounded bg-primary text-primary-content place-content-center font-bold"> OFFICE <br />Google map</div> </Link>  

  <div className="grid w-40 h-40 rounded bg-accent text-accent-content place-content-center font-bold  ">PHONE <br />  01423456987 </div> 
  </div>

  <div className='card-actions justify-center mt-5 '>



  <button    className="grid w-40 h-40 rounded bg-black
 
  text-secondary-content  btn btn-outline place-content-center font-bold "
  
  onClick={() => handleBooking(_id)} 
  
  >Booking
  <br />  NOW
  
   </button> 


  
   </div>

   
                        
   <div className="card-actions justify-center">
      <button  className="btn mt-10 btn-outline btn-warning" onClick={handleBack}>Go Back</button>   
      </div>
      </div>





  );
};

export default LawyerDetails;
