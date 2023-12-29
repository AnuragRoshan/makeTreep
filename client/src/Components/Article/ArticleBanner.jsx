import React from "react";
import "../../Style/Article/article.css";
import { storiesData } from "../../Data/StoryCardData";

const ArticleBanner = (props) => {
  const desiredStory = storiesData.find((story) => story.id === props.name);
  console.log(desiredStory);
  return (
    <div
      className="article-banner"
      style={{ backgroundImage: `url(${desiredStory.img})` }}
    >
      {props.name}
    </div>
  );
};

export default ArticleBanner;
