import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from './Component/Shared/Spinner/Spinner';
import Navbar from './Component/Shared/Navbar/Navbar ';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
const App = () => {
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
    <div className='overflow-hidden'>

<Navbar></Navbar>
<div  className=" bg-cover  shadow bg-center bg-fixed   "style={{backgroundImage:
    'url(https://wallpaperaccess.com/full/5432655.png)',}}>

<div>{navigation.state === 'loading' && <Spinner></Spinner>  }</div> 
  <div className='min-h-[calc(100vh-136px)]   overflow-hidden'>
<Outlet></Outlet>

{/* for   bg  a
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


animation */} 

</div>

</div>
</div>




  );
};

export default App;