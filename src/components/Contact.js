import React from 'react';
import './Contact.css';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaHashtag,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaBriefcase,
  FaUserTie
} from 'react-icons/fa';

const Contact = () => {
  const handleClick = (type) => {
    alert(`You clicked on ${type}`);
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Contact Us</h1>

        <div className="contact-info">
          <i><FaPhone /></i>
          <div>
            <div>7975615933</div>
            <div>6131210163</div>
          </div>
        </div>

        <div className="contact-info">
          <i><FaEnvelope /></i>
          <div>team53@gmail.com</div>
        </div>

        <div className="contact-info">
          <i><FaMapMarkerAlt /></i>
          <div>
            <b>Regd Office:</b>Shanthala Nagar, Bangalore 560001, KA
          </div>
        </div>

        <div className="contact-info">
          <i><FaBuilding /></i>
          <div>
            <b>Branch Office:</b>Velachery Main Road, Guindy, Chennai - 600032, TN
          </div>
        </div>

        <div className="contact-info">
          <i><FaHashtag /></i>
          <div><b>GST No:</b> 33AAKCG2040D1Z7</div>
        </div>

        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="contact-right">
        <h2>Grow Your Business With Our Expertise</h2>
        <button className="contact-btn" onClick={() => handleClick('Business')}>
          <FaBriefcase /> Business
        </button>
        <button className="contact-btn" onClick={() => handleClick('Career')}>
          <FaUserTie /> Career
        </button>
      </div>
    </div>
  );
};

export default Contact;
