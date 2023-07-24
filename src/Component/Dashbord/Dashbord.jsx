import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {FaUsers ,FaHome,FaWallet,FaUserEdit,FaUserTie,FaDatabase,FaBox,FaDelicious
} from 'react-icons/fa';
import useLawyer from '../../Hooks/useLawyer';
import useAdmin from './../../Hooks/useAdmin';
import useAuth from '../../Hooks/useAuth';
const Dashbord = () => {
  const { user} = useAuth();   
  const [isAdmin] = useAdmin();
  const [isLawyer] = useLawyer();

    return (
//

        <>
        <div className='m-1 overflow-hidden'>
           <div  className=" bg-cover  shadow bg-center bg-fixed   "style={{backgroundImage:
    'url(https://wallpaperaccess.com/full/5432655.png)',}}>

            <div className="drawer drawer-mobile lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    {/* Page content here */}
    <Outlet></Outlet>
  
    <label htmlFor="my-drawer-2" className="btn btn-info   drawer-button lg:hidden"> Click  Here</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4  w-80 h-full bg-black text-base-content">
      {/* Sidebar content here */}
    

      {isAdmin && (
            <>

<div className="mt-5 card justify-center rounded-full">
    <img  className="w-40 h-40" src={user?.photoURL} alt="User profile"title={user?.displayName}  />
               
                </div>

              <li><Link className='text-red-200  '  to="/dashboard/allUser"> 
      <FaUsers/> All Users</Link></li>
     
      <li><Link className='text-red-200  '  to="/dashboard/services"> 
      <FaDatabase/> Add service </Link></li>


      <li><Link className='text-red-200'  to="/dashboard/allBooking"> 
      <FaBox/> People Booking</Link></li>

      <li><Link className='text-red-200'  to="/dashboard/showService"> 
      <FaDelicious/>All service </Link></li>


</>
)}
   {isLawyer && (
            <>
<div className="mt-5 card justify-center rounded-full">
    <img  className="w-40 h-40" src={user?.photoURL} alt="User profile"title={user?.displayName}  />
               
                </div>

          <li><Link className='text-red-200  mt-10'  to="/dashboard/LawyerInfo"> 
      <FaUserTie/> Profile </Link></li> 
  
  <li><Link className='text-red-200  '  to="/dashboard/addLawyerInfo"> 
      <FaUserEdit/>Add Lawyer info </Link></li>

            </>
          )}    

{isAdmin || isLawyer ? (

<>
      <div className="divider bg-white "></div>
              <li>
                <Link  className='text-yellow-300 text-xl ' to="/">
                  <FaHome></FaHome> Home
                </Link>

                <li>

<Link  className='text-red-200 text- ' to="/services" ><FaDatabase>
</FaDatabase>Our  Services  </Link> 
</li> 

<li > 
<Link  className='text-red-200 ' to="/lawyers"  >< FaUserTie></FaUserTie>Our Lawyers</Link> </li>



              </li>
           


         
</>
) : 
<>

    <div className="mt-10 card  justify-center  rounded-full">
    <img className='w-40 h-40 'src={user?.photoURL} alt="User profile"title={user?.displayName}  />
               
                </div>
      
<li>
<Link className='text-red-200  mt-10'   to="/dashboard/userInfo">
  <FaWallet></FaWallet>My Profile
</Link>
</li>


<li><Link className='text-red-200  '  to="/dashboard/singleBooking"> 
      <FaBox/> Booking List</Link></li>


<div className="divider bg-white "></div>
              <li>
                <Link  className='text-red-200 text-xl ' to="/">
                  <FaHome></FaHome> Home
                </Link>
              </li>

       <li>

       <Link  className='text-red-200 text- ' to="/services" ><FaDatabase>
      </FaDatabase>Our  Services  </Link> 
      </li> 

<li > 
<Link  className='text-red-200 ' to="/lawyers"  >< FaUserTie></FaUserTie>Our Lawyers</Link> </li>








</>          

}
    </ul>
  
  </div>
</div>

</div> 
</div>   </>
    );
};

export default Dashbord;