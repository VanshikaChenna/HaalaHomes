import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/hala_logo_gold.png'
import Dropdown from './Dropdown';
import img from '../images/user_0_img.jpg'

function Navbar() {
  const [click, setClick] = useState(false);
  const [fullname, setfullname] = useState('');
  const [category, setCategory] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [FindProfessionals, setFindProfessionals] = useState(false);
  const [Profile, setProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHomeOwner,setHomeOwner] =useState(false);
  const [isBuilder,setBuilder] =useState(false);
  const [isSupplier,setSupplier] =useState(false);
  const [isDesiginer,setDesigner] =useState(false);
  
  
  const handleClick = () => {
    if (isMobile) {
      setClick(!click);
      setDropdown(!dropdown); // Toggle dropdown visibility on mobile
    } else {
      setClick(!click);
    }
  };

  const closeMobileMenu = () => {
    setClick(false);
    setDropdown(false); // Hide the dropdown when closing the mobile menu
  };

  const handleDropdownClick = () => {
    if (isMobile) {
      setDropdown(!dropdown);
    } // Toggle dropdown visibility on mobile
    
  };
  const handleFindProffesionals = () => {
    
      setFindProfessionals(!FindProfessionals);
  // Toggle dropdown visibility on mobile
    
  };
  const handleProfile = () => {
    
      setProfile(!Profile);
  // Toggle dropdown visibility on mobile
    
  };

  const checkIsMobile = () => {
    if (window.innerWidth <= 960) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleHover = () => {
    if (!isMobile) {
      setDropdown(true);
    }
  };

  const handleLeave = () => {
    if (!isMobile) {
      setDropdown(false);
    }
  };

  
  
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    document.cookie = 'user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'Full Name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'Category=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
  };

  
  const checkLoginStatus = () => {
    try {
      const full_name_d = Cookies.get('Full Name');
      renderDropdownLinks();
      const category_d = Cookies.get('Category');
      if (full_name_d && category_d) {
        const full_name = decodeURIComponent(full_name_d);
        const category_cookie = decodeURIComponent(category_d);
        setfullname(full_name);
        setIsLoggedIn(true);
        setCategory(category_cookie);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error fetching details', error);
      setIsLoggedIn(false);
      setfullname(''); // Reset the fullname state in case of an error
      setCategory(''); // Reset the fullname state in case of an error
    }
  
  
  
  };

  const renderDropdownLinks = () => {
      if (isLoggedIn) {
        
        console.log(category);
        if ( category === 'Home Owner') {
          return (
            setHomeOwner(true)
            // <div className='absolute mt-4 divide-y-2 translate-y-32 w-48 shadow-lg shadow-gray-500 bg-white flex flex-col z-10 '>
            //      <Link onClick={handleProfile} to='/UserProfile/profile' className='text-black hover:bg-[#994b00] transition-all hover:text-gray-600 py-2'>
            //       Profile
            //      </Link>
            //      <Link onClick={handleProfile} to='/UserProfile/posts' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
            //       Posts
            //      </Link>
            //      <Link onClick={handleProfile} to='/UserProfile/messages' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
            //       Messages
            //      </Link>
            //      <Link onClick={handleProfile} to='/UserProfile/wishlist' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
            //       Wishlist
            //      </Link>
            //      <Link onClick={handleProfile} to='/log-in' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
            //       Sign Out
            //      </Link>
            //   </div>
          );
        } else if (category === 'Builder') {
          return (
            setBuilder(true)
            // <div className='absolute mt-4 divide-y-2 translate-y-32 w-48 shadow-lg shadow-gray-500 bg-white flex flex-col z-10 '>
            //      <Link onClick={handleProfile} to='/BuilderProfile/profile' className='text-black hover:bg-[#994b00] transition-all hover:text-gray-600 py-2'>
            //       Profile
            //      </Link>
            //      <Link onClick={handleProfile} to='/BuilderProfile/posts' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
            //       Posts
            //      </Link>
            //      <Link onClick={handleProfile} to='/BuilderProfile/messages' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
            //       Messages
            //      </Link>
            //      <Link onClick={handleProfile} to='/BuilderProfile/wishlist' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
            //       Wishlist
            //      </Link>
            //      <Link onClick={handleProfile} to='/log-in' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
            //       Sign Out
            //      </Link>
            //   </div>
          );
        } else if (category === 'Supplier') {
          return (
            setSupplier(true)
            // <div className='absolute mt-4 divide-y-2 translate-y-32 w-48 shadow-lg shadow-gray-500 bg-white flex flex-col z-10 '>
            //      <Link onClick={handleProfile} to='/SupplierProfile/profile' className='text-black hover:bg-[#994b00] transition-all hover:text-gray-600 py-2'>
            //       Profile
            //      </Link>
            //      <Link onClick={handleProfile} to='/SupplierProfile/posts' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
            //       Posts
            //      </Link>
            //      <Link onClick={handleProfile} to='/SupplierProfile/messages' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
            //       Messages
            //      </Link>
            //      <Link onClick={handleProfile} to='/SupplierProfile/wishlist' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
            //       Wishlist
            //      </Link>
            //      <Link onClick={handleProfile} to='/log-in' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
            //       Sign Out
            //      </Link>
            //   </div>
          );
        } else if (category === 'Designer') {
          setDesigner(true)
          // return (
          //   <div className='absolute mt-4 divide-y-2 translate-y-32 w-48 shadow-lg shadow-gray-500 bg-white flex flex-col z-10 '>
          //        <Link onClick={handleProfile} to='/DesignerProfile/profile' className='text-black hover:bg-[#994b00] transition-all hover:text-gray-600 py-2'>
          //         Profile
          //        </Link>
          //        <Link onClick={handleProfile} to='/DesignerProfile/posts' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
          //         Posts
          //        </Link>
          //        <Link onClick={handleProfile} to='/DesignerProfile/messages' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
          //         Messages
          //        </Link>
          //        <Link onClick={handleProfile} to='/DesignerProfile/wishlist' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
          //         Wishlist
          //        </Link>
          //        <Link onClick={handleProfile} to='/log-in' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
          //         Sign Out
          //        </Link>
          //     </div>
          // );
        }
      }
      // Default return if no category matches (or user not logged in)
      return null;
    };
  //   setIsLoggedIn(false);
  // };
  
  useEffect(() => {
    checkLoginStatus(); // Check if user is logged in when component mounts
  }, []);

  return (
    <>
      <nav class="bg-white shadow-xl  border-gray-200 text-gray-600">
        <div class="max-w-screen-xl  flex flex-wrap  items-center justify-between mx-auto p-2">
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <Link to='/'>
            <img src={logo} class="h-30" alt="HalaHomes Logo" />
          </Link>
        </a>
        <div className='hidden md:flex space-x-16'>
          <button className='text-gray-600'>
            Open Library
          </button>
          <div className='flex-col'>
            <button onClick={handleFindProffesionals} className='inline-flex space-x-2 items-center  text-gray-600'>
            <p className='text-gray-600'>Find Professionals</p>
            <svg
            className={`w-3 h-3 rotate-${FindProfessionals ? '0' : '180'} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M9 5 5 1 1 5"
            />
          </svg>
          </button>
            {FindProfessionals &&( 
            <div className='absolute mt-4 text-center divide-y-2 -translate-x-5 w-48 shadow-lg shadow-gray-800 bg-white flex flex-col z-10 '>
               <Link onClick={handleFindProffesionals} to='/FindProfessionals/builder' className='text-black hover:bg-[#994b00] transition-all hover:text-gray-600 py-2'>
                Builders
               </Link>
               <Link onClick={handleFindProffesionals} to='/FindProfessionals/Designer' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                Designer
               </Link>
               <Link onClick={handleFindProffesionals} to='/FindProfessionals/supplier' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                Supplier
               </Link>
            </div>)}
          </div>

          <Link to='/Community'className='text-black'>
            Community
          </Link>
        </div>
        <div class="flex md:order-2">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-600 hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 me-1">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search</span>
          </button>
          <div class="relative hidden text-gray-600 md:block">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="pl-10 mt-8 md:mt-0 w-full md:w-72 md:justify-end transition-all  text-gray-600 py-2 px-3 rounded-md bg-white outline outline-2 focus:outline outline-gray-100 focus:outline-gray-200" placeholder="Search Home"></input>
          </div>
            
            {isLoggedIn ?( 
              
  <>
  <button onClick={handleProfile} className='hidden px-16 md:inline-flex items-center space-x-4 text-gray-600'>
            <img src={img} className='h-10 w-10 border rounded-full'></img>
            <p>{fullname}</p>
            <svg
            className={`w-3 h-3 rotate-${Profile ? '0' : '180'} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M9 5 5 1 1 5"
            />
            </svg>
            {Profile && category==="Home Owner" && (
              <div className='absolute mt-4 divide-y-2 translate-y-32 w-48 shadow-lg shadow-gray-500 bg-white flex flex-col z-10 '>
                 <Link onClick={handleProfile} to='/UserProfile/profile' className='text-black hover:bg-[#994b00] transition-all hover:text-white py-2'>
                  Profile
                 </Link>
                 <Link onClick={handleProfile} to='/UserProfile/posts' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Posts
                 </Link>
                 <Link onClick={handleProfile} to='/UserProfile/messages' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Messages
                 </Link>
                 <Link onClick={handleProfile} to='/UserProfile/wishlist' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Wishlist
                 </Link>
                 <Link onClick={handleLogout} to='/log-in' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Sign Out
                 </Link>
              </div>
          )
            
            }
          {Profile && category==="Supplier" && (
              <div className='absolute mt-4 divide-y-2 translate-y-32 w-48 shadow-lg shadow-gray-500 bg-white flex flex-col z-10 '>
                 <Link onClick={handleProfile} to='/SupplierProfile/profile' className='text-black hover:bg-[#994b00] transition-all hover:text-white py-2'>
                  Profile
                 </Link>
                 <Link onClick={handleProfile} to='/SupplierProfile/portfolio' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                 Portfolio

                 </Link>
                 <Link onClick={handleProfile} to='/SupplierProfile/messages' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Messages
                 </Link>
                 <Link onClick={handleProfile} to='/SupplierProfile/wishlist' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Wishlist
                 </Link>
                 <Link onClick={handleLogout} to='/log-in' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Sign Out
                 </Link>
              </div>
          )
            
            }
          {Profile && category==="Builder" && (
              <div className='absolute mt-4 divide-y-2 translate-y-32 w-48 shadow-lg shadow-gray-500 bg-white flex flex-col z-10 '>
                 <Link onClick={handleProfile} to='/BuilderProfile/profile' className='text-black hover:bg-[#994b00] transition-all hover:text-white py-2'>
                  Profile
                 </Link>
                 <Link onClick={handleProfile} to='/BuilderProfile/portfolio' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Portfolio
                 </Link>
                 <Link onClick={handleProfile} to='/BuilderProfile/messages' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Messages
                 </Link>
                 <Link onClick={handleProfile} to='/BuilderProfile/wishlist' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Wishlist
                 </Link>
                 <Link onClick={handleLogout} to='/log-in' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Sign Out
                 </Link>
              </div>
          )
            
            }
          {Profile && category==="Designer" && (
              <div className='absolute mt-4 divide-y-2 translate-y-32 w-48 shadow-lg shadow-gray-500 bg-white flex flex-col z-10 '>
                 <Link onClick={handleProfile} to='/DesignerProfile/profile' className='text-black hover:bg-[#994b00] transition-all hover:text-white py-2'>
                  Profile
                 </Link>
                 <Link onClick={handleProfile} to='/DesignerProfile/portfolio' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                 Portfolio

                 </Link>
                 <Link onClick={handleProfile} to='/DesignerProfile/messages' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Messages
                 </Link>
                 <Link onClick={handleProfile} to='/DesignerProfile/wishlist' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Wishlist
                 </Link>
                 <Link onClick={handleLogout} to='/log-in' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-white'>
                  Sign Out
                 </Link>
              </div>
          )
            
            }
          {/* {Profile && isSupplier && (
              <div className='absolute mt-4 divide-y-2 translate-y-32 w-48 shadow-lg shadow-gray-500 bg-white flex flex-col z-10 '>
                 <Link onClick={handleProfile} to='/SupplierProfile/profile' className='text-black hover:bg-[#994b00] transition-all hover:text-gray-600 py-2'>
                  Profile
                 </Link>
                 <Link onClick={handleProfile} to='/SupplierProfile/portfolio' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                  Posts
                 </Link>
                 <Link onClick={handleProfile} to='/SupplierProfile/messages' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                  Messages
                 </Link>
                 <Link onClick={handleProfile} to='/SupplierProfile/wishlist' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                  Wishlist
                 </Link>
                 <Link onClick={handleProfile} to='/log-in' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                  Sign Out
                 </Link>
              </div>
          )
            
            }
          {Profile && isBuilder && (
              <div className='absolute mt-4 divide-y-2 translate-y-32 w-48 shadow-lg shadow-gray-500 bg-white flex flex-col z-10 '>
                 <Link onClick={handleProfile} to='/SupplierProfile/profile' className='text-black hover:bg-[#994b00] transition-all hover:text-gray-600 py-2'>
                  Profile
                 </Link>
                 <Link onClick={handleProfile} to='/SupplierProfile/portfolio' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                  Posts
                 </Link>
                 <Link onClick={handleProfile} to='/SupplierProfile/messages' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                  Messages
                 </Link>
                 <Link onClick={handleProfile} to='/SupplierProfile/wishlist' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                  Wishlist
                 </Link>
                 <Link onClick={handleProfile} to='/log-in' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                  Sign Out
                 </Link>
              </div>
          )
            
            }
          {Profile && isDesiginer && (
              <div className='absolute mt-4 divide-y-2 translate-y-32 w-48 shadow-lg shadow-gray-500 bg-white flex flex-col z-10 '>
                 <Link onClick={handleProfile} to='/SupplierProfile/profile' className='text-black hover:bg-[#994b00] transition-all hover:text-gray-600 py-2'>
                  Profile
                 </Link>
                 <Link onClick={handleProfile} to='/SupplierProfile/portfolio' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                  Posts
                 </Link>
                 <Link onClick={handleProfile} to='/SupplierProfile/messages' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                  Messages
                 </Link>
                 <Link onClick={handleProfile} to='/SupplierProfile/wishlist' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                  Wishlist
                 </Link>
                 <Link onClick={handleProfile} to='/log-in' className='text-black py-2 hover:bg-[#994b00] transition-all hover:text-gray-600'>
                  Sign Out
                 </Link>
              </div>
          )
            
            } */}
          </button>
          </>
) : (
  <Link to='/log-in'>
  <button className=' border-2 border-white py-2 px-5 bg-white ml-6 rounded-full '>Login</button>
</Link>
)}
          <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-search"
              aria-expanded={dropdown}
              onClick={handleDropdownClick}
            >
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        
          {dropdown && (<div class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div class="relative mt-3 md:hidden">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#994b001a] focus:ring-1 focus:ring-[#994b00] " placeholder="Search..."></input>
            </div>
            <ul class="flex flex-col gap-2 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link to ='/' ><a class="block py-2 px-3 text-gray-600 bg-[#994b00] rounded md:bg-white md:text-[#994b00] md:p-0" aria-current="page">Home</a></Link>
              </li>
              <li>
              <Link to ='/community' ><a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 focus:bg-[#994b00]  focus:text-[#ffffff] md:p-0   ">Community</a></Link>
              </li>
              <li>
              <Link to ='FindProfessionals/builder' ><a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 focus:bg-[#994b00]  focus:text-[#ffffff] md:p-0   ">Find Builder</a></Link>
              </li>
              <li>
              <Link to ='FindProfessionals/supplier' ><a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 focus:bg-[#994b00]  focus:text-[#ffffff] md:p-0   ">Find Supplier</a></Link>
              </li>
              <li>
              <Link to ='FindProfessionals/designer' ><a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 focus:bg-[#994b00]  focus:text-[#ffffff] md:p-0   ">Find Designer</a></Link>
              </li>
            </ul>
          </div>)}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
