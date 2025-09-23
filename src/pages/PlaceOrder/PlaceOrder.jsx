import React, { useContext } from "react";
import "./PlaceOrder.css";
import StoreContext from "../../components/Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-oder-left">
        <p className="title">Thông tin vận chuyển</p>
        <div className="multi-fields">
          <input type="text" placeholder="Tên" />
          <input type="text" placeholder="Họ" />
        </div>
        <input type="email" placeholder="Địa chỉ Email" />
        <input type="text" placeholder="Số nhà" />
        <div className="multi-fields">
          <input type="text" placeholder="Thành phố/Quận/Huyện" />
          <input type="text" placeholder="Tỉnh/Thành phố" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Mã vùng" />
          <input type="text" placeholder="Đất nước" />
        </div>
        <input type="text" placeholder="Điện thoại" />
      </div>
      <div className="place-oder-right">
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
              <p>{getTotalCartAmount() === 0 ? 0 : 20000} VND</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Tổng</b>
              <b>
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20000}{" "}
                VND
              </b>
            </div>
          </div>
          <button>Quá trỉnh thanh toán</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
