import React from "react";
import "../../Style/stories.css";
const Stories = () => {
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
                srcset=""
                className="head-image"
              />
            </div>
            <div className="stories-content-inner-right">
              <div className="stories-content-inner-right-story1">
                <div className="inner-right-story1-img">
                  <img
                    src="https://images.unsplash.com/photo-1626761627604-f27d98885f4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    srcset=""
                  />
                </div>
                <div
                  className="inner-right-story1-detail"
                  style={{
                    display: "flex",
                    justifyContent: "center", // center horizontally
                    alignItems: "flex-start", // center vertically
                    alignSelf: "flex-start",
                    lineHeight: "2.5rem", // align at the start vertically
                  }}
                >
                  <div
                    style={{
                      flex: "1",
                      fontSize: "1.5rem",
                      color: "#4b4b4b",
                    }}
                  >
                    Mythology
                  </div>
                  <div
                    style={{
                      flex: "2",
                      fontSize: "1.5rem",
                      color: "#023047",
                      fontWeight: "600",
                    }}
                  >
                    jhsfas iausfh s asiufhasf ua uiahfui s ufga fiuasf{" "}
                  </div>
                  <div
                    style={{ flex: "1", fontSize: "1rem", color: "#121212" }}
                  >
                    10-June-2022 - 5 min read
                  </div>
                </div>
                <div className="inner-right-story1-bkmrk">
                  <i class="fa-regular fa-bookmark"></i>
                </div>
              </div>
              <div className="stories-content-inner-right-story2">
                <div className="inner-right-story1-img">
                  <img
                    src="https://images.unsplash.com/photo-1631867675167-90a456a90863?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyJTIwZm9ydHN8ZW58MHwwfDB8fHwy"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="inner-right-story1-detail">detail</div>
                <div className="inner-right-story1-bkmrk">
                  <i class="fa-regular fa-bookmark"></i>
                </div>
              </div>
              <div className="stories-content-inner-right-story3">
                <div className="inner-right-story1-img">
                  <img
                    src="https://images.unsplash.com/photo-1676465997765-4e37e9da8cde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFoYWJhbGlwdXJhbSUyMHRlbXBsZXxlbnwwfDB8MHx8fDI%3D"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="inner-right-story1-detail">detail</div>
                <div className="inner-right-story1-bkmrk">
                  <i class="fa-regular fa-bookmark"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
