import React from 'react';
import './HomePage.css';

const HomePage = props => {
  const {backgroundImage, setPage} = props;
  const image = `url('${backgroundImage}')`;
  return (
    <div className="home-container" style={{backgroundImage: image}}>
      <div>
        <div className="greeting-text">RIVA DAVIDOWSKI</div>
      </div>
      <div>
        <button onClick={() => setPage('Projects')} className="project-button">VIEW PROJECTS</button>
      </div> 
    </div>
  )
}

export default HomePage;