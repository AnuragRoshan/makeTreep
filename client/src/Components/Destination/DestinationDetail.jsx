import React from "react";
import Carousel from "../../Components/Cards/Carousel";

const DestinationDetail = ({ place }) => {
  // console.log(place);
  return (
    <div className="destinationdetail-top">
      <div className="destinationdetail-inner-top">
        <div>
          <Carousel place={place} />
        </div>
        <div className="destinationdetail-desc">{place.description}</div>
        <div
          className="place-card-genre"
          style={{ width: "100%", margin: "1rem auto" }}
        >
          {place.genres.map((genre) => (
            <div>{genre}</div>
          ))}
        </div>
        <div
          className="place-card-temp"
          style={{ width: "100%", margin: "1rem auto", display: "flex" }}
        >
          <div>
            Current Temp :{" "}
            <b>
              {" "}
              {place.temperature}
              <sup>o</sup>C ,{place.humidity}% Humidity
            </b>
          </div>
          <div
            className="place-card-rating"
            style={{
              marginInlineStart: "1rem",
            }}
          >
            {place.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
