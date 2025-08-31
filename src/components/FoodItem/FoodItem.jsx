import React, { useState } from "react";
import "./FoodItem.css";
import addIcon from "../../assets/add_icon.png";
import removeIcon from "../../assets/remove_icon.png";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={addIcon}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={removeIcon}
              className="remove"
            />
            <p>{itemCount} </p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={addIcon}
              className="addMore"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p>{name} </p>
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
