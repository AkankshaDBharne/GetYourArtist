import React from 'react';

const Shimmer = () => {
  // Shimmer effect styling
  const shimmerStyle = {
    background: 'linear-gradient(to right, #f8f8f8 0%, #e0e0e0 20%, #f8f8f8 40%, #f8f8f8 100%)',
    backgroundSize: '1000px 100%',
    animation: 'shimmer 2s infinite' 
  };

  // Shimmer keyframes
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
    <div>
      <style>
        {shimmerKeyframes}
      </style>
      <div className="w-full min-h-screen bg-white flex flex-col items-center">
        {/* Navbar Shimmer */}
        <div className="w-full h-16 bg-white shadow-md mb-6" style={shimmerStyle}></div>

        {/* Text Section */}
        <div className="w-full max-w-4xl mx-auto text-center mb-6">
          <div className="w-full max-w-xs h-8 bg-white rounded mx-auto mb-4" style={shimmerStyle}></div>
          <div className="w-full max-w-md h-6 bg-white rounded mx-auto" style={shimmerStyle}></div>
        </div>

        {/* Profile Section */}
        <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mb-6" style={shimmerStyle}>
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-white rounded-full" style={shimmerStyle}></div>
            <div className="flex-1">
              <div className="h-6 bg-white rounded mb-4" style={shimmerStyle}></div>
              <div className="h-4 bg-white rounded mb-2" style={shimmerStyle}></div>
              <div className="h-4 bg-white rounded mb-2" style={shimmerStyle}></div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mb-6" style={shimmerStyle}>
          <div className="w-full h-40 bg-white rounded-lg mb-6" style={shimmerStyle}></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(8).fill(null).map((_, index) => (
              <div key={index} className="w-full bg-white h-60 rounded-lg shadow-md" style={shimmerStyle}></div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full h-12 bg-white rounded-t-lg shadow-md" style={shimmerStyle}></div>
      </div>
    </div>
  );
};

export default Shimmer;
