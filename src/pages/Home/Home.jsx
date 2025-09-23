import React, { useContext } from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import StoreContext from "../../components/Context/StoreContext";
import { Carousel } from "antd";
import FoodItem from "../../components/FoodItem/FoodItem";

const Home = () => {
  const { food_list } = useContext(StoreContext);
  const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="home">
      <Header />
      <h2 className="home-title">Món ăn nổi bật</h2>

      <Carousel {...sliderSettings}>
        {food_list.map((item, index) => (
          <div key={item.id ?? index} className="home-slide">
            <FoodItem
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              category={item.category}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
