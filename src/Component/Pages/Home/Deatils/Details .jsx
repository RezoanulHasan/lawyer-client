import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import {  Wave } from 'react-animated-text';
import Marquee from "react-fast-marquee";
const LawyerDetails = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const  Lawyers= useLoaderData();

  const handleBack = () => {
    navigate(-1);
  };

 

  const { name, category, details,photo,cases,price,experience,time,email,eduction} = Lawyers ;

  return (
    <div className='m-5 mt-20'>

        <h1 className='mt-20' > .</h1>


 



        <Fade direction="up">  
<div className='card-actions  mt-6  justify-center'>


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
                   <div className='flex text-red-200  lg:flex-row  md:flex-row   flex-col gap-0 lg:gap-5 md:gap-5' >
                <p className='card-title   '>Solving:-{cases}cases + </p>
              <p className="card-title" >Experience: {experience}
                         years</p>
                         </div>

                         </div>
                         <div className=' gap-10  '>
                        
                         <p className="card-title" >Phone:-01423456987
                         </p>
                         </div>
       <div className='flex gap-10 text-green-500 '>
                         <p className="card-title  " >Eduction : {eduction}</p>
                         <p className="card-title" >Time: {time}</p>
                         </div>
          
  <p  className='flex gap-10 text-white' >{details}</p>


                        </div>

                       </Fade>   



                        
   <div className="card-actions justify-center">
      <button  className="btn mt-10 btn-outline btn-warning" onClick={handleBack}>Go Back</button>   
      </div>


     
      </div>





  );
};

export default LawyerDetails;
