import React, { useState } from "react";
import "./LogInPopup.css";
import cross_icon from "../../assets/cross_icon.png";
import { useUser } from "../Context/UserContext";

const POPUP_STATE = {
  login:"Đăng Nhập",
  signup: "Đăng Ký"
}

const LogInPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState(POPUP_STATE.login)
  const {login,signup , message, setMessage} = useUser()
  const handleSubmit =(e)=>{
    setMessage('')
    e.preventDefault();
    const formData = new FormData(e.target);

    // Convert sang object (cho tiện)
    const data = Object.fromEntries(formData.entries());
    if(currState == POPUP_STATE.login){
      login(data).then((data)=>{ if(data)setShowLogin(false)})
    }
    if(currState == POPUP_STATE.signup){
      signup(data).then((data)=>{ if(data)setShowLogin(false)})
    }
  }
  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2> {currState} </h2>
          <img onClick={()=> setShowLogin(false)} src={cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState===POPUP_STATE.login?<></>:<input type="text" name="fullname" placeholder='Tên của bạn' required />}
          <input name="email" type="email" placeholder='Email của bạn' required onChange={()=> setMessage(null)}/>
          <input name="password" type="password" placeholder='Mật khẩu' required onChange={()=> setMessage(null)}/>
        </div>
        {message &&
        <p style={{color:'red'}}>{message}</p>
        }
        
        <button>{currState===POPUP_STATE.signup?"Tạo Tài Khoản":POPUP_STATE.login}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>Bằng cách tiếp tục, tôi đồng ý với điều khoản sử dụng và chính sách bảo mật</p>
        </div>
        {currState===POPUP_STATE.login
        ?<p>Tạo 1 tài khoản mới? <span onClick={()=>setCurrState(POPUP_STATE.signup)}> Nhấn vào đây</span></p>
        :<p>Đã có tài khoản? <span onClick={()=>setCurrState(POPUP_STATE.login)}> Đăng nhập ở đây</span></p>
        }
      </form>
    </div>
  );
};

export default LogInPopup;