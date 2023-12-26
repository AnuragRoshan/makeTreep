import React from "react";
import "../../Style/Genre/genre.css";
import { data } from "../../Data/StoryGenre";

const Genrebanner = (props) => {
  const genreData = data[props.genre]; // Access data for the specific genre
  return (
    <>
      <div
        className="genre-banner"
        style={{ backgroundImage: `url(${genreData.img})` }}
      >
        <div className="genre-banner-head">{genreData.title}</div>
        <div className="genre-banner-sub">{genreData.subtitle}</div>
      </div>
    </>
  );
};

export default Genrebanner;
