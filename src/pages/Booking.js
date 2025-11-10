import React, { useState } from 'react';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="booking-container">
        <h1>Booking Confirmed!</h1>
        <div className="booking-confirmation">
          <h2>Thank you, {name}!</h2>
          <p>Your booking from {checkIn} to {checkOut} is confirmed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-container">
      <h1>Book Your Stay</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Check-in Date</label>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />

        <label>Check-out Date</label>
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;

