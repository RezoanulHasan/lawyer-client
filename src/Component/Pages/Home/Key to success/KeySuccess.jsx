import React from 'react';
import './KeySucce.css'
import {  Wave } from 'react-animated-text';
import { Fade } from 'react-awesome-reveal';


const KeySuccess = () => {

    return (
        <>

<Fade direction="down">

<div className='text-center font-bold text-white font-mono mb-10  mt-10 text-3xl'>
    <Wave    text=" About-Us  " effect="stretch" effectChange={2} />  
  </div>


        
         <div className="container">

    <div className=" grid lg:grid-cols-5 md:grid-cols-5  grid-cols-1">
     
            <div className="counter red">
                <div className="counter-icon">
                    <i className="fa fa-balance-scale	"></i>
                </div>
                <h3>Lawyer</h3>
                <span className="counter-value">100+</span>
            </div>
    

            <div className="counter yellow">
                <div className="counter-icon">
                    <i className="fa fa-gavel"></i>
                </div>
                <h3>Client Connect</h3>
                <span className="counter-value">5000k+</span>
            </div>	

            <div className="counter green">
                <div className="counter-icon">
                    <i className="fa fa-users"></i>
                </div>
                <h3>Experience</h3>
                <span className="counter-value">40y+</span>
            </div>
    
			
		
            <div className="counter blue">
                <div className="counter-icon">
                    <i className="fa fa-briefcase"></i>
                </div>
                <h3>service team</h3>
                <span className="counter-value">20+</span>
            </div>
      
            <div className="counter yellows">
                <div className="counter-icon">
                    <i className="fa fa-handshake-o"></i>
                </div>
                <h3>Available
</h3>
                <span className="counter-value">24 hr</span>
            </div>	


        </div> 
    </div> 
    </Fade>
    </> 
    );
};

export default KeySuccess;