import React, { useEffect } from "react";
import "../Style/Stories/storybanner.css";
import Storybanner from "../Components/Stories/Storybanner";
import StoryGenre from "../Components/Stories/StoryGenre";
import TrendingStroies from "../Components/Stories/TrendingStroies";
import TrendingAuthor from "../Components/Stories/TrendingAuthor";

const Stories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div>
      <section style={{ height: "80vh" }}>
        <Storybanner />
      </section>
      <section style={{ height: "max-content" }}>
        <StoryGenre />
      </section>
      <section style={{ height: "max-content" }}>
        <TrendingStroies trend={"Trending Stories"} />
      </section>
      <section style={{ height: "max-content" }}>
        <TrendingAuthor />
      </section>
      <section style={{ height: "max-content" }}>
        <TrendingStroies trend={"Latest Stories"} />
      </section>
    </div>
  );
};

export default Stories;
