import React from 'react';
import './HomePage.css';

const Home = props => {
  //this is a functional Component so it has no 'this' or 'state'
  //if we needed state, I would convert it to a class Component
  const backgroundImage = `url('${props.backgroundImage}')`;
  return (
    <div className="home-container" style={{backgroundImage}}>
      <div>
        <div className="greeting-text">RIVA DAVIDOWSKI</div>
        {/* <p className="greeting-text-two">Front End Focused Engineer</p>
        <p> with Full Stack Experience</p> */}
      </div>
      <div>
        <button className="project-button">VIEW PROJECTS</button>
      </div> 
    </div>
  )
}
export default Home;