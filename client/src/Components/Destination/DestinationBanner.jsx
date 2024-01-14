import React from "react";
import Searchbar from "../Sidebar/Searchbar";
const DestinationBanner = ({ place }) => {
  // console.log(place.url);
  return (
    <>
      <div
        className="destination-banner-top"
        style={{ backgroundImage: `url(${place.url})` }}
      >
        <div className="destination-banner-head">{place.place}</div>
      </div>
      <Searchbar />
    </>
  );
};

export default DestinationBanner;
