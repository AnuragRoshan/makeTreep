import React from "react";
import "../Style/Stories/storybanner.css";
import Storybanner from "../Components/Stories/Storybanner";
import StoryGenre from "../Components/Stories/StoryGenre";

const Stories = () => {
  return (
    <div>
      <section>
        <Storybanner />
      </section>
      <section>
        <StoryGenre />
      </section>
    </div>
  );
};

export default Stories;
