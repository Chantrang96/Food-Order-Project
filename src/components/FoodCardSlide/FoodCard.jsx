import React from "react";
import "./FoodCard.css";

const FoodCard = ({ item }) => {
  return (
    <div className="foodCard">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.price.toLocaleString("vi-VN")} VND</p>
    </div>
  );
};

export default FoodCard;
