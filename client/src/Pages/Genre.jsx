import React from "react";
import { useParams } from "react-router-dom";
import Genrebanner from "../Components/Genre/Genrebanner";
import TrendingStroies from "../Components/Stories/TrendingStroies";
import { data } from "../Data/StoryGenre";
const Genre = () => {
  const { id } = useParams();
  return (
    <div>
      <section style={{ height: "80vh" }}>
        <Genrebanner genre={id} />
      </section>

      <section style={{ height: "max-content" }}>
        <TrendingStroies trend={"Latest"} genre={data[id].title} limit={3} />
      </section>
      <section style={{ height: "max-content" }}>
        <TrendingStroies trend={"Featured"} genre={data[id].title} limit={5} />
      </section>
      <section style={{ height: "max-content" }}>
        <TrendingStroies trend={"All"} limit={8} />
      </section>
    </div>
  );
};

export default Genre;
