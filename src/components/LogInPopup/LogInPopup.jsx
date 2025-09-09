import React, { useState } from "react";
import "./LogInPopup.css";
import cross_icon from "../../assets/cross_icon.png";

const LogInPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Đăng Nhập")

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2> {currState} </h2>
          <img onClick={()=> setShowLogin(false)} src={cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Đăng Nhập"?<></>:<input type="text" placeholder='Tên của bạn' required />}
          <input type="email" placeholder='Email của bạn' required/>
          <input type="password" placeholder='Mật khẩu' required/>
        </div>
        <button>{currState==="Đăng Ký"?"Tạo Tài Khoản":"Đăng Nhập"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>Bằng cách tiếp tục, tôi đồng ý với điều khoản sử dụng và chính sách bảo mật</p>
        </div>
        {currState==="Đăng Nhập"
        ?<p>Tạo 1 tài khoản mới? <span onClick={()=>setCurrState("Đăng Ký")}> Nhấn vào đây</span></p>
        :<p>Đã có tài khoản? <span onClick={()=>setCurrState("Đăng Nhập")}> Đăng nhập ở đây</span></p>
        }
      </form>
    </div>
  );
};

export default LogInPopup;