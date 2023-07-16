import ActiveLink from '../ActiveLink/ActiveLink'
import { useContext } from 'react';
import { FaHome,FaInnosoft, FaLayerGroup, FaUserTie,FaUserShield,FaDatabase} from 'react-icons/fa';
import { FaClock,FaRegIdBadge} from "react-icons/fa6";
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }


    return (
<>

<div className="navbar bg-black  fixed z-50  ">
  <div className="navbar-start   ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
 <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-96 overflow-hidden  wrap">


    <li className=" text-white  font-bold"> <ActiveLink to="/" >   <FaHome></FaHome>Home </ActiveLink> </li> 
    <li className=" text-white font-bold "> 
    <Link  to="service" smooth={true} duration={1000} ><FaDatabase>
      </FaDatabase>Our  Services  </Link> </li> 
<li className="font-bold text-white "> 
<Link   to="lawyerList" smooth={true} duration={1000} >< FaUserTie></FaUserTie>Our Lawyers</Link> </li>

<li className="font-bold text-white "> 
<Link   to="ServicePlan" smooth={true} duration={1000} ><FaLayerGroup></FaLayerGroup>Charge  Plane</Link> </li>

<li className="font-bold text-white "  ><Link to="Contact" smooth={true} duration={1000} ><FaClock></FaClock>9AM - 10PM </Link> </li>

<li className="font-bold text-white "> 
<ActiveLink   to="https://www.facebook.com/Online-Lawyer-Hiring-104041331992651"  ><FaRegIdBadge></FaRegIdBadge>Fb-Page</ActiveLink> </li>
     
    { user?
            <li>
          
          <span className=''>
      <li className="text-red-200 font-bold"> <ActiveLink to="/dashboard"  ><FaUserShield></FaUserShield>    Dashboard</ActiveLink> </li>
    <label tabIndex={0} className=" btn btn-outline  btn-circle avatar">
    <div className="w-10 rounded-full">
    <img src={user?.photoURL} alt="User profile" title={user?.displayName}  />
               
                </div>
              </label>
              <button  className='btn btn-outline btn-info' onClick={handleLogout}>Log out</button>
                </span>
            </li>
            :

            <button   className='btn btn-outline text-white hover:btn' > 
            <li className="  font-bold "><ActiveLink to="/login"><FaInnosoft></FaInnosoft>Login</ActiveLink></li></button>    
            }
          




    </ul>












    </div>
    <Fade direction="right">
    <div className='bg-black flex'>
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                 <img src="https://i.ibb.co/Tv1gdSN/header.png" alt="" />
                </div>
              </label>
           
    <p style={{  }}  className=" text-3xl text-red-500 ">Lawyer<span className='text-blue-700'></span> <span className='text-blue-700'>Haring</span></p>
   
    </div>
    </Fade>
  </div>
  <div className="navbar-center hidden lg:flex">



    <ul className="menu menu-horizontal px-1">




    <li className=" text-white  font-bold"> <ActiveLink to="/" >   <FaHome></FaHome>Home </ActiveLink> </li> 
    <li className=" text-white font-bold "> 
    <Link  to="service" smooth={true} duration={1000} ><FaDatabase>
      </FaDatabase>Our  Services  </Link> </li> 
<li className="font-bold text-white "> 
<Link   to="lawyerList" smooth={true} duration={1000} >< FaUserTie></FaUserTie>Our Lawyers</Link> </li>

<li className="font-bold text-white "> 
<Link   to="ServicePlan" smooth={true} duration={1000} ><FaLayerGroup></FaLayerGroup>Charge  Plane</Link> </li>

<li className="font-bold text-white "  ><Link to="Contact" smooth={true} duration={1000} ><FaClock></FaClock>9AM - 10PM </Link> </li>

<li className="font-bold text-white "> 
<ActiveLink   to="https://www.facebook.com/Online-Lawyer-Hiring-104041331992651"  ><FaRegIdBadge></FaRegIdBadge>Fb-Page</ActiveLink> </li>
     
    { user?
            <li>
          
          <span className=''>
      <li className="text-red-200 font-bold"> <ActiveLink to="/dashboard"  ><FaUserShield></FaUserShield>    Dashboard</ActiveLink> </li>
    <label tabIndex={0} className=" btn btn-outline  btn-circle avatar">
    <div className="w-10 rounded-full">
    <img src={user.photoURL} alt="User profile" title={user.displayName}  />
               
                </div>
              </label>
              <button  className='btn  btn-outline btn-info' onClick={handleLogout}>Log out</button>
                </span>
            </li>
            :

            <button   className='btn  btn-outline btn-info' > 
            <li className="  font-bold "><ActiveLink to="/login"><FaInnosoft></FaInnosoft>Login</ActiveLink></li></button>    
            }
          




    </ul>


  </div>
  <div className="navbar-end">
  
  </div>
</div>





</>

    );
};

export default Navbar;