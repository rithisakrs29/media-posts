import React, { useEffect, useState } from 'react';
import '../index.css';
import { BsFillMoonFill, BsSearch } from 'react-icons/bs';
import { MdSunny } from 'react-icons/md';
import { IoNotifications } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

function Header({logout}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentThem, setCurrentThem] = useState('');

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setCurrentThem('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setCurrentThem('light');
    }
  }, []);

  const changeTheme = (theme) => {
    if (theme == 'light') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      setCurrentThem('light');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setCurrentThem('dark');
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="bg-white dark:bg-gray-800 fixed left-0 top-0 w-full">
      <div className="container mx-auto h-[13vh] flex justify-between items-center">
        <div className="flex items-center">
          <Link to={'/'}>
            <h1 className="text-md font-bold lg:text-2xl text-yellow-400">
              Block Post
            </h1>
          </Link>
        </div>
        <ul className="flex items-center">
          <li className="ml-2 md:ml-5">
            {currentThem === 'light' ? (
              <BsFillMoonFill
                className="cursor-pointer text-lg hover:text-black hover:scale-110 transition-all dark:text-gray-400"
                onClick={() => changeTheme('dark')}
              />
            ) : (
              <MdSunny
                className="cursor-pointer text-lg hover:text-white hover:scale-110 transition-all dark:text-gray-400"
                onClick={() => changeTheme('light')}
              />
            )}
          </li>
          <Link to={'/'}>
            <li className="ml-2 md:ml-5">
              <AiFillHome  className="cursor-pointer text-lg dark:hover:text-white hover:text-black hover:scale-110 transition-all dark:text-gray-400" />
            </li>
          </Link>
          <Link to={'/notification'}>
            <li className="ml-2 md:ml-5">
              <IoNotifications className="cursor-pointer text-lg dark:hover:text-white hover:text-black hover:scale-110 transition-all dark:text-gray-400" />
            </li>
          </Link>
          <li className='relative'>
            <img
              src="https://i.pinimg.com/564x/f6/b4/f7/f6b4f7ef90434a7807dd127749234589.jpg"
              className="ml-2 md:ml-5 mr-2 rounded-full w-10 h-10 mx-auto object-cover"
              alt=""
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-gray-800 dark:bg-white border rounded-lg shadow-lg">
              <Link to={"/profile"}>
              <li className="px-4 py-2 hover:bg-gray-200 hover:rounded-lg cursor-pointer">Profile</li>
              </Link>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
              <hr />
              <li className="px-4 py-2 hover:bg-gray-200 hover:rounded-lg cursor-pointer">Logout</li>
            </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
