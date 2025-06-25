import React from "react";
import bannerMB from "../../assets/images/banner-mb.jpg";
import "../../assets/styles/Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerMB} alt="Como participar" />
    </div>
  );
};

export default Banner;
