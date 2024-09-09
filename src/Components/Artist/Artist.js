import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Filters from '../Filters/Filters'; // Updated import
import artistsData from '../../Constants/artistsData';
import { useNavigate } from 'react-router-dom';

// Use original data with _id
const cleanArtistsData = artistsData; // If _id is needed for navigation

const Artist = () => {
  const [filteredArtists, setFilteredArtists] = useState(cleanArtistsData);
  const [searchParams, setSearchParams] = useState({ searchTerm: '', category: '', city: '' });
  const [noResults, setNoResults] = useState(false); // Track if no results were found
  const [showAllArtists, setShowAllArtists] = useState(false); // Track if "Show All Artists" button is visible
  const navigate = useNavigate(); // Hook to handle navigation

  // Function to handle search
  const handleSearch = (params) => {
    setSearchParams(params);

    const { searchTerm, category, city } = params;

    console.log('Search Parameters:', params);

    const results = cleanArtistsData.filter(artist => {
      const matchesCategory = category ? artist.genre.toLowerCase() === category.toLowerCase() : true;
      const matchesCity = city ? artist.address.toLowerCase().includes(city.toLowerCase()) : true;
      const matchesSearchTerm = searchTerm ? 
        (artist.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        artist.last_name.toLowerCase().includes(searchTerm.toLowerCase())) : true;

      console.log('Artist:', artist);
      console.log('Matches Category:', matchesCategory);
      console.log('Matches City:', matchesCity);
      console.log('Matches Search Term:', matchesSearchTerm);

      return matchesSearchTerm && matchesCategory && matchesCity;
    });

    console.log('Search Results:', results);

    if (results.length === 0) {
      setNoResults(true);
      setShowAllArtists(true); // Show the "Show All Artists" button
      setTimeout(() => {
        setFilteredArtists(cleanArtistsData); // Reset to all artists after a delay
        setNoResults(false);
      }, 2000); // 2 seconds delay
    } else {
      setNoResults(false);
      setFilteredArtists(results);
      setShowAllArtists(true); // Show the "Show All Artists" button
    }
  };

  // Function to handle card click
  const handleCardClick = (id) => {
    if (id) {
      navigate(`/artist/${id}`); // Navigate to ArtistPage with artist ID
    } else {
      console.error('Artist ID is undefined'); // Error handling
    }
  };

  // Function to handle "Show All Artists" button click
  const handleShowAllArtists = () => {
    setFilteredArtists(cleanArtistsData);
    setShowAllArtists(false); // Hide the button after showing all artists
  };

  console.log('Initial artistsData:', cleanArtistsData);
  console.log('Filtered artists:', filteredArtists);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-col flex-1 mx-5">
        {/* Centered Filters */}
        <div className="flex justify-center mb-6">
          <div className="p-4 shadow-lg rounded-lg w-full max-w-4xl">
            <Filters onSearch={handleSearch} />
          </div>
        </div>
       
        {/* Artist Cards */}
        <div className="flex-1 p-5">
          {noResults ? (
            <p className="text-center text-gray-700">No artists found. Showing all artists again.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {filteredArtists.length > 0 ? (
                filteredArtists.map(artist => (
                  <div
                    key={artist._id} // Use _id as a unique key
                    className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    onClick={() => handleCardClick(artist._id)} // Pass artist ID to the handler
                  >
                    <img
                      src={artist.profilePhoto}
                      alt={`${artist.first_name} ${artist.last_name}`}
                      className="w-full h-54 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{artist.first_name} {artist.last_name}</h3>
                    <p className="text-gray-700">{artist.genre}</p>
                    <p className="text-gray-700">{artist.address}</p>
                  </div>
                ))
              ) : (
                <p>No artists found</p>
              )}
            </div>
          )}
        </div>

         {/* Back to All Artists Button */}
         {showAllArtists && (
          <div className="flex justify-start mb-2">
            <button
              onClick={handleShowAllArtists}
              className="flex items-center text-red-700  px-4 py-2 rounded-lg "
            >
              <span className="text-2xl mr-2">←</span> Back to All Artists
            </button>
          </div>
        )}
      </div>


      <Footer />
    </div>
  );
};

export default Artist;
