import { React, useContext } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.jpg";
import SearchIcon from "../../assets/search-icon.png";
import BasketIcon from "../../assets/basket-icon.png";
import { Link, NavLink } from "react-router-dom";
import StoreContext from "../Context/StoreContext";

const Navbar = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} className="logo" />
      </Link>
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
            to="/DownloadApp"
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
          <Link to="/Cart">
            <img src={BasketIcon} alt="" width="30" height="30" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button>Đăng nhập</button>
      </div>
    </div>
  );
};
export default Navbar;
