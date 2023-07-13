import React from 'react';
import'./AboutUs.css'
import { Fade } from 'react-awesome-reveal';
const AboutUs = () => {

    return(
        <>

        <div className=" mt-10  gap-3 grid lg:grid-cols-3 md:grid-cols-3  grid-cols-1 ">
            
        <Fade direction="left">
      <div className="our-team card  bg-black  w-full h-full  ">
    <div className="card-body text-white"> 
    <h3 className="title">problem</h3>
    <p className=" text-white "> There is a rise in the amount of crime in our country and most of the people are unaware of the criminal laws under Supreme Court for Bangladesh. To escape from the hands of criminals and to get proper justice. It is very important that a person can get justice by hiring a qualified lawyer.</p>			
    
                </div>  </div>

                </Fade>
                <Fade direction="left">
     <div className="our-team card bg-black w-full h-full ">
      <div className="card-body"> 
        <h3 className="title">Our mission </h3>
    <span className="post">Helping people who needs expenses lawyer. Saving   people from broker. Reduce cost. Boosting the efficiency of service.
</span>				 
 </div>
                </div>
                </Fade>




                <Fade direction="right">
    <div className="our-team card bg-black  w-full h-full   ">

<div className="card-body">      
<h3 className="title">Our Vission  </h3>
 <span className="text-red-300">Live Conversation and online hiring system. Digital payment processing system. Advanced analysis and tracking. Secure client and lawyer information Better relation management.

</span>				 

      </div>
      </div>
      </Fade>
{/*ff
      <Fade direction="right">
      <div className="our-team card w-full h-full   ">
                    <div className="card-body">
                    <h3 className="title">History</h3>
                    <span className="post"></span>

            <ul className="social">
               <li><a href="#" className="fa fa-facebook"></a></li>
               <li><a href="#" className="fa fa-twitter"></a></li>
               <li><a href="#" className="fa fa-google-plus"></a></li>
               <li><a href="#" className="fa fa-linkedin"></a></li>
        </ul>
            </div>        </div>       </Fade>*/}




            </div>

         
    

        </>
    );
};

export default AboutUs;