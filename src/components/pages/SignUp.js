// import React,{useState, useEffect} from 'react';
// import '../../App.css';
// import { Link } from 'react-router-dom'
// import image from "../../images/sign_up.jpg"
// import api from '../../Api.js'

// export default function SignUp() {
//     const [users, setUsers] = useState([]);
//     const [formData, setFormData] = useState({
//       full_name: "",
//       email_id: "",
//       password: ""
//       //,category: ""
//     });
//     const fetchUser = async () => {
//       try {
//         const response = await api.get('/userdata');
//         if (Array.isArray(response.data)) {
//           setUsers(response.data);
//         } else {
//           console.error(response);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     useEffect(() => {
//       fetchUser();
//     }, []);

//   const handleInputChange = (event) => {
//     const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
//     setFormData({
//       ...formData,
//       [event.target.name]: value
//     });
//   };
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     await api.post('/userdata', formData);
//     fetchUser();
//     setFormData({
//       full_name: "",
//       email_id: "",
//       password: ""
//       //,category: ""
//     });
//   };
  

//   return(
    
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
// {/* <h1 className= 'text-3xl  text-[#323232] font-semibold' >HaalaHomes</h1> */}

// <div className='w-full flex flex-col'>
//       <div className='w-full flex flex-col mb-5'>
//       <h3 className= 'md:text-5xl text-4xl font-semibold text-center text-gray-600 mt-14 mb-8'>Create Your Account</h3>
//       {/* <p className='text-sm mb-2' >Welcome Backl Please enter your details.</p> */}
//       </div>

