import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <>

<div className='m-2 flex mt-20 mb-10' >

<div>
<h1>Hire Lawyer Online </h1>
<TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Find the Perfect Lawyer for Your Case',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Connect with the Best Lawyers in Your Country ',
        1000,
        'Introducing Myself  as  a MERN-Developer   ',
        1000,
         
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block', 
       background: 'pink',  fontFamily: 'font-mono'}}
      repeat={Infinity}
    />


</div>


<div></div>

    
</div>









        </>
    );
};

export default Banner;