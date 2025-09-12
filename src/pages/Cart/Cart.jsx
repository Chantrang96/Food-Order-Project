import React, { useContext } from "react";
import "./Cart.css";
import StoreContext from "../../components/Context/StoreContext";
import { food_list } from "../../assets/Assets";
import removeIcon from "../../assets/remove_icon.png";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate ();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Món</p>
          <p>Tên món</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Tổng</p>
          <p>Xóa món</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img className="items-image" src={item.image} alt="" />
                  <p>{item.name} </p>
                  <p>{item.price} VND </p>
                  <p>{cartItems[item._id]} </p>
                  <p>{item.price * cartItems[item._id]} VND </p>
                  <img
                    className="removeItem"
                    onClick={() => removeFromCart(item._id)}
                    src={removeIcon}
                    alt=""
                  />
                </div>

                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Tổng đơn hàng</h2>
          <div>
            <div className="cart-total-detail">
              <p>Tạm tính</p>
              <p>{getTotalCartAmount()} VND </p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Phí vận chuyển</p>
              <p>{getTotalCartAmount()===0?0:20000} VND</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Tổng</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount() + 20000} VND</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Đi đến trang thanh toán</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Hãy nhập mã khuyến mại vào đây</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Mã khuyến mại" />
              <button>Nhập</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
