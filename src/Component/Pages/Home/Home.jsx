import React, { useEffect } from 'react';
import useTitle from '../../../hooks/useTitle';
import HowWork from './How we work/HowWork';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import KeySuccess from './Key to success/KeySuccess';
import Contact from './Contact/Contact';
import AboutUs from '../AnoutUs/AboutUs';
import { Link } from 'react-scroll';
import {FaArrowUp} from 'react-icons/fa';
import LawyerList from './LawyerList/LawyerList';
import ServicePlan from './ServicePlan/ServicePlan';
import CustomerReview from './CustomerReview/CustomerReview';
import Awards from './Awards/Awards';
import Banner from './Banner/Banner';
import Service from '../Service/Service';
const Home = () => {
    useTitle("Home")

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // for   bg  animation
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
      }, []);
      
      const particlesLoaded = useCallback(async container => {
        await console.log(container);
      }, []);



      
    return (
        < >


        <div  id="top" className='overflow-hidden mt-20 m-5'>

<Banner></Banner>
<div  id="service">
<Service></Service>
</div>
<div  id="lawyerList">
<LawyerList></LawyerList>   
</div>

   <HowWork></HowWork>
   <KeySuccess></KeySuccess>
   
   <AboutUs></AboutUs>

   <div  id="ServicePlan">
   <ServicePlan></ServicePlan>
   </div>
<div id="Contact" >
   <Contact></Contact>
   </div>

   <Awards></Awards>
   <CustomerReview></CustomerReview>


<div className="elfsight-app-6f09478f-298e-40d1-8b1c-971e5d56f862"></div>





   </div>


   <div className="card-actions justify-center mb-3">
 <Link to="top" smooth={true} duration={1000}><button className="btn btn-outline btn-info  "><FaArrowUp className=''></FaArrowUp></button></Link> </div>            
   


{/* for   bg  animation */} 
   <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                      value: "",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#FFFF00",
                    },
                    links: {
                        color: "",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 900,
                        },
                        value: 25,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />


        </>
    );
};

export default Home;