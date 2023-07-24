import React, { useState } from 'react';
import { Wave } from 'react-animated-text';
import { Fade } from 'react-awesome-reveal';

import './Features.css'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const Features = () => {

    const carousel = (slider) => {
        const z = 300;
        function rotate() {
          const deg = 360 * slider.track.details.progress
          slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
        }
        slider.on("created", () => {
          const deg = 360 / slider.slides.length
          slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
          })
          rotate()
        })
        slider.on("detailsChanged", rotate)
      }
    
      const [sliderRef] = useKeenSlider(
        {
          loop: true,
          selector: ".carousel__cell",
          renderMode: "custom",
          mode: "free-snap",
        },
        [carousel]
      )
    


  return (
    <>
     <div className='m-5 mb-20'>
     <Fade direction="up">
        <div style={{ textShadow: '0 0 3px #FF0000,0 0 4px #FF0000' }} className="text-white font-bold text-3xl mt-20 mb-20 text-center">
          <Wave text="Our Features" effect="stretch" effectChange={2} />
        </div>


      <h4  className='mb-32 m-2 text-white '>Manage My Lawsuits manages cases, legal matter, client relationships and teamwork. It empowers me and/or my team to be even more efficient, saves your a lot of time, and enhances team collaboration as well as client and advocate relationships. It can serve as your virtual office, allowing you to allocate work, take notes, check hearing dates and keep tabs on teamwork anywhere, anytime from an internet-enabled device  </h4>
      </Fade>


      <div className='wrapper mt-20   '>
        <div className='scene'>
          <div className='carousel keen-slider' ref={sliderRef}>

          <div className="carousel__cell number-slide6">
    <img src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60%27/" className='w-96 h-80'alt="Slide 6" />
  </div>

          <div className="carousel__cell number-slide1">
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'"
        alt="Slide 1" className='w-96 h-80'
    
      />
      <h1
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '10px',
        }}
      >
    Case or Matter management
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '90%',
          left: '40%',
          transform: 'translate(-65%, -50%)',
          color: 'yellow',
          fontSize: '17px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '1px',
        }}
      >
Our case management system has made managing information easier than ever before. 
      </h1>


    </div>



  <div className="carousel__cell number-slide2">
    <img src="https://images.unsplash.com/photo-1619771766980-368d32e44b82?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGxhd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60%27/" alt="Slide 2"className='w-96 h-80' />

    <h1
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '10px',
        }}
      >
Serviec Management
      </h1>


      <h1
        style={{
          position: 'absolute',
          top: '100%',
          left: '40%',
          transform: 'translate(-65%, -50%)',
          color: 'yellow',
          fontSize: '17px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '1px',
        }}
      >
We have a experience team.Our Serviec system is very frindly and helpful

      </h1>


  </div>



  <div className="carousel__cell number-slide3">
    <img src="https://images.unsplash.com/photo-1606086357148-3042ce0fba3c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxsYXd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60%27/" alt="Slide 3" className='w-96 h-80'/>


    <h1
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '10px',
        }}
      >
Security Management

      </h1>

      <h1
        style={{
          position: 'absolute',
          top: '100%',
          left: '40%',
          transform: 'translate(-65%, -50%)',
          color: 'yellow',
          fontSize: '17px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '1px',
        }}
      >

We have a experience team.Our Scurity system is very hard.
      </h1>
  </div>



  <div className="carousel__cell number-slide4">
    <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGxhdyUyMGZpcm18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60%27/" alt="Slide 4" className='w-96 h-80'  />
    <h1
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '10px',
        }}
      >
Customized booking List

      </h1>

      <h1
        style={{
          position: 'absolute',
          top: '100%',
          left: '40%',
          transform: 'translate(-65%, -50%)',
          color: 'yellow',
          fontSize: '17px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '1px',
        }}
      >

Show booking list,money which you  lawyer you booking fot meet
      </h1>
      </div>



  <div className="carousel__cell number-slide5">
    <img src="https://images.unsplash.com/photo-1517778991803-3fa8c9341083?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBleHBlcmllbmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60%27/" alt="Slide 5"className='w-96 h-80' />

    <h1
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '10px',
        }}
      >
User Management

      </h1>

      <h1
        style={{
          position: 'absolute',
          top: '100%',
          left: '40%',
          transform: 'translate(-65%, -50%)',
          color: 'yellow',
          fontSize: '17px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '1px',
        }}
      >

Pernolioze dashboard for every users 
      </h1>


  </div>



  <div className="carousel__cell number-slide6">
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'"
        alt="Slide 6" className='w-96 h-80'
    
      />
      <h1
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '10px',
        }}
      >
    Case or Matter management
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '90%',
          left: '40%',
          transform: 'translate(-65%, -50%)',
          color: 'yellow',
          fontSize: '17px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '1px',
        }}
      >
Our case management system has made managing information easier than ever before. 
      </h1>


    </div>







  






          </div>
        </div>
      </div>

    
  

      </div>

    </>
  );
};

export default Features;
