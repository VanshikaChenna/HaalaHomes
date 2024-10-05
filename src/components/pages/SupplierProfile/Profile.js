import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import userImage from "../../../images/user_profile.jpg";
import profilePic from "../../../images/Supplier/profile_pic.jpg";
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
        <p className="pt-4 md:py-8 text-black text-3xl font-semibold">Handyman House</p>
        <div className='p-4 flex-col w-full  items-center md:inline-flex'>
        <Link to='/SupplierProfile/profile'>
              
              <button className='text-white uppercase block m-1.5 bg-[#994b00] font-bold p-3 w-full'>
                Profile
                </button>
                </Link>
                <Link to='/SupplierProfile/notification'>

              <button className='text-slate-400 uppercase block m-1.5 font-bold  p-3 w-full'>
                Notifications
                </button>
                </Link>
            </div>
        </div>
      
      <div className="flex-col mx-auto">
      <div className="flex max-w-xl mt-40 mb-4" >
      <Link
        to="/SupplierProfile/messages"
        className=" hover:text-[#994B00] text-black font-semibold h-1/6 w-80 py-2   transition duration-300"
      >
        Messages
        <div className='bg-gray-400 bg-opacity-50 mt-3 h-1'></div>
      </Link>
      <Link
        to="/SupplierProfile/portfolio"
        className=" hover:text-[#994B00] text-black font-semibold h-1/6 w-80 py-2   transition duration-300"
      >
        Portfolio
        <div className='bg-gray-400 bg-opacity-50 mt-3 h-1'></div>
      </Link>
      <Link
        to="/SupplierProfile/wishlist"
        className=" hover:text-[#994B00] text-black font-semibold h-1/6 w-80 py-2   transition duration-300 "
      >
        Wishlist
        <div className='bg-gray-400 bg-opacity-50 mt-3 h-1 '></div>
      </Link>
    </div>
      <div className='md:flex max-w-4xl  text-left md:space-x-5 mt-4 shadow-lg rounded-lg overflow-hidden '>
        <div className='flex-col  border p-6 md:p-14 w-full'>
          <div className='md:flex md:space-x-8'>
            <img src={profilePic} className=' md:h-48  md:w-48 h-80 w-80 p-6 md:p-0 object-cover rounded-full  md:mr-2 border-slate-200'></img>
            <div className='flex-col w-full px-3'>
              <h2 className='text-gray-800 pl-1   md:pb-2 text-md'>
              Company Name
              </h2>
              <div className='w-full'>
                <input type="text" placeholder="Handyman House" className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
              </div>
              <div className='grid md:grid-flow-col mt-10 space-y-5 md:space-y-0 md:space-x-6 w-full justify-stretch'>
                <button className='block uppercase border-2 py-3 md:py-2 text-md rounded-full px-12 p-2 transition-all border-[#994b00] hover:bg-[#994b002a] text-[#994b00]'> Remove</button>
                <button className='block uppercase rounded-full py-3 md:py-2 text-md p-2 px-0 bg-[#994b00] transition-all text-white hover:text-[#994b00] hover:bg-[#994b002a] '> Upload profile picture</button>
              </div>
            </div>
          </div>
          <div className='flex-col w-full space-y-3 px-3 mt-10'>
            <h2 className='text-gray-800 pl-1  md:pb-2 text-md'>
            About Us
            </h2>
            <textarea type="text" placeholder="" className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm  transition-all outline focus:outline outline-gray-100 focus:outline-gray-200"> </textarea>
            <div className='md:inline-flex justify-evenly py-2 space-y-5 md:space-y-0 md:space-x-3 w-full'>
              <div className='flex-col md:w-1/2 '>
                <h2 className='text-gray-800 pl-1  md:pb-2 text-md'>
                Supplier Name
                </h2>
                <div className='w-full'>
                  <input type="text" placeholder="Fig Nelson" className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
                </div>
                </div>
              <div className='flex-col md:w-1/2 px-3'>
                <h2 className='text-gray-800 pl-1  md:pb-2 text-md'>
                Email ID
                </h2>
                <div className='w-full'>
                  <input type="text" placeholder="fig_nelson@gmail.com" className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
                </div>
                </div>
            </div>
            <div className='md:inline-flex justify-evenly py-2 space-y-5 md:space-y-0 md:space-x-3 w-full'>
              <div className='flex-col md:w-1/2 '>
                <h2 className='text-gray-800 pl-1  md:pb-2 text-md'>
                Mobile Number
                </h2>
                <div className='w-full'>
                  <input type="text" placeholder="+1  40 2546 5236" className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
                </div>
                </div>
              <div className='flex-col md:w-1/2 px-3'>
                <h2 className='text-gray-800 pl-1 md:space-x-3 md:pb-2 text-md'>
                Country
                </h2>
                <div className='w-full'>
                  <input type="text" placeholder="Canada" className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
                </div>
                </div>
            </div>
            <div className='md:inline-flex justify-evenly py-2 space-y-5 md:space-y-0 md:space-x-3 w-full'>
              <div className='flex-col md:w-1/2 '>
                <h2 className='text-gray-800 pl-1  md:pb-2 text-md'>
                City
                </h2>
                <div className='w-full'>
                  <input type="text" placeholder="Ontario" className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
                </div>
                </div>
              <div className='flex-col md:w-1/2 px-3'>
                <h2 className='text-gray-800 pl-1 md:space-x-3 md:pb-2 text-md'>
                Zip code
                </h2>
                <div className='w-full'>
                  <input type="text" placeholder="K0A 0A2" className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
                </div>
                </div>
            </div>
            <div className='justify-start py-2 pb-16 pd:mb-4 w-full'>
              <div className='flex-col md:w-1/2 '>
                <h2 className='text-gray-800 pl-1  md:pb-2 text-md'>
                Experience
                </h2>
                <div className='w-full'>
                  <input type="text" placeholder="22 years" className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
                </div>
                </div>
              
            </div>
            <div className='grid md:grid-flow-col mt-10 items-center space-y-5 md:space-y-0 md:space-x-6 w-full justify-stretch'>
                <button className='text-red-500 block uppercase md:text-right font-semibold'>delete account</button>
                <button className='block uppercase border-2 py-3 md:py-2 text-md rounded-full px-12 p-2 transition-all border-[#994b00] hover:bg-[#994b002a] text-[#994b00]'> Save</button>
                <button className='block uppercase rounded-full py-3 md:py-2 text-md p-2 px-0 bg-[#994b00] transition-all text-white hover:text-[#994b00] hover:bg-[#994b002a] '> update account</button>
              </div>
          </div>
        </div>
      </div>
      </div>
    
    </div>
      
      {/* Other content in the SupplierProfile component */}
    </div>
    </>
  );
}
