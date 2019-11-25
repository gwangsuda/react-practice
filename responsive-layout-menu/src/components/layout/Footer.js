import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item footer-info">@ Copyright </div>
      <div className="footer-item-gnb">
        <Link to="/" className="footer-link">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Footer;
