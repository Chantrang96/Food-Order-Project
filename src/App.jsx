import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Menu from "./pages/Menu/Menu";
import DownloadApp from "./components/AppDownload/AppDownload";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/DownloadApp" element={<DownloadApp />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
