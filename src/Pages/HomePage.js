import React from 'react';
import './HomePage.css';
import SvgHeader from '../components/SvgHeader';
import {Link} from 'react-router-dom';

const HomePage = props => {
  const {backgroundImage} = props;
  const image = `url('${backgroundImage}')`;
  return (
    <div className="home-container" style={{backgroundImage: image}}>
      <div>
        <div className="svg-container">
         <SvgHeader />
        </div>
      </div>
      <div>
        <Link to="/projects">
        <button 
          className="project-button">VIEW PROJECTS</button>
        </Link>
      </div> 
    </div>
  )
}

export default HomePage;