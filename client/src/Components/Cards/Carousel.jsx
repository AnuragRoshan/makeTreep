import React, { useEffect, useState } from "react";
import "../../Style/Slider.css";

const Carousel = ({ place }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const prev = () => {
    if (currentIndex === place.images.length - 1) {
      setcurrentIndex(0);
    } else {
      setcurrentIndex(currentIndex + 1);
    }
  };

  const next = () => {
    if (currentIndex === 0) {
      setcurrentIndex(place.images.length - 1);
    } else {
      setcurrentIndex(currentIndex - 1);
    }
    console.log(currentIndex);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setcurrentIndex(currentIndex + 1);
  //   }, 3000);
  // }, [currentIndex]);

  return (
    <div className="carousel-top">
      <div className="carousel-prev" onClick={prev}>
        <i class="fa-solid fa-circle-chevron-left"></i>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="carousel-image"
          style={{
            backgroundImage: `url(${place.images[currentIndex]})`,
          }}
        ></div>
        <div
          className="carousel-image"
          style={{
            backgroundImage: `url(${
              place.images[(currentIndex + 1) % place.images.length]
            })`,
          }}
        ></div>
        <div
          className="carousel-image"
          style={{
            backgroundImage: `url(${
              place.images[(currentIndex + 2) % place.images.length]
            })`,
          }}
        ></div>
      </div>
      <div className="carousel-next" onClick={next}>
        <i class="fa-solid fa-circle-chevron-right"></i>
      </div>
    </div>
  );
};

export default Carousel;
