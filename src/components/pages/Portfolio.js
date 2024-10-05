
import Modal from './modal/modal_message.js';
import Modal1 from './modal/Modal_quotation.js';
import React,{useState, useEffect, Fragment} from 'react';
import Cookies from 'js-cookie';
import api from '../../Api.js';
import '../../App.css';
import Navbar from '../Navbar_white';
import { Link } from 'react-router-dom';
import userImage from "../../images/user_profile.jpg";
import profilePic from "../../images/builderprofile.png";
import img1 from "../../images/Builder/1.jpg";
import img2 from "../../images/Builder/2.jpg";
import img3 from "../../images/Builder/3.jpg";
import user_0 from "../../images/user_0_img.jpg";
import star_orange from '../../images/star.svg'
import star_gray from '../../images/star_grey.svg'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min.js';

export default function UserProfile_post() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [user, setUser] = useState([]);
  const user_query = useLocation().search
  
  const fetchUser = async () => {
  try{
      const userDisplay = await api.get(`/profile/display${user_query}`);
      setUser(userDisplay.data[0])
    }
    
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchUser();
  },[]);

  
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Fragment>
    <>
    <Navbar />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"></link>
    <div className='bg-white-800 p-8 md:ml-20 text-white text-center w-full-z-10'>
      <div className='flex flex-col w-full h-full '>
        {/* <div className="absolute items-center inset-0 h-2/4 bg-gradient-to-b from-black to-transparent opacity-85  -z-10"></div> */}
          <img src={userImage} alt= "pool-side home"className=' absolute inset-x-0 md:p-10 inset-y-24 h-[400px] md:h-[650px] w-full md:rounded-[75px]  object-cover -z-20'></img>
          <h1 className=' justify-center text-7xl  text-white mx-auto font-extrabold pt-60'></h1>
          <p className='justify-center text-xl text-opacity-85 text-white mx-auto pt-6'></p>
          <p className='justify-center text-xl text-white text-opacity-85 md:mb-48 mx-auto'></p>
        </div>
      <div className="relative w-full h-full mb-40 md:flex">
        <div className='md:w-1/6 px-5 items-center overflow-hidden -my-40'>
        <img
          src={profilePic}
          alt='Build_Breeze'
          className='h-80 w-full object-cover rounded-3xl'
        />
       <p className="pt-4 text-black text-3xl font-semibold">{user.full_name}</p>
        <p className="pt-2 md:py-6 text-gray-500 text-2xl font-semibold">{user.user_type}</p>
        <div className='py-3 flex w-full text-center  items-center'>
              
              <button className='text-[#994b00] inline-flex m-1.5 space-x-1 border w-1/2 justify-center  border-[#994b00] rounded-md p-3 '>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#994B00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <p  >Review</p>
                </button>
                
              <button className='text-[#994b00]  border border-[#994b00] inline-flex justify-center w-1/2 m-1.5 space-x-1 rounded-md  p-3 '>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <rect width="25" height="25" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.95975L6.92857 4H18.0714L19 4.95975V22L12.5 18.0188L6 22V4.95975ZM7.85714 5.91949V18.6314L12.5 15.7876L17.1429 18.6314V5.91949H7.85714Z" fill="#994B00"/>
              <path d="M17 6V18.5L12.5 15.5L8 18.5V6H17Z" fill="#994B00" stroke="#994B00"/>
              </svg>
                <p>Save</p>
                </button>
            </div>
          <p className='text-[#994b00] py-6 font-bold text-lg'>Contact {user.full_name}</p>
          <button className='bg-[#994b00] rounded-full px-7 p-3'>                                    
          
                                        {isOpen && (
                                        <div >
                                            <button className='' onClick={() => setShowModal(true)}>
                                            Send Message
                                            </button>
                                        </div>
                                        )}
                                        </button>
                                        <div className='pt-2'>
          <button className='bg-[#994b00] rounded-full px-7 p-3 '>                                    
          
                                        {isOpen && (
                                        <div>
                                            <button className='' onClick={() => setShowModal1(true)}>
                                            Request for Quotation
                                            </button>
                                        </div>
                                        )}
                                        </button>
                                        </div>
          
        </div>
      
      <div className="flex-col w-full max-w-4xl mx-auto">
      <div className="flex max-w-xl mt-40 mb-4" >
      <Link
        to={`/profile/${user_query}`}
      className=" hover:text-[#994B00] text-black font-semibold h-1/6 w-80 py-2   transition duration-300"
        >
        About Us
      <div className='bg-gray-400 bg-opacity-50 mt-3 h-1'></div>
      </Link>
      <Link
        to={`/portfolio/${user_query}`}
        className=" text-[#994B00]  font-semibold h-1/6 w-80 py-2   transition duration-300"
      >
        Portfolio
        <div className='bg-[#994B00] bg-opacity-100 mt-3 h-1'></div>
      </Link>
      <button
        className=" hover:text-[#994B00] text-black font-semibold h-1/6 w-80 py-2   transition duration-300 "
      >
        Review
        <div className='bg-gray-400 bg-opacity-50 mt-3 h-1 '></div>
      </button>
    </div>
      
      <div className='md:flex w-full text-left md:space-x-5 mt-4 shadow-lg rounded-lg overflow-hidden '>
        <div className='flex-col text-black space-y-10 p-6 md:p-8 w-full'>
          <h1 className='uppercase font-extrabold text-3xl'> Portfolio</h1>
          <div className='flex w-full space-x-8 justify-between '>
        <div className='relative w-2/3'>
        <img className='rounded-md  h-48 object-cover w-full object-center' src={img1} alt='Kitchen' />
        <div className='absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-60'></div>
        <div className='absolute inset-0  mt-36 flex flex-col px-4 text-2xl font-bold text-white'>
          <p>Kitchen</p>
        </div>
      </div>
      <div className='relative w-1/3 space-y-4'>
      <div className='relative w-1/3'>
        <Link to='/portfolio_details'>
        <img className='rounded-md object-cover w-full ' src={img2} alt='Bedroom' />
        <div className='absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-60'></div>
        <div className='absolute inset-0  mt-16 flex flex-col text-sm mx-1  font-bold text-white'>
          <p>Ontario</p>
        </div>
        </Link>
      </div>
      <div className='relative w-1/3'>
        <img className='rounded-md object-cover w-full ' src={img3} alt='Living Room' />
        <div className='absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-60'></div>
        <div className='absolute inset-0  mt-16 flex flex-col text-sm mx-1  font-bold text-white'>
          <p>Belleville</p>
        </div>
      </div>
      </div>
          </div>
          </div>
      </div>
      
      </div>
    </div>
      
      {/* Other content in the BuilderProfile component */}
    </div>

    </>
    <Modal isvisible ={showModal} onClose={() =>setShowModal((prev)=>(!prev))}/>
    <Modal isvisible ={showModal1} onClose={() =>setShowModal1((prev)=>(!prev))}/>
    </Fragment>
  );
}
