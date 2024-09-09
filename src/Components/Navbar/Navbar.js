import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../../Utils/userSlice';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const userOptionsRef = useRef(null);
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.username);

  const handleLogout = () => {
    dispatch(clearUser());
    navigate('/');
  };

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleUserIconClick = () => {
    setShowUserOptions(prev => !prev);
  };

  const handleOptionClick = (option) => {
    if (option === 'UpdateProfile') {
      navigate('/userprofile');
    } else if (option === 'MyProfile') {
      navigate('/myprofile');
    }
    setShowUserOptions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (userOptionsRef.current && !userOptionsRef.current.contains(event.target)) {
        setShowUserOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="text-white flex items-center justify-between mt-3 mb-2 p-4 shadow-md">
      <div className="flex items-center">
        <Link to="/home" className="flex items-center">
          <div className="flex-shrink-0">
            <img src="/Images/LogoC_GYA.png" alt="Logo" className="h-12 w-auto" />
          </div>
          <p className='text-red-700 text-lg font-bold ml-2'>Get Your Artist</p>
        </Link>
      </div>

      <div className="flex flex-grow justify-center space-x-6 text-red-700 text-lg font-semibold">
        <Link to="/home" className="hover:text-gray-400">Home</Link>
        <Link to="/aboutus" className="hover:text-gray-400">About Us</Link>
        <Link to="/artists" className="text-red-700 hover:text-gray-400">Artist</Link>
        
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center text-red-700 hover:text-gray-400"
          >
            <svg
              className="w-6 h-6"
              style={{ marginLeft: '-25px' }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-60 bg-orange-50 rounded-lg shadow-lg z-20">
              <div className="flex flex-col">
                <Link
                  to="/registration"
                  className="px-4 py-4 text-md text-red-700 hover:bg-gray-100"
                >
                  Registrations
                </Link>
                <div className="border-t border-red-100 mx-2"></div>
                <Link
                  to="/booking"
                  className="px-4 py-4 text-md text-red-700 hover:bg-gray-100"
                >
                  Bookings
                </Link>
              </div>
            </div>
          )}
        </div>
        <Link to="/events" className="hover:text-gray-400">Events</Link>
        <Link to="/blogs" className="hover:text-gray-400">Blogs</Link>
        <Link to="/contactus" className="hover:text-gray-400">Contact Us</Link>
      </div>

      <div className="flex-shrink-0 flex items-center space-x-4 relative">
        <button
          onClick={handleUserIconClick}
          className="flex items-center hover:text-gray-400"
        >
          <svg
            className="w-6 h-6 mr-2 text-red-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
        </button>
       
        <button
          onClick={handleLogout}
          className="bg-orange-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>

        {showUserOptions && (
          <div 
            ref={userOptionsRef}
            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-30"
          >
            <div className="px-4 py-2 text-sm text-gray-700">
              <div className="px-6 text-lg text-red-700">Hi, {username}</div>
              <button
                onClick={() => handleOptionClick('MyProfile')}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                My Profile
              </button>
              <button
                onClick={() => handleOptionClick('UpdateProfile')}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Update Profile
              </button>
             
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
