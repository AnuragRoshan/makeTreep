import React, { useEffect, useState } from "react";
import "../../Style/Home.css";

const Intro = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      const imgElement = document.querySelector(".img-1");

      if (imgElement) {
        if (window.scrollY >= 310) {
          imgElement.classList.add("img-1-animation");
        }
      }
    };

    // Add scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const himachal =
    "https://images.unsplash.com/photo-1597997460843-0cd4a131f040?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGltYWNoYWwlMjBwcmFkZXNoJTIwaW5kaWF8ZW58MHwxfDB8fHwy";
  const uttrakhand =
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXR0cmFraGFuZCUyMGluZGlhfGVufDB8MXwwfHx8Mg%3D%3D";
  const Kashmir =
    "https://images.unsplash.com/photo-1642746502666-3f037d768625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S2FzaG1pciUyMFNub3clMjBNb3VudGFpbiUyMGluZGlhfGVufDB8MXwwfHx8Mg%3D%3D";

  return (
    <div className="intro-top">
      <div className="intro-inner-top">
        <div className="intro-inner-head">
          {" "}
          <span
            style={{ borderBottom: "0.4rem solid grey", padding: "0.3rem" }}
          >
            Wander into Unseen Wonders
          </span>
        </div>
        <div className="intro-inner-images">
          <div className="intro-inner-image-desc" style={{ color: "#023047" }}>
            Discover The Himalyas With <span> IndieTrek</span>
          </div>
          <div className="intro-inner-image-desti">
            <div
              style={{
                flex: "1",
                marginInline: "1rem",
                height: "80%",
              }}
            >
              <img src={himachal} alt="" srcSet="" />
              <span
                style={{
                  fontSize: "1.5rem",
                  borderBlockEnd: "0.2rem solid brown",
                  alignItems: "center",
                }}
              >
                HIMACHAL
              </span>
            </div>
            <div style={{ flex: "1", height: "80%" }}>
              <img src={uttrakhand} alt="" srcSet="" />
              <span
                style={{
                  fontSize: "1.5rem",
                  borderBlockEnd: "0.2rem solid brown",
                }}
              >
                UTTRAKHAND
              </span>
            </div>
            <div
              style={{
                flex: "1",
                marginInline: "1rem",
                height: "80%",
              }}
            >
              <img src={Kashmir} alt="" srcSet="" />
              <span
                style={{
                  fontSize: "1.5rem",
                  borderBlockEnd: "0.2rem solid brown",
                }}
              >
                KASHMIR
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
