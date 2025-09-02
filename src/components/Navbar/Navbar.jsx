import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.jpg";
import SearchIcon from "../../assets/search-icon.png";
import BasketIcon from "../../assets/basket-icon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} className="logo" />
      <ul className="navbar-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Trang Chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Thực Đơn
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/download"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            App điện thoại
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/footer"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Liên hệ
          </NavLink>
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
