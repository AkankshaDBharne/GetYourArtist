import React, { useState } from 'react';

const Filters = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');

  // Updated list of categories and cities for consistency
  const categories = [
    'Classical Dance','Musician', 'Singer/Songwriter', 'Band', 'DJ', 'Comedian', 'Magician',
    'Dance Performer', 'Circus Performer', 'Illusionist', 'Street Performer',
    'Vocalist', 'Instrumentalist', 'Cover Band', 'Orchestra', 'Choral Group',
    'Theater Actor', 'Stand-Up Comedian', 'Puppeteer', 'Poet', 'Spoken Word Artist',
    'Visual Artist', 'Painter', 'Sculptor', 'Tattoo Artist', 'Voice Actor',
  ];

  const cities = [
    'Hyderabad', 'Itanagar', 'Dispur', 'Patna', 'Raipur', 'Panaji', 'Gandhinagar', 
    'Chandigarh', 'Shimla', 'Ranchi', 'Bengaluru', 'Thiruvananthapuram', 'Bhopal', 
    'Mumbai', 'Imphal', 'Shillong', 'Aizawl', 'Kohima', 'Bhubaneswar', 
    'Jaipur', 'Gangtok', 'Chennai', 'Agartala', 'Lucknow', 'Dehradun', 'Kolkata'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, category, city });
  };

  return (
    <div className="bg-orange-30 p-4 ">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full max-w-xs"
        />
        <button
          type="submit"
          className="bg-red-700 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Search
        </button>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Select City</option>
          {cities.map(cit => (
            <option key={cit} value={cit}>{cit}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Filters;
