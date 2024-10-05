import React, { useState } from 'react';

const Modal_post = ({ isvisible, onClose, user_id, full_name }) => {
  const [firstName, lastName] = full_name.split(' ');
  const [selectedOption, setSelectedOption] = useState('');

  if (!isvisible) return null;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='fixed top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'>
      <div className='bg-white h-1/2 sm:w-[600px] sm:h-[450px] rounded-xl'>
        <h1 className='sm:text-4xl text-2xl text-center pt-10'>
          {firstName}
          <span className='bg-gradient-to-r pl-2 from-yellow-900 via-cream-light via-yellow-700 to to-white bg-clip-text text-transparent'>
            {lastName}
          </span>
        </h1>
        <div className='pt-10 pl-10 pr-10'>
          <div className='flex items-center'>
            <input
              type='radio'
              id='reportRadioButton'
              name='option'
              value='report'
              className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300'
              checked={selectedOption === 'report'}
              onChange={handleOptionChange}
            />
            <label htmlFor='reportRadioButton' className='ml-2 text-gray-700'>
              Report Comment
            </label>
          </div>
          <div className='pt-2'>
            <input
              type='radio'
              id='blockRadioButton'
              name='option'
              value='block'
              className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300'
              checked={selectedOption === 'block'}
              onChange={handleOptionChange}
            />
            <label htmlFor='blockRadioButton' className='ml-2 text-gray-700'>
              Block user
            </label>
          </div>

          <div className='pt-8'>
            <div className='resize-y border rounded-md p-2 w-full h-28 shadow-lg'>
              <label htmlFor='textBox' className='text-gray-200'>
                Type reason why you {selectedOption === 'report' ? 'report comment' : 'block user'}
              </label>
              <input type='text' id='textBox' name='example' />
            </div>
            <h1 className=''>
              <div className='pt-10 pl-96 '>
                <button className='hover:border-slate-500 rounded-2xl shadow-lg hover:bg-yellow-700 h-8 w-16 text-slate-500 hover:text-white ' onClick={() => onClose()}>
                  Close
                </button>
                <button className='hover:border-slate-500 rounded-2xl shadow-lg hover:bg-yellow-700 h-8 w-16 text-slate-500 hover:text-white' onClick={() => onClose()}>
                  Done
                </button>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_post;
