import React from "react";
import PlaceCard from "./PlaceCard";
import { placeData } from "../../Data/PlaceData";
const PlaceList = () => {
  return (
    <div className="place-list-top">
      <div className="place-list-elements">
        {placeData.map((item, index) => {
          return <PlaceCard place={item} />;
        })}
      </div>
    </div>
  );
};

export default PlaceList;
