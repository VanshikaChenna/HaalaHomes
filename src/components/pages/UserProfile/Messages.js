import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import userImage from "../../../images/user_profile.jpg";
import profilePic from "../../../images/annie_cooper.jpg";
import user_0 from "../../../images/user_0_img.jpg";
import Navbar from '../../Navbar_white';

export default function UserProfile_wishlist() {
  return (
    <>
    <Navbar />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"></link>
    <div className='bg-white-800 md:ml-20 p-8 text-white text-center w-full-z-10'>
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
          alt='Annie Cooper'
          className='h-80 w-full object-cover rounded-3xl'
        />
        <p className="pt-4 md:py-8 text-black text-3xl font-semibold">Annie Cooper</p>
        <div className='p-4 flex-col w-full  items-center inline-flex'>
                <Link to='/UserProfile/profile'>
              <button className='text-slate-400 block uppercase m-1.5  font-bold p-3 w-full'>
                  Profile
                </button>
                  </Link>
                <Link to='/UserProfile/notification'>
              <button className='text-slate-400 block uppercase m-1.5 font-bold  p-3 w-full'>
                Notifications
                </button>
                  </Link>
            </div>
        </div>
      
      <div className="flex-col mx-auto">
      <div className="flex  mt-40 mb-4" >
      <Link
        to="/UserProfile/messages"
        className=" hover:text-[#994B00] text-black font-semibold h-1/6 w-80 py-2   transition duration-300"
      >
        Messages
        <div className='bg-[#994B00] mt-3 h-1'></div>
      </Link>
      <Link
        to="/UserProfile/posts"
        className=" hover:text-[#994B00] text-black font-semibold h-1/6 w-80 py-2   transition duration-300"
      >
        Post
        <div className='bg-[#994B002a] mt-3 h-1'></div>
      </Link>
      <Link
        to="/UserProfile/wishlist"
        className=" hover:text-[#994B00] text-black font-semibold h-1/6 w-80 py-2   transition duration-300 "
      >
        Wishlist
        <div className='bg-[#994B002a] mt-3 h-1 '></div>
      </Link>
    </div>
      <div className='flex text-left space-x-5 mt-4 shadow-lg rounded-lg  p-4'>
        <img src={user_0} className='w-14 object-cover rounded-full border-2 border-slate-200'></img>
        <div className='w-full space-x-5  flex justify-between'>
        <div className='flex-col'>
          <h2 className='text-black font-semibold text-xl'>
          Build_Breeze
        </h2>
        
        <h3 className='text-gray-400'>
          John Thomas
        </h3>
        </div>
        <p className='text-black'>9:54pm</p>
        </div>
        </div>
        <div className='flex text-left space-x-5 mt-4 shadow-lg rounded-lg  p-4'>
        <img src={user_0} className='w-14 object-cover rounded-full border-2 border-slate-200'></img>
        <div className='w-full space-x-5  flex justify-between'>
        <div className='flex-col'>
          <h2 className='text-black font-semibold text-xl'>
          Craft_homes
        </h2>
        
        <h3 className='text-gray-400'>
          Jennifer Hogan
        </h3>
        </div>
        <p className='text-black'>3:30pm</p>
        </div>
        </div>
      </div>
    
    </div>
      
      {/* Other content in the UserProfile component */}
    </div>
    </>
  );
}
