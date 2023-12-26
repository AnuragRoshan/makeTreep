import React, { useEffect, useState } from "react";

const Searchbar = () => {
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
    </div>
  );
};

export default Searchbar;
