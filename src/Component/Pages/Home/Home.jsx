import React, { useEffect } from 'react';
import useTitle from '../../../hooks/useTitle';
import HowWork from './How we work/HowWork';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import KeySuccess from './Key to success/KeySuccess';
import Contact from './Contact/Contact';
import AboutUs from '../AnoutUs/AboutUs';
const Home = () => {
    useTitle("Home")

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
      }, []);
      
      const particlesLoaded = useCallback(async container => {
        await console.log(container);
      }, []);
      
    return (
        < >

<div  
 id="top" 
className=" bg-cover  shadow bg-center bg-fixed"
style={{
  backgroundImage:
    'url(https://wallpaperaccess.com/full/5432655.png)',}}>

        <div className='overflow-hidden m-5'>
   <HowWork></HowWork>
   <KeySuccess></KeySuccess>
   <AboutUs></AboutUs>
   <Contact></Contact>
   </div>
   </div>


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