import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.jpg";
import SearchIcon from "../../assets/search-icon.png";
import BasketIcon from "../../assets/basket-icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={Logo} className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Trang Chủ
        </li>
        <li
          onClick={() => setMenu("our-menu")}
          className={menu === "our-menu" ? "active" : ""}
        >
          Thực Đơn
        </li>
        <li
          onClick={() => setMenu("download-app")}
          className={menu === "download-app" ? "active" : ""}
        >
          Ứng dụng điện thoại
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Liên hệ
        </li>
      </ul>
      <div className="navbar-right">
        <img src={SearchIcon} alt="" width="30" height="30" />
        <div className="navbar-search-icon">
          <img src={BasketIcon} alt="" width="30" height="30" />
          <div className="dot"></div>
        </div>
        <button>Đăng nhập</button>
      </div>
    </div>
  );
};
export default Navbar;
