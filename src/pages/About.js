import React, { useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const About = () => {
  return (
    <div class="main-wrapper">
      <Header />

      {/* breadcrumb-area start */}
      <div class="breadcrumb-area section-ptb">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 class="breadcrumb-title">About Us</h2>
              {/* breadcrumb-list start */}
              <ul class="breadcrumb-list">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item active">About Us</li>
              </ul>
              {/* breadcrumb-list end */}
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area end */}

      {/* main-content-wrap start */}
      <div class="main-content-wrap about-us-page">
        {/* about-area start */}
        <div class="about-area section-pt section-pb">
          <div class="container">
            <div class="row">
              <div class="col-xl-6">
                <div class="about-one__img about-area">
                  <div class="about-one__img1">
                    <img src="/assets/images/about-v1-img1.jpg" alt="" />
                  </div>

                  <div class="about-one__img2">
                    <img src="/assets/images/about-v1-img2.jpg" alt="" />
                  </div>
                  <span class="text_left">Welcome To Furniture</span>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="about-contents">
                  <h2 class="sec-title__title">About Awni</h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius tem incidid ut labore et dolore mag aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitati ullamco
                    laboris nisi ut aliquip ex ea commodo consequ. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepte sint occaecat
                    cupidatat non proident, sunt in culpa qui.
                  </p>

                  <ul class="about-one__content-list">
                    <li>
                      <div class="title">
                        <h3>Hardwood Floor Repair</h3>
                      </div>
                    </li>

                    <li>
                      <div class="title">
                        <h3>Custom projects with unique designs</h3>
                      </div>
                    </li>

                    <li>
                      <div class="title">
                        <h3>We bring our showroom to your home.</h3>
                      </div>
                    </li>
                  </ul>
                  <a href="" class="btn shop-btn-two">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about-area end */}

        <section class="mission-one">
          <div class="container">
            <div class="row">
              {/*Start Mission One Content*/}
              <div class="col-xl-6">
                <div class="mission-one__content">
                  <div class="mission-one__content-single">
                    <h2>Our Mission</h2>
                    <div class="text1">
                      <p>
                        There are more than 11 million young people in the uk,
                        they make up over a fifth of the population and
                        represent Britain’s future.
                      </p>
                    </div>

                    <div class="text2">
                      <p>
                        Tempor auf ullamcorper lacus vestibulum arcu. Posuere
                        lorem ipsum dolorsit consectetur adipiscing.
                        Sollicitudin tempor id eu nisl nunc ipsum. Odio tempor
                        orci dapibus ultrices. Quam viverra sagittis volutpat
                        odio facilisis.
                      </p>
                    </div>
                  </div>

                  <div class="mission-one__content-single marb-0">
                    <h2>Our Vision</h2>
                    <div class="text1">
                      <p>
                        There are more than 11 million young people in the uk,
                        they make up over a fifth of the population and
                        represent Britain’s future.
                      </p>
                    </div>

                    <div class="text2">
                      <p>
                        Tempor auf ullamcorper lacus vestibulum arcu. Posuere
                        lorem ipsum dolorsit consectetur adipiscing.
                        Sollicitudin tempor id eu nisl nunc ipsum. Odio tempor
                        orci dapibus ultrices. Quam viverra sagittis volutpat
                        odio facilisis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Mission One Content*/}

              {/*Start Mission One Img*/}
              <div class="col-xl-6">
                <div class="mission-one__img">
                  <div class="mission-one__img-img1">
                    <img src="/assets/images/mission-v1-img1.jpg" alt="" />
                  </div>

                  <div class="mission-one__img-img2 wow slideInRight animated">
                    <img src="/assets/images/mission-v1-img2.jpg" alt="" />
                  </div>
                </div>
              </div>
              {/*End Mission One Img*/}
            </div>
          </div>
        </section>

        <section class="best-logistics-one" style={{ marginTop: "0px" }}>
          <div class="shape2 zoominout">
            <img
              src="/assets/images/shapes/best-logistics-v1-shape2.png"
              alt=""
            />
          </div>
          <div class="container">
            <div class="row">
              {/*Start Best Logistics One Content*/}
              <div class="col-xl-6">
                <div class="best-logistics-one__content">
                  <div class="sec-title">
                    <h2 class="sec-title__title">
                      Expert Flooring <br />
                      Installers
                    </h2>
                    <p class="sec-title__text">
                      There are many variations of passages of Lorem Ipsum
                      available but the majority have suffered alteration{" "}
                    </p>
                  </div>

                  <ul class="best-logistics-one__content-counter">
                    <li>
                      <div class="inner">
                        <h2>+5K</h2>
                        <h3 class="best-logistics-one__content-counter-title">
                          Completed Projects
                        </h3>
                        <p class="best-logistics-one__content-counter-text">
                          5k complete work
                        </p>
                      </div>
                    </li>

                    <li>
                      <h2>30+</h2>
                      <h3 class="best-logistics-one__content-counter-title">
                        Our Expert{" "}
                      </h3>
                      <p class="best-logistics-one__content-counter-text">
                        Expert Flooring worker
                      </p>
                    </li>
                  </ul>

                  <div class="best-logistics-one__content-bottom">
                    <div class="best-logistics-one__content-bottom-text">
                      <p>We can help you stand out your business</p>
                    </div>

                    <div>
                      <a href="#" class="btn shop-btn-two">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Best Logistics One Content*/}

              {/*Start Best Logistics One Img*/}
              <div class="col-xl-6">
                <div class="best-logistics-one__img">
                  <div class="shape1 zoom-fade">
                    <img
                      src="/assets/images/best-logistics-v1-shape1.png"
                      alt=""
                    />
                  </div>

                  <div class="best-logistics-one__img-inner">
                    <img
                      src="/assets/images/best-logistics-v1-img.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/*End Best Logistics One Img*/}
            </div>
          </div>
        </section>

        <section class="VSec">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div
                  class="video-one__inner text-center"
                  style={{
                    backgroundImage:
                      "url(/assets/images/video-v1-bg.jpg); background-size: 100%",
                  }}
                >
                  <h2>
                    A Complete Solution for Your Flooring <br />
                    Vision.We have done more than 562 <br />
                    successful projects
                  </h2>
                  <p>
                    Schedule a free case evaluation. Or call us at +88 17 12
                    48101
                  </p>

                  <div class="video-one__bottom">
                    <div class="text">
                      <a href="protfolio.html">View all Project</a>
                    </div>
                    <div class="icon">
                      <a
                        href="https://www.youtube.com/watch?v=8DP4NgupAhI"
                        class="video-one__btn video-popup"
                      >
                        <i class="fa fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* testimonial-area start */}
        <div class="testimonial-area testimonial-bg overlay section-ptb">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-md-2 col-md-8 col-sm-12">
                <div class="testimonial-slider slick-initialized slick-slider">
                  <div class="slick-list draggable">
                    <div
                      class="slick-track"
                      style={{
                        opacity: 1,
                        width: "1480px",
                        transform: "translate3d(-592px, 0px, 0px)",
                        transition: "transform 500ms ease 0s",
                      }}
                    >
                      <div
                        class="testimonial-inner text-center slick-slide slick-cloned"
                        data-slick-index="-1"
                        id=""
                        aria-hidden="true"
                        style={{ width: "296px" }}
                        tabindex="-1"
                      >
                        <div class="test-cont">
                          <img src="/assets/images/icon/2.html" alt="" />
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form. There are many variations of passages.
                          </p>
                        </div>
                        <div class="test-author">
                          <h4>Michelle Mitchell</h4>
                          <p>ui ux - Designer</p>
                        </div>
                      </div>
                      <div
                        class="testimonial-inner text-center slick-slide"
                        data-slick-index="0"
                        aria-hidden="true"
                        style={{ width: "296px" }}
                        tabindex="0"
                      >
                        <div class="test-cont">
                          <img src="/assets/images/icon/2.html" alt="" />
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form. There are many variations of passages.
                          </p>
                        </div>
                        <div class="test-author">
                          <h4>Michelle Mitchell</h4>
                          <p>ui ux - Designer</p>
                        </div>
                      </div>
                      <div
                        class="testimonial-inner text-center slick-slide slick-current slick-active"
                        data-slick-index="1"
                        aria-hidden="false"
                        style={{ width: "296px" }}
                        tabindex="-1"
                      >
                        <div class="test-cont">
                          <img src="/assets/images/icon/2.html" alt="" />
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form. There are many variations of passages.
                          </p>
                        </div>
                        <div class="test-author">
                          <h4>Michelle Mitchell</h4>
                          <p>ui ux - Designer</p>
                        </div>
                      </div>
                      <div
                        class="testimonial-inner text-center slick-slide slick-cloned"
                        data-slick-index="2"
                        id=""
                        aria-hidden="true"
                        style={{ width: "296px" }}
                        tabindex="-1"
                      >
                        <div class="test-cont">
                          <img src="/assets/images/icon/2.html" alt="" />
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form. There are many variations of passages.
                          </p>
                        </div>
                        <div class="test-author">
                          <h4>Michelle Mitchell</h4>
                          <p>ui ux - Designer</p>
                        </div>
                      </div>
                      <div
                        class="testimonial-inner text-center slick-slide slick-cloned"
                        data-slick-index="3"
                        id=""
                        aria-hidden="true"
                        style={{ width: "296px" }}
                        tabindex="-1"
                      >
                        <div class="test-cont">
                          <img src="/assets/images/icon/2.html" alt="" />
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form. There are many variations of passages.
                          </p>
                        </div>
                        <div class="test-author">
                          <h4>Michelle Mitchell</h4>
                          <p>ui ux - Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial-area end */}

        {/* secton-area start */}

        {/* our-brand-area start */}
        <div class="our-brand-area section-ptb">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                {/* section-title start */}
                <div class="section-title mb-5">
                  <h2>Browse Our Categories</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                {/* section-title end */}
              </div>

              <div class="col">
                <div class="our-brand-active slick-initialized slick-slider">
                  <div class="slick-list draggable">
                    <div
                      class="slick-track"
                      style={{
                        opacity: 1,
                        width: "2072px",
                        transform: "translate3d(-444px, 0px, 0px)",
                      }}
                    >
                      <div
                        class="single-brand slick-slide slick-cloned"
                        style={{ width: "148px" }}
                        tabindex="-1"
                        data-slick-index="-2"
                        id=""
                        aria-hidden="true"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="-1">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/bath.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">Bath Accessories</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide slick-cloned"
                        style={{ width: "148px" }}
                        tabindex="-1"
                        data-slick-index="-1"
                        id=""
                        aria-hidden="true"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="-1">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/kitchen-sink.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">Kitchen Sink</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide"
                        style={{ width: "148px" }}
                        tabindex="-1"
                        data-slick-index="0"
                        aria-hidden="true"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="-1">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/tile.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">Tiles</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide slick-current slick-active"
                        style={{ width: "148px" }}
                        tabindex="0"
                        data-slick-index="1"
                        aria-hidden="false"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="0">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/toilets.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">Sanitary Ware</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide slick-active"
                        style={{ width: "148px" }}
                        tabindex="0"
                        data-slick-index="2"
                        aria-hidden="false"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="0">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/kitchen-sink.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">Kitchen Sink</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide"
                        style={{ width: "148px" }}
                        tabindex="-1"
                        data-slick-index="3"
                        aria-hidden="true"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="-1">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/tap.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">C.P. Fittings</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide"
                        style={{ width: "148px" }}
                        tabindex="-1"
                        data-slick-index="4"
                        aria-hidden="true"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="-1">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/bath.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">Bath Accessories</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide"
                        style={{ width: "148px" }}
                        tabindex="-1"
                        data-slick-index="5"
                        aria-hidden="true"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="-1">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/kitchen-sink.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">Kitchen Sink</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide slick-cloned"
                        style={{ width: "148px" }}
                        tabindex="-1"
                        data-slick-index="6"
                        id=""
                        aria-hidden="true"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="-1">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/tile.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">Tiles</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide slick-cloned"
                        style={{ width: "148px" }}
                        tabindex="-1"
                        data-slick-index="7"
                        id=""
                        aria-hidden="true"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="-1">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/toilets.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">Sanitary Ware</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide slick-cloned"
                        style={{ width: "148px" }}
                        tabindex="-1"
                        data-slick-index="8"
                        id=""
                        aria-hidden="true"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="-1">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/kitchen-sink.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">Kitchen Sink</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide slick-cloned"
                        style={{ width: "148px" }}
                        tabindex="-1"
                        data-slick-index="9"
                        id=""
                        aria-hidden="true"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="-1">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/tap.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">C.P. Fittings</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide slick-cloned"
                        style={{ width: "148px" }}
                        tabindex="-1"
                        data-slick-index="10"
                        id=""
                        aria-hidden="true"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="-1">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/bath.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">Bath Accessories</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="single-brand slick-slide slick-cloned"
                        style={{ width: "148px" }}
                        tabindex="-1"
                        data-slick-index="11"
                        id=""
                        aria-hidden="true"
                      >
                        <div class="Bproducts">
                          <a href="#" tabindex="-1">
                            <div class="media">
                              <img
                                class="mr-3"
                                src="/assets/images/kitchen-sink.png"
                                alt=""
                              />
                              <div class="media-body">
                                <h4 class="mt-0">Kitchen Sink</h4>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our-brand-area end */}
      </div>
      {/* main-content-wrap end */}

      <Footer />
    </div>
  );
};

export default About;
