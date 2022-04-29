import React, { useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Shop = () => {
  return (
    <div className="main-wrapper">
      <Header />
      {/* breadcrumb-area start */}
      <div className="breadcrumb-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="breadcrumb-title">Shop</h2>
              {/* breadcrumb-list start */}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Shop</li>
              </ul>
              {/* breadcrumb-list end */}
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area end */}

      {/* main-content-wrap start */}
      <div className="main-content-wrap shop-page section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-lg-1 order-2">
              {/* shop-sidebar-wrap start */}
              <div className="shop-sidebar-wrap">
                {/* shop-sidebar start */}
                <div className="shop-sidebar mb--30">
                  <h4 className="title">CATEGORIES</h4>
                  <ul>
                    <li>
                      <a href="shop.html">
                        Laguna <span>(18)</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        Queen's Prime <span>(16)</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        Kubix <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        Bidspa <span>(11)</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        Arc <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        {" "}
                        Opal<span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        Ornamix <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        Disabled <span>(33)</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        Fusion <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        Lyric <span>(33)</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        Aria <span>(53)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* shop-sidebar end */}

                {/* shop-sidebar start */}
                <div className="shop-sidebar mb--30">
                  <h4 className="title">FILTER BY PRICE</h4>
                  {/* filter-price-content start */}
                  <div className="filter-price-content">
                    <form action="#" method="post">
                      <div id="price-slider" className="price-slider"></div>
                      <div className="filter-price-wapper">
                        <div className="filter-price-cont">
                          <span>Price:</span>
                          <div className="input-type">
                            <input type="text" id="min-price" readonly="" />
                          </div>
                          <span>—</span>
                          <div className="input-type">
                            <input type="text" id="max-price" readonly="" />
                          </div>
                          <a className="add-to-cart-button" href="#">
                            <span>FILTER</span>
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* filter-price-content end */}
                </div>
                {/* shop-sidebar end */}

                {/* shop-sidebar start */}

                {/* shop-sidebar end */}

                {/* shop-sidebar start */}
                {/*   <div className="shop-sidebar mb--30">
                            <h4 className="title">SIZE</h4>
                            <ul>  
                                <li><a href="shop.html">S <span>(11)</span></a></li>
                                <li><a href="shop.html">M <span>(13)</span></a></li>
                                <li><a href="shop.html">L <span>(6)</span></a></li>
                                <li><a href="shop.html">XLL <span>(51)</span></a></li>
                                <li><a href="shop.html">XXL <span>(3)</span></a></li>
                            </ul>
                        </div> */}
                {/* shop-sidebar end */}

                {/* shop-sidebar start */}
                <div className="shop-sidebar">
                  <h4 className="title">Hot Tags</h4>
                  <div className="sidebar-tag">
                    <a href="#">Laguna </a>
                    <a href="#">Continental Prime </a>
                    <a href="#">Sensor Faucets </a>
                    <a href="#">Pressmatic </a>
                    <a href="#">Shower Tray</a>
                    <a href="#">Bidspa </a>
                  </div>
                </div>
                {/* shop-sidebar end */}
              </div>
              {/* shop-sidebar-wrap end */}
            </div>
            <div className="col-lg-9 order-lg-2 order-1">
              {/* shop-product-wrapper start */}
              <div className="shop-product-wrapper">
                <div className="row">
                  <div className="col">
                    {/* shop-top-bar start */}
                    <div className="shop-top-bar">
                      {/* product-view-mode start */}
                      <div className="product-view-mode">
                        {/* shop-item-filter-list start */}
                        <ul
                          role="tablist"
                          className="nav shop-item-filter-list"
                        >
                          <li role="presentation" className="active">
                            <a
                              href="#grid"
                              aria-controls="grid"
                              role="tab"
                              data-bs-toggle="tab"
                              className="active show"
                              aria-selected="true"
                            >
                              <i className="ion-ios-keypad-outline"></i>
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#list"
                              aria-controls="list"
                              role="tab"
                              data-bs-toggle="tab"
                            >
                              <i className="ion-ios-list-outline"></i>{" "}
                            </a>
                          </li>
                        </ul>
                        {/* shop-item-filter-list end */}
                      </div>
                      {/* product-view-mode end */}
                      {/* product-short start */}
                      <div className="product-short">
                        <p>Sort By:</p>
                        <select className="nice-select" name="sortby">
                          <option value="trending">Relevance</option>
                          <option value="sales">Name (A - Z)</option>
                          <option value="sales">Name (Z - A)</option>
                          <option value="rating">{`Price (Low > High)`}</option>
                          <option value="date">Rating (Lowest)</option>
                          <option value="price-asc">Model (A - Z)</option>
                          <option value="price-asc">Model (Z - A)</option>
                        </select>
                      </div>
                      {/* product-short end */}
                    </div>
                    {/* shop-top-bar end */}
                  </div>
                </div>

                {/* shop-products-wrap start */}
                <div className="shop-products-wrap">
                  <div className="tab-content">
                    <div
                      id="grid"
                      className="tab-pane fade active show"
                      role="tabpanel"
                    >
                      <div className="shop-product-wrap">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/1.jpg"
                                    alt=""
                                  />
                                </a>
                                {/*  <div className="product-action">
                                                            <a href="#" className="wishlist"><i className="icon-heart"></i></a>
                                                            <a href="#" className="add-to-cart"><i className="icon-handbag"></i></a>
                                                            <a href="#" className="quick-view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="icon-shuffle"></i></a>
                                                        </div> */}
                              </div>
                              <div className="product-content">
                                <h3>
                                  <a href="product-details.html">
                                    Products Name 001
                                  </a>
                                </h3>
                                <div className="price-box">
                                  <span className="old-price">140.00</span>
                                  <span className="new-price">120.00</span>
                                </div>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/2.jpg"
                                    alt=""
                                  />
                                </a>
                                {/* <div className="product-action">
                                                            <a href="#" className="wishlist"><i className="icon-heart"></i></a>
                                                            <a href="#" className="add-to-cart"><i className="icon-handbag"></i></a>
                                                            <a href="#" className="quick-view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="icon-shuffle"></i></a>
                                                        </div> */}
                              </div>
                              <div className="product-content">
                                <h3>
                                  <a href="product-details.html">
                                    Products Name 002
                                  </a>
                                </h3>
                                <div className="price-box">
                                  <span className="new-price">120.00</span>
                                </div>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/3.jpg"
                                    alt=""
                                  />
                                </a>
                                {/*  <div className="product-action">
                                                            <a href="#" className="wishlist"><i className="icon-heart"></i></a>
                                                            <a href="#" className="add-to-cart"><i className="icon-handbag"></i></a>
                                                            <a href="#" className="quick-view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="icon-shuffle"></i></a>
                                                        </div> */}
                              </div>
                              <div className="product-content">
                                <h3>
                                  <a href="product-details.html">
                                    Products Name 003
                                  </a>
                                </h3>
                                <div className="price-box">
                                  <span className="old-price">230.00</span>
                                  <span className="new-price">210.00</span>
                                </div>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/4.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-content">
                                <h3>
                                  <a href="product-details.html">
                                    Products Name 004
                                  </a>
                                </h3>
                                <div className="price-box">
                                  <span className="new-price">120.00</span>
                                </div>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="#">
                                  <img
                                    src="assets/images/product/5.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-content">
                                <h3>
                                  <a href="product-details.html">
                                    Products Name 005
                                  </a>
                                </h3>
                                <div className="price-box">
                                  <span className="old-price">180.00</span>
                                  <span className="new-price">150.00</span>
                                </div>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/6.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-content">
                                <h3>
                                  <a href="product-details.html">
                                    Products Name 006
                                  </a>
                                </h3>
                                <div className="price-box">
                                  <span className="new-price">130.00</span>
                                </div>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/7.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-content">
                                <h3>
                                  <a href="product-details.html">
                                    Products Name 007
                                  </a>
                                </h3>
                                <div className="price-box">
                                  <span className="old-price">250.00</span>
                                  <span className="new-price">230.00</span>
                                </div>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/8.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-content">
                                <h3>
                                  <a href="product-details.html">
                                    Products Name 008
                                  </a>
                                </h3>
                                <div className="price-box">
                                  <span className="new-price">120.00</span>
                                </div>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/9.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-content">
                                <h3>
                                  <a href="product-details.html">
                                    Products Name 009
                                  </a>
                                </h3>
                                <div className="price-box">
                                  <span className="new-price">133.00</span>
                                </div>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="list" className="tab-pane fade" role="tabpanel">
                      <div className="shop-product-list-wrap">
                        <div className="row product-layout-list">
                          <div className="col-lg-4 col-md-5">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-8 col-md-7">
                            <div className="product-content text-start">
                              <h3>
                                <a href="product-details.html">
                                  Products Name 002
                                </a>
                              </h3>
                              <div className="price-box">
                                <span className="new-price">120.00</span>
                                <span className="old-price">130.00</span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veritatis pariatur ipsa sint
                                consectetur velit maiores sit voluptates aut
                                tempora totam, consequatur iste quod suscipit
                                natus. Explicabo facere neque adipisci odio.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row product-layout-list">
                          <div className="col-lg-4 col-md-5">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/3.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-8 col-md-7">
                            <div className="product-content text-start">
                              <h3>
                                <a href="product-details.html">
                                  Products Name 003
                                </a>
                              </h3>
                              <div className="price-box">
                                <span className="new-price">121.00</span>
                                <span className="old-price">132.00</span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veritatis pariatur ipsa sint
                                consectetur velit maiores sit voluptates aut
                                tempora totam, consequatur iste quod suscipit
                                natus. Explicabo facere neque adipisci odio.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row product-layout-list">
                          <div className="col-lg-4 col-md-5">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/4.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-8 col-md-7">
                            <div className="product-content text-start">
                              <h3>
                                <a href="product-details.html">
                                  Products Name 004
                                </a>
                              </h3>
                              <div className="price-box">
                                <span className="new-price">111.00</span>
                                <span className="old-price">162.00</span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veritatis pariatur ipsa sint
                                consectetur velit maiores sit voluptates aut
                                tempora totam, consequatur iste quod suscipit
                                natus. Explicabo facere neque adipisci odio.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row product-layout-list">
                          <div className="col-lg-4 col-md-5">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/6.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-8 col-md-7">
                            <div className="product-content text-start">
                              <h3>
                                <a href="product-details.html">
                                  Products Name 005
                                </a>
                              </h3>
                              <div className="price-box">
                                <span className="new-price">89.00</span>
                                <span className="old-price">99.00</span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veritatis pariatur ipsa sint
                                consectetur velit maiores sit voluptates aut
                                tempora totam, consequatur iste quod suscipit
                                natus. Explicabo facere neque adipisci odio.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row product-layout-list">
                          <div className="col-lg-4 col-md-5">
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/product/8.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            {/* single-product-wrap end */}
                          </div>
                          <div className="col-lg-8 col-md-7">
                            <div className="product-content text-start">
                              <h3>
                                <a href="product-details.html">
                                  Products Name 008
                                </a>
                              </h3>
                              <div className="price-box">
                                <span className="new-price">86.00</span>
                                <span className="old-price">97.00</span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Veritatis pariatur ipsa sint
                                consectetur velit maiores sit voluptates aut
                                tempora totam, consequatur iste quod suscipit
                                natus. Explicabo facere neque adipisci odio.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* shop-products-wrap end */}

                {/* paginatoin-area start */}
                <div className="paginatoin-area">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <p>Showing 10-13 of 13 item(s) </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <ul className="pagination-box">
                        <li>
                          <a className="Previous" href="#">
                            Previous
                          </a>
                        </li>
                        <li className="active">
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a className="Next" href="#">
                            {" "}
                            Next{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* paginatoin-area end */}
              </div>
              {/* shop-product-wrapper end */}
            </div>
          </div>
        </div>
      </div>
      {/* main-content-wrap end */}
      <Footer />
    </div>
  );
};

export default Shop;
