import React from "react";
import "../Style/Stories/storybanner.css";
import Storybanner from "../Components/Stories/Storybanner";
import StoryGenre from "../Components/Stories/StoryGenre";
import TrendingStroies from "../Components/Stories/TrendingStroies";
import TrendingAuthor from "../Components/Stories/TrendingAuthor";

const Stories = () => {
  return (
    <div>
      <section>
        <Storybanner />
      </section>
      <section style={{ height: "max-content" }}>
        <StoryGenre />
      </section>
      <section style={{ height: "max-content" }}>
        <TrendingStroies />
      </section>
      <section style={{ height: "max-content" }}>
        <TrendingAuthor />
      </section>
    </div>
  );
};

export default Stories;
