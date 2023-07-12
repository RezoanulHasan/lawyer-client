import React from 'react';
import './CustomerReview.css'
import '../../../Shared/Marquee.css'
import {  Wave } from 'react-animated-text';
import Marquee from "react-fast-marquee";
const CustomerReview = () => {
    return (
        <>

<div className='text-center font-bold text-white font-mono  mb-5 mt-10 text-3xl'>
    <Wave    text="Customers Review " effect="stretch" effectChange={2} />  
  </div>

  <Marquee speed={200}>
        <div className='m-0 lg:m-1 gap-3  grid lg:grid-cols-6 md:grid-cols-6   grid-cols-1'>
    <div className='box  card w-96  bg-black'>

        <i className="fas fa-quote-left quote"></i>
        <p className='text-white'>
          The attorneys and staff at Cascade Legal Planning were consummate
          professionals and communicated everything very clearly. They took the
          time to listen and explained every step of the process. Our legal
          work was handled with the utmost satisfaction. I recommend to all
        
        </p>
        <div className="content">
          <div className="info">
            <div className="name text-red-300 ">Nishat Tasnim</div>
            <div className="job">Client</div>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1626454918340-0e45c3cb55db?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
        </div>



        <div className='box card w-96   bg-black '>
        <i className="fas fa-quote-left quote"></i>
        <p className='text-white' >A pretty good outcome. I am so glad there will not be a protected fight and meditation. your guidance and support you are invaluable to me thought out this lengthy process. planning , descation and right decission with the team at casrcade  legal planning was surprisingly.Thank you     </p>
        <div className="content">
          <div className="info">
            <div className="name  text-red-300">Fahim Hasan</div>
            <div className="job">Client</div>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
             
            </div>
          </div>
          <div className="image">
          <img src="https://images.unsplash.com/photo-1508852951744-beab078a4b2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
          </div>
        </div>
  

        </div>
        <div className='box  card w-96   bg-black  '>
        <i className="fas fa-quote-left quote"></i>
        <p className='text-white'>
        Everything was very organzid it was explaines well.My question where and set it was very professional and very warm and friendly. Everyone was very welcoming.We had an idea that we could love so much having such a serious discussion planning with the team at cascade legal planning was surprising fun.
        </p>
        <div className="content">
          <div className="info">
            <div className="name text-red-300 ">Nafiz Khan</div>
            <div className="job">Client</div>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          <div className="image">
          <img src="https://images.unsplash.com/photo-1463674349210-38e4fa154dda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGJveXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>  
          </div>
        </div>
        </div>


	
        <div className='box card w-96   bg-black  '>
        <i className="fas fa-quote-left quote"></i>
        <p className='text-white'>
      We really appreciated the quality time you spent with us through out the process,carefully explaining everything.also appreciated the follow-up after the documents were executed to make sure our assets were properly designated. Everyone in the office was a joy to interact with.</p>
      <div className="content">
        <div className="info">
          <div className="name text-red-300">Kaniz Fatema </div>
          <div className="job">Client</div>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
        </div>
        <div className="image">
          <img src="https://images.unsplash.com/photo-1626381961661-a19e95f7e9c4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
        </div>
      </div>
    </div>

    <div className='box bg-black card w-96  '>
        <i className="fas fa-quote-left quote"></i>
        <p className='text-white'>
	Everyone at Cascade Legal Planning was very accessible and quick to respond to questions and rescheduling. We came in not knowing what to expect and appreciated their patience and thoroughness throughout the process. I will definitely refer them to friends and family.</p>
      <div className="content">
        <div className="info">
          <div className="name text-red-300">Asif Mahamud</div>
          <div className="job">Client</div>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
        </div>
        <div className="image">
          <img src="https://images.unsplash.com/photo-1483726234545-481d6e880fc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
        </div>
      </div>
    </div>

    <div className='box bg-black  card w-96 '>
        <i className="fas fa-quote-left quote"></i>
        <p className='text-white'>
	The staff members are consistently welcoming and friendly and extremely professional. Our questions and concerns were thoroughly addressed and we very much appreciate the experience. We look forward to meeting with you again in the near future. .</p>
      <div className="content">
        <div className="info">
          <div className="name text-red-300">Tasniam Akther</div>
          <div className="job">Client</div>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
        </div>
        <div className="image">
          <img src="https://images.unsplash.com/photo-1626375555954-5a06860e84a5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
        </div>
      </div>
    </div>


  </div>
  </Marquee>
 

        </>
    );
};

export default CustomerReview;