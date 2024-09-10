
import React from 'react';

const ShimmerArtist = () => {
  const shimmerStyle = {
    background: 'linear-gradient(to right, #f8f8f8 0%, #e0e0e0 20%, #f8f8f8 40%, #f8f8f8 100%)',
    backgroundSize: '1000px 100%',
    animation: 'shimmer 1.5s infinite'
  };

  const shimmerKeyframes = `
    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }
  `;

  return (
    <div className="min-h-screen">
      <style>
        {shimmerKeyframes}
      </style>
      <div className="flex flex-col md:flex-row p-6 shadow-lg rounded-lg mx-5 mt-6">
        {/* Left Side */}
        <div className="flex-shrink-0 md:w-1/3 bg-orange-100 py-5 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <div className="w-44 h-44 bg-gray-300 rounded-full" style={shimmerStyle}></div>
          </div>
          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full" style={shimmerStyle}></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full" style={shimmerStyle}></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full" style={shimmerStyle}></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full" style={shimmerStyle}></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-2/3 pl-6">
          <div className="w-3/4 h-6 bg-gray-300 rounded mb-4" style={shimmerStyle}></div>
          <div className="w-1/2 h-4 bg-gray-300 rounded mb-4" style={shimmerStyle}></div>
          <div className="w-2/3 h-4 bg-gray-300 rounded mb-4" style={shimmerStyle}></div>
          <div className="w-24 h-8 bg-gray-300 rounded" style={shimmerStyle}></div>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-6 mx-5 mt-6 bg-orange-100 shadow-lg rounded-lg">
        <div className="w-1/4 h-6 bg-gray-300 rounded mb-4" style={shimmerStyle}></div>
        <div className="w-full h-32 bg-gray-300 rounded" style={shimmerStyle}></div>
      </div>

      {/* Image Cards Section */}
      <div className="p-6 mx-5 mt-6 bg-orange-100 shadow-lg rounded-lg">
        <div className="w-1/4 h-6 bg-gray-300 rounded mb-4" style={shimmerStyle}></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array(6).fill(null).map((_, index) => (
            <div key={index} className="bg-gray-300 h-60 rounded-lg shadow-md" style={shimmerStyle}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerArtist;
