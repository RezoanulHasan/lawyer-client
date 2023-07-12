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
   </div>


   <div className="card-actions justify-center">
 <Link to="top" smooth={true} duration={1000}><button className="btn btn-warning  hover:btn "><FaArrowUp className=''></FaArrowUp></button></Link> </div>            
   


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
                            default: "bounce",
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
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />


        </>
    );
};

export default Home;