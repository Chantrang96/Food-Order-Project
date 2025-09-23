import { createContext, useState, useContext, useEffect } from "react";
import { API_SERVICE } from "../../api";

const userContext = createContext(null);
const USER_KEY = "user";
const checkuserlogged = () => {
  const user = localStorage.getItem(USER_KEY);
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(checkuserlogged);
  const [message, setMessage] = useState("");
  const login = async ({ email, password }) => {
    try {
      const { data } = await API_SERVICE.login({ email, password });
      const user = data[0];
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      setUser(user);
      return user;
    } catch (error) {
      setMessage("Mật khẩu hoặc tên đăng nhập sai");
      return null;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_KEY);
  };

  const signup = async ({ email, fullname, password }) => {
    try {
      const { data } = await API_SERVICE.getUsers({ email });
      if (data?.length > 0) {
        setMessage("Tài khoản đã tồn tại");
        return null;
      }
    } catch (error) {
      const { data: singupData } = await API_SERVICE.createUser({
        email,
        fullname,
        password,
      });
      localStorage.setItem(USER_KEY, JSON.stringify(singupData));
      setUser(singupData);
      return singupData;
    }
  };

  return (
    <userContext.Provider
      value={{ user, message, setMessage, login, logout, signup }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
