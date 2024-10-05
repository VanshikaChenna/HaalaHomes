import React from 'react';
import '../../App.css';
import Navbar from '../Navbar_white';
import { Link } from 'react-router-dom';
import img from "../../images/Builder/2.png";

export default function UserProfile_post() {
  return (
    <>
    <Navbar />
        <div className='w-screen md:w-full mb-40 p-10 md:p-20 justify-center'>
            <div className='md:flex w-full md:space-x-10 justify-center'>
            <img src={img} className='w-full md:h-[400px] md:w-1/3 object-cover '></img>
            <div className='shadow-lg space-y-6 p-4 md:p-8 md:w-1/4'>
                <p className='uppercase text-2xl font-bold text-[#994b00]'>Details</p>
                <div>
                    <div className='p-3 justify-between inline-flex w-full bg-[#994b002a]'>
                        <p>Category</p>
                        <p >Kitchen</p>
                    </div>
                    <div className='p-3 justify-between inline-flex w-full bg-transparent'>
                        <p>Square Feet</p>
                        <p >500</p>
                    </div>
                    <div className='p-3 justify-between inline-flex w-full bg-[#994b002a]'>
                        <p>Length</p>
                        <p >72'0"</p>
                    </div>
                    <div className='p-3 justify-between inline-flex w-full bg-transparent'>
                        <p>Width</p>
                        <p >32'0"</p>
                    </div>
                    <div className='p-3 justify-between inline-flex w-full bg-[#994b002a]'>
                        <p>Location</p>
                        <p >Ontario</p>
                    </div>
                </div>            
            </div>

            </div>
        </div>
    </>
  );
}
