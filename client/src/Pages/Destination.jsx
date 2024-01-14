import React from "react";
import { useParams } from "react-router-dom";
import "../Style/Destination/destination.css";
import DestinationBanner from "../Components/Destination/DestinationBanner";
import { placeData } from "../Data/PlaceData";
import DestinationDetail from "../Components/Destination/DestinationDetail";
import DestinationPackage from "../Components/Destination/DestinationPackage";

const Destination = () => {
  const { id } = useParams();
  const selectedPlace = placeData.find((place) => place.place === id);

  return (
    <>
      <section style={{ height: "60vh" }}>
        <DestinationBanner place={selectedPlace} />
      </section>
      <section style={{ height: "max-content" }}>
        <DestinationDetail place={selectedPlace} />
      </section>
      <section style={{ height: "max-content" }}>
        <DestinationPackage place={selectedPlace} />
      </section>
    </>
  );
};

export default Destination;
