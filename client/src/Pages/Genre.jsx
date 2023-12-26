import React from "react";
import Storybanner from "../Components/Stories/Storybanner";
import { useParams } from "react-router-dom";
import Genrebanner from "../Components/Genre/Genrebanner";

const Genre = () => {
  const { id } = useParams();
  return (
    <div>
      <section style={{ height: "100vh" }}>
        <Genrebanner genre="culturalTour" />
      </section>
    </div>
  );
};

export default Genre;
