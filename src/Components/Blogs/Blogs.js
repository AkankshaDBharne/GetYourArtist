import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Blogs = () => {
  const [isOpenArt, setIsOpenArt] = useState(false);
  const [isOpenMusic, setIsOpenMusic] = useState(false);

  const toggleAccordionArt = () => {
    setIsOpenArt(!isOpenArt);
  };

  const toggleAccordionMusic = () => {
    setIsOpenMusic(!isOpenMusic);
  };

  return (
    <div>
      <Navbar />

      <div
        className="flex bg-black bg-opacity-90 p-8 mt-4 px-10 transition-transform transform hover:scale-105 duration-300 ease-in-out"
        
      >
        {/* Left Side: Text and Button with lighter background */}
        <div className="w-1/2 flex justify-center items-center pr-10">
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <p className="mb-6 text-center text-xl text-white">
              Share your unique insights and captivating stories with our community.
            </p>
            <Link to="/createblogs">
              <button className="bg-red-700 hover:bg-red-600 text-white py-2 px-4 rounded w-40 transform transition-transform hover:scale-105 active:scale-95 shadow-md">
                Create Blog
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="/Images/BlogMain.png"
            alt="Descriptive Alt Text"
            className="w-full h-auto object-cover"
            style={{ animation: 'zoomInOut 20s infinite ease-in-out' }}
          />
        </div>
      </div>

      {/* Inject keyframes into the DOM */}
      <style>
        {`
          @keyframes zoomInOut {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>

      {/* Blog Section 1 */}
      <div className="my-10 mx-5 px-10">
        <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
          <div className="flex items-center cursor-pointer" onClick={toggleAccordionArt}>
            <img
              src="/Images/Blog1.jpg"
              alt="Classical and Renaissance Art"
              className="w-16 h-16 object-cover mx-4"
            />
            <h2 className="text-2xl font-bold flex-1 text-orange-950">
              Discover the World of Art and Its Diverse Expressions
            </h2>
            <span className="text-2xl ml-4 ">{isOpenArt ? 'v' : '^'}</span>
          </div>

          {isOpenArt && (
            <div className="mt-4">
              <img
                src="/Images/Blog1.jpg"
                alt="Art Highlights"
                className="w-50 h-40 mb-4 object-cover mx-auto"
              />
              <p className="text-base text-orange-950">
                <ul className="list-disc pl-6 mb-4">
                  {/* Content */}
                </ul>
              </p>
            </div>
          )}

          <button
            className="text-red-500 underline mt-4"
            onClick={toggleAccordionArt}
          >
            {isOpenArt ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      {/* Blog Section 2 */}
      <div className="my-10 mx-5 px-10">
        <div className="bg-orange-200 p-6 rounded-lg shadow-lg">
          <div className="flex items-center cursor-pointer" onClick={toggleAccordionMusic}>
            <img
              src="/Images/Blog2.jpg"
              alt="Music Evolution"
              className="w-16 h-16 object-cover mx-4"
            />
            <h2 className="text-2xl font-bold flex-1 text-orange-950">
              The Vibrant World of Music: Bands, DJs, and Their Impact
            </h2>
            <span className="text-2xl ml-4 ">{isOpenMusic ? 'v' : '^'}</span>
          </div>

          {isOpenMusic && (
            <div className="mt-4">
              <img
                src="/Images/Blog2A.jpg"
                alt="Music Highlights"
                className="w-50 h-40 mb-4 object-cover mx-auto"
              />
              <p className="text-base text-blue-950">
                <ul className="list-disc pl-6 mb-4">
                  {/* Content */}
                </ul>
              </p>
            </div>
          )}

          <button
            className="text-red-700 underline mt-4"
            onClick={toggleAccordionMusic}
          >
            {isOpenMusic ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
