import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import hotel1 from '../assets/hotels/hotel1.jpg';
import hotel2 from '../assets/hotels/hotel2.jpg';
import hotel3 from '../assets/hotels/hotel3.jpg';
import hotel4 from '../assets/hotels/hotel4.jpg';

const hotelData = [
  { id: 1, name: 'Sunshine Resort', city: 'Bhubaneswar', image: hotel1, price: 2500, rating: 4, description: 'A beautiful resort in Bhubaneswar.' },
  { id: 2, name: 'Sea View Hotel', city: 'Goa', image: hotel2, price: 4000, rating: 5, description: 'Luxury hotel with sea view.' },
  { id: 3, name: 'Mountain Lodge', city: 'Manali', image: hotel3, price: 3000, rating: 4, description: 'Cozy lodge in the mountains.' },
  { id: 4, name: 'City Inn', city: 'Kolkata', image: hotel4, price: 2000, rating: 3, description: 'Comfortable stay in the city.' },
];

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotelData.find((h) => h.id === parseInt(id));

  if (!hotel) {
    return <p>No hotel selected! Please go back to the Home page and select a hotel.</p>;
  }

  const handleBooking = () => {
    navigate('/booking');
  };

  return (
    <div className="hotel-details-container">
      <h1>{hotel.name}</h1>
      <p className="hotel-city">{hotel.city}</p>
      <img className="hotel-details-image" src={hotel.image} alt={hotel.name} />
      <p className="hotel-price">₹{hotel.price} / night</p>
      <p className="hotel-rating">Rating: {hotel.rating}⭐</p>
      <p className="hotel-description">{hotel.description}</p>
      <button className="book-now-btn" onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default HotelDetails;




