import React from "react";
import "../../Style/Home/stories.css";

const Stories = () => {
  const storiesData = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1631867675167-90a456a90863?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyJTIwZm9ydHN8ZW58MHwwfDB8fHwy",
      category: "Ancient History",
      title: "jhsfas iausfh s asiufhasf ua uiahfui s ufga fiuasf",
      date: "10-June-2022",
      readTime: "5 min read",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1626761627604-f27d98885f4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Solo Travel",
      title: "jhsfas iausfh s asiufhasf ua uiahfui s ufga fiuasf",
      date: "10-June-2022",
      readTime: "5 min read",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1676465997765-4e37e9da8cde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFoYWJhbGlwdXJhbSUyMHRlbXBsZXxlbnwwfDB8MHx8fDI%3D",
      category: "Mythology",
      title: "jhsfas iausfh s asiufhasf ua uiahfui s ufga fiuasf",
      date: "10-June-2022",
      readTime: "5 min read",
    },
    // Add more story data as needed
  ];

  return (
    <div className="stories-top">
      <div className="stories-inner-top">
        <div className="stories-head">
          Dive into our latest captivating stories
        </div>
        <div className="stories-content">
          <div className="stories-content-inner">
            <div className="stories-content-inner-left">
              <img
                src="https://images.unsplash.com/photo-1667883643032-44d947274f7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Qm9kaCUyMEdheWF8ZW58MHwxfDB8fHwy "
                alt=""
                srcSet=""
                className="head-image"
              />
            </div>
            <div className="stories-content-inner-right">
              {storiesData.map((story) => (
                <div
                  key={story.id}
                  className={`stories-content-inner-right-story1`}
                >
                  <div className="inner-right-story1-img">
                    <img src={story.imgUrl} alt="" />
                  </div>
                  <div
                    className="inner-right-story1-detail"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        flex: "1",
                        fontSize: "1.5rem",
                        color: "#4b4b4b",
                      }}
                    >
                      {story.category}
                    </div>
                    <div
                      style={{
                        flex: "2",
                        fontSize: "1.5rem",
                        color: "#023047",
                        fontWeight: "600",
                      }}
                    >
                      {story.title}
                    </div>
                    <div
                      style={{ flex: "1", fontSize: "1rem", color: "#121212" }}
                    >
                      {`${story.date} - ${story.readTime}`}
                    </div>
                  </div>
                  <div className="inner-right-story1-bkmrk">
                    <i className="fa-regular fa-bookmark"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
