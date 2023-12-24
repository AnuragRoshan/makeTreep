import React from "react";
import "../../Style/Home/explore.css";
import { data } from "../../Data/HomeStick";
const Explore = (props) => {
  // let p = Number(props.num);
  console.log(props.num);
  const image = data[props.num].url;
  return (
    <div
      className="explore-top"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div
        className="explore-head"
        style={{
          position: "relative",
          top: "60vh",
          color: "white",
          zIndex: 1,
          fontSize: "3.5rem",
          fontWeight: "600",
          width: "90%",
          paddingInline: "4rem",
          // left: "10%",
        }}
      >
        {data[props.num].title}
        <br />
      </div>
    </div>
  );
};

export default Explore;
