import React from 'react';
import profilePic from "../../../images/builderprofile.png";

const Modal_quotation = ({ isvisible,onClose})  => {
    if ( !isvisible) return null;
  return (
    <div className='fixed top-0  w-full h-full flex items-center justify-center bg-yellow-900 bg-opacity-50 backdrop-blur-sm'>
        <div className='bg-white  h-1/2 sm:w-[600px] sm:h-[570px] rounded-xl'>
        
        <h1 className='sm:text-4xl text-2xl text-center pt-10'>
        Contact With {}
        <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-white bg-clip-text text-transparent'>
        Builder_Breeze
        </span>
        </h1>
        <div className='pt-10 pl-10 pr-10'>
        <div className="grid grid-cols-7">
        <div>
            <img src={profilePic} className='h-12 w-14'></img>
        </div>
            <div className='font-bold col-span-6'>
            Builder_Breeze
            <div>
            John Thomas
            </div>
            
            </div>
            <div>
                
            </div>
           
        
            
        </div>
        <h1 className='pt-5 font-bold text-xl'>Message:</h1>
            
                <div className='pt-2'>
                <div className=' resize-y border rounded-md p-2 w-full h-60 shadow-lg '>
                    <label for="textBox " className='text-gray-200' >Type reason why you report comment</label>
                    <input type="text" id="textBox" name="example" />

                </div>
                <h1 className=''>
                    <div className='pt-10 pl-96 block '>
                        <button className='hover:border-slate-500 rounded-2xl shadow-lg hover:bg-yellow-700 h-8 w-16 text-slate-500 hover:text-white  'onClick={() => onClose()} >Close</button>
                        <button className='hover:border-slate-500 rounded-2xl shadow-lg hover:bg-yellow-700 h-8 w-16 text-slate-500 hover:text-white' onClick={() => onClose()} >Done</button>
                        
                        </div>
                    </h1>
                    

                    </div>
                    </div>
        

    </div>
    </div>
  )
}

export default Modal_quotation;