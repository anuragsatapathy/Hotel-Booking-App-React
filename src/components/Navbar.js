import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotel } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaHotel size={32} color="white" />
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
          TravelStay
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hotels">Hotels</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;




