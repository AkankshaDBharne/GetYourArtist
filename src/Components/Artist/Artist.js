import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Artist = () => {
  // Dummy data for cards
  const allArtists = [
    {
      id: 1,
      name: 'Akanksha Bharne',
      description: 'Classical Dancer',
      city: 'Nagpur',
      category: 'Classical Dancer',
      image: '/Images/ArtistProfile2.png'
    },
    {
      id: 2,
      name: 'Dhairya Mehta',
      description: 'Singer',
      city: 'Mumbai',
      category: 'Singer',
      image: '/Images/ArtistProfile1.png'
    },
    {
      id: 3,
      name: 'Aditi Churad',
      description: 'Classical Singer',
      city: 'Nagpur',
      category: 'Classical Singer',
      image: '/Images/ArtistProfile1.png'
    },
    {
      id: 4,
      name: 'Aditi Sali',
      description: 'Musical Band',
      city: 'Nashik',
      category: 'Musical Band',
      image: '/Images/ArtistProfile1.png'
    }
  ];

  const [filteredArtists, setFilteredArtists] = useState(allArtists);

  const handleSearch = (searchParams) => {
    const { searchTerm, category, city } = searchParams;

    const results = allArtists.filter(artist => {
      const matchesName = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category ? artist.category === category : true;
      const matchesCity = city ? artist.city === city : true;

      return matchesName && matchesCategory && matchesCity;
    });

    setFilteredArtists(results);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar with onSearch prop */}
        <Sidebar onSearch={handleSearch} />

        {/* Main Content Area */}
        <div className="flex-1 p-5 bg-gray-100">
          <div className="flex flex-wrap gap-4">
            {filteredArtists.map(artist => (
              <div key={artist.id} className="bg-white p-4 rounded-lg shadow-lg w-64">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                <p className="text-gray-700">{artist.description}</p>
                <p className="text-gray-700">{artist.city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Artist;
