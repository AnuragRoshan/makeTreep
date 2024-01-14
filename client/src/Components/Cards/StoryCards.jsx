import React from "react";
import { Link } from "react-router-dom";

const StoryCards = (props) => {
  const story = props.story;
  return (
    // <div>
    <div className="trending-stories-item">
      <div className="story-img">
        <Link to={`/article/${story.id}`}>
          <img src={story.img} alt="" />
        </Link>
      </div>
      <div className="trending-story-list-detail">
        <div className="story-location"> {story.location}</div>
        <div className="story-title">{story.title}</div>
        <div className="story-desc">{story.description}</div>
        <div className="story-auth" style={{ display: "flex" }}>
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            alt=""
            srcset=""
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          />
          {story.author}
        </div>
        <div className="story-published">{story.published}</div>
        <div
          className="story-like"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div style={{ color: "black", fontSize: "1.2rem" }}> 226</div>{" "}
          <div className="ico-likes">
            <i
              class="fa-solid fa-ticket"
              style={{
                color: "#023047",
                fontSize: "1.5rem",
                rotate: "120deg",
              }}
            ></i>
          </div>
          <div className="ico-bookmark" style={{ marginLeft: "auto" }}>
            <i className="fa-regular fa-bookmark "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCards;
