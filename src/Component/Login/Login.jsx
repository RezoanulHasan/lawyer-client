import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithubSquare } from 'react-icons/fa';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Providers/AuthProvider";
import useTitle from '../../hooks/useTitle';
import { Fade } from "react-awesome-reveal";
import Lottie from 'lottie-react';
import loginred from '../../assets/loginred.json'
import ReCAPTCHA from "react-google-recaptcha";


const auth = getAuth(app);

const Login = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  useTitle('Login');
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit,  setError, reset, formState: { errors, isValid } } = useForm();
  const emailRef = useRef();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = handleSubmit(async (data) => {
    const { email, password } = data;
    try {

    
     const result = await signIn(email, password);
      const loggedUser = result.user;
      console.log(loggedUser);
      reset();
      target.reset();
      navigate(from, { replace: true });
      toast.success('Sign In successfully. Welcome!', {
        position: toast.POSITION.TOP_CENTER
      });
 // Reset ReCAPTCHA value
    setRecaptchaValue('');
    navigate(from, { replace: true });

    } catch (error) {
      console.log(error);
      if (error.code === 'auth/user-not-found') {
        setError('email', { type: 'manual', message: 'Email not found. Please try again.' });
      } else if (error.code === 'auth/wrong-password') {
        setError('password', { type: 'manual', message: 'Password does not match. Please try again.' });
      } else {
        console.log(error);
      }
    }
  });


  // google recaptcha
  const handleRecaptchaChange = (value) => {   
    setRecaptchaValue(value);
  };
 



  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.warn('Please provide your email address to reset the password', {
        position: toast.POSITION.TOP_CENTER
      });
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.error('Please check your email', {
          position: toast.POSITION.TOP_CENTER
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
        const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
        toast.success('Sign In successfully. Welcome!', {
          position: toast.POSITION.TOP_CENTER
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(result => {
        const loggedUser = result.user;
        const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
        toast.success('Sign In successfully. Welcome!', {
          position: toast.POSITION.TOP_CENTER
        });
      })
      .catch(error => {
        console.log(error);
      });
  };



  return (

<>

<div className='flex lg:flex-row flex-col  mt-20'>

<div className='lg:mt-20 md:mt-20 mt-0'>

<Fade direction="down" >  
<Lottie  className='login-red'      animationData={loginred} loop={true} />
</Fade>
</div>


<Fade direction="down" > 
    <div className="flex items-center mx-20  justify-center min-h-screen ">
      <div className="  p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6  font-mono text-yellow-400 text-center">Log-In</h2>
        <form onSubmit={handleLogin}>

          <div className="mb-4">
            <label htmlFor="email" className="text-white  font-bold mb-2">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              {...register('email', { required: true })}
              className={`w-full border border-gray-400 p-4 rounded-lg focus:outline-none focus:border-red-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <div className="text-white">{errors.email.message}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-white  font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              {...register('password', { required: true })}
              className={`w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-red-500 ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder="Enter your password"
            />
            {errors.password && <div className="text-white">{errors.password.message}</div>}
          </div>

          <div className="mb-4">
  <label htmlFor="recaptcha" className="text-white font-bold mb-2">
    
  </label>
  <ReCAPTCHA
    sitekey="6LfpBAUnAAAAABVq7R5zig2JB-aVo2yOAfM1NHhy"
    onChange={handleRecaptchaChange}
  />

</div>
   


          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              onClick={handleResetPassword}
              className="text-sm  font-bold  text-white  hover:underline focus:outline-none"
            >
              Forgot password click here?
            </button>

            <button
              type="submit"
              
              className="btn btn-outline btn-warning text-white font-bold py-2 px-4 "
            >
              Log In
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="font-bold  text-white  ">or log in with</p>
          <div className="flex justify-center mt-2">
            <button
              onClick={handleGoogleSignIn}
              className="text-blue-500 hover:text-blue-700 mx-1 focus:outline-none"
            >
              <FaGoogle size={24} />
            </button>
            <button
              onClick={handleGithubSignIn}
              className="text-gray-700 hover:text-gray-900 mx-1 focus:outline-none"
            >
              <FaGithubSquare size={24} />
            </button>
          </div>
          
          <p className="mt-4 font-bold   text-green-500 text-xl">
            Don't have an account?{' '}
            <Link to="/signUp" className="font-bold hover:underline  text-yellow-400  text-xl focus:outline-none">
              Sign up
            </Link>
          </p>
        </div>
      </div>
     
    </div>
    </Fade>
    <ToastContainer />
    </div>

    </>
  );
};

export default Login;
