import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Bhanuka Dissanayake. All rights reserved.</p>
    </footer>
  );
};

export default Footer;