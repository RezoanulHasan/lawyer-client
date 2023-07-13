import React from 'react';
import "./ServicePlan.css"
import { Fade } from 'react-awesome-reveal';

const ServicePlan = () => {
    return (
        <div>

      <Fade direction="down">       
 <h1  style={{textShadow: '0 0 3px #FF0000,0 0 4px #FF0000 '}}   className="text-center hero-overlay  text-white text-2xl font-bold mt-10" > 💼 Our Employment Law Service Charge Options 💼 </h1>


 <h2 className="m-5 text-white text-center mb-5"> We are committed to exceptional client care at Springhouse Solicitors. This includes being open and transparent about our charges and letting you know straight away if they may exceed the estimate.</h2>



<div className="container  m-4 gap-5 grid  grid-cols-1  lg:grid-cols-4  md:grid-cols-4   ">
             <div className="serviceBox">
                <div className="service-icon">
                    <span><i className="fa fa-rss"></i></span>
                </div>
                <h3 className="title"> Pay As<span> You Go</span></h3>
                <p className="description">Many of our clients prefer us to work on a pay-as-you-go basis. For this type of service, our standard hourly rate applies.Contact us and pay easily .</p>
            </div>
 

    
            <div className="serviceBox red">
                <div className="service-icon">
                    <span><i className="fa fa-th-large"></i></span>
                </div>
                <h3 className="title">Case  <span>Review</span></h3>
                <p className="description">Review case Very carefullt then,Spend up to half an hour with a lawyer for an introductory fixed fee to find out whether you have a case or ask any specific questions.</p>
            </div>
       
       

            <div className="serviceBox">
                <div className="service-icon">
                    <span><i className="fa fa-arrows-alt"></i></span>
                </div>
                <h3 className="title"> Fixed<span> Fees</span></h3>
                <p className="description">In most cases, we can also fix our fees for the work we do. We’ll take into account the likelihood of additional and unexpected work and give you a fixed cost.</p>
            </div>
        



            <div className="serviceBox">
                <div className="service-icon">
                    <span><i className="fa fa-microchip"></i></span>
                </div>
                <h3 className="title"> Initial<span>meeting</span></h3>
                <p className="description">We usually start working for you by spending approximately 2 hours reviewing your case and advising you on your legal rights and next steps. We can meet you online.</p>         	   		   		   
    </div>

</div>

</Fade>


        </div>
    );
};

export default ServicePlan;