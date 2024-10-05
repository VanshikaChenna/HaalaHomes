import React from 'react';

const Modal_builder = ({ isvisible,onClose}) => {
  if ( !isvisible) return null;
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'>
      <div className='bg-white sm:w-1/3 h-4/6 w-2/3 '>
        
          <h1 className='sm:text-4xl text-2xl text-center pt-10'>
          What Are Your {}
          <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-white bg-clip-text text-transparent'>
           Better?
          </span>
          </h1>
          <div className='sm:text-xl text-xs'>
            <div className='pt-10 pl-4'>
              <h2 className='font-bold'>Recommended topic for you</h2>
              <div class="flex justify-left pt-3">
  
  <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
      type="checkbox"
      id="inlineCheckbox1"
      value="option1" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox1"
      >Home Builders</label
    >
  </div>

  
  <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
      type="checkbox"
      id="inlineCheckbox2"
      value="option2" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox2"
      >Architects</label
    >
  </div>
  </div>
  <div className='pl-2 pt-5'>
    <h2 className='font-bold'>Featured home disussions</h2>
    <div class="flex justify-left pt-3">
  
  <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
      type="checkbox"
      id="inlineCheckbox1"
      value="option1" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox1"
      >Home Builders</label
    >
  </div>

  
  <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
      type="checkbox"
      id="inlineCheckbox2"
      value="option2" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox2"
      >Contractors</label
    >
  </div>
  <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
      type="checkbox"
      id="inlineCheckbox1"
      value="option1" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox1"
      >Custom homes</label
    >
  </div>
  
  </div>
  <div className='pt-4'>
  <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
      type="checkbox"
      id="inlineCheckbox1"
      value="option1" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox1"
      >Floor plans</label
    >
  </div>
  <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
      type="checkbox"
      id="inlineCheckbox1"
      value="option1" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox1"
      >Architects</label
    >
  </div>
  <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
          type="checkbox"
      id="inlineCheckbox1"
      value="option1" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox1"
      >Green Building</label
    >
  </div>
  </div>
  <div className='pt-4'>
  <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
         type="checkbox"
      id="inlineCheckbox1"
      value="option1" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox1"
      >House plan</label
    >
  </div>
  <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
      type="checkbox"
      id="inlineCheckbox1"
      value="option1" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox1"
      >Farm house</label
    >
  </div>
  <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
      type="checkbox"
      id="inlineCheckbox1"
      value="option1" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox1"
      >Transitional</label
    >
  </div>
  </div>
  <div className='pt-4'>
  <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
      type="checkbox"
      id="inlineCheckbox1"
      value="option1" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox1"
      >Prefab houses</label
    >
  </div><div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
      type="checkbox"
      id="inlineCheckbox1"
      value="option1" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox1"
      >Fireplace</label
    >
  </div><div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
    <input
      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-600"
      type="checkbox"
      id="inlineCheckbox1"
      value="option1" />
    <label
      class="inline-block pl-[0.15rem] hover:cursor-pointer"
      for="inlineCheckbox1"
      >Custom artists</label
    >
  </div>
  </div>
  
  </div>
  

  
 
</div>
          <div className=' w-full absolute justify-center'>
          <button className='bg-[#994b002a]  h-8 w-16' onClick={() => onClose()}>Close</button>
          
          </div> 
          </div>
          
          
          



        

      
      </div>
      
      
      
          
    </div>
    
  );
};

export default Modal_builder;
