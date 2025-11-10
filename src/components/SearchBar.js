import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setHotels } from '../redux/hotelSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    // For simplicity, filter static data (later can use API)
    const hotelData = [
      { id: 1, name: 'Sunshine Resort', city: 'Bhubaneswar', image: '/assets/hotels/hotel1.jpg', price: 2500 },
      { id: 2, name: 'Sea View Hotel', city: 'Goa', image: '/assets/hotels/hotel2.jpg', price: 4000 },
      { id: 3, name: 'Mountain Lodge', city: 'Manali', image: '/assets/hotels/hotel3.jpg', price: 3000 },
      { id: 4, name: 'City Inn', city: 'Kolkata', image: '/assets/hotels/hotel4.jpg', price: 2000 },
    ];

    const filtered = hotelData.filter((hotel) =>
      hotel.name.toLowerCase().includes(query.toLowerCase()) ||
      hotel.city.toLowerCase().includes(query.toLowerCase())
    );

    dispatch(setHotels(filtered));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search hotels or cities..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
