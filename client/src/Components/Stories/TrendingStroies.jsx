import React from "react";
import { storiesData } from "../../Data/StoryCardData";
import { Link } from "react-router-dom";

const TrendingStroies = ({ trend, genre, limit }) => {
  return (
    <>
      {storiesData ? (
        <>
          <div className="story-genre-top">
            <div className="trending-stories-inner-top">
              <div className="trenidng-stories-head">
                {trend} {genre} Stories
                <div className="line"></div>
              </div>
              <div className="trending-stories-list">
                {storiesData.slice(0, limit).map((story, index) => (
                  <Link to={`/article/${story.id}`}>
                    <div key={index} className="trending-stories-item">
                      <img src={story.img} alt="" />
                      <div className="trending-story-list-detail">
                        <div> {story.location}</div>
                        <div>{story.title}</div>
                        <div>{story.description}</div>
                        <div style={{ display: "flex" }}>
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
                        <div>{story.published}</div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div style={{ color: "black", fontSize: "1.2rem" }}>
                            {" "}
                            226
                          </div>{" "}
                          <i
                            class="fa-regular fa-heart"
                            style={{ color: "#023047", fontSize: "1.5rem" }}
                          ></i>
                          <div style={{ marginLeft: "auto" }}>
                            <i class="fa-regular fa-bookmark"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
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
