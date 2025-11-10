import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HotelList from '../pages/HotelList';
import HotelDetails from '../pages/HotelDetails';
import Booking from '../pages/Booking';
import About from '../pages/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<HotelList />} />
      <Route path="/hotel-details/:id" element={<HotelDetails />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;






