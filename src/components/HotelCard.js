import React from 'react';

const HotelCard = ({ hotel, onClick }) => {
  return (
    <div className="hotel-card" onClick={onClick}>
      <img className="hotel-image" src={hotel.image} alt={hotel.name} />
      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <p>{hotel.city}</p>
        <p className="hotel-price">₹{hotel.price} / night</p>
        <p className="hotel-rating">Rating: {hotel.rating}⭐</p>
      </div>
    </div>
  );
};

export default HotelCard;


