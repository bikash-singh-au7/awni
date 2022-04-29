import React, { useEffect } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import BlogPostCard from "../components/BlogPostCard";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";

const Home = () => {
  //   useEffect(() => {
  //     const script = document.createElement("script");
  //     script.src = "/assets/js/main.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }, []);

  return (
    // {/*Main Wrapper Start */}
    <div className="main-wrapper">
      {/*header-area start */}
      <Header />
      {/*header-area end */}

      {/*Hero Slider Start */}
      <div className="hero-slider hero-slider-one">
        {/*Single Slide Start */}
        <div
          className="single-slide"
          style={{
            backgroundImage: "url(/assets/images/slider/slider-bg-2.jpg)",
          }}
        >
          {/*Hero Content One Start */}
          <div className="hero-content-one container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="slider-text-info pt-0">
                  <h3 className="">Top Selling!</h3>
                  <h1>New Collection</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link to="shop.html" className="btn slider-btn uppercase">
                    <span>SHOP NOW</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*Hero Content One End */}
        </div>
        {/*Single Slide End */}

        {/*Single Slide Start */}
        <div
          className="single-slide"
          style={{
            backgroundImage: "url(/assets/images/slider/slider-bg-3.jpg)",
          }}
        >
          {/*Hero Content One Start */}
          <div className="hero-content-one container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="slider-text-info">
                  <h3 className="">Top Selling!</h3>
                  <h1>New Collection</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link to="shop.html" className="btn slider-btn uppercase">
                    <span>SHOP NOW</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider-inner-image">
                  <img src="/assets/images/slider/slier-inner-2.html" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/*Hero Content One End */}
        </div>
        {/*Single Slide End */}
      </div>
      {/*Hero Section End */}

      {/*banner-area start */}
      <div className="banner-area mt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/*single-banner start */}
              <div className="single-banner">
                <div className="banner-bg">
                  <Link to="shop.html">
                    <img src="/assets/images/banner/1.jpg" alt="" />
                  </Link>
                </div>
                <div className="banner-contet">
                  <p>30% Off</p>
                  <h3> Sanitaryware Collection </h3>
                  <Link to="#" className="btn-3">
                    SHOP NOW
                  </Link>
                </div>
              </div>
              {/*single-banner end */}
            </div>
            <div className="col-lg-4  col-md-6">
              {/*single-banner start */}
              <div className="single-banner s-mt-30">
                <div className="banner-bg">
                  <Link to="shop.html">
                    <img src="/assets/images/banner/2.jpg" alt="" />
                  </Link>
                </div>
                <div className="banner-contet">
                  <p>30% Off</p>
                  <h3> Saunas Collection </h3>
                  <Link to="#" className="btn-3">
                    SHOP NOW
                  </Link>
                </div>
              </div>
              {/*single-banner end */}
            </div>

            <div className="col-lg-4  col-md-6">
              {/*single-banner start */}
              <div className="single-banner s-mt-30">
                <div className="banner-bg">
                  <Link to="shop.html">
                    <img src="/assets/images/banner/3.jpg" alt="" />
                  </Link>
                </div>
                <div className="banner-contet">
                  <p>30% Off</p>
                  <h3> Bath Tubs Collection </h3>
                  <Link to="#" className="btn-3">
                    SHOP NOW
                  </Link>
                </div>
              </div>
              {/*single-banner end */}
            </div>
          </div>
        </div>
      </div>
      {/*banner-area end */}

      <section className="service-section service-style-2">
        <div className="container">
          <div className="row g-4 g-sm-3">
            <div className="col-xl-3 col-sm-6">
              <div className="service-wrap">
                <div className="service-icon">
                  <img src="/assets/images/customer.png" alt="" />
                </div>
                <div className="service-content">
                  <h3 className="mb-2">Customer Servcies</h3>
                  <span className="font-light">
                    Top notch customer service.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="service-wrap">
                <div className="service-icon">
                  <img src="/assets/images/shippe.png" />
                </div>
                <div className="service-content">
                  <h3 className="mb-2">Pickup At Any Store</h3>
                  <span className="font-light">
                    Free shipping on orders over $65.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="service-wrap">
                <div className="service-icon">
                  <img
                    src="/assets/images/credit-card.png"
                    alt=""
                    style={{ width: "18%", marginBottom: "11px" }}
                  />
                </div>
                <div className="service-content">
                  <h3 className="mb-2">Secured Payment</h3>
                  <span className="font-light">
                    We accept all major credit cards.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="service-wrap">
                <div className="service-icon">
                  <img src="/assets/images/easy-returns.png" alt="" />
                </div>
                <div className="service-content">
                  <h3 className="mb-2">Free Returns</h3>
                  <span className="font-light">
                    30-days free return policy.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*product-area start */}
      <div className="product-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*section-title start */}
              <div className="section-title">
                <h2>Tiles </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
              {/*section-title end */}
            </div>
          </div>

          {/*product-warpper start */}
          <div className="product-warpper">
            <div className="row">
              {/* Product Card Components */}
              <ProductCard image={"/assets/images/product/t1.jpg"} />
              <ProductCard image={"/assets/images/product/t2.jpg"} />
              <ProductCard image={"/assets/images/product/t3.jpg"} />
              <ProductCard image={"/assets/images/product/t4.jpg"} />

              <div className="about-contents text-center mt-5">
                <Link to="" className="btn shop-btn-two">
                  SHOW ALL
                </Link>
              </div>
            </div>
          </div>
          {/*product-warpper start */}
        </div>
      </div>
      {/*product-area end */}

      {/*product-area start */}
      <div
        className="product-area section-ptb"
        style={{ background: "#f9f9f9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*section-title start */}
              <div className="section-title">
                <h2> Sanitaryware </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
              {/*section-title end */}
            </div>
          </div>

          {/*product-warpper start */}
          <div className="product-warpper">
            <div className="row">
              <ProductCard image={"/assets/images/product/13.jpg"} />
              <ProductCard image={"/assets/images/product/14.jpg"} />
              <ProductCard image={"/assets/images/product/15.jpg"} />
              <ProductCard image={"/assets/images/product/16.jpg"} />

              <div className="about-contents text-center mt-5">
                <Link to="" className="btn shop-btn-two">
                  SHOW ALL
                </Link>
              </div>
            </div>
          </div>
          {/*product-warpper start */}
        </div>
      </div>
      {/*product-area end */}

      {/*product-area start */}
      <div className="product-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*section-title start */}
              <div className="section-title">
                <h2>Kitchen Sink</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
              {/*section-title end */}
            </div>
          </div>
          {/*product-warpper start */}
          <div className="product-warpper">
            <div className="row">
              <ProductCard image={"/assets/images/product/k1.jpg"} />
              <ProductCard image={"/assets/images/product/k2.jpg"} />
              <ProductCard image={"/assets/images/product/k3.jpg"} />
              <ProductCard image={"/assets/images/product/k4.jpg"} />

              <div className="about-contents text-center mt-5">
                <Link to="" className="btn shop-btn-two">
                  SHOW ALL
                </Link>
              </div>
            </div>
          </div>
          {/*product-warpper start */}
        </div>
      </div>
      {/*product-area end */}

      {/*add product section */}

      {/*lg-banner-bg start */}
      <div className="lg-banner-area lg-banner-bg section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-10">
              <div className="lg-banner-info">
                <h2>Contrary to popular belief is not simply rand.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                  <br /> sed do eiusmod tempor incid
                </p>
                <Link to="#" className="btn more-product-btn">
                  MORE PRODUCTS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*lg-banner-bg end */}

      {/*product-area start */}
      <div
        className="product-area section-ptb"
        style={{ background: "#f9f9f9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*section-title start */}
              <div className="section-title">
                <h2> C.P. Fittings / Faucets </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
              {/*section-title end */}
            </div>
          </div>

          {/*product-warpper start */}
          <div className="product-warpper">
            <div className="row">
              <ProductCard image={"/assets/images/product/cp1.jpg"} />
              <ProductCard image={"/assets/images/product/cp2.jpg"} />
              <ProductCard image={"/assets/images/product/cp3.jpg"} />
              <ProductCard image={"/assets/images/product/cp4.jpg"} />
              <div className="about-contents text-center mt-5">
                <Link to="" className="btn shop-btn-two">
                  SHOW ALL
                </Link>
              </div>
            </div>
          </div>
          {/*product-warpper start */}
        </div>
      </div>
      {/*product-area end */}

      {/*product-area start */}
      <div className="product-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*section-title start */}
              <div className="section-title">
                <h2>Bath Accessories</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
              {/*section-title end */}
            </div>
          </div>

          {/*product-warpper start */}
          <div className="product-warpper">
            <div className="product-slider row">
              <div className="col">
                {/*single-product-wrap start */}
                <div className="single-product-wrap">
                  <div className="product-image">
                    <Link to="product-details.html">
                      <img src="/assets/images/product/9.jpg" alt="" />
                    </Link>
                    <div className="product-action">
                      <Link to="#" className="wishlist">
                        <i className="icon-heart"></i>
                      </Link>
                      <Link to="#" className="add-to-cart">
                        <i className="icon-handbag"></i>
                      </Link>
                      <Link
                        to="#"
                        className="quick-view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                      >
                        <i className="icon-shuffle"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <Link to="product-details.html">Products Name 009</Link>
                    </h3>
                    <div className="price-box">
                      <span className="old-price">150.00</span>
                      <span className="new-price">125.00</span>
                    </div>
                  </div>
                </div>
                {/*single-product-wrap end */}
              </div>
              <div className="col">
                {/*single-product-wrap start */}
                <div className="single-product-wrap">
                  <div className="product-image">
                    <Link to="product-details.html">
                      <img src="/assets/images/product/10.jpg" alt="" />
                    </Link>
                    <div className="product-action">
                      <Link to="#" className="wishlist">
                        <i className="icon-heart"></i>
                      </Link>
                      <Link to="#" className="add-to-cart">
                        <i className="icon-handbag"></i>
                      </Link>
                      <Link
                        to="#"
                        className="quick-view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                      >
                        <i className="icon-shuffle"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <Link to="product-details.html">Products Name 003</Link>
                    </h3>
                    <div className="price-box">
                      <span className="old-price">144.00</span>
                      <span className="new-price">124.00</span>
                    </div>
                  </div>
                </div>
                {/*single-product-wrap end */}
              </div>
              <div className="col">
                {/*single-product-wrap start */}
                <div className="single-product-wrap">
                  <div className="product-image">
                    <Link to="product-details.html">
                      <img src="/assets/images/product/11.jpg" alt="" />
                    </Link>
                    <div className="product-action">
                      <Link to="#" className="wishlist">
                        <i className="icon-heart"></i>
                      </Link>
                      <Link to="#" className="add-to-cart">
                        <i className="icon-handbag"></i>
                      </Link>
                      <Link
                        to="#"
                        className="quick-view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                      >
                        <i className="icon-shuffle"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <Link to="product-details.html">Products Name 005</Link>
                    </h3>
                    <div className="price-box">
                      <span className="old-price">130.00</span>
                      <span className="new-price">120.00</span>
                    </div>
                  </div>
                </div>
                {/*single-product-wrap end */}
              </div>
              <div className="col">
                {/*single-product-wrap start */}
                <div className="single-product-wrap">
                  <div className="product-image">
                    <Link to="product-details.html">
                      <img src="/assets/images/product/12.jpg" alt="" />{" "}
                    </Link>
                    <div className="product-action">
                      <Link to="#" className="wishlist">
                        <i className="icon-heart"></i>
                      </Link>
                      <Link to="#" className="add-to-cart">
                        <i className="icon-handbag"></i>
                      </Link>
                      <Link
                        to="#"
                        className="quick-view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                      >
                        <i className="icon-shuffle"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <Link to="product-details.html">Products Name 012</Link>
                    </h3>
                    <div className="price-box">
                      <span className="new-price">120.00</span>
                    </div>
                  </div>
                </div>
                {/*single-product-wrap end */}
              </div>
              <div className="col">
                {/*single-product-wrap start */}
                <div className="single-product-wrap">
                  <div className="product-image">
                    <Link to="product-details.html">
                      <img src="/assets/images/product/3.jpg" alt="" />
                    </Link>
                    <div className="product-action">
                      <Link to="#" className="wishlist">
                        <i className="icon-heart"></i>
                      </Link>
                      <Link to="#" className="add-to-cart">
                        <i className="icon-handbag"></i>
                      </Link>
                      <Link
                        to="#"
                        className="quick-view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                      >
                        <i className="icon-shuffle"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <Link to="product-details.html">Products Name 001</Link>
                    </h3>
                    <div className="price-box">
                      <span className="old-price">140.00</span>
                      <span className="new-price">120.00</span>
                    </div>
                  </div>
                </div>
                {/*single-product-wrap end */}
              </div>
              <div className="col">
                {/*single-product-wrap start */}
                <div className="single-product-wrap">
                  <div className="product-image">
                    <Link to="product-details.html">
                      <img src="/assets/images/product/7.jpg" alt="" />
                    </Link>
                    <div className="product-action">
                      <Link to="#" className="wishlist">
                        <i className="icon-heart"></i>
                      </Link>
                      <Link to="#" className="add-to-cart">
                        <i className="icon-handbag"></i>
                      </Link>
                      <Link
                        to="#"
                        className="quick-view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                      >
                        <i className="icon-shuffle"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <Link to="product-details.html">Products Name 001</Link>
                    </h3>
                    <div className="price-box">
                      <span className="old-price">140.00</span>
                      <span className="new-price">120.00</span>
                    </div>
                  </div>
                </div>
                {/*single-product-wrap end */}
              </div>
            </div>
          </div>
          {/*product-warpper start */}
        </div>
      </div>
      {/*product-area end */}

      <section className="section-ptb" style={{ background: "#f9f9f9" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>From Our Blog</h2>
              </div>
            </div>
            {/* Blog Post Card Component */}
            <BlogPostCard image={"/assets/images/blog/1.jpg"} />
            <BlogPostCard image={"/assets/images/blog/2.jpg"} />
            <BlogPostCard image={"/assets/images/blog/3.jpg"} />
          </div>
        </div>
      </section>

      {/*testimonial-area start */}

      {/*our-brand-area start */}
      <div className="our-brand-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*section-title start */}
              <div className="section-title mb-5">
                <h2>Browse Our Categories</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
              {/*section-title end */}
            </div>

            <div className="col">
              <div className="our-brand-active">
                <CategoryCard image={"/assets/images/tile.png"} />
                <CategoryCard image={"/assets/images/kitchen-sink.png"} />
                <CategoryCard image={"/assets/images/tap.png"} />
                <CategoryCard image={"/assets/images/bath.png"} />
                <CategoryCard image={"/assets/images/bath.png"} />
                <CategoryCard image={"/assets/images/bath.png"} />
                <CategoryCard image={"/assets/images/kitchen-sink.png"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*our-brand-area end */}

      {/*footer-area start */}
      <Footer />
      {/*footer-area end */}

      {/*Modal-wrapper end */}
    </div>
  );
};

export default Home;
