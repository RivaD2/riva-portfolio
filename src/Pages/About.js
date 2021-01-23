import React from 'react'
import {Link} from 'react-router-dom';
import SvgHeader from '../components/SvgHeader';
import './About.css';

export default class About extends React.Component {
render() {
    return (
        <div className="about-container">
          <div className="headshot-container">
          <img src="/images/riva-banner-image.png" alt="profile" className="headshot"/>
          </div>
          <div className="svg-smaller">
            <SvgHeader />
          </div>
          <Link to="./projects">
            <button 
                className="project-button">
                Projects
            </button>
            </Link>
        </div> 
    )
  }
}