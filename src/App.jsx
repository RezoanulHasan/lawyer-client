import Spinner from './Component/Shared/Spinner/Spinner';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Shared/Footer/Footer';
import Navbar from './Component/Shared/Navbar/Navbar ';
import { useEffect } from 'react';
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=' overflow-hidden '>

 <Navbar></Navbar>
     
 <div
        className="bg-cover shadow bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/5432655.png)',
        }}>  

        <div>{navigation.state === 'loading' && <Spinner />}</div>
      
        <div   className='min-h-[calc(100vh-136px)] overflow-hidden'>
          <Outlet />
          {/*chat system*/}
          <div className="elfsight-app-6f09478f-298e-40d1-8b1c-971e5d56f862"></div>
        </div>
       
    <Footer></Footer> </div>
  
</div>
  );
};

export default App;

