import React from 'react';
import './footer.css';  // External CSS file for styling
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosRestaurant } from 'react-icons/io';
import { MdShare } from 'react-icons/md';

const Footer = () => {

  return (<>
  
  <footer className={`footer-container bg-footer`}>
      <div className="footer-grid">
        
        <div className="footer-column f-col-1">
            <div id='footer-logo'>
    <div href="/" className='logo'>
    <div>
    <IoIosRestaurant className='logo-img'/>
    <a href={`https://wa.me/?text=${window.location}`}><MdShare size="32px"/></a>
      <h2 className='h3'>Restaurant</h2>
      </div>
    </div>
            </div>
          <p>Welcome to Restaurant! We specialize in authentic cuisine, served with love. Join us for delicious meals and special event celebrations.</p>
       </div>

        <div className="footer-column f-col-2">
          <ul>
            <li><h4>Quick Links</h4></li>
            <li><a href="#events">Cart</a></li>
            <li><a href="#contact">Bookings</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#reservations">Food order</a></li>
            <li><a href="#reservations">Reservations</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info & Social Media */}
        <div className="footer-column col-right">
          <h4>Contact Us</h4>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Email:</strong> info@restaurantname.com</p>
          <p><strong>Address:</strong> 1234, Food Street, New Delhi, India</p>
          
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com"><AiFillFacebook size="32px"/></a>
            <a href="https://twitter.com"><FaXTwitter size="32px"/></a>
            <a href="https://instagram.com"><FaInstagram size="32px"/></a>
          </div>
        </div>
        
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Restaurant All rights reserved.</p> <p><a href="/terms">Terms & Conditions</a> / <a href="/privacy">Privacy Policy</a></p>
        
      </div>
    </footer>
    </>
  );
}

export default Footer;
