import React from "react";
import "../../Style/Stories/storybanner.css";
import Searchbar from "../Sidebar/Searchbar";
const Storybanner = () => {
  return (
    <>
      <div className="story-banner-top">
        <div className="story-banner-head">Stories</div>
        <div className="story-banner-desc">
          Embark on a Journey Through Wanderlust Tales, Where Every Story is a
          Passport to Adventure
        </div>
      </div>
      <Searchbar />
    </>
  );
};

export default Storybanner;
