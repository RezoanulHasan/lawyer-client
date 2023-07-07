import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from './Component/Shared/Spinner/Spinner';



const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);


  return (
    <div className='overflow-hidden'>

<div>{navigation.state === 'loading' && <Spinner></Spinner>  }</div> 
  <div className='min-h-[calc(100vh-136px)]   overflow-hidden'>
<Outlet></Outlet>

</div>

    </div>
  );
};

export default App;