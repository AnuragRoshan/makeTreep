import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Style/Home/sidebar.css";

const Sidebar = () => {
  //   let scrollPosition = 110;
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
    <>
      <div className={`${scrollPosition >= 10 ? "nav-hidden" : "nav"}`}>
        <div
          className={`${scrollPosition >= 10 ? "nav-top-sidebar" : "nav-top"}`}
        >
          <div className="nav-icon">
            {scrollPosition > 10 ? (
              <i class="fa-solid fa-house"></i>
            ) : (
              <>
                <span className="nav-list">Home</span>
              </>
            )}
          </div>
          <div className="nav-icon">
            {/* <i class="fa-solid fa-phone"></i> */}
            {scrollPosition > 10 ? (
              <i class="fa-solid fa-phone"></i>
            ) : (
              <>
                <span className="nav-list">Contact</span>
              </>
            )}
          </div>
          <div className="nav-icon">
            {/* <i class="fa-solid fa-phone"></i> */}
            {scrollPosition > 10 ? (
              <i class="fa-solid fa-book"></i>
            ) : (
              <>
                <span className="nav-list">Articles</span>
              </>
            )}
          </div>
          <div className="nav-icon">
            {/* <i class="fa-solid fa-phone"></i> */}
            {scrollPosition > 10 ? (
              <i class="fa-solid fa-magnifying-glass"></i>
            ) : (
              <>
                <span className="nav-list">Search</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
