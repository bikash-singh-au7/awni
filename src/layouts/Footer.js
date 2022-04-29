import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-top pt--40 pb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="footer-info mt--60">
                <div className="footer-title">
                  <h3>Address</h3>
                </div>
                <ul className="footer-info-list">
                  <li>
                    <i className="ion-ios-location-outline"></i> 184 Main Rd E,
                    Slorem ipsum 3021, Australia
                  </li>
                  <li>
                    <i className="ion-ios-email-outline"></i> Mill Us :{" "}
                    <Link to="#">yourmail@gmail.com</Link>
                  </li>
                  <li>
                    <i className="ion-ios-telephone-outline"></i> Phone: + 00
                    254 254565 54
                  </li>
                </ul>
                <div className="payment-cart">
                  <img src="assets/images/icon/1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="footer-info mt--60">
                <div className="footer-title">
                  <h3>Categories</h3>
                </div>
                <ul className="footer-list">
                  <li>
                    <Link to="#">Tiles</Link>
                  </li>
                  <li>
                    <Link to="#">Sanitary Ware</Link>
                  </li>
                  <li>
                    <Link to="#">Kitchen Sink</Link>
                  </li>
                  <li>
                    <Link to="#">C.P. Fittings /Faucets</Link>
                  </li>
                  <li>
                    <Link to="#">Bath Accessories</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-4">
              <div className="footer-info mt--60">
                <div className="footer-title">
                  <h3>Information</h3>
                </div>
                <ul className="footer-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/career">Career</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="#">Returns & Exchanges</Link>
                  </li>
                  <li>
                    <Link to="#">Shipping & Delivery</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-4">
              <div className="footer-info mt--60">
                <div className="footer-title">
                  <h3>Quick Links</h3>
                </div>
                <ul className="footer-list">
                  <li>
                    <Link to="#">Store Location</Link>
                  </li>
                  <li>
                    <Link to="#">My Account</Link>
                  </li>
                  <li>
                    <Link to="#">Orders Tracking</Link>
                  </li>
                  <li>
                    <Link to="#">Size Guide</Link>
                  </li>
                  <li>
                    <Link to="#">Shopping Rates</Link>
                  </li>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  col-md-6">
              <div className="copyright">
                <p>Copyright ©All Right Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="footer-social">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="ion-social-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="ion-social-tumblr"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="ion-social-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="ion-social-instagram-outline"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
