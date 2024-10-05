import React, { useState ,useEffect } from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import userImage from "../../../images/Builder/find_cover.jpg";
import profilePic from "../../../images/Supplier/profile_pic.jpg";
import defaultUser from "../../../images/user_0_img.jpg";
import img1 from "../../../images/Supplier/12.jpg";
import img2 from "../../../images/Supplier/13.jpg";
import img3 from "../../../images/Supplier/14.jpg";
import img4 from "../../../images/Supplier/15.jpg";
import left from "../../../images/Icons/L_arrow.svg"
import right from "../../../images/Icons/R_arrow.svg"
import Navbar from '../../Navbar_white';

export default function UserProfile_post() {

    const [expanded1, setExpanded1] = useState(false);

    const handleReadMoreClick1 = () => {
      setExpanded1(()=> (!expanded1));
    };
    const [expanded2, setExpanded2] = useState(false);

    const handleReadMoreClick2 = () => {
      setExpanded2(()=> (!expanded2));
    };
    const [expanded3, setExpanded3] = useState(false);

    const handleReadMoreClick3 = () => {
      setExpanded3(()=> (!expanded3));
    };
    const [expanded4, setExpanded4] = useState(false);

    const handleReadMoreClick4 = () => {
      setExpanded4(()=> (!expanded4));
    };
    
    
    const [isFilter,setIsFilter] = useState(true);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)'); // Change the width based on your phone breakpoint
  
      const handleScreenChange = (e) => {
        setIsFilter(e.matches); // Set state based on screen width
      };
  
      // Set initial state based on screen width
      setIsFilter(mediaQuery.matches);
  
      // Add event listener to listen for changes in screen size
      mediaQuery.addEventListener('change', handleScreenChange);
  
      // Clean up the event listener
      return () => {
        mediaQuery.removeEventListener('change', handleScreenChange);
      };
    }, []);
    const [isDrop1,setIsDrop1] = useState(true);
    const [isDrop2,setIsDrop2] = useState(true);
    const [isDrop3,setIsDrop3] = useState(true);
    const [isDrop4,setIsDrop4] = useState(true);
  return (
    <>
    <Navbar /> 
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"></link>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
    <div className='bg-white-800 p-8 text-white text-center w-full-z-10'>
      <div className='flex flex-col w-full h-full '>
        <div className="absolute items-center inset-0 h-[320px] md:h-[670px]  bg-gradient-to-b from-black to-transparent opacity-85  -z-10"></div>
          <img src={userImage} alt= "pool-side home"className=' absolute inset-0 h-[320px] md:h-[670px] w-full   object-cover -z-20'></img>
          <h1 className=' justify-center text-5xl md:text-7xl  text-white mx-auto font-extrabold pt-0 md:pt-40'>Get Matched with </h1>
          <h1 className=' justify-center text-5xl md:text-7xl  text-white mx-auto font-extrabold '>Supplier</h1>
          <p className='justify-center text-xl text-opacity-85 text-white mx-auto pt-6'></p>
          <p className='justify-center text-xl text-white text-opacity-85 md:mb-48 mx-auto'></p>
        </div>
      <div className="relative w-full pt-20 h-full mb-40 md:flex">
        <div className='md:w-1/4 md:pl-16 px-5  text-left overflow-hidden'>
        {!isFilter?(
          <>
            <button onClick={()=> setIsFilter((prev)=>(!prev))} className=' block mb-3 md:hidden w-full rounded-md text-xl p-2 font-bold uppercase border-2 bg-[#994B00] text-white'>Hide Filters</button>

            <div className='p-4 border shadow-md rounded-md md:p-0 md:border-0 md:shadow-none'><p className='px-3 mt-0 mb-2 text-gray-600'>Location</p>
            <select
        // id='Category' name='Category' onChange={handleInputChange} value={formData.name}
        className='w-full transition-all text-gray-500 mb-4 py-3 px-3 rounded-sm bg-transparent outline focus:outline outline-gray-100 focus:outline-gray-200'
        defaultValue="Search City, State or ZIP"
        >
            <option value="category1">Search City, State or ZIP</option>
        </select> 
        <p className='px-3 mb-2 text-gray-600'>Distance</p>
                <select
            // id='Category' name='Category' onChange={handleInputChange} value={formData.name}
            className='w-full transition-all text-gray-500 mb-4 py-3 px-3 rounded-sm bg-transparent outline focus:outline outline-gray-100 focus:outline-gray-200'
            defaultValue="Search City, State or ZIP"
        >
            <option value="category1">50 MI</option>
            <option value="category1">75 MI</option>
            <option value="category1">100 MI</option>
            <option value="category1">150 MI</option>
        </select> 
<div className='pl-1 divide-gray-200 divide-y'>
    <div className='w-full pb-4'>
        <button onClick={() => setIsDrop1((prev)=> !prev)} className=" transition-all hover:text-[#994b00] text-gray-800 w-full justify-between font-bold inline-flex md:pt-3" type="button">Project Type<svg className="w-2.5 mt-1.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>   


{!isDrop1 ? (
<div className="z-10 w-full">
    <ul className="py-2 px-1 space-y-1 text-sm text-gray-700 dark:text-gray-200">
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Small-scale</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-6" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Mid-scale</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-6" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Large-scale</label>
        </div>
      </li>
    </ul>
</div>):(
    <div className='hidden'></div>
)}
</div>
<div className='w-full pb-4'>
        <button onClick={() => setIsDrop2((prev)=> !prev)} className="transition-all hover:text-[#994b00] text-gray-800 w-full justify-between font-bold inline-flex md:pt-3" type="button">Style<svg className="w-2.5 mt-1.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>   


{!isDrop2 ? (
<div className="z-10 w-full">
    <ul className="py-2 px-1 space-y-1 text-sm text-gray-700 dark:text-gray-200">
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Modern</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-6" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Eco-friendly</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-6" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Contemporary</label>
        </div>
      </li>
    </ul>
</div>):(
    <div className='hidden'></div>
)}
</div>
<div className='w-full pb-4'>
        <button onClick={() => setIsDrop3((prev)=> !prev)} className="text-gray-800 transition-all hover:text-[#994b00] w-full justify-between font-bold inline-flex md:pt-4" type="button">Rating<svg className="w-2.5 mt-1.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>   


{!isDrop3 ? (
<div className="z-10 w-full">
    <ul className="py-2 px-1 space-y-1 text-sm text-gray-700 dark:text-gray-200">
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 inline-flex">4&#9733; & above</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 inline-flex">3&#9733; & above</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 inline-flex">2&#9733; & above</label>
        </div>
      </li>
      
    </ul>
</div>):(
    <div className='hidden'></div>
)}
</div>
<div className='w-full'>
        <button onClick={() => setIsDrop4((prev)=> !prev)} className="text-gray-800 transition-all hover:text-[#994b00] w-full justify-between font-bold inline-flex md:pt-3" type="button">Experience<svg className="w-2.5 mt-1.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>   


{!isDrop4 ? (
<div className="z-10 w-full">
    <ul className="py-2 px-1 space-y-1 text-sm text-gray-700 dark:text-gray-200">
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">20 Years and above</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-6" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">10-20 Years</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-6" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">5-10 Years</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600" />
          <label for="checkbox-item-6" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Less than 5 Years</label>
        </div>
      </li>
    </ul>
</div>):(
    <div className='hidden'></div>
)}
</div>
</div>
</div>
</>):(          <button onClick={()=> setIsFilter((prev)=>(!prev))} className=' block mb-3 md:hidden w-full rounded-md text-xl p-2 font-bold uppercase border-2 transition-all border-[#994B00] text-[#994B00]'>Filter Builders</button>
)
}
              {/* <p className='text-gray-800 uppercase font-bold pt-2 pb-4'>Notifications</p> */}
    
        </div>
      
      <div className="flex-col w-full divide-y md:px-20 mx-auto">
<div className='w-full flex items-center justify-between'> 
<div className='hidden md:block'>
<buttton className='p-2 rounded-full  px-4 bg-[#994B00]'>Supplier <i className="bg-white px-1 ml-14 rounded-full py-0.5 text-[#994B00] fas fa-times"></i>
</buttton>
</div>
<div className='w-full md:w-auto'>
<input type="text" placeholder="Search by Name or Keyword" className="mt-8 md:mt-0 w-full md:w-72 md:justify-end transition-all  text-gray-500 py-3 px-3 rounded-sm bg-transparent outline focus:outline outline-gray-100 focus:outline-gray-200" />
</div>
</div>


{/*-----------------------------------------------------------------------------------1st post-----------------------------------------------------------------------*/}

      <div className='md:flex text-left space-x-5 mt-4 p-4 overflow-hidden '>
        
        <img src={img1} className=' mb-5 p-1.5 transition-all hover:scale-105 w-full md:w-1/6 md:mb-0 object-contain object-top '></img>
        
        {/*1st post*/}
        <div className='w-full flex-col'>
          <div className='flex py-1'>
            <div className=' justify-between w-full flex'>
            <div className='flex'><img src={profilePic} className='h-14 object-cover rounded-full border-2 mr-2 border-slate-200'></img>
            <div className='flex-col'>
              <h2 className='transition-all hover:text-[#994b00] text-black text-xl'>
              Build_breeze
              </h2>
              <h3 className='text-gray-600 inline-flex te'>
              <p className=' text-yellow-400 font-bold inline-flex'>5.0 <p className='ml-1 -mt-1 text-lg'>&#9733;&#9733;&#9733;&#9733;&#9733;</p></p> 75 Reviews
              </h3>
              </div>
              </div>
              <div>
                <button className='transition-all hover:scale-105 h-full px-5 bg-transparent text-[#994B00] border  border-green-700 rounded-md font-bold'><i className="mr-2 text-[#994b00]  fas fa-envelope"></i>Send Message</button>
              </div>
            </div>
          </div>
          <div className='flex w-full justify-between'>
          <div className=' max-w-3xl mt-4'>
            <p className='text-gray-600 rounded-md font-semibold bg-gray-100 p-1 px-2 space-x-2 inline-flex'>
            <i className="fa-solid fas  text-green-700 mt-1 fa-birthday-cake"></i><p>22 Years in Business</p>
            </p>
            <div className='w-full mt-2'>
            {!expanded1 && (
                    <p className='text-black mt-2 mb-5 md:mb-0 '>We are dedicated to turning your dreams of a perfect home into reality. With a passion for crafting exceptional living spaces, we take pride in our commitment to quality, innovation, and personalized service...
                    <span onClick={handleReadMoreClick1} className='font-bold' style={{ color: '#994B00', cursor: 'pointer' }}>
                        Read more &gt;
                    </span>
                    </p>
                )}
            
            {expanded1 && (
                <p className="text-black mt-2 mb-5 md:mb-0 ">
                        We are dedicated to turning your dreams of a perfect home into reality. With a passion for crafting exceptional living spaces, we take pride in our commitment to quality, innovation, and personalized service, ensuring that each detail resonates with your vision. Our mission is to create a haven that mirrors your aspirations, offering a blend of elegance, functionality, and comfort. Your satisfaction is our priority as we endeavor to exceed your expectations, step by step, from conception to the final touches.                   
                        <span onClick={handleReadMoreClick1} className='font-bold' style={{ color: '#994B00', cursor: 'pointer' }}>
                        Show less
                    </span>
                </p>
            )}
            </div>
          </div>
          <div className='text-gray-600 mt-4  space-x-1 hidden md:inline-flex h-full items-center text-center'><i className="fas fa-map-marker-alt"></i><p className='font-bold'>52 Projects</p><p>in Ontario</p></div>
          </div>
        </div>
      </div>
      
{/*-----------------------------------------------------------------------------------2nd post-----------------------------------------------------------------------*/}

      <div className='md:flex text-left space-x-5 mt-4 pt-6 p-4 overflow-hidden '>
        
        <img src={img2} className=' mb-5 p-1.5 w-full md:w-1/6 transition-all hover:scale-105 md:mb-0 object-contain object-top '></img>
        <div className='w-full flex-col'>
          <div className='flex py-1'>
            <div className=' justify-between w-full flex'>
            <div className='flex'><img src={defaultUser} className='h-14 object-cover rounded-full border-2 mr-2 border-slate-200'></img>
            <div className='flex-col'>
              <h2 className='transition-all hover:text-[#994b00] text-black text-xl'>
              Craft_homes
              </h2>
              <h3 className='text-gray-600 inline-flex te'>
              <p className=' text-yellow-400 font-bold inline-flex'>5.0 <p className='ml-1 -mt-1 text-lg'>&#9733;&#9733;&#9733;&#9733;&#9733;</p></p> 65 Reviews
              </h3>
              </div>
              </div>
              <div>
                <button className='transition-all hover:scale-105 h-full px-5 bg-transparent text-[#994B00] border  border-green-700 rounded-md font-bold'><i className="mr-2 text-[#994b00]  fas fa-envelope"></i>Send Message</button>
              </div>
            </div>
          </div>
          <div className='flex w-full justify-between'>
          <div className=' max-w-3xl mt-4'>
            <p className='text-gray-600 rounded-md font-semibold bg-gray-100 p-1 px-2 space-x-2 inline-flex'>
            <i className="fa-solid fas  text-green-700 mt-1 fa-birthday-cake"></i><p>18 Years in Business</p>
            </p>
            <div className='w-full mt-2'>
            {!expanded2 && (
                    <p className='text-black mt-2 mb-5 md:mb-0 '>We pride ourselves on our comprehensive approach to home remodeling. We handle every aspect of a remodeling project, from the initial consultation and design phase to the permit process...
                    <span onClick={handleReadMoreClick2} className='font-bold' style={{ color: '#994B00', cursor: 'pointer' }}>
                        Read more&gt;
                    </span>
                    </p>
                )}
            
            {expanded2 && (
                <p className="text-black mt-2 mb-5 md:mb-0 ">
                        We pride ourselves on our comprehensive approach to home remodeling. We handle every aspect of a remodeling project, from the initial consultation and design phase to the permit process, ensuring that each detail resonates with your vision. Our mission is to create a haven that mirrors your aspirations, offering a blend of elegance, functionality, and comfort. Your satisfaction is our priority as we endeavor to exceed your expectations, step by step, from conception to the final touches.                   
                        <span onClick={handleReadMoreClick2} className='font-bold' style={{ color: '#994B00', cursor: 'pointer' }}>
                        Show less
                    </span>
                </p>
            )}
            </div>
          </div>
          <div className='text-gray-600 mt-4  space-x-1 hidden md:inline-flex h-full items-center text-center'><i className="fas fa-map-marker-alt"></i><p className='font-bold'>50 Projects</p><p>in Toronto</p></div>
          </div>
        </div>
      </div>

{/*-----------------------------------------------------------------------------------3rd post-----------------------------------------------------------------------*/}

      <div className='md:flex text-left space-x-5 mt-4 pt-6 p-4 overflow-hidden '>
        
        <img src={img3} className=' mb-5 p-1.5 transition-all hover:scale-105 w-full md:w-1/6 md:mb-0 object-contain object-top '></img>
        <div className='w-full flex-col'>
          <div className='flex py-1'>
            <div className=' justify-between w-full flex'>
            <div className='flex'><img src={defaultUser} className='h-14 object-cover rounded-full border-2 mr-2 border-slate-200'></img>
            <div className='flex-col'>
              <h2 className='text-black transition-all hover:text-[#994b00] text-xl'>
              Swift_SiteBuilder
              </h2>
              <h3 className='text-gray-600 inline-flex te'>
              <p className=' text-yellow-400 font-bold inline-flex'>5.0 <p className='ml-1 -mt-1 text-lg'>&#9733;&#9733;&#9733;&#9733;&#9733;</p></p> 61 Reviews
              </h3>
              </div>
              </div>
              <div>
                <button className='transition-all hover:scale-105 h-full px-5 bg-transparent text-[#994B00] border  border-green-700 rounded-md font-bold'><i className="mr-2 text-[#994b00]  fas fa-envelope"></i>Send Message</button>
              </div>
            </div>
          </div>
          <div className='flex w-full justify-between'>
          <div className=' max-w-3xl mt-4'>
            <p className='text-gray-600 rounded-md font-semibold bg-gray-100 p-1 px-2 space-x-2 inline-flex'>
            <i className="fa-solid fas  text-green-700 mt-1 fa-birthday-cake"></i><p>16 Years in Business</p>
            </p>
            <div className='w-full mt-2'>
            {!expanded3 && (
                    <p className='text-black mt-2 mb-5 md:mb-0 '>At swift site builder we offer a range of design and build services, including new construction, home renovations, room additions...
                    <span onClick={handleReadMoreClick3} className='font-bold' style={{ color: '#994B00', cursor: 'pointer' }}>
                        Read more &gt;
                    </span>
                    </p>
                )}
            
            {expanded3 && (
                <p className="text-black mt-2 mb-5 md:mb-0 ">
                        At swift site builder we offer a range of design and build services, including new construction, home renovations, room additions, ensuring that each detail resonates with your vision. Our mission is to create a haven that mirrors your aspirations, offering a blend of elegance, functionality, and comfort. Your satisfaction is our priority as we endeavor to exceed your expectations, step by step, from conception to the final touches.                   
                        <span onClick={handleReadMoreClick3} className='font-bold' style={{ color: '#994B00', cursor: 'pointer' }}>
                        Show less
                    </span>
                </p>
            )}
            </div>
          </div>
          <div className='text-gray-600 mt-4  space-x-1 hidden md:inline-flex h-full items-center text-center'><i className="fas fa-map-marker-alt"></i><p className='font-bold'>52 Projects</p><p>in Ontario</p></div>
          </div>
        </div>
      </div>

{/*-----------------------------------------------------------------------------------4th post-----------------------------------------------------------------------*/}


      <div className='md:flex text-left space-x-5 mt-4 pt-6 p-4 overflow-hidden '>
        
        <img src={img4} className=' mb-5 p-1.5 w-full transition-all hover:scale-105 md:w-1/6 md:mb-0 object-contain object-top '></img>
        <div className='w-full flex-col'>
          <div className='flex py-1'>
            <div className=' justify-between w-full flex'>
            <div className='flex'><img src={defaultUser} className='h-14 object-cover rounded-full border-2 mr-2 border-slate-200'></img>
            <div className='flex-col'>
              <h2 className='text-black transition-all hover:text-[#994b00] text-xl'>
              Site_smith
              </h2>
              <h3 className='text-gray-600 inline-flex te'>
              <p className=' text-yellow-400 font-bold inline-flex'>5.0 <p className='ml-1 -mt-1 text-lg'>&#9733;&#9733;&#9733;&#9733;&#9733;</p></p> 55 Reviews
              </h3>
              </div>
              </div>
              <div>
                <button className='transition-all hover:scale-105 h-full px-5 bg-transparent text-[#994B00] border  border-green-700 rounded-md font-bold'><i className="mr-2 text-[#994b00]  fas fa-envelope"></i>Send Message</button>
              </div>
            </div>
          </div>
          <div className='flex w-full justify-between'>
          <div className=' max-w-3xl mt-4'>
            <p className='text-gray-600 rounded-md font-semibold bg-gray-100 p-1 px-2 space-x-2 inline-flex'>
            <i className="fa-solid fas  text-green-700 mt-1 fa-birthday-cake"></i><p>11 Years in Business</p>
            </p>
            <div className='w-full mt-2'>
            {!expanded4 && (
                    <p className='text-black mt-2 mb-5 md:mb-0 '>Site smith has been a family owned and operated home builder serving the wider Monterey Bay area . We are a professional group ...
                    <span onClick={handleReadMoreClick4} className='font-bold' style={{ color: '#994B00', cursor: 'pointer' }}>
                        Read more &gt;
                    </span>
                    </p>
                )}
            
            {expanded4 && (
                <p className="text-black mt-2 mb-5 md:mb-0 ">
                        Site smith has been a family owned and operated home builder serving the wider Monterey Bay area . We are a professional group, ensuring that each detail resonates with your vision. Our mission is to create a haven that mirrors your aspirations, offering a blend of elegance, functionality, and comfort. Your satisfaction is our priority as we endeavor to exceed your expectations, step by step, from conception to the final touches.                   
                        <span onClick={handleReadMoreClick4} className='font-bold' style={{ color: '#994B00', cursor: 'pointer' }}>
                        Show less
                    </span>
                </p>
            )}
            </div>
          </div>
          <div className='text-gray-600 mt-4  space-x-1 hidden md:inline-flex h-full items-center text-center'><i className="fas fa-map-marker-alt"></i><p className='font-bold'>52 Projects</p><p>in Belleville</p></div>
          </div>
        </div>
      </div>
      </div>
    
    </div>
    <div className='flex space-x-4 mt-20 justify-center'>
              <button className='border-2 flex border-black rounded-full py-2 pr-7 hover:bg-[#994B002a] transition-all px-4 '>
                <img src={left} className='h-7 object-contain'/><img src={left} className='h-7 object-contain -ml-4'/><p className='pb-1 ml-2 text-xl font-bold text-black'>Previous</p>
              </button>
              <button>
                      <div className='bg-[#994B002a] h-full items-center space-x-6 px-8 rounded-2xl text-[#994B00] font-bold flex '>
                        <div className='translate-y-3.5 hover:translate-y-1 transition-all px-2 h-full '>
                          1
                        </div>
                        <div className='translate-y-3.5 hover:translate-y-1 transition-all px-2 h-full '>
                          2
                        </div>
                        <div  className='translate-y-3.5 hover:translate-y-1 transition-all px-2 h-full '>
                          3
                        </div>
                        <div  className='translate-y-3.5 hover:translate-y-1 transition-all px-2 h-full '>
                          4
                        </div>
                      </div>
              </button>
              <button className='border-2 flex border-black rounded-full hover:bg-[#994B002a] transition-all py-2 px-4 pl-7 '>
              <p className='pb-1 text-xl font-bold text-black mr-10'>Next</p><img src={right} className='h-7 object-contain'/><img src={right} className='h-7 object-contain -ml-4'/>
              </button>
            </div>
      {/* Other content in the UserProfile component */}
    </div>
      
    </>
  );
}
