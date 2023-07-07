import ActiveLink from '../ActiveLink/ActiveLink'
import { useContext } from 'react';
import Lottie from 'lottie-react';
import { FaHome,FaInnosoft, FaLayerGroup, FaUserTie,FaUserShield } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import GetRandomColor from './../GetRandomColor/GetRandomColor';

import { Fade } from 'react-awesome-reveal';
const Navbar = () => {
  const textColor = GetRandomColor(); 
  const {user, logOut} = useContext(AuthContext);
    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }

    return (
<>

    {/* 
      <div   className='overflow-hidden'>

      <div className="  navbar  bg-opacity-30   max-w-screen-xl  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-success lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>

            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li className=""> <ActiveLink to="/" >Home </ActiveLink> </li> 
           
        
            <li className=" font-bold "> <ActiveLink to="/allClass" >All classes </ActiveLink> </li> 
            <li className=""> <ActiveLink to="/allInstructors" >Instructors </ActiveLink> </li>
              {user ?
            <li>
               <li className=""> <ActiveLink to="/dashboard" >Dashboard</ActiveLink> </li> 

                <span className=''>
               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User profile" title={user.displayName}  />
                </div>
              </label>
              <button onClick={handleLogout}>Log out</button>
                </span>
            </li>
            :
            <li><ActiveLink to="/login">Login</ActiveLink></li>
            }
            </ul>



          </div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                 <img src="https://i.ibb.co/Tv1gdSN/header.png" alt="" />
                </div>
              </label>
              <Fade direction="down">
    <i style={{  }}  className=" normal-case text-white  text-2xl ">Law<span className='text-yellow-300'>yer</span> Har<span className='text-red-300'>ing</span></i>
    </Fade>
              
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className=" text-white  font-bold"> <ActiveLink to="/" >   <FaHome></FaHome>Home </ActiveLink> </li> 
    <li className="text-white font-bold "> <ActiveLink to="/allClass" >All <FaLayerGroup></FaLayerGroup>  classes </ActiveLink> </li> 
   <li className="text-white font-bold "> <ActiveLink to="/allInstructors" > < FaUserTie></FaUserTie>  Instructors </ActiveLink> </li>
            

        
            { user?
            <li>
          
                <span className=''>
                <li className="text-yellow-400 font-bold"> <ActiveLink to="/dashboard"  ><FaUserShield></FaUserShield>    Dashboard</ActiveLink> </li>
                <label tabIndex={0} className=" btn btn-outline text-white btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="User profile" title={user.displayName}  />
               
                </div>
              </label>
              <button  className='btn btn-outline text-white' onClick={handleLogout}>Log out</button>
                </span>
            </li>
            :
            <li className=" text-white font-bold "><ActiveLink to="/login"><FaInnosoft></FaInnosoft>Login</ActiveLink></li>
            }
         

          </ul>
        </div>
        <div className="navbar-end">
        <Lottie  className='h-20 overflow-hidden'      loop={true} />
      </div>
      </div> 
<div>

</div>
    </div>
    */}

<div className="navbar bg-base-100   fixed z-50  ">
  <div className="navbar-start   ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>


      </ul>
    </div>
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                 <img src="https://i.ibb.co/Tv1gdSN/header.png" alt="" />
                </div>
              </label>
              <Fade direction="right">
    <i style={{  }}  className="  font-mono text-3xl text-red-500 ">Law<span className='text-blue-700'>yer</span> Har<span className='text-blue-700'>ing</span></i>
    </Fade>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

    <li className="   font-bold"> <ActiveLink to="/" >   <FaHome></FaHome>Home </ActiveLink> </li> 
    <li className=" text-black font-bold "> <ActiveLink to="/allClass" >All <FaLayerGroup></FaLayerGroup>  classes </ActiveLink> </li> 
   <li className="font-bold text-black "> <ActiveLink to="/allInstructors" > < FaUserTie></FaUserTie>  Instructors </ActiveLink> </li>

     
    { user?
            <li>
          
                <span className=''>
                <li className="text-red-500 font-bold"> <ActiveLink to="/dashboard"  ><FaUserShield></FaUserShield>    Dashboard</ActiveLink> </li>
                <label tabIndex={0} className=" btn btn-outline  btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="User profile" title={user.displayName}  />
               
                </div>
              </label>
              <button  className='btn btn-outline text-blue-600 ' onClick={handleLogout}>Log out</button>
                </span>
            </li>
            :
            <li className="  font-bold "><ActiveLink to="/login"><FaInnosoft></FaInnosoft>Login</ActiveLink></li>
            }
          




    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>





</>

    );
};

export default Navbar;