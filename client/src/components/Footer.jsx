import React from 'react';
import { FaPaperPlane, FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-sec">
      <div className="footer">
        <div className="container">
          <div className="row main-fftp">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="single_footer">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Travel Planning</a></li>
                  <li><a href="#">Flight Booking</a></li>
                  <li><a href="#">Hotel Reservations</a></li>
                  <li><a href="#">Tour Packages</a></li>
                  <li><a href="#">Travel Insurance</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">Destinations</a></li>
                  <li><a href="#">Travel Tips</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">FAQs</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Subscribe to Our Newsletter</h4>
                <div className="signup_form">
                  <form action="#" className="subscribe">
                    <input type="text" className="subscribe__input" placeholder="Enter Email Address" />
                    <button type="button" className="subscribe__btn"><FaPaperPlane /></button>
                  </form>
                </div>
              </div>
              <div className="social_profile">
                <ul>
                  <li><a href="#"><FaFacebookF /></a></li>
                  <li><a href="#"><FaTwitter /></a></li>
                  <li><a href="#"><FaGooglePlusG /></a></li>
                  <li><a href="#"><FaInstagram /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p className="copyright">Copyright © 2024 <a href="#">Mr Pilgrim</a>. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