// <div  className='w-full md:w-2/3 flex-col items-center  mx-auto  outline outline-slate-200 outline-2 rounded-sm  shadow-xl md:p-8 md:pt-12 pb-8 mb-10'>
// <form className=' w-full border-0' onSubmit={handleFormSubmit}>
//   <p  className='px-1 mb-4 text-gray-700 font-semibold'>Name</p>
//   <input
//   id='full_name' name='full_name' onChange={handleInputChange} value={formData.full_name}
//   type="text"
//   placeholder="Annie Cooper"
//   className= 'w-full text-gray-500 mb-7 py-3 px-3 bg-transparent border-b-1 border-gray-400 outline outline-3 outline-gray-200 shadow-md  shadow-gray-200 focus:outline-gray-300 ' />
//   <p className='px-1 mb-4 text-gray-700 font-semibold'>Email ID</p>
//   <input
//   id='email_id' name='email_id' onChange={handleInputChange} value={formData.email_id}
//   placeholder="Email ID"
//   className= 'w-full text-gray-500 mb-7 py-3 px-3  bg-transparent border-b-1 border-gray-400 outline outline-3 outline-gray-200 shadow-md  shadow-gray-200 focus:outline-gray-300' />
//   <p  className='px-1 mb-4 text-gray-700 font-semibold'>Password</p>
//   <input
//   id='password' name='password' onChange={handleInputChange} value={formData.password}
//   type="password"
//   placeholder="Password"
//   className= 'w-full text-gray-500 mb-7 py-3 px-3  bg-transparent border-b-1 border-gray-400 outline outline-3 outline-gray-200 shadow-md  shadow-gray-200 focus:outline-gray-300' />
//   {/* <p  className='px-1 mb-4 text-gray-700 font-semibold'>Select Category</p> */}
//   {/* <select
//     // id='Category' name='Category' onChange={handleInputChange} value={formData.name}
//     className='w-full text-gray-500 mb-12 py-3 px-3 bg-transparent border-b-1 border-gray-400 outline outline-3 outline-gray-200 shadow-md shadow-gray-200 focus:outline-gray-300'
//     defaultValue="Home Owner" // Set a default value if needed
//   >
//     <option value="category1">Home Owner</option>
//     <option value="category2">Builder</option>
//     <option value="category2">Supplier</option>
//     {/* Add more options as needed */}
//   {/* </select> */}
//   {/* <button type="submit" className="btn btn-primary mb-3">Submit</button> */}
//   <div className='w-full mx-auto'>
//     <button type='submit' className=' text-xl w-full bg-[#994B00] text-white py-3 rounded-full'>
//       SIGN UP
//       </button>
//   </div>
// </form>
// {/* <table className="table table-striped table-bordered table-hover">
//         <thead>
//           <tr>
//             <th>1</th>
//             <th>4</th>
//             <th>7</th>
            
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user)=> (
//             <tr key={user.id}>
//               <td>{user.full_name}</td>
//               <td>{user.email_id}</td>
//               <td>{user.password}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}
// </div>
// </div>
// <div className='w-full flex items-center justify-center'>
//   <p className= 'text-sm font-normal text- [#060606]'> Already Have an Account?<Link to="/log-in"><span className='text-sm font-semibold text-[#994B00]'> Login </span></Link></p>
// </div>
// </div>
// </div>

//   )
// }
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';
import '../Style.css';
import image from "../../images/sign_up.jpg"
import api from '../../Api.js'
import can from "../../images/image 34.png"

function Signup() {
    
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [formData, setFormData] = useState({
      full_name: "",
      email: "",
      phone: "",
      user_type: "",
      otp:""
    });
    
    useEffect(() => {
    }, []);

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await api.post('/users', formData);
        console.log(response.data)
        if (response.data === 'Signed Up succesfully') {
            setIsSignedUp(true);
            console.log("Signed Up succesfully");
            window.location.href = '/log-in';
            
        } else {
            setError('');
        }
        } catch (error) {
        console.error("Error logging in:", error);
        }
    setFormData({
      full_name: "",
      email: "",
      phone: "",
      user_type: "",
      otp: ""   
    });
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
      <div className=' w-full md:w-1/2 scale-90 bg-[#fff]'>
        <h3 className='heading_title'><a href="/">Home</a></h3>
                <div className="login_frm_sect">
          <div className="form_crd">
                        <form  className='p-0 border-0'onSubmit={handleFormSubmit} >
                            <div className="row">
                                <div className="col-lg-12 text-center col-md-12 col-sm-12">
                                    <h2 className='text-4xl pb-6 font-semibold text-gray-600'>Create Your Account</h2>
                                </div>
                            </div>
                            <div className='inner_bdy'>
                            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                            {error && <p className="text-green-500 text-center mt-2">Signed Up succesfully</p>}     
                            <div className="row">
                            <div className="col-lg-12 mb-4 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input required type="text" name="full_name" id="full_name" onChange={handleInputChange} value={formData.full_name} className="form-control" placeholder="Annie Cooper" />
                                    </div>
                                </div>
                            <div className="col-lg-12 col-md-12 mb-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Email ID</label>
                                        <input required type="text" name="email" id="email" className="form-control" onChange={handleInputChange} value={formData.email} placeholder="admin@halahomes.ca" />
                                    </div>
                                </div>
                            <div className="col-lg-12 col-md-12 mb-4 col-sm-12">
                                    <div className="form-group grid grid-rows-2">
                                      
                                        <label>Phone Number</label>
                                        <div className='flex '>
                                        <img src={can} className='w-10 h-11 rounded-sm object-contain'></img>
                                        <input required type="text" name="phone" id="phone" className="form-control" onChange={handleInputChange} value={formData.phone} placeholder="" />
                                    </div>
                                    </div>
                                </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                            <label>Choose Category</label>
                                    <select
                                      id='user_type' name='user_type' 
                                      className='form-control' 
                                      onChange={handleInputChange}
                                      value={formData.user_type}
                                      required
                                      // Set a default value if needed
                                    >
                                      <option value="">Select your category</option>
                                      <option value="Home Owner">Home Owner</option>
                                      <option value="Builder">Builder</option>
                                      <option value="Supplier">Supplier</option>
                                      <option value="Designer">Designer</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="frm_frog">
                                        <div className="otp_grp">
                                            <input required value={formData.otp} onChange={handleInputChange} type="text" name="otp" id="otp" placeholder="* * * *"  className="form-control" />
                                            {/* <input type="text" placeholder="*" className="form-control" />
                                            <input type="text" placeholder="*" className="form-control" />
                                            <input type="text" placeholder="*" className="form-control" /> */}
                                        </div>
                                        <div className="pass_rest">
                                        1234 <a href="#">Resend OTP</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='inline-flex mt-4  w-full justify-center items-center text-center space-x-2'>
                                <input required id="" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
                                <p className='text-md font-normal text-gray-600'>I agree with <Link to="/log-in"><span className='font-base text-md text-[#994a00be]'>terms and conditions</span></Link> of Halahomes</p>
                                </div>
                                <div className="col-sm-12 -mt-10">
                                    <button type='submit' className='btn'>SIGNUP</button>
                                </div>
                                <div className=' text-center mt-3'>
                            <p className='text-md font-normal mt-40 md:mt-3 text-[#060606]'>Already Have an Account? <Link to="/log-in"><span className='text-md font-semibold text-[#994B00]'>Login</span></Link></p>
                            </div>
                            </div>
                            </div>
                            
                        </form>

                    </div>
                    </div>

        
        </div>
        </div>
        
        </>
    );
};

export default  Signup;