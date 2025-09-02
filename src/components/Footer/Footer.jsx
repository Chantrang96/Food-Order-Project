import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import linkedin_icon from "../../assets/linkedin_icon.png";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="div footer-content-left">
          <img className="footer-logo" src={logo} alt="" />
          <p>
            🍜 Fooba – Ứng dụng đặt món ăn nhanh chóng và tiện lợi. Luôn mang
            đến cho bạn hương vị tươi ngon mỗi ngày!
          </p>
          <div className="footer-social-icons">
            <img src={facebook_icon} alt="" />
            <img src={twitter_icon} alt="" />
            <img src={linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>CÔNG TY</h2>
          <ul>
            <li>Trang chủ</li>
            <li>Về chúng tôi</li>
            <li>Vận chuyển</li>
            <li>Chính sách</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>THÔNG TIN LIÊN HỆ</h2>
          <ul>
            <li>+84-123-456-789</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 ® 123456.com - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
