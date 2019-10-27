import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRetweet, faComment, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function SocialCard(props){
  return (
    <div className="flex-container">
      <div className="row">
        <div className="col1">
          <div className="card-icon"/>
        </div>
        <div className="col2">
          <div>
            <span>{props.name}</span>
            
            <span>{props.screen_name}</span>
          </div>
        </div>
        <div className="col3">
          <div className="follow">Follow</div>
        </div>
        <div className="col4">
          <FontAwesomeIcon icon={faChevronDown} size="xs" color="#657786"/>
        </div>  
      </div>
      <div className="row">
        <p className="TweetTextSize">{props.text}</p> 
      </div>
      <div className="row">
        <span className="js-display-url">idangero.us/swiper/</span>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faRetweet} />
        <FontAwesomeIcon icon={faHeart}/>
      </div>
    </div>
  )
}

function App() {
  const apiReturn = {
    name: "iDangero.us",
    screen_name: "@idangerous",
    text: "Swiper updated to new 4.4.0 version with new Thumbs component and lot of fixes"
  }

  return (
    <div>
      <SocialCard title="hello world" {...apiReturn}/>
    </div>
  );
}

export default App;
