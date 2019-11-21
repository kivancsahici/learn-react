import React, { useState } from "react";
import "./App.scss";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

function SocialCard(props) {
  const [showTranslation, setShowTranslation] = useState(false);

  const onSlideChange = e => {
    setShowTranslation(false);
  };

  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      slideChange: onSlideChange
    },
    spaceBetween: 30
  };

  const displayTranslation = e => {
    setShowTranslation(true);
  };

  return (
    <Swiper {...params}>
      {props.text.map((item, key) => (
        <div className="slide">
          <div className="row">
            <p className="TweetTextSize" onClick={displayTranslation}>
              {item.dutch}
            </p>
          </div>
          <div className="row">
            <p
              className={
                showTranslation === true ? "translation fadeIn" : "translation"
              }
            >
              {item.engels}
            </p>
          </div>
        </div>
      ))}
    </Swiper>
  );
}

function App() {
  const apiReturn = {
    name: "iDangero.us",
    screen_name: "@idangerous",
    text: [
      { dutch: "goedemorgen", engels: "good morning" },
      { dutch: "kinderen", engels: "children" },
      { dutch: "allemaal", engels: "everyone" },
      { dutch: "de cursus", engels: "the course" }
    ]
  };

  return (
    <div>
      <SocialCard title="hello world" {...apiReturn} />
    </div>
  );
}

export default App;
