import React, { useState, useEffect } from "react";
import "../../Style/Home/Home.css";

const Banner = () => {
  const [addAnimation, setAddAnimation] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setAddAnimation(true);
  }, []);

  return (
    <div>
      <div
        className={`video-background ${
          addAnimation ? "top-head-animation" : ""
        }`}
      >
        <video autoPlay loop muted>
          <source
            src="https://ik.imagekit.io/i3divn77k/AdventurePX/8316141a-086c-4a4c-890c-ac4e9c958cb6.mp4?updatedAt=1701897105562"
            type="video/mp4"
          />
        </video>
        <div className={`top-head ${addAnimation ? "top-head-animation" : ""}`}>
          <img
            src="https://yestheory.com/wp-content/themes/jobs/assets/images/lightblue-lines-big-distressed.svg"
            alt=""
          />
          <h1 className="top-head-desc">IndieTrek.io</h1>
          <p className="short-description">
            Unleash the Majesty of the Himalayan Trails with Us
          </p>
        </div>
      </div>
      <div>
        <img
          className="walking-image"
          src="https://media.tenor.com/KDu16gyyLDEAAAAi/emirates-airplane.gif"
          alt=""
          srcset=""
        />
      </div>

      <div
        className={`${
          scrollPosition >= 10 ? "adv-search-now search-now" : "search-now"
        }`}
      >
        Explore Destination
      </div>
      <div
        className={`${
          scrollPosition >= 10 ? "adv-search-bar search-bar" : "search-bar"
        }`}
      >
        <div style={{ textAlign: "center" }}>
          <input type="text" name="" id="" placeholder=' Search "Manali" ' />
        </div>
        <div style={{ textAlign: "center", borderRadius: "0" }}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="otherContents"></div>
    </div>
  );
};

export default Banner;
