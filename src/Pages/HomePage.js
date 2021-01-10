import React from 'react';
import './HomePage.css';
import SvgHeader from '../components/SvgHeader';

const HomePage = props => {
  const {backgroundImage, setPage} = props;
  const image = `url('${backgroundImage}')`;
  return (
    <div className="home-container" style={{backgroundImage: image}}>
      <div>
        <div className="svg-container">
         <SvgHeader />
        </div>
      </div>
      <div>
        <button 
          onClick={() => setPage('Projects')} 
          className="project-button">VIEW PROJECTS</button>
      </div> 
    </div>
  )
}

export default HomePage;