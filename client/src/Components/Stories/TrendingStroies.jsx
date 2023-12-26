import React from "react";

const TrendingStroies = ({ trend, genre }) => {
  const storiesData = [
    {
      img: "https://images.unsplash.com/photo-1593194730473-425a256c55bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Jaipur",
      title: "The Moon Men of Mexico’s Sonoran Desert",
      description:
        "The El Pinacate and Gran Desierto de Altar Biosphere Reserve can seem otherworldly - but did the Apollo 11 astronauts actually train here?",
      author: "Anurag Roshan",
      published: "Published 2d ago",
    },
    {
      img: "https://images.unsplash.com/photo-1662730738534-1ca761dfafcf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Mexico",
      title: "The Moon Men of Mexico’s Sonoran Desert",
      description:
        "The El Pinacate and Gran Desierto de Altar Biosphere Reserve can seem otherworldly - but did the Apollo 11 astronauts actually train here?",
      author: "Anurag Roshan",
      published: "Published 1d ago",
    },
    {
      img: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbCUyMGluJTIwaW5kaWF8ZW58MHwwfDB8fHww",
      location: "Mexico",
      title: "The Moon Men of Mexico’s Sonoran Desert",
      description:
        "The El Pinacate and Gran Desierto de Altar Biosphere Reserve can seem otherworldly - but did the Apollo 11 astronauts actually train here?",
      author: "Anurag Roshan",
      published: "Published 3d ago",
    },
    {
      img: "https://images.unsplash.com/photo-1600402808924-9c591a6dace8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Mexico",
      title: "The Moon Men of Mexico’s Sonoran Desert",
      description:
        "The El Pinacate and Gran Desierto de Altar Biosphere Reserve can seem otherworldly - but did the Apollo 11 astronauts actually train here?",
      author: "Anurag Roshan",
      published: "Published 4d ago",
    },
    {
      img: "https://images.unsplash.com/photo-1561400930-ab18eb910ee5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Mexico",
      title: "The Moon Men of Mexico’s Sonoran Desert",
      description:
        "The El Pinacate and Gran Desierto de Altar Biosphere Reserve can seem otherworldly - but did the Apollo 11 astronauts actually train here?",
      author: "Anurag Roshan",
      published: "Published 5d ago",
    },
    {
      img: "https://images.unsplash.com/photo-1662730738534-1ca761dfafcf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Mexico",
      title: "The Moon Men of Mexico’s Sonoran Desert",
      description:
        "The El Pinacate and Gran Desierto de Altar Biosphere Reserve can seem otherworldly - but did the Apollo 11 astronauts actually train here?",
      author: "Anurag Roshan",
      published: "Published 6d ago",
    },
  ];

  return (
    <div className="story-genre-top">
      <div className="trending-stories-inner-top">
        <div className="trenidng-stories-head">
          {trend} {genre} Stories
        </div>
        <div className="trending-stories-list">
          {storiesData.map((story, index) => (
            <div key={index} className="trending-stories-item">
              <img src={story.img} alt="" />
              <div className="trending-story-list-detail">
                <div>{story.location}</div>
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
                <div>226 Likes</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingStroies;
