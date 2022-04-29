import React, { useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="main-wrapper">
      <Header />
      {/* main-search start */}
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
      {/* main-search start */}

      {/* breadcrumb-area start */}
      <div className="breadcrumb-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="breadcrumb-title">Contact US</h2>
              {/* breadcrumb-list start */}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Contact US</li>
              </ul>
              {/* breadcrumb-list end */}
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area end */}

      {/* main-content-wrap start */}
      <div className="main-content-wrap section-ptb contact-us-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-info-wrapper">
                <h2>Get in Touch</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum earum eveniet dolorum suscipit nesciunt incidunt animi
                  repudiandae ab at, tenetur distinctio voluptate vel illo
                  similique.
                </p>
                <ul className="contact-info-list">
                  <li>
                    <div className="icon rotate">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>

                    <div className="text">
                      <span>Address</span>
                      <p>
                        Nice House, 2/21 City Road
                        <br /> Hoxton, N1 6NG, CA
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon rotate">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                      <span>Phone</span>
                      <p className="telephone">
                        {" "}
                        <a href="tel:123456789">+8801682648101</a>
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="icon rotate">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                      <span>E-mail</span>
                      <p className="telephone">
                        {" "}
                        <a href="mailto: yoursite@demo.com">
                          {" "}
                          yoursite@demo.com
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-warp">
                <div className="title">
                  <h2>Send a message</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    <br /> Ut blandit arcu in pretium.
                  </p>
                </div>
                <form
                  id="contact-form"
                  action="https://template.hasthemes.com/fusta/fusta/mail.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-lg-10">
                      <input type="text" name="name" placeholder="Your Name*" />
                    </div>
                    <div className="col-lg-10">
                      <input
                        type="email"
                        name="email"
                        placeholder="Mail Address*"
                      />
                    </div>
                    <div className="col-lg-10">
                      <textarea
                        name="message"
                        placeholder="Your Massage*"
                      ></textarea>
                    </div>
                  </div>
                  <div className="contact-submit-btn">
                    <button type="submit" className="submit-btn">
                      Send Email
                    </button>
                    <p className="form-messege"></p>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-12">
              <div className="MapBox">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15243983.007440727!2d81.914063!3d21.125498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1648564874034!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main-content-wrap end */}
      <Footer />
    </div>
  );
};

export default Contact;
