import React from "react";
import "../../Style/Home/testimonial.css";
const Testimonial = () => {
  return (
    <div className="test-top">
      <div className="test-top">
        <div className="test-head">TESTIMONIAL</div>
      </div>
      <div className="test-bottom">
        <div className="test-cust">
          <div className="test-cust-list">
            <div className="list-img">
              <img src="https://xsgames.co/randomusers/avatar.php?g=male"></img>
            </div>
            <div className="list-name">Anurag Roshan</div>
            <div className="list-review">
              "Indie Trek provided an immersive journey into unexplored realms.
              Seamless navigation, captivating stories, and breathtaking
              visuals. An unforgettable adventure awaits!"
            </div>
          </div>
          <div className="test-cust-list">
            <div className="list-img">
              <img src="https://xsgames.co/randomusers/avatar.php?g=female"></img>
            </div>
            <div className="list-name"> Lana James</div>
            <div className="list-review">
              "Embarking on an Indie Trek was a transformative experience. From
              hidden gems to thrilling escapades, the website curated an
              extraordinary journey."
            </div>
          </div>
          <div className="test-cust-list">
            <div className="list-img">
              <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"></img>
            </div>
            <div className="list-name">Hemant Singh</div>
            <div className="list-review">
              "Indie Trek's unique itineraries brought my travel dreams to life.
              Seamless planning, breathtaking locations, and unforgettable
              memories. A must-visit for wanderlust enthusiasts!"
            </div>
          </div>
          <div className="test-cust-list">
            <div className="list-img">
              <img src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"></img>
            </div>
            <div className="list-name">Sushant Nair</div>
            <div className="list-review">
              "A trailblazing adventure with Indie Trek. Impeccable service,
              diverse destinations, and an authentic travel experience. A
              delightful platform for those seeking offbeat journeys. Kudos"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
