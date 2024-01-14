import React, { useState } from "react";
import "../../Style/Article/article.css";

import { storiesData } from "../../Data/StoryCardData";
import Comment from "./Comment";

const ArticleContent = (props) => {
  const [showComment, setShowComment] = useState(false);
  const toggleComment = () => {
    setShowComment(!showComment);
  };
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
        <div className="article-ico">
          <div className="article-comment" onClick={toggleComment}>
            <i class="fa-regular fa-comment"></i>
          </div>
          <div className="article-share" style={{}}>
            <i class="fa-regular fa-share-from-square"></i>
          </div>
          <div className="article-bookmark" style={{}}>
            <i class="fa-regular fa-bookmark"></i>
          </div>
        </div>
        {showComment && <Comment />}
      </div>
    </div>
  );
};

export default ArticleContent;
