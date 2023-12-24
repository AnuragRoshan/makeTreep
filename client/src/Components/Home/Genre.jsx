import React from "react";
import "../../Style/Home/brand.css";

const Genre = () => {
  return (
    <div className="genre-top">
      <div className="genre-head">
        Curate Your Escape: Explore Diverse Genres Tailored to You
      </div>
      <div className="genre">
        <div className="genre-img">
          <i class="fa-solid fa-mountain-sun"></i>
          <div className="img-desc">Mountains</div>
        </div>
        <div className="genre-img">
          <i class="fa-solid fa-umbrella-beach"></i>
          <div className="img-desc">Beaches</div>
        </div>
        <div className="genre-img">
          <i class="fa-solid fa-wine-bottle"></i>
          <div className="img-desc">Party</div>
        </div>
        <div className="genre-img">
          <i class="fa-solid fa-vihara"></i>
          <div className="img-desc">Cultural</div>
        </div>
        <div className="genre-img">
          <i class="fa-solid fa-burger"></i>
          <div className="img-desc">Food</div>
        </div>
        <div className="genre-img">
          <i class="fa-solid fa-parachute-box"></i>
          <div className="img-desc">Adventure</div>
        </div>
      </div>
    </div>
  );
};

export default Genre;
