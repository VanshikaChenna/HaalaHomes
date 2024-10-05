// import React from 'react';
import React,{useState, useEffect, Fragment} from 'react';
import '../../App.css';
import default_user from "../../images/user_0_img.jpg"
import heart from "../../images/Icons/heart.svg"
import comment from "../../images/Icons/comment.svg"
import reply from "../../images/Icons/reply.svg"


export default function community_2() {
    <div className='m-8 shadow-lg flex border-2 border-slate-100 p-6 pt-6 rounded-md text-lg'>
                  <div className=' justify-between space-y-8 w-full'>
                    <div className='flex-col'>
                      <div className='flex'>
                        <img src={default_user} className='h-14 object-cover rounded-full border-2 mr-4 border-slate-200'></img>
                        <div className='flex-col'>
                          <h2 className='text-black font-semibold text-xl'>
                          Addyson Pratt
                          </h2>
                          <h3 className='text-gray-400'>
                          20 minute ago
                          </h3>
                        
                        </div>
                      </div>
                      <div className=' mt-8'>
                        <h2 className='text-black font-semibold text-xl'>
                        I need a supplier for my modular home !
                        </h2>
                        <p className='text-black text-md'>
                        {/* {user.description} */}
                        </p>

                      </div>
                    </div>
                    <div className='flex justify-between pt-5 px-1'>
                      <div className='flex space-x-4'>
                        <img src={heart}></img><p className='pt-1 text-black'>26</p>
                        <img src={comment}></img><p className='pt-1 text-black'>3</p>
                        <img className='hidden md:block' src={reply}></img>
                      </div>
                    <div className='flex space-x-3 text-sm '>
                      <div className='flex -space-x-5'>
                        <img src={default_user} className='h-10 object-cover rounded-full border-2 border-slate-200'></img>
                        <img src={default_user} className='h-10 object-cover rounded-full border-2 border-slate-200'></img>
                        <img src={default_user} className='h-10 object-cover rounded-full border-2 border-slate-200 hidden md:block'></img>
                        <img src={default_user} className='h-10 object-cover rounded-full border-2 border-slate-200 hidden md:block'></img>
                        <img src={default_user} className='h-10 object-cover rounded-full border-2 border-slate-200 hidden md:block'></img>
                      </div>
                      <p className='text-slate-400 pt-2'>35 others</p>
                    </div>
                  </div>
                </div>
                </div>

}