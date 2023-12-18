import React from "react";
import "../../Style/brand.css";
const Brands = () => {
  const data = [
    "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-Logo-2003-768x432.png",
    "https://1000logos.net/wp-content/uploads/2023/04/Starbucks-logo-768x432.png",
    "https://1000logos.net/wp-content/uploads/2019/11/Hyatt-Logo-768x432.png",
    "https://1000logos.net/wp-content/uploads/2020/03/Emirates-Logo-768x480.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Taj_Hotels_logo.svg/2286px-Taj_Hotels_logo.svg.png",
    "https://seeklogo.com/images/V/Volkswagen-logo-80097D61AA-seeklogo.com.png",
    //array of url of images
  ];

  return (
    <div className="brand-top">
      <div className="brand-head">Companies Work With Us</div>
      <div className="brand">
        {data.map((item, index) => {
          return (
            <div className="brand-img" key={index}>
              <img src={item} alt="brand" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
