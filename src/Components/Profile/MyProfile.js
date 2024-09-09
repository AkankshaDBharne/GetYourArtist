import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MyProfile = () => {
    // Retrieve user data from Redux store
    const user = useSelector(state => state.user);

    // Placeholder data if no user data is available
    const userData = {
       
        name: user.username || 'John Doe',
        email: user.email || 'johndoe@example.com',
        bio: user.bio || 'This is a short bio about the user.'
    };

    return (
        <div>
            <Navbar />

            <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">

                <div className="flex flex-col items-center">
                <svg
                        className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                        />
                    </svg>
                
                    <div className="mt-4 text-center">
                        <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
                        <p className="text-gray-600">{userData.email}</p>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-800">About Me</h2>
                    <p className="mt-2 text-gray-600">{userData.bio}</p>
                </div>

            </div>
            <Footer />
            <div />
            </div>

            );
};

            export default MyProfile;
