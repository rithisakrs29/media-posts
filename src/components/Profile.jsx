import React from 'react';
import { FaComment, FaHeart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Profile() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center align-middle">
          <img
            src=""
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="ml-5">
            <h1 className='dark:text-green-200'>users.FullName</h1>
            <p>3000 Posts</p>
          </div>
        </div>
      </div>
      <hr className='my-5' />
      <div className='flex justify-between items-center'>
        <MdEmail className='text-lg' />
        <p className='ml-5'>onrithisak@gmail.com</p>
      </div>
      <hr className='my-5' />
      <div className='flex justify-between items-center'>
      <FaHeart className='text-lg'/>
      <p>20</p>
      </div>
      <div className='flex justify-between items-center mt-3'>
        <FaComment className='text-lg' />
        <p>30</p>
      </div>
    </div>
  );
}

export default Profile;
