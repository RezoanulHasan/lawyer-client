import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from "react-awesome-reveal";
import Lottie from 'lottie-react';
import lawyers from '../../../../assets/lawyers.json'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>

<div className='m-2  lg:skew-x-0   md:skew-x-0  skew-x-6  flex   lg:flex-row md-flex-row  flex-col mt-20 mb-10' >

<div className='  m-4 lg:w-1/2  md:w-1/2 w-full' >

    
<Fade direction="down"> 
<h1 className='m-5 lg:m-0  text-white  mb-5 front-bold text-3xl' style={{textShadow: '0 0 3px #FF0000,0 0 4px #FF0000 '}}>
  Hire <span className='text-white'>Lawyer</span> Online
</h1>

<TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hire the Perfect Lawyer for Your Case ....',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Hire  with the Best Lawyers ....  ',

        1000,
        ' Hire the Finest Lawyers Today.... '
             ,
    
        1000,
        ' Hire Elite Lawyers with Ease ....',

   
         
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5em', display: 'inline-block', 
       background: 'black', color:'orange',  fontFamily: 'font-mono'}}
      repeat={Infinity}
    />
</Fade>

<Fade direction="down"> 
<h1 className=' text-white bg-black front-bold font-mono mt-5'>Our lawyer hiring website, LawLink, is a comprehensive platform that connects individuals and businesses with top-notch legal professionals. With a user-friendly interface and a vast network of skilled attorneys, we streamline the process of finding and hiring the perfect lawyer for every legal need.</h1>
</Fade>
<div className="card-actions mt-5 lg:justify-end  md:justify-end">
<Link  to="/choose">
<button className='btn   btn-info btn-outline'> Why choose US  </button>
</Link>
</div>
</div>




<div className='lg:w-1/2  md:w-1/2 w-full'> 
<Fade direction="right"> 
<Lottie  className='h-80 w-full h- 'animationData={lawyers} loop={true} />
</Fade>

    
     </div>

    
</div>









        </>
    );
};

export default Banner;