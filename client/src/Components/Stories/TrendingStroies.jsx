import React from "react";
import { storiesData } from "../../Data/StoryCardData";
import StoryCards from "../Cards/StoryCards";

const TrendingStroies = ({ trend, genre, limit }) => {
  return (
    <>
      {storiesData ? (
        <>
          <div className="story-genre-top">
            <div className="trending-stories-inner-top">
              <div className="trenidng-stories-head">
                {trend} {genre}
                <div className="line"></div>
              </div>
              <div className="trending-stories-list">
                {storiesData.slice(0, limit).map((story, index) => (
                  <StoryCards story={story} index={index} />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default TrendingStroies;
