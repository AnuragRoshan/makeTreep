import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { placeData } from "../Data/PlaceData";
import DestinationBanner from "../Components/Destination/DestinationBanner";
const Package = () => {
  const { id } = useParams();
  const [packageData, setPackageData] = useState([]);

  //   useEffect(() => {
  //   }, []);

  return (
    <div>
      <section style={{ height: "55vh" }}>Hello</section>
    </div>
  );
};

export default Package;
