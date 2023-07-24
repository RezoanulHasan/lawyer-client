import React from 'react';
import './choose.css'
import { Wave } from 'react-animated-text';
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faPodcast, faUserCircle, faUsers, faWindowRestore, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


const Choose = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []); 

    return (

<>
<div className='overflow-hidden'>
<h1 className='mt-20'>.</h1>
           
 
       <Fade direction="left" > 
      <div  style={{textShadow: '0 0 3px #FF0000,0 0 4px #FF0000 '}}   className="text-white     mb-5 font-bold text-3xl mt-10 text-center">
        <Wave text="Why Choose US " effect="stretch" effectChange={2} />
      
      </div>
      </Fade> 

        <div className="container mx-auto px-4 py-10">
          <div className="main-timeline">


            <div className="timeline">
          <a href="#" className="timeline-content">
                <div className="timeline-icon"><FontAwesomeIcon icon={faRecycle} /></div>
                <div className="timeline-year"><span>01</span></div>
                <h3 className="title">Streamlined Service</h3>
                <p className="description">
                  We have developed a complete system of automated legal services, where your attorneys receive direct communications from you and receive information for your case via online forms
                </p>
              </a>
            </div>
       
            <div className="timeline">
              <a href="#" className="timeline-content">
                <div className="timeline-icon"><FontAwesomeIcon icon={faPodcast} /></div>
                <div className="timeline-year"><span>02</span></div>
                <h3 className="title">Flat Fees</h3>
                <p className="description">
                  After we evaluate your case with particularity, you will be given a flat-fee quote and a suggested legal service.
                </p>
              </a>
            </div>
          
            <div className="timeline">
              <a href="#" className="timeline-content">
                <div className="timeline-icon"><FontAwesomeIcon icon={faUserCircle} /></div>
                <div className="timeline-year"><span>03</span></div>
                <h3 className="title">Dedicated Attorney</h3>
                <p className="description">
                  Once you sign up for your service, you will be assigned a dedicated attorney to work with you. Although attorneys in our firm collaborate with each other on cases, you will not be bounced around between different attorneys. You will have one attorney assigned to your case.
                </p>
              </a>
            </div>
          
            <div className="timeline">
              <a href="#" className="timeline-content">
                <div className="timeline-icon"><FontAwesomeIcon icon={faUsers} /></div>
                <div className="timeline-year"><span>04</span></div>
                <h3 className="title">Sign up as a Client Online</h3>
                <p className="description">
                  Simply call us, send us a message, or schedule a free case evaluation and we will set you up and initiate your legal representation without you ever leaving home.
                </p>
              </a>
            </div>
      
     <div className="timeline">
              <a href="#" className="timeline-content">
                <div className="timeline-icon"><FontAwesomeIcon icon={faWindowRestore} /></div>
                <div className="timeline-year"><span>05</span></div>
                <h3 className="title">Easy and Convenient</h3>
                <p className="description">
                  A dedicated lawyer will prepare your legal forms and arrange for online notarization* for you, so you never have to leave home. This is included in your legal fees and at no additional cost to you.
                </p>
              </a>
            </div>
         
            <div className="timeline">
              <a href="#" className="timeline-content">
                <div className="timeline-icon"><FontAwesomeIcon icon={faBookmark} /></div>
                <div className="timeline-year"><span>06</span></div>
                <h3 className="title">Affordable Rates</h3>
                <p className="description">
                  Get quoted a flat-fee price, you pay that price. No hidden fees and no more guessing invoices or paying high retainers that run out quickly.
                </p>
              </a>
            </div>
         
            <div className="timeline">
              <a href="#" className="timeline-content">
                <div className="timeline-icon"><FontAwesomeIcon /></div>
                <div className="timeline-year"><span>07</span></div>
                <h3 className="title">Paperless</h3>
                <p className="description">
                  We are committed to environmental sustainability. Therefore, we operate 100% paperless! You send and receive all documents 100% online.
                </p>
              </a>
            </div>
     
          </div >
        </div>
        </div>
        </>  
      );
    };

export default Choose;