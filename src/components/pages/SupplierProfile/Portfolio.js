import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import userImage from "../../../images/user_profile.jpg";
import profilePic from "../../../images/Supplier/profile_pic.jpg";
import img1 from "../../../images/Supplier/1.jpg";
import img2 from "../../../images/Supplier/2.jpg";
import img3 from "../../../images/Supplier/3.jpg";
import img4 from "../../../images/Supplier/4.jpg";
import img5 from "../../../images/Supplier/5.jpg";
import img6 from "../../../images/Supplier/6.jpg";
import img7 from "../../../images/Supplier/7.jpg";
import img8 from "../../../images/Supplier/8.jpg";
import img9 from "../../../images/Supplier/9.jpg";
import img10 from "../../../images/Supplier/10.jpg";
import img11 from "../../../images/Supplier/11.jpg";
import Null from "../../../images/Builder/null.jpg";
import { Button } from '../../Button';
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
        <div className='p-4 flex-col w-full  items-center inline-flex'>
        <Link to='/SupplierProfile/profile'>
              <button className='text-slate-400 uppercase m-1.5  font-bold p-3 w-full'>
                Profile
                </button>
                </Link>
                <Link to='/SupplierProfile/notification'>
              <button className='text-slate-400 uppercase m-1.5 font-bold  p-3 w-full'>
                Notifications
                </button>
                </Link>
            </div>
        </div>
      
      <div className="flex-col mx-auto">
      <div className="flex mt-40 mb-4" >
      <Link
        to="/SupplierProfile/messages"
        className=" hover:text-[#994B00] text-black font-semibold h-1/6 w-80 py-2   transition duration-300"
      >
        Messages
        <div className='bg-[#994B002a]  mt-3 h-1'></div>
      </Link>
      <Link
        to="/SupplierProfile/portfolio"
        className=" hover:text-[#994B00] text-black font-semibold h-1/6 w-80 py-2   transition duration-300"
      >
        Portfolio
        <div className=' bg-[#994B00] mt-3 h-1'></div>
      </Link>
      <Link
        to="/SupplierProfile/wishlist"
        className=" hover:text-[#994B00] text-black font-semibold h-1/6 w-80 py-2   transition duration-300 "
      >
        Wishlist
        <div className='bg-[#994B002a] mt-3 h-1 '></div>
      </Link>
    </div>
      <div className='md:flex text-left space-x-5 mt-4 p-8 shadow-lg w-full rounded-lg overflow-hidden '>
        <div className='w-full'>
          <div className='flex justify-between'>
          <h1 className= 'text-black uppercase text-2xl font-bold'>Portfolio</h1>
          
          <div className='p-2 shadow-inner rounded-lg  space-x-3 border-2 border-gray-100'>
            <button className='bg-[#994B002a] py-1 px-3 rounded-md text-xl text-[#994B00]'>
              +
            </button>
            <button className='bg-[#994B002a] py-1 px-3 rounded-md text-xl text-[#994B00]'>
              -
            </button>
          </div>
        </div>
        <div className='flex flex-row space-x-10'>
        <div className='text-center'>
        <img className='rounded-lg my-2 object-cover hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition duration-300' src={img1}></img>
        <h2 className='text-black text-lg'>Cover Image</h2>
        </div>
        
        <div className='flex-col w-full'>
        <h1 className='text-slate-800'>Category</h1>
        <select
    className='w-full text-gray-500 mt-4 rounded-md bg-transparent border-b-1 px-4 py-2 border-gray-400 outline outline-3 outline-gray-200 focus:outline-gray-300'
    defaultValue="Home Owner" // Set a default value if needed
  >
    <option value="category1">Kitchen</option>
    <option value="category2">Living Room</option>
    <option value="category2">Bed Room</option>
   
      </select> 
      </div>
      </div>
      <div className='flex justify-between mt-10 space-x-4'>
      <div className='text-center'>
        <img className='rounded-lg my-2 object-cover hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition duration-300' src={img2}></img>
        <h2 className='text-orange-800 text-lg font-bold'>Delete Image</h2>
        <h2 className='text-black text-sm'>Ontario</h2>
        </div>
        <div className='text-center'>
        <img className='rounded-lg my-2 object-cover hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition duration-300' src={img3}></img>
        <h2 className='text-orange-800 text-lg font-bold'>Delete Image</h2>
        <h2 className='text-black text-sm'>Toronto</h2>
        </div>
        <div className='text-center'>
        <img className='rounded-lg my-2 object-cover hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition duration-300' src={img4}></img>
        <h2 className='text-orange-800 text-lg font-bold'>Delete Image</h2>
        <h2 className='text-black text-sm'>Belleville</h2>
        </div>
        <div className='text-center'>
        <img className='rounded-lg my-2 p-5 border-2 border-gray-300 object-cover' src={Null}></img>
        <h2 className='text-gray-400 text-lg'>Add Photo/Video</h2>
        </div>
        </div>
        </div>
      </div>


      <div className='md:flex text-left space-x-5 mt-10 p-8 shadow-lg w-full rounded-lg overflow-hidden '>
        <div className='w-full'>
          <div className='flex justify-between'>
          <h1 className= 'text-black uppercase text-2xl font-bold'>Portfolio</h1>
          
          <div className='p-2 shadow-inner rounded-lg  space-x-3 border-2 border-gray-100'>
            <button className='bg-[#994B002a] py-1 px-3 rounded-md text-xl text-[#994B00]'>
              +
            </button>
            <button className='bg-[#994B002a] py-1 px-3 rounded-md text-xl text-[#994B00]'>
              -
            </button>
          </div>
        </div>
        <div className='flex flex-row space-x-10'>
        <div className='text-center'>
        <img className='rounded-lg my-2 object-cover hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition duration-300' src={img5}></img>
        <h2 className='text-black text-lg'>Cover Image</h2>
        </div>
        
        <div className='flex-col w-full'>
        <h1 className='text-slate-800'>Category</h1>
        <select
    className='w-full text-gray-500 mt-4 rounded-md bg-transparent border-b-1 px-4 py-2 border-gray-400 outline outline-3 outline-gray-200 focus:outline-gray-300'
    defaultValue="Bed Room" // Set a default value if needed
  >
    <option value="category1">Kitchen</option>
    <option value="category2">Living Room</option>
    <option value="category2">Bed Room</option>
   
      </select> 
      </div>
      </div>
      <div className='flex justify-between mt-10 space-x-4'>
      <div className='text-center'>
        <img className='rounded-lg my-2 object-cover hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition duration-300 ' src={img6}></img>
        <h2 className='text-orange-800 text-lg font-bold'>Delete Image</h2>
        <h2 className='text-black text-sm'>Ontario</h2>
        </div>
        <div className='text-center'>
        <img className='rounded-lg my-2 object-cover hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition duration-300' src={img7}></img>
        <h2 className='text-orange-800 text-lg font-bold'>Delete Image</h2>
        <h2 className='text-black text-sm'>Toronto</h2>
        </div>
        <div className='text-center'>
        <img className='rounded-lg my-2 p-5 border-2 border-gray-300 object-cover' src={Null}></img>
        <h2 className='text-gray-400 text-lg'>Add Photo/Video</h2>
        </div>
        <div className='text-center'>
        <img className='rounded-lg my-2 p-5 border-2 border-gray-300 object-cover' src={Null}></img>
        <h2 className='text-gray-400 text-lg'>Add Photo/Video</h2>
        </div>
        </div>
        </div>
      </div>
      <div className='md:flex text-left space-x-5 mt-10 p-8 shadow-lg w-full rounded-lg overflow-hidden '>
        <div className='w-full'>
          <div className='flex justify-between'>
          <h1 className= 'text-black uppercase text-2xl font-bold'>Portfolio</h1>
          
          <div className='p-2 shadow-inner rounded-lg  space-x-3 border-2 border-gray-100'>
            <button className='bg-[#994B002a] py-1 px-3 rounded-md text-xl text-[#994B00]'>
              +
            </button>
            <button className='bg-[#994B002a] py-1 px-3 rounded-md text-xl text-[#994B00]'>
              -
            </button>
          </div>
        </div>
        <div className='flex flex-row space-x-10'>
        <div className='text-center'>
        <img className='rounded-lg my-2 object-cover hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition duration-300' src={img8}></img>
        <h2 className='text-black text-lg'>Cover Image</h2>
        </div>
        
        <div className='flex-col w-full'>
        <h1 className='text-slate-800'>Category</h1>
        <select
    className='w-full text-gray-500 mt-4 rounded-md bg-transparent border-b-1 px-4 py-2 border-gray-400 outline outline-3 outline-gray-200 focus:outline-gray-300'
    defaultValue="Bed Room" // Set a default value if needed
  >
    <option value="category1">Kitchen</option>
    <option value="category2">Living Room</option>
    <option value="category2">Bed Room</option>
   
      </select> 
      </div>
      </div>
      <div className='flex justify-between mt-10 space-x-4'>
      <div className='text-center'>
        <img className='rounded-lg my-2 object-cover hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition duration-300' src={img9}></img>
        <h2 className='text-orange-800 text-lg font-bold'>Delete Image</h2>
        <h2 className='text-black text-sm'>Ontario</h2>
        </div>
        <div className='text-center'>
        <img className='rounded-lg my-2 object-cover hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition duration-300' src={img10}></img>
        <h2 className='text-orange-800 text-lg font-bold'>Delete Image</h2>
        <h2 className='text-black text-sm'>Toronto</h2>
        </div>
        <div className='text-center'>
        <img className='rounded-lg my-2 object-cover hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition duration-300' src={img11}></img>
        <h2 className='text-orange-800 text-lg font-bold'>Delete Image</h2>
        <h2 className='text-black text-sm'>Belleville</h2>
        </div>
        <div className='text-center'>
        <img className='rounded-lg my-2 p-5 border-2 border-gray-300 object-cover' src={Null} ></img>
        <h2 className='text-gray-400 text-lg'>Add Photo/Video</h2>
        </div>
        </div>
        </div>
      </div>

      </div>
    
    </div>
      
      {/* Other content in the UserProfile component */}
    </div>
    </>
  );
}
