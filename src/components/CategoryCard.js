import React from "react";

const CategoryCard = ({ image }) => {
  return (
    <div className="single-brand">
      <div className="Bproducts">
        <a href="#">
          <div className="media">
            <img className="mr-3" src={image} alt="" />
            <div className="media-body">
              <h4 className="mt-0">Tiles</h4>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;
