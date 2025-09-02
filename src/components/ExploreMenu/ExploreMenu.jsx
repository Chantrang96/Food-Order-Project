import React from "react";
import "./ExploreMenu.css";
import { category_list } from "../../assets/Assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Khám phá thực đơn của chúng tôi</h1>
      <p className="explore-menu-text">
        Hãy cùng thưởng thức thực đơn đa dạng với những món bún, mì, miến được
        chế biến tươi ngon mỗi ngày, mang đậm hương vị truyền thống kết hợp cùng
        phong cách hiện đại.
      </p>
      <div className="explore-menu-list">
        {category_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.category_name ? "All" : item.category_name
                )
              }
              key={index}
              className="explore-menu-list-category"
            >
              <img
                className={category === item.category_name ? "active" : ""}
                src={item.category_image}
              />
              <p>{item.category_name} </p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
