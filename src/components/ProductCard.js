import React from "react";

const ProductCard = ({ image }) => {
  return (
    <div className="col-md-3">
      {/*single-product-wrap start */}
      <div className="single-product-wrap">
        <div className="product-image">
          <a href="product-details.html">
            <img src={image} alt="" />
          </a>
          <div className="product-action">
            <a href="#" className="wishlist">
              <i className="icon-heart"></i>
            </a>
            <a href="#" className="add-to-cart">
              <i className="icon-handbag"></i>
            </a>
            <a
              href="#"
              className="quick-view"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              <i className="icon-shuffle"></i>
            </a>
          </div>
        </div>
        <div className="product-content">
          <h3>
            <a href="product-details.html">Products Name 009</a>
          </h3>
          <div className="price-box">
            <span className="old-price">150.00</span>
            <span className="new-price">125.00</span>
          </div>
        </div>
      </div>
      {/*single-product-wrap end */}
    </div>
  );
};

export default ProductCard;
