import React from "react";
import "../../Style/Article/article.css";

import { storiesData } from "../../Data/StoryCardData";

const ArticleContent = (props) => {
  const desiredStory = storiesData.find((story) => story.id === props.name);
  return (
    <div className="article-top">
      <div className="article-inner-top">
        <div className="article-auth-detail">
          <div className="article-heading">{desiredStory.title}</div>
          <div className="article-auth-img">
            <img src="https://xsgames.co/randomusers/avatar.php?g=male"></img>
          </div>
          <div className="article-auth-name">By Anurag Roshan</div>
          <div className="article-publish-date">{desiredStory.published}</div>
          <div className="article-publish-date">5 min read</div>
        </div>
        <div className="article-content">{desiredStory.content}</div>
      </div>
    </div>
  );
};

export default ArticleContent;
