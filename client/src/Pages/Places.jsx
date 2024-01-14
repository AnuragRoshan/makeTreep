import React from "react";
import Genrebanner from "../Components/Genre/Genrebanner";
import PlaceBanner from "../Components/Places/PlaceBanner";
import TrendingStroies from "../Components/Stories/TrendingStroies";
import FilterPlace from "../Components/Places/FilterPlace";
import PlaceList from "../Components/Places/PlaceList";
import "../Style/Place/place.css";

const Places = () => {
  return (
    <div>
      <section style={{ height: "80vh" }}>
        <PlaceBanner />
      </section>
      <section style={{ height: "max-content" }}>
        <FilterPlace />
      </section>
      <section style={{ height: "max-content" }}>
        <PlaceList />
      </section>
    </div>
  );
};

export default Places;
