// import React,{useState, useEffect} from 'react';
// import '../../App.css';
// import { Link } from 'react-router-dom'
// import image from "../../images/sign_up.jpg"
// import api from '../../Api.js'

// export default function Login() {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await api.post('/login', { email, password });
//       if (response && response.data && response.data.message === 'Login successful') {
//         const userCookie = response.headers['set-cookie'];
//         window.location.href = '/';
//         if (userCookie) {
//           localStorage.setItem('userCookie', userCookie);
//         }
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
//       ></link>
//       {/* Left Section - Image */}
//       <div className='relative w-full md:w-1/2 h-64 md:h-full flex items-center'>
//         <img src={image} className="w-full h-full object-cover" alt="Sign Up Image" />
//       </div>

//       {/* Right Section - Form */}
//       <div className='w-full md:w-1/2 bg-[#f5f5f5] flex flex-col p-8 md:p-20 justify-between'>
//       <Link to="/" className="absolute top-4 right-4 text-3xl pr-3 font-semibold text-white md:text-gray-600">
//           &#x2715; {/* 'X' character */}
//         </Link>
//         <h1 className='text-5xl md:text-3xl mb-11 md:mb-0 text-[#323232] text-center md:text-left font-bold'>HalaHomes</h1>

//         <div className='flex flex-col'>
//           <div className='w-full flex flex-col mb-5'>
//             <h3 className='text-2xl md:text-5xl font-semibold text-center text-gray-600 mb-12'>Welcome Back</h3>
//           </div>

//           <div className='w-full md:w-2/3 flex-col items-center mx-auto outline outline-slate-200 outline-2 rounded-sm shadow-xl p-4 md:p-2 pt-4 pb-6'>
//           {error && <p className="text-red-500 text-center mt-2">{error}</p>}
//           <form onSubmit={handleLogin} className='w-full border-0 h-fit'>
//             <p className='px-1 mb-2 md:mb-4 text-gray-700 font-semibold'>Email ID</p>
//             <input
//             type="email"
//             placeholder="Annie.cooper@gmail.com"
//             className='w-full text-gray-500 mb-4 py-2 px-2 md:py-3 md:px-3 bg-transparent border-b-1 border-gray-400 outline outline-3 outline-gray-200 shadow-md shadow-gray-200 focus:outline-gray-300'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//             <p className='px-1 mb-2 md:mb-4 text-gray-700 font-semibold'>Password</p>
//             <input
//             type="password"
//             placeholder="Password"
//             className='w-full text-gray-500 mb-4 py-2 px-2 md:py-3 md:px-3 bg-transparent border-b-1 border-gray-400 outline outline-3 outline-gray-200 shadow-md shadow-gray-200 focus:outline-gray-300'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//             <div className='w-full x-auto'>
//             <button type="submit" className='text-xl w-full bg-[#994B00] text-white py-2 md:py-3 rounded-full'>LOGIN</button>
//             </div>
//             </form>
//           </div>
//         </div>

//         <div className='w-full flex items-center justify-center'>
//           <p className='text-sm font-normal mt-40 md:mt-0 text-[#060606]'>Enter Login Details or <Link to="/sign-up"><span className='text-sm font-semibold text-[#994B00]'>Create Account</span></Link></p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';
import '../Style.css';
import image from "../../images/sign_up.jpg"
import api from '../../Api.js'

function Login() {
    const [email, setEmail] = useState('');
    const [otp, setotp] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
        const response = await api.post('/login', { email, otp });
        if (response && response.data && response.data.message === 'Login successful') {
            const userCookie = response.headers['set-cookie'];
            console.log("Logged In Succesfully")
            window.location.href = '/community';
            if (userCookie){
                localStorage.setItem('userCookie', userCookie);
            }
            
        } else {
            setError('Invalid credentials');
        }
        } catch (error) {
        console.error("Error logging in:", error);
        }
    };
    return (
        <>
        <div className="login_sect flex flex-col md:flex-row h-screen">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"></link>
       
        {/* Left Section - Image */}
      <div className='relative w-full md:w-1/2 h-64 md:h-full flex items-center'>
        <img src={image} className="w-full h-full object-cover" alt="Sign Up Image" />
      </div>

      {/* Right Section - Form */}
      <div className=' w-full md:w-1/2 bg-[#fff]'>
        <h3 className='heading_title'><a href="/">Home</a></h3>
                <div className="login_frm_sect">
          <div className="form_crd">
                        <form onSubmit={handleLogin}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <h3>Welcome Back</h3>
                                </div>
                            </div>
                            <div className='inner_bdy'>
                            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                            <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label>Email ID</label>
                                        <input type="email" placeholder="Annie.cooper@gmail.com" name="email" id="email" className="form-control"  value={email}  onChange={(e) => setEmail(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="frm_frog">
                                        <div className="otp_grp">
                                            <input required name="otp" id="otp"  value={otp}  onChange={(e) => setotp(e.target.value)} type="text" placeholder="* * * * " className="form-control" />
                                            {/* <input type="text" placeholder="*" className="form-control" />
                                            <input type="text" placeholder="*" className="form-control" />
                                            <input type="text" placeholder="*" className="form-control" /> */}
                                        </div>
                                        <div className="pass_rest">
                                        1234 <a href="#">Resend OTP</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <button type='submit' className='btn'>Login</button>
                                </div>
                            </div>
                            </div>
                            <div className=' text-center mt-3'>
                            <p className='text-md font-normal mt-40 md:mt-0 text-[#060606]'>Enter Login Details or <Link to="/sign-up"><span className='text-md font-base text-[#994B00]'>Create Account</span></Link></p>
                            </div>
                        </form>

                    </div>
                    </div>

        
        </div>
        </div>
        
        </>
    );
};

export default  Login;