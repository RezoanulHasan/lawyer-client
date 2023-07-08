import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUsers ,FaHome} from 'react-icons/fa';
import useLawyer from '../../Hooks/useLawyer';
import useAdmin from './../../Hooks/useAdmin';
const Dashbord = () => {

  const [isAdmin] = useAdmin();useAdmin
  const [isLawyer] = useLawyer();

    return (


        <>
           <div  className=" bg-cover  shadow bg-center bg-fixed   "style={{backgroundImage:
    'url(https://wallpaperaccess.com/full/5432655.png)',}}>

            <div className="drawer drawer-mobile lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    {/* Page content here */}
    <Outlet></Outlet>
  
    <label htmlFor="my-drawer-2" className="btn btn-primary  drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-black text-base-content">
      {/* Sidebar content here */}
    

      {isAdmin && (
            <>
              <li><Link className='text-green-500 text-xl'  to="/dashboard/allUser"> 
      <FaUsers/> All Users</Link></li>

</>
)}
   {isInstructor && (
            <>
                       <li><Link className='text-green-500 text-xl'  to="/dashboard/lawyerInfo"> 
      <FaUsers/>Add Lawyer info </Link></li>


            </>
          )}    

      <div className="divider bg-white "></div>
              <li>
                <Link  className='text-green-500 text-xl ' to="/">
                  <FaHome></FaHome> Home
                </Link>
              </li>

    </ul>
  
  </div>
</div>

</div> 
        </>
    );
};

export default Dashbord;