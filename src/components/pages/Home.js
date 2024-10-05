import React, {useState} from 'react';
import Navbar from '../Navbar_transparent_home';
import '../../App.css';
import '../Button.css';
import cover_image from '../../images/img-1.jpg';
import img9 from '../../images/img-9.png';
import img10 from '../../images/img-10.png';
import abt_1 from '../../images/abt_1.jpg';
import abt_2 from '../../images/abt_2.jpg';
import abt_3 from '../../images/abt_3.jpg';
import bg_round from '../../images/bgabt.png';
import door from '../../images/values_door.png';
import drive from '../../images/values_drive.png';
import home from '../../images/values_home.png';
import thumb  from '../../images/values_thumb.png';
import find  from '../../images/Find Your Home.png';
import Rectangle  from '../../images/Rectangle 14992.jpg';
import lastbg  from '../../images/Bungalow-Mediteraneo-42-Lux-h.jpg';
import alexander  from '../../images/Young businessman happy expression.png';
import Ronald  from '../../images/Man with crossed arms.png';
import emily  from '../../images/Brunette business woman with wavy long hair and blue eyes stands holding a notebook in hands.png';


function AccordionItemStart({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>      
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-b-0 border-gray-200 rounded-t-xl focus:text-[#994b00] hover:bg-gray-100 gap-3"
          onClick={toggleAccordion}
          aria-expanded={isExpanded}
          aria-controls={`accordion-collapse-body-${title}`}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 rotate-${isExpanded ? '0' : '180'} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {/* Accordion body content */}
      {isExpanded && (
        <div id="accordion-collapse-body-1" >
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 bg-yellow-700">
          <p class="mb-2 text-white">{content}</p>
        </div>
      </div>
      )}
    </div>
  );
}

function AccordionItemMid({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-grey-700 border border-b-0 border-gray-200 focus:text-[#994b00] hover:bg-gray-100  gap-3"
          onClick={toggleAccordion}
          aria-expanded={isExpanded}
          aria-controls={`accordion-collapse-body-${title}`}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 rotate-${isExpanded ? '0' : '180'} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {/* Accordion body content */}
      {isExpanded && (
        <div id="accordion-collapse-body-1" >
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 bg-yellow-700">
          <p class="mb-2 text-white ">{content}</p>
        </div>
      </div>
      )}
    </div>
  );
}
function AccordionItemEnd({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-gray-200 rounded-b-xl focus:text-[#994b00] hover:bg-gray-100 gap-3"
          onClick={toggleAccordion}
          aria-expanded={isExpanded}
          aria-controls={`accordion-collapse-body-${title}`}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 rotate-${isExpanded ? '0' : '180'} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {/* Accordion body content */}
      {isExpanded && (
        <div id="accordion-collapse-body-1" >
        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-2xl -translate-y-2 bg-yellow-700">
          <p class="mb-2 text-white">{content}</p>
        </div>
      </div>
      )}
    </div>
  );
}

export default function Home() {
  
  const handleClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
    <Navbar />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
      ></link>
      <div className='home max-w-screen'>
        <div className='home_content h-2/3 md:h-fit'>
          <img
            src={cover_image}
            className='absolute inset-0 w-full h-2/3 md:h-full -z-10 object-cover pb-10'
            alt="Cover Image"
          />
          <h1 className='home_head'>A Home You Can <br />Call Your Own</h1>
          <h2 className='home_content_text'>
            Investing in Modular homes: A Wise Choice for the<br /> Modern
            HomeBuyers
          </h2>
          <button className="home_btn" onClick={handleClick}>
            Explore
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 -mt-72 md:-mt-2 ">
        <div className='relative lg:ml-20 hidden lg:block'>
          <img
            className="absolute  inset-0 w-[400px] h-400px object-cover rounded-full "
            src={img9}
            alt="Image 1"
          />
          <img
            className="absolute top-40 w-400px h-400px left-48  object-cover rounded-3xl "
            src={img10}
            alt="Image 2"
          />
        </div>
        <div className='relative pl-2' id='About_us'>
          <h1 className="md:font-normal  md:text-5xl md:leading-snug text-4xl ">
            Your{' '}
            <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-white bg-clip-text text-transparent'>
              Smart Home,</span>
          </h1>
          <h1 className="sm:font-normal  sm:text-5xl leading-snug text-4xl ">Your Way</h1>
          <div className='mt-2 pt-3 leading-9  md:pr-44 md:text-xl' style={{color:"#6F6B6B"}}>
            <h2>
            When entering the housing market, the real estate sector offers a wide array of choices. If you're looking for a new home or thinking about constructing one, you might have come across Hala Homes as a well-liked option. To put it simply, modular homes are constructed in sections within a factory setting instead of being entirely built on the property where they'll stand. These components are subsequently transported to the site and assembled by a construction professional.
            </h2>
          </div>
        </div>
      </div>

      <div className='sm:mt-60 mt-14 ' id='features'>
        <div className='relative mx-2 md:mx-0 md:pl-8 '>
          <h1 className="sm:font-normal  sm:text-5xl text-3xl sm:leading-snug ">
            Exceptional{' '}
            <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-white bg-clip-text text-transparent'>
              Features of
            </span>
          </h1>
          <h1 className="l-02  text-gray-800 sm:text-5xl text-4xl mb-2">Our Hala Homes</h1>
          <div className='mt-2 pt-3 leading-5  sm:pr-44 text-md' style={{color:"#6F6B6B"}}>
            <p>
              Discover the exceptional features that make modular homes a
              standout{' '}
            </p>
            <p>choice,combining flexibility and efficiency for modern living.</p>
          </div>
        </div>
      </div>
      <div className='mx-10 md:mx-0'>
      <div className=" grid sm:grid-cols-3 grid-cols-1 gap-3 justify-center mt-10">
        <div className="md:ml-15  md:w-4/6 w-full h-fit bg-[#994a0052] rounded-xl md:mx-10 hover:bg-[#994a00c6] hover:scale-105 transition duration-300 shadow-2xl ">
          <h1 className='text-center font-bold pt-2 leading-10 '>Smarter Builds</h1>
          <p className='sm:text-left mx-5 md:mx-10' style={{color:"black"}}>Our controlled manufacturing facility for climate regulation minimizes weather-related issues and delays, thus eliminating the risk of material mold caused by moisture.</p>
          <img
            className='ml-auto mt-9 md:mt-6 w-1/2 rounded-2xl object-cover'
            src={abt_1}
            ></img>
        </div>
        <div className="w-full mt-10 md:mt-0 md:w-4/6 h-fit bg-[#994a0053] rounded-xl md:mx-10  hover:bg-[#994a00c6] hover:scale-105 transition duration-300 shadow-2xl">
        <h1 className='text-center font-bold pt-2 leading-10 '>Faster Turnarounds</h1>
          <p className='sm:text-left  mx-5 md:mx-10' style={{color:"black"}}>Modular homes, which are efficiently structured and operational throughout the year, are generally constructed in approximately one-third of the time required for building a home on-site.</p>
          <img
            className='ml-auto mt-9 md:mt-0 w-1/2 rounded-2xl object-cover'
            src={abt_2}
            ></img>
        </div>
        <div className="w-full mt-10 md:mt-0 md:w-4/6 h-fit bg-[#994a0053] rounded-xl md:mx-10 hover:bg-[#994a00c7] hover:scale-105 transition duration-300 shadow-2xl">
        <h1 className='text-center font-bold pt-2 leading-10'>Increased Reliability</h1>
          <p className='text-left md:mx-10' style={{color:"black"}}>Our precision-focused technology, along with our controlled work environment for climate management, both serve to draw in and cultivate a highly skilled workforce.</p>
          <img
            className='ml-auto mt-10 md:mt-6 w-1/2 rounded-2xl object-cover'
            src={abt_3}
            ></img>
        </div>
      </div>
      </div>
      <div className='flex flex-row' id='value'>
      <div className="md:grid mx-2 md:mx-0 md:grid-cols-2 mt-32">
        <img className='rounded-xl ml-20 hidden md:block' src={bg_round} alt="Background" />
          <div className='md:grid md:grid-rows-2 w-1/2 h-3/5 absolute inset-x-0 pl-16 hidden '>
            <div className='grid grid-cols-2'>
              <div className='bg-[#8c00992a] rounded-xl shadow-lg shadow-slate-400 p-2  h-4/5 w-2/4 mt-10 ml-20'>
                <div>
                <img className='bg-[#c88cea92] rounded-full m-2 p-2' src={door}></img>
                <h2 className='font-bold'>Open doors</h2>
                <p className='text-xs pt-2'>We are here to help our customers realize success, own homes they love, and create more opportunities for them down the road.</p>

                </div>
                
              </div>
            
              <div className='bg-[#d965652a] rounded-xl shadow-lg shadow-slate-400 h-4/5 w-2/4 p-2 mt-24 mr-16'>
                <div>
                <img className='bg-[#dfa5a58f] rounded-full m-2 p-2' src={home}></img>
                <h2 className='font-bold'>Be a home</h2>
                <p className='text-xs pt-2'>We strive to be more than a place to work - where people have a sense of belonging, work-life balance, and a true career path</p>

                </div>
              </div>
            </div>
          <div className='grid grid-cols-2'>
            <div className='bg-[#dedb872a] rounded-xl shadow-lg shadow-slate-400 p-2  h-4/5 w-2/4 mt-5 ml-20'>
              <div>
                <img className='bg-[#e2e6a36a] rounded-full m-2 p-2' src={drive}></img>
                <h2 className='font-bold'>Drive change</h2>
                <p className='text-xs pt-2'>We must set the standard. Advance technology and sustainability, and implement visionary practices in all we do.</p>

              </div>
            </div>
            <div className='bg-[#87c6de2a] rounded-xl shadow-lg shadow-slate-400 p-2  h-4/5 w-2/4 mt-20 mr-16'>
              <div>
                <img className='bg-[#86edef25] rounded-full m-2 p-2' src={thumb}></img>
                <h2 className='font-bold'>Do good</h2>
                <p className='text-xs pt-2'>Be kind and collaborative. Promote equity, and be welcoming to everyone.</p>
              </div>
            </div>
            
          </div>
          
         </div>
         <div className=' md:justify-right'>
      
      <h1 className="font-normal text-3xl md:text-5xl leading-snug"><span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-white bg-clip-text text-transparent'>Maximizing your  </span>Investment:<br/>The Value of Hala Homes</h1>
        <div className='md:pr-44 text-xl' style={{color:"#6F6B6B"}}>
        <p className='mt-2 pt-3 leading-9 '>Our modular homes offer remarkable value by combining cost-effectiveness, high-quality construction, and energy efficiency. With shorter construction times and reduced material waste, you get more for your investment. Experience the convenience and sustainability that modular homes bring, making them an excellent choice for the modern homeowner. </p>
      </div>
      </div>
      </div>
        
  </div>

  <div className='md:grid mx-2 md:mx-0 md:grid-cols-2 mt-16 'id='itworks'>
    <div className='justify-right md:ml-20 ' >
      <h1 className='font-normal spacing- text-3xl md:text-5xl leading-snug'><span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-white bg-clip-text text-transparent '>Understanding </span>The<br/>Modular Home Process</h1>
      <div className=' md:pr-44 text-xl' style={{color:"#6F6B6B"}}>
      <p className='mt-2 pt-3 leading-9'>Explore floor plans offered in your region, customize your search based on price, size, and amenities, and proceed to inquire for additional details while also locating a nearby retailer.</p>
      </div>
    </div>
    <div className='ml-5'>
      
      <img className='absolute pl-40 pt-5 hidden md:block ' src={Rectangle}></img>
      <img className='absolute hidden md:block'src={find}></img>
    </div>
    </div>
    {/* FAQ */}
    
    <div className='mt-16 md:mt-96'id='faq'>
        <div className='relative w-fit md:w-full flex flex-col mx-2 md:mx-0 md:'>
          <h1 className="font-normal text-4xl md:text-5xl leading-snug md:text-center">
          Hala Homes Queries:{' '}
            <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-white bg-clip-text text-transparent'>
            Get Informed
            </span>
          </h1>
          <div className=' text-center mt-2 pt-3 md:px-72'>
          <p className='text-md ' sytle={{color:"#6F6B6B"}}>Explore the most common queries about modular homes to gain a comprehensive understanding of this housing option</p>
          </div>
          <div className='mt-16 px-5 md:px-32' >
            <div id="accordion-collapse" data-accordion="collapse">
              {/* <h2 id="accordion-collapse-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-b-0 border-gray-200 rounded-t-xl  hover:bg-gray-100  gap-3" onClick={toggleAccordion} aria-expanded={isExpanded} aria-controls="accordion-collapse-body-1">
                  <span>What is the difference between a manufactured home and a modular home?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              {isExpanded && (
              <div id="accordion-collapse-body-1" >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">While both manufactured homes and modular homes are built in a factory environment, there are some differences between the two. The main source of difference between modular and manufactured homes is the code to which they are built. Manufactured homes are built to a federal HUD code, while modular homes are built to state or local residential building codes.</p>
                </div>
              </div>)} */}
              <AccordionItemStart 
              title="What is the difference between a manufactured home and a modular home?" 
              content="While both manufactured homes and modular homes are built in a factory environment, there are some differences between the two. The main source of difference between modular and manufactured homes is the code to which they are built. Manufactured homes are built to a federal HUD code, while modular homes are built to state or local residential building codes." 
              />
              <AccordionItemMid 
              title="Where can I go to tour a model that I see online?" 
              content="While both manufactured homes and modular homes are built in a factory environment, there are some differences between the two. The main source of difference between modular and manufactured homes is the code to which they are built. Manufactured homes are built to a federal HUD code, while modular homes are built to state or local residential building codes." 
              />
              <AccordionItemMid
              title="Can factory built homes be placed on basements?" 
              content="While both manufactured homes and modular homes are built in a factory environment, there are some differences between the two. The main source of difference between modular and manufactured homes is the code to which they are built. Manufactured homes are built to a federal HUD code, while modular homes are built to state or local residential building codes." 
              />
              <AccordionItemMid
              title="Do your Cape Cod models come with a finished upstairs??" 
              content="While both manufactured homes and modular homes are built in a factory environment, there are some differences between the two. The main source of difference between modular and manufactured homes is the code to which they are built. Manufactured homes are built to a federal HUD code, while modular homes are built to state or local residential building codes." 
              />
              <AccordionItemEnd
              title="How is factory built housing different than site built homes?" 
              content="While both manufactured homes and modular homes are built in a factory environment, there are some differences between the two. The main source of difference between modular and manufactured homes is the code to which they are built. Manufactured homes are built to a federal HUD code, while modular homes are built to state or local residential building codes." 
              />
              {/* <h2 id="accordion-collapse-heading-2 ">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-grey-700 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-yellow-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-yellow-700 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                  <span>Where can I go to tour a model that I see online?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                  <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-grey-700 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-yellow-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-yellow-700 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                  <span>Can factory built homes be placed on basements?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                  <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-4">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-grey-700 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-yellow-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-yellow-700 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                  <span>Do your Cape Cod models come with a finished upstairs?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                  <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-5">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-gray-200 rounded-b-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-yellow-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-yellow-700 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                  <span>How is factory built housing different than site built homes?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2> */}
              <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-5">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                  <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                    <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                    <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                  </ul>
                </div>
              </div> 
            </div>

            </div>
    </div>
    </div>

    
    {/* expertise*/}
    <div className='mt-16 md:mt-32'>
        <div className='relative w-fit md:w-full flex flex-col mx-2 md:mx-0 md:pl-8'>
          <h1 className="font-normal text-4xl md:text-5xl leading-snug md:text-center">
            Our{' '}
            <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-white bg-clip-text text-transparent'>
              Team
            </span>
          </h1>
          
          <div className='mt-2 pt-3 leading-9 text-xl md:mx-96 md:text-center' style={{color:"#6F6B6B"}}>
            <p>
            Join us on our journey to inspire innovation and make a lasting impact. Together, we can shape the
            future, break down barriers, and transform ideas into reality.</p>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center mt-10">
        <div className="md:w-1/4 h-96 bg-[#994a0052] hover:bg-[#994a00c6] transition duration-300  hover:scale-105 rounded-xl mx-10 mb-10 md:mb-0 shadow-2xl p-1 md:p-0 ">
        <img
            className='ml-6 mt-6 md:w-1/4 rounded-full object-cover shadow-2xl'
            src={alexander}
            ></img>
          <p className='text-left mx-10 pt-5' style={{color:"black"}}>Entrepreneur with over 10 years experience in IT development and strategy. Co-founder of the affiliate company in Singapore. BSc in Organizational Leadership from Purdue University.</p>
          
            <h1 className='text-right pr-4 pt-4 font-bold  '>Alexandra Mitchell</h1>
        </div>
        <div className="md:w-1/4 h-96 bg-[#994a0052] hover:bg-[#994a00c6] transition duration-300 hover:scale-105 rounded-xl mx-10 mb-10 md:mb-0 shadow-2xl p-1 md:p-0">
        <img
            className='ml-6 mt-6 md:w-1/4 rounded-full object-cover shadow-2xl'
            src={Ronald}
            ></img>
          <p className='text-left mx-10 pt-5' style={{color:"black"}}>Entrepreneur with over 10 years experience in IT development and strategy. Co-founder of the affiliate company in Singapore. BSc in Organizational Leadership from Purdue University.</p>
          
            <h1 className='text-right pr-4 pt-4 font-bold  '>Ronald Richards</h1>
        </div>
        <div className="md:w-1/4 h-96 bg-[#994a0052] hover:bg-[#994a00c6] transition duration-300 hover:scale-105 rounded-xl mx-10 mb-10 md:mb-0 shadow-2xl p-1 md:p-0">
        <img
            className='ml-6 mt-6 md:w-1/4 rounded-full object-cover shadow-2xl'
            src={emily}
            ></img>
          <p className='text-left mx-10 pt-5' style={{color:"black"}}>Entrepreneur with over 10 years experience in IT development and strategy. Co-founder of the affiliate company in Singapore. BSc in Organizational Leadership from Purdue University.</p>
          
            <h1 className='text-right pr-4 pt-4 font-bold  '>Emily Johnson</h1>
        </div>
        
      </div>

  {/*secure financing*/}
 
  <div>
  <div className='relative -mb-5'>
  <img className=' mt-36 w-full h-[750px] blur-md' src={lastbg} alt="Background" />
  <div className="absolute w-full h-[750px] inset-0 bg-black opacity-80"></div>
  <h1 className='absolute inset-0 text-center  pt-56 font-medium text-6xl leading-snug' style={{ color: 'white' }}>
    Securing Financing for Hala Homes <br />
    <span className='text-yellow-900'>Made Effortless</span>
  </h1>
  
    {/* <a href="#_" class="inline-flex items-center justify-center overflow-hidden font-medium text-yellow-900 transition duration-300 ease-out group ">
    <span class="absolute inset-0 flex items-center justify-center w-full h-[750px] text-white duration-300 -translate-x-full bg-[#994b002a] group-hover:translate-x-0 ease ">
    <h1 className='text-4xl text-white pt-52' >Learn More</h1>
    </span>
    <span class="absolute items-center justify-center w-full -mt-80 h-[300px] transition-all duration-300 transform group-hover:translate-x-full ease group-hover:blur-x "></span>
    
    </a> */}

  
  </div>
  
</div>
    </>
  );
}
