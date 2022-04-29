import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const ProductDetails = () => {
  return (
    <div className="main-wrapper">
      <Header />
      {/* breadcrumb-area start */}
      <div class="breadcrumb-area section-ptb">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 class="breadcrumb-title">Product Details</h2>
              {/* breadcrumb-list start */}
              <ul class="breadcrumb-list">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item active">Product Details</li>
              </ul>
              {/* breadcrumb-list end */}
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area end */}

      {/* main-content-wrap start */}
      <div class="main-content-wrap section-ptb product-details-page">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-7 col-md-6">
              <div class="product-details-images">
                <div class="product_details_container">
                  {/* product_big_images start */}
                  <div class="product_big_images-right">
                    <div class="portfolio-full-image tab-content">
                      <div
                        role="tabpanel"
                        class="tab-pane active product-image-position"
                        id="img-tab-5"
                      >
                        <a
                          href="assets/images/product-details/big-img/h1.jpg"
                          class="img-poppu"
                        >
                          <img
                            src="assets/images/product-details/big-img/h1.jpg"
                            alt="#"
                            alt=""
                          />
                        </a>
                      </div>
                      <div
                        role="tabpanel"
                        class="tab-pane product-image-position"
                        id="img-tab-6"
                      >
                        <a
                          href="assets/images/product-details/big-img/h2.jpg"
                          class="img-poppu"
                        >
                          <img
                            src="assets/images/product-details/big-img/h2.jpg"
                            alt="#"
                          />
                        </a>
                      </div>
                      <div
                        role="tabpanel"
                        class="tab-pane product-image-position"
                        id="img-tab-7"
                      >
                        <a
                          href="assets/images/product-details/big-img/h3.jpg"
                          class="img-poppu"
                        >
                          <img
                            src="assets/images/product-details/big-img/h3.jpg"
                            alt="#"
                          />
                        </a>
                      </div>
                      <div
                        role="tabpanel"
                        class="tab-pane product-image-position"
                        id="img-tab-8"
                      >
                        <a
                          href="assets/images/product-details/big-img/h4.jpg"
                          class="img-poppu"
                        >
                          <img
                            src="assets/images/product-details/big-img/h4.jpg"
                            alt="#"
                          />
                        </a>
                      </div>
                      <div
                        role="tabpanel"
                        class="tab-pane product-image-position"
                        id="img-tab-9"
                      >
                        <a
                          href="assets/images/product-details/big-img/h3.jpg"
                          class="img-poppu"
                        >
                          <img
                            src="assets/images/product-details/big-img/h3.jpg"
                            alt="#"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* product_big_images end */}

                  {/* Start Small images */}
                  <ul
                    class="product_small_images-left vartical-product-active nav"
                    role="tablist"
                  >
                    <li role="presentation" class="pot-small-img active">
                      <a href="#img-tab-5" role="tab" data-bs-toggle="tab">
                        <img
                          src="assets/images/product-details/small-img/1.jpg"
                          alt="#"
                        />
                      </a>
                    </li>
                    <li role="presentation" class="pot-small-img">
                      <a href="#img-tab-6" role="tab" data-bs-toggle="tab">
                        <img
                          src="assets/images/product-details/small-img/2.jpg"
                          alt="#"
                        />
                      </a>
                    </li>
                    <li role="presentation" class="pot-small-img">
                      <a href="#img-tab-7" role="tab" data-bs-toggle="tab">
                        <img
                          src="assets/images/product-details/small-img/3.jpg"
                          alt="#"
                        />
                      </a>
                    </li>
                    <li role="presentation" class="pot-small-img">
                      <a href="#img-tab-8" role="tab" data-bs-toggle="tab">
                        <img
                          src="assets/images/product-details/small-img/4.jpg"
                          alt="#"
                        />
                      </a>
                    </li>
                    <li role="presentation" class="pot-small-img">
                      <a href="#img-tab-9" role="tab" data-bs-toggle="tab">
                        <img
                          src="assets/images/product-details/small-img/2.jpg"
                          alt="#"
                        />
                      </a>
                    </li>
                  </ul>
                  {/* End Small images */}
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-5 col-md-6">
              {/* product_details_info start */}
              <div class="product_details_info">
                <h2>Modern Bath Set</h2>
                {/* pro_rating start */}
                <div class="pro_rating d-flex">
                  <ul class="product-rating d-flex">
                    <li>
                      <span class="icon-star"></span>
                    </li>
                    <li>
                      <span class="icon-star"></span>
                    </li>
                    <li>
                      <span class="icon-star"></span>
                    </li>
                    <li>
                      <span class="icon-star"></span>
                    </li>
                    <li>
                      <span class="icon-star"></span>
                    </li>
                  </ul>
                  <span class="rat_qun"> (Based on 0 Ratings) </span>
                </div>
                {/* pro_rating end */}
                {/* pro_details start */}
                <div class="pro_details">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                    do eiusmod temf incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, nostr exercitation ullamco laboris
                    nisi ut aliquip ex ea.{" "}
                  </p>
                </div>
                {/* pro_details end */}
                {/* pro_dtl_prize start */}
                <ul class="pro_dtl_prize">
                  <li class="old_prize">$15.21</li>
                  <li> $10.00</li>
                </ul>
                {/* pro_dtl_prize end */}
                {/* pro_dtl_color start*/}
                <div class="pro_dtl_color">
                  <h2 class="title_2">Choose Colour</h2>
                  <ul class="pro_choose_color">
                    <li class="red">
                      <a href="#">
                        <i class="ion-record"></i>
                      </a>
                    </li>
                    <li class="blue">
                      <a href="#">
                        <i class="ion-record"></i>
                      </a>
                    </li>
                    <li class="perpal">
                      <a href="#">
                        <i class="ion-record"></i>
                      </a>
                    </li>
                    <li class="yellow">
                      <a href="#">
                        <i class="ion-record"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* pro_dtl_color end*/}
                {/* pro_dtl_size start */}
                <div class="pro_dtl_size">
                  <p class="title_2">
                    <b>Range </b> <span> Laguna Sanitaryware</span>
                  </p>
                  <p class="title_2">
                    <b>Code </b> <span> LAS-WHT-91153</span>
                  </p>
                  <p class="title_2">
                    <b>Size</b> <span>370x525x280 mm</span>
                  </p>
                  <p class="title_2">
                    <b>Weight</b> <span>5K</span>
                  </p>
                  {/*      <ul class="pro_choose_size">
                                <li><a href="#"></a></li>
                            </ul> */}
                </div>
                {/* pro_dtl_size end */}
                {/* product-quantity-action start */}
                <div class="product-quantity-action">
                  <div class="prodict-statas">
                    <span>Quantity :</span>
                  </div>
                  <div class="product-quantity">
                    <form action="#">
                      <div class="product-quantity">
                        <div class="cart-plus-minus">
                          <input value="1" type="number" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* product-quantity-action end */}
                {/* pro_dtl_btn start */}
                <ul class="pro_dtl_btn">
                  <li>
                    <div class="first">
                      <a
                        href="#"
                        class="click buy_now_btn"
                        onclick="smoothScroll(document.getElementById('second'))"
                        style={{ background: "#e97730", color: "#fff" }}
                      >
                        enquire now
                      </a>
                    </div>
                  </li>

                  <li>
                    <a href="#" class="buy_now_btn">
                      {" "}
                      <i
                        class="fa fa-file-pdf-o"
                        style={{ marginRight: "8px" }}
                      ></i>
                      Download Brochures
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
                      class="buy_now_btn"
                      style={{ backgroundColor: "#25d366", color: "#fff" }}
                    >
                      {" "}
                      <i
                        class="fa fa-whatsapp"
                        style={{ marginRight: "8px", fontSize: "20px" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-heart"></i>
                    </a>
                  </li>
                </ul>

                {/* pro_social_share start */}
                <div class="pro_social_share">
                  <h2 class="title_2">Share :</h2>
                  <ul class="pro_social_link">
                    <li>
                      <a href="#" class="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-google"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-instagram"></a>
                    </li>
                  </ul>
                </div>
                {/* pro_social_share end */}
              </div>
              {/* product_details_info end */}
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="product-details-tab mt--60">
                <ul role="tablist" class="mb--50 nav">
                  <li class="active" role="presentation">
                    <a
                      data-bs-toggle="tab"
                      role="tab"
                      href="#description"
                      class="active"
                    >
                      Description
                    </a>
                  </li>
                  {/* <li role="presentation">
                                <a data-bs-toggle="tab" role="tab" href="#sheet">Data sheet</a>
                            </li> */}
                  <li role="presentation">
                    <a data-bs-toggle="tab" role="tab" href="#reviews">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12">
              <div class="product_details_tab_content tab-content">
                {/* Start Single Content */}
                <div
                  class="product_tab_content tab-pane active"
                  id="description"
                  role="tabpanel"
                >
                  <div class="product_description_wrap">
                    <div class="product_desc mb--30">
                      <h2 class="title_3">Details</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        noexercit ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim
                        id.
                      </p>
                    </div>
                    <div class="pro_feature">
                      <h2 class="title_3">Features</h2>
                      <ul class="feature_list">
                        <li>
                          <a href="#">
                            <i class="ion-ios-play-outline"></i>Duis aute irure
                            dolor in reprehenderit in voluptate velit esse
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="ion-ios-play-outline"></i>Irure dolor in
                            reprehenderit in voluptate velit esse
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="ion-ios-play-outline"></i>Sed do eiusmod
                            tempor incididunt ut labore et{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="ion-ios-play-outline"></i>Nisi ut aliquip
                            ex ea commodo consequat.
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Single Content */}
                {/* Start Single Content */}
                <div
                  class="product_tab_content tab-pane"
                  id="sheet"
                  role="tabpanel"
                >
                  <div class="pro_feature">
                    <h2 class="title_3">Data sheet</h2>
                    <ul class="feature_list">
                      <li>
                        <a href="#">
                          <i class="ion-ios-play-outline"></i>Duis aute irure
                          dolor in reprehenderit in voluptate velit esse
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="ion-ios-play-outline"></i>Irure dolor in
                          reprehenderit in voluptate velit esse
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="ion-ios-play-outline"></i>Irure dolor in
                          reprehenderit in voluptate velit esse
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="ion-ios-play-outline"></i>Sed do eiusmod
                          tempor incididunt ut labore et{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="ion-ios-play-outline"></i>Sed do eiusmod
                          tempor incididunt ut labore et{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="ion-ios-play-outline"></i>Nisi ut aliquip ex
                          ea commodo consequat.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="ion-ios-play-outline"></i>Nisi ut aliquip ex
                          ea commodo consequat.
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Content */}
                {/* Start Single Content */}
                <div
                  class="product_tab_content tab-pane"
                  id="reviews"
                  role="tabpanel"
                >
                  <div class="review_address_inner">
                    {/* Start Single Review */}
                    <div class="pro_review">
                      <div class="review_thumb">
                        <img
                          alt="review images"
                          src="assets/images/review/1.html"
                        />
                      </div>
                      <div class="review_details">
                        <div class="review_info">
                          <h4>
                            <a href="#">Gerald Barnes</a>
                          </h4>
                          <ul class="product-rating d-flex">
                            <li>
                              <span class="icon-star"></span>
                            </li>
                            <li>
                              <span class="icon-star"></span>
                            </li>
                            <li>
                              <span class="icon-star"></span>
                            </li>
                            <li>
                              <span class="icon-star"></span>
                            </li>
                            <li>
                              <span class="icon-star"></span>
                            </li>
                          </ul>
                          <div class="rating_send">
                            <a href="#">
                              <i class="ion-reply"></i>
                            </a>
                          </div>
                        </div>
                        <div class="review_date">
                          <span>27 Jun, 2018 at 3:30pm</span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer accumsan egestas elese ifend. Phasellus
                          a felis at estei to bibendum feugiat ut eget eni
                          Praesent et messages in con sectetur posuere dolor
                          non.
                        </p>
                      </div>
                    </div>
                    {/* End Single Review */}
                    {/* Start Single Review */}
                    <div class="pro_review ans">
                      <div class="review_thumb">
                        <img
                          alt="review images"
                          src="assets/images/review/2.html"
                        />
                      </div>
                      <div class="review_details">
                        <div class="review_info">
                          <h4>
                            <a href="#">Gerald Barnes</a>
                          </h4>
                          <ul class="product-rating d-flex">
                            <li>
                              <span class="icon-star"></span>
                            </li>
                            <li>
                              <span class="icon-star"></span>
                            </li>
                            <li>
                              <span class="icon-star"></span>
                            </li>
                            <li>
                              <span class="icon-star"></span>
                            </li>
                            <li>
                              <span class="icon-star"></span>
                            </li>
                          </ul>
                          <div class="rating_send">
                            <a href="#">
                              <i class="ion-reply"></i>
                            </a>
                          </div>
                        </div>
                        <div class="review_date">
                          <span>27 Jun, 2018 at 4:32pm</span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer accumsan egestas elese ifend. Phasellus
                          a felis at estei to bibendum feugiat ut eget eni
                          Praesent et messages in con sectetur posuere dolor
                          non.
                        </p>
                      </div>
                    </div>
                    {/* End Single Review */}
                  </div>
                  {/* Start RAting Area */}
                  <div class="rating_wrap">
                    <h2 class="rating-title">Write A review</h2>
                    <h4 class="rating-title-2">Your Rating</h4>
                    <div class="rating_list">
                      <ul class="product-rating d-flex">
                        <li>
                          <span class="icon-star"></span>
                        </li>
                        <li>
                          <span class="icon-star"></span>
                        </li>
                        <li>
                          <span class="icon-star"></span>
                        </li>
                        <li>
                          <span class="icon-star"></span>
                        </li>
                        <li>
                          <span class="icon-star"></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End RAting Area */}
                  <div class="comments-area comments-reply-area">
                    <div class="row">
                      <div class="col-lg-12">
                        <form action="#" class="comment-form-area">
                          <div class="comment-input">
                            <p class="comment-form-author">
                              <label>
                                Name <span class="required">*</span>
                              </label>
                              <input
                                type="text"
                                required="required"
                                name="Name"
                              />
                            </p>
                            <p class="comment-form-email">
                              <label>
                                Email <span class="required">*</span>
                              </label>
                              <input
                                type="text"
                                required="required"
                                name="email"
                              />
                            </p>
                          </div>
                          <p class="comment-form-comment">
                            <label>Comment</label>
                            <textarea
                              class="comment-notes"
                              required="required"
                            ></textarea>
                          </p>
                          <div class="comment-form-submit">
                            <input
                              type="submit"
                              value="Post Comment"
                              class="comment-submit"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Content */}

                {/* <div class="" id="second">Hi</div> */}

                <section class="RelatedPro">
                  <div class="section-title">
                    <h2>New Arrivals</h2>
                  </div>
                  <div class="shop-product-wrap">
                    <div class="row">
                      <ProductCard image={"/assets/images/product/1.jpg"} />
                      <ProductCard image={"/assets/images/product/2.jpg"} />
                      <ProductCard image={"/assets/images/product/3.jpg"} />
                      <ProductCard image={"/assets/images/product/4.jpg"} />
                    </div>
                  </div>
                </section>
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

export default ProductDetails;
