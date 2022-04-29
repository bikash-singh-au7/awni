import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import ScriptTag from "react-script-tag";

// Create the function
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = false;
  document.body.appendChild(script);
}

const Header = () => {
  return (
    <>
      <div className="header-area">
        {/*header-top start */}
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <marquee
                  width="100%"
                  direction="left"
                  style={{ lineHeight: "42px", color: "#fff" }}
                >
                  This is a sample scrolling text that has scrolls texts to
                  right 20% discount.
                </marquee>
              </div>
              <div className="col-lg-6 col-md-6">
                {/*language-currency-wrapper start */}
                <div className="language-currency-wrapper">
                  <ul>
                    <li className="drodown-show">
                      <Link to="mailto:info@gmail.com">
                        <i className="fa fa-envelope mr-2"></i>info@gmail.com
                      </Link>
                    </li>
                    <li className="drodown-show">
                      <Link to="#">
                        <i className="fa fa-phone"></i>+91 9830 2547 89
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*language-currency-wrapper end */}
              </div>
            </div>
          </div>
        </div>
        {/*header-top end */}
        <div className="header-bottom-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 d-none d-lg-block">
                <div className="main-menu-area text-center">
                  <nav className="main-navigation">
                    <ul>
                      <li className="active">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="#">Tiles</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="#">Wall Tiles</Link>
                          </li>
                          <li>
                            <Link to="#">SFloor Tiles</Link>
                          </li>
                          <li>
                            <Link to="#">Step & Riser</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="#">Sanitary Ware</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="#">Water Closet</Link>
                          </li>
                          <li>
                            <Link to="#">One Pc Water Closet /Omni Suits</Link>
                          </li>
                          <li>
                            <Link to="#">Wash Basins</Link>
                          </li>
                          <li>
                            <Link to="#">Urinal</Link>
                          </li>
                          <li>
                            <Link to="#">Flush Tank (Cistern)</Link>
                          </li>
                          <li>
                            <Link to="#">Seat Covers</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="#">Kitchen Sink</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="#">Ceramic / Lab Sink</Link>
                          </li>
                          <li>
                            <Link to="#">Quartz</Link>
                          </li>
                          <li>
                            <Link to="#">Steel (202/304/316)</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="#">C.P. Fittings /Faucets</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="#">Shower Area (Bathroom)</Link>
                          </li>
                          <li>
                            <Link to="#">Wash Area (Wash Basin/Kitchen)</Link>
                          </li>
                          <li>
                            <Link to="#">W.C Area (Toilet)</Link>
                          </li>
                          <li>
                            <Link to="#">Utility</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="#">Bath Accessories</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="#">Shower Area (Bathroom)</Link>
                          </li>
                          <li>
                            <Link to="#">Wash Area(Wash Basin)</Link>
                          </li>
                          <li>
                            <Link to="#">W.C.Area (Toilet)</Link>
                          </li>
                        </ul>
                      </li>

                      {/* <li><Link to="#">Blog</Link></li> */}

                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-1 col-md-1">
                <div className="right-blok-box d-flex">
                  {/*  <div className="search-wrap">
                                <Link to="#" className="trigger-search"><i className="icon-magnifier"></i></Link>
                            </div> */}

                  {/*  <div className="user-wrap">
                                <Link to="login-register.html"><i className="icon-user"></i></Link>
                            </div> */}

                  <div className="shopping-cart-wrap">
                    <Link to="#">
                      <i className="icon-handbag"></i>{" "}
                      <span id="cart-total">2</span>
                    </Link>
                    <ul className="mini-cart">
                      <li className="cart-item">
                        <div className="cart-image">
                          <Link to="single-product.html">
                            <img alt="" src="/assets/images/product/1.jpg" />
                          </Link>
                        </div>
                        <div className="cart-title">
                          <Link to="single-product.html">
                            <h4>Product Name 01</h4>
                          </Link>
                          <span className="quantity">1 ×</span>
                          <div className="price-box">
                            <span className="new-price">$130.00</span>
                          </div>
                          <Link className="remove_from_cart" to="#">
                            <i className="icon-trash icons"></i>
                          </Link>
                        </div>
                      </li>
                      <li className="cart-item">
                        <div className="cart-image">
                          <Link to="single-product.html">
                            <img alt="" src="/assets/images/product/3.html" />
                          </Link>
                        </div>
                        <div className="cart-title">
                          <Link to="single-product.html">
                            <h4>Product Name 03</h4>
                          </Link>
                          <span className="quantity">1 ×</span>
                          <div className="price-box">
                            <span className="new-price">$130.00</span>
                          </div>
                          <Link className="remove_from_cart" to="#">
                            <i className="icon-trash icons"></i>
                          </Link>
                        </div>
                      </li>
                      <li className="subtotal-titles">
                        <div className="subtotal-titles">
                          <h3>Sub-Total :</h3>
                          <span>$ 230.99</span>
                        </div>
                      </li>
                      <li className="mini-cart-btns">
                        <div className="cart-btns">
                          <Link to="cart.html">View cart</Link>
                          <Link to="checkout.html">Checkout</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2">
                <div className="logo">
                  <Link to="/">
                    <img src="/assets/images/logo/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="mobile-menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*main-search start */}
      <div className="main-search-active">
        <div className="sidebar-search-icon">
          <button className="search-close">
            <span className="icon-close"></span>
          </button>
        </div>
        <div className="sidebar-search-input">
          <form>
            <div className="form-search">
              <input
                id="search"
                className="input-text"
                value=""
                onChange={() => {}}
                placeholder="Search entire store here ..."
                type="search"
              />
              <button className="search-btn" type="button">
                <i className="icon-magnifier"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/*main-search start */}
      {AddLibrary("/assets/js/vendor/jquery-3.5.1.min.js")}
      {AddLibrary("/assets/js/vendor/jquery-migrate-3.3.0.min.js")}
      {AddLibrary("/assets/js/popper.min.js")}
      {AddLibrary("/assets/js/bootstrap.min.js")}
      {AddLibrary("/assets/js/plugins.js")}
      {AddLibrary("/assets/js/ajax-mail.js")}
      {AddLibrary("/assets/js/main.js")}
    </>
  );
};

export default Header;
