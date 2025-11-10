import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HotelCard from '../components/HotelCard';
import hotel1 from '../assets/hotels/hotel1.jpg';
import hotel2 from '../assets/hotels/hotel2.jpg';
import hotel3 from '../assets/hotels/hotel3.jpg';
import hotel4 from '../assets/hotels/hotel4.jpg';

const hotelData = [
  { id: 1, name: 'Sunshine Resort', city: 'Bhubaneswar', image: hotel1, price: 2500, rating: 4 },
  { id: 2, name: 'Sea View Hotel', city: 'Goa', image: hotel2, price: 4000, rating: 5 },
  { id: 3, name: 'Mountain Lodge', city: 'Manali', image: hotel3, price: 3000, rating: 4 },
  { id: 4, name: 'City Inn', city: 'Kolkata', image: hotel4, price: 2000, rating: 3 },
];

const HotelList = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredHotels = hotelData.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.city.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectHotel = (hotel) => {
    navigate(`/hotel-details/${hotel.id}`);
  };

  return (
    <div className="home-container">
      <h1>All Hotels</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="hotel-grid">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              onClick={() => handleSelectHotel(hotel)}
            />
          ))
        ) : (
          <p>No hotels found.</p>
        )}
      </div>
    </div>
  );
};

export default HotelList;




