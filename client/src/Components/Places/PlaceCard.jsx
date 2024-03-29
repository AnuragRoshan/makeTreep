import React from "react";
import { Link } from "react-router-dom";

const PlaceCard = ({ place }) => {
  return (
    <div className="place-card-top">
      <div className="place-card-img">
        <Link to={`/destination/${place.place}`}>
          <img src={place.url} alt="" />
        </Link>
      </div>
      <div className="place-card-detail">
        <div className="place-card-head">{place.place}</div>
        <div className="place-card-location">
          {place.state} ,{place.country}
        </div>
        <div className="place-card-desc">
          {place.description.slice(0, 350)}.....
        </div>
        <div className="place-card-genre">
          {place.genres.map((item, index) => {
            return <div>{item}</div>;
          })}
        </div>
        <div className="place-card-temp">
          Current Temp :{" "}
          <b>
            {" "}
            {place.temperature}
            <sup>o</sup>C ,{place.humidity}% Humidity
          </b>
        </div>
        <div style={{ display: "flex" }}>
          <div className="place-card-rating">{place.rating}</div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              marginLeft: "1rem",
              // fontWeight: "bold",
              color: "#242424",
              fontSize: "1rem",
            }}
          >
            Deals Starting from &nbsp; <b style={{ color: "green" }}> $150</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
