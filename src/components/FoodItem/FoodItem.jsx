import React, { useContext } from "react";
import "./FoodItem.css";
import addIcon from "../../assets/add_icon.png";
import removeIcon from "../../assets/remove_icon.png";
import StoreContext from "../../components/Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img className="add" onClick={() => addToCart(id)} src={addIcon} />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={removeIcon}
              className="remove"
            />
            <p>{cartItems[id]} </p>
            <img
              onClick={() => addToCart(id)}
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
        <p className="food-item-price">{price} VND</p>
      </div>
    </div>
  );
};

export default FoodItem;
