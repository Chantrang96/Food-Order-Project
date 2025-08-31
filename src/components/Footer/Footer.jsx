import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="div footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text over since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
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
            <p className="footer-copyright">Copyright 2025 ® 123456.com - All rights reserved.</p>

        </div>

    )
}

export default Footer