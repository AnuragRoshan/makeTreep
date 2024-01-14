import React from "react";
import "../../Style/Place/place.css";
import Searchbar from "../Sidebar/Searchbar";
const PlaceBanner = () => {
  return (
    <>
      <div className="story-banner-top">
        <div className="story-banner-head">Hideway</div>
        <div className="story-banner-desc">
          Exquisite destinations await, embrace unforgettable adventures and
          make every journey extraordinary
        </div>
      </div>
      <Searchbar />
    </>
  );
};

export default PlaceBanner;
