import React, { useEffect, useState } from "react";
import "../../Style/Home/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  //   let scrollPosition = 110;
  // const [addAnimation, setAddAnimation] = useState(false);
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

  // useEffect(() => {
  //   setAddAnimation(true);
  // }, []);
  return (
    <>
      <div className={`${scrollPosition >= 10 ? "nav-hidden" : "nav"}`}>
        <div
          className={`${scrollPosition >= 10 ? "nav-top-sidebar" : "nav-top"}`}
        >
          <div className="nav-icon">
            <Link to={`/`}>
              {scrollPosition > 10 ? (
                <i class="fa-solid fa-house"></i>
              ) : (
                <>
                  <span className="nav-list">Home</span>
                </>
              )}
            </Link>
          </div>
          <div className="nav-icon">
            <Link to={`/places`}>
              {/* <i class="fa-solid fa-phone"></i> */}
              {scrollPosition > 10 ? (
                <i class="fa-solid fa-message"></i>
              ) : (
                <>
                  <span className="nav-list">Places</span>
                </>
              )}
            </Link>
          </div>
          <div className="nav-icon">
            <Link to={`/stories`}>
              {/* <i class="fa-solid fa-phone"></i> */}
              {scrollPosition > 10 ? (
                <i class="fa-solid fa-book"></i>
              ) : (
                <>
                  <span className="nav-list">Stories</span>
                </>
              )}
            </Link>
          </div>
          <div className="nav-icon">
            <Link to={`/stories`}>
              {scrollPosition > 10 ? (
                <i class="fa-solid fa-pen-to-square"></i>
              ) : (
                <>
                  <span className="nav-list">Draft</span>
                </>
              )}
            </Link>
          </div>
          <div className="nav-icon">
            <Link to={`/places`}>
              {/* <i class="fa-solid fa-phone"></i> */}
              {scrollPosition > 10 ? (
                <i class="fa-solid fa-location-dot"></i>
              ) : (
                <>
                  <span className="nav-list">Places</span>
                </>
              )}
            </Link>
          </div>
          <div className="nav-icon">
            <Link to={`/places`}>
              {/* <i class="fa-solid fa-phone"></i> */}
              {scrollPosition > 10 ? (
                <i class="fa-solid fa-user"></i>
              ) : (
                <>
                  <span className="nav-list">Profile</span>
                </>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
