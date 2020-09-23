import React from 'react';
import './HomePage.css';
//there are two types of react Components: class Components which have constructor and render etc.
// there are functional Components which are just functions that return the render value of the Component
function Home(props) {
  //this is a functional Component so it has no 'this' or 'state'
  //if we needed state, I would convert it to a class Component
  const backgroundImage = `url('${props.backgroundImage}')`;
  console.log('Rendering Home Image with props', props)
  console.log('backgroundImage is', backgroundImage);
    return (
        <div className="home-container" style={{backgroundImage}}>
        <div className="wrapper">
          <div className="banner-text">
            <div className="greeting-text">HELLO, I'M RIVA DAVIDOWSKI</div>
            <p className="greeting-text-two">Front End Focused Engineer with Full Stack Experience</p>
            <p className="animation-text"><span></span></p>
           <button className="project-button">VIEW PROJECTS</button>
          </div>
        </div>
        </div>

    )
}
export default Home;