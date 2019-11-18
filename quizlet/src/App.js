import React, { useState } from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

function SocialCard(props) {
  const [index, setCount] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleNext = e => {
    setShowTranslation(false);
    setCount(index + 1);
  };
  const handlePrevious = e => {
    setShowTranslation(false);
    setCount(index - 1);
  };
  const displayTranslation = e => {
    setShowTranslation(true);
  };
  return (
    <>
      <div className="flex-container">
        <div className="row">
          <p className="TweetTextSize" onClick={displayTranslation}>
            {props.text[index].dutch}
          </p>
        </div>
        <div className="row">
          <p
            className={
              showTranslation === true ? "translation fadeIn" : "translation"
            }
          >
            {props.text[index].engels}
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="row footer">
          <div className="icons">
            <button
              disabled={index === 0 ? true : false}
              onClick={handlePrevious}
            >
              <FontAwesomeIcon icon={faArrowCircleLeft} />
            </button>
            <span>
              {index + 1}/{props.text.length}
            </span>
            <button
              disabled={index === props.text.length - 1 ? true : false}
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </button>
          </div>
        </div>
      </div>
    </>
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
