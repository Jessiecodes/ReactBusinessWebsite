import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
     
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to="/">Gallery </Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2> Social Media </h2>
              <a href="https://www.instagram.com/servzing/" target="_blank"> Instagram</a>
              <a href="https://www.facebook.com/lifefordean" target="_blank">Facebook</a>
              <a href="https://www.linkedin.com/in/dean-martin-9a401338/" target="_blank">LinkedIn</a>
              <a href="https://twitter.com/SouthernSecuri3" target="_blank">Twitter</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              SERVZING
            </Link>
          </div>
          <small className='website-rights'>SERVZING © 2020</small>
          <div className='social-icons'>
          <a href="https://www.facebook.com/lifefordean" target="_blank">
              <FaFacebook />
           </a>
           <a href="https://www.instagram.com/servzing/" target="_blank"> 
              <FaInstagram />
           </a>
           <a href="https://twitter.com/SouthernSecuri3" target="_blank">
              <FaTwitter />
           </a>
           <a href="https://www.linkedin.com/in/dean-martin-9a401338/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;