import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">PERFUME ALCHEMY</a>
      <nav className="navbar">
        <a href="#" className="active">Home</a>
        <a href="#">New-Arrivals</a>
        <a href="#">Best Seller</a>
        <a href="#">Profile</a>
        <a href="#">Wishlist</a>
        <a href="#">Bag</a>
      </nav>
    </header>
  );
}

export default Header;