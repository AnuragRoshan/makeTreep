import React from "react";
import "../Style/Stories/storybanner.css";
import Storybanner from "../Components/Stories/Storybanner";
import StoryGenre from "../Components/Stories/StoryGenre";
import TrendingStroies from "../Components/Stories/TrendingStroies";
import TrendingAuthor from "../Components/Stories/TrendingAuthor";

const Stories = () => {
  return (
    <div>
      <section style={{ height: "70vh" }}>
        <Storybanner />
      </section>
      <section style={{ height: "max-content" }}>
        <StoryGenre />
      </section>
      <section style={{ height: "max-content" }}>
        <TrendingStroies trend={"Trending"} />
      </section>
      <section style={{ height: "max-content" }}>
        <TrendingAuthor />
      </section>
      <section style={{ height: "max-content" }}>
        <TrendingStroies trend={"Latest"} />
      </section>
    </div>
  );
};

export default Stories;
