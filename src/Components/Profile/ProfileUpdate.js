import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ProfileUpdate = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl lg:p-10 lg:mt-1 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full text-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-green-700">
            Profile Updated Successfully
          </h2>
          <p className="text-gray-700 mb-4">
            Your profile information has been updated successfully.
          </p>
          <a
            href="/profile"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
          >
            Go to Profile
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileUpdate;
