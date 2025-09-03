import React from "react";
import "./AppDownload.css";
import play_store from "../../assets/googleplay_icon.svg";
import app_store from "../../assets/app_store.png";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        Để có trải nghiệm tốt hơn hãy tải xuống <br /> Fooba app{" "}
      </p>
      <div className="app-download-platforms">
        <img src={play_store} alt="" />
        <img src={app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
