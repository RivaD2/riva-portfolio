import React from 'react'
import {Link} from 'react-router-dom';
import SvgHeader from '../Components/SvgHeader';
import './About.css';

export default class About extends React.Component {
render() {
    return (
      <div className="about-container">
          <div className="headshot-container">
            <div className="svg-about">
              <SvgHeader />
            </div>
            <img src="/images/riva.png" alt="headshot" className="profile-image"/>
        </div>
        <div className="text-container">
          <p className="bio-info">My background has been varied and I've had the opportunity to build high-end lighting fixtures at an architectural/design firm, walk people through HoloLens demos at Microsoft, and cook as a line chef on two of Seattle's food trucks.</p>
          <p className="bio-info">I took an interest in coding when I was in search of a true challenge&mdash;both personally and professionally&mdash;and wanted to use my organizational skills and eye for detail to solve real world problems.</p> 
          <p className="bio-info">I've always loved learning languages. My fascination with coding mirrors my love for language learning because both require real dedication, persistence, and push you outside of your comfort zone.</p> 
          <p className="bio-info">Thus far in my coding journey, I've found that I like to focus my efforts on delivering code that is clean, consistent, and customer focused.</p> 
          <p className="bio-info">I've shown that I can learn new technologies to solve problems, that I'm incredibly curious and eager to learn, and that I am someone who really sets the bar high for the work I deliver.</p>
          <p className="hobby-text"> <b>In my free time you can find me:</b> 
          <br/>
            <li>Hangin' around on static trapeze (I love all circus arts)</li>
            <li>Handstands, lots and lots of handstands</li>
            <li>Tending to my many plants and playing with my cat Ragnar</li>
            <li>Studying languages, specifically Russian and German</li>
            <li>Sketching and painting with acrylic and watercolors</li>
            <li>Coding!</li>
          </p>
        </div>
        <Link to="./projects">
          <button 
              className="project-button about-project-button">
              BACK TO PROJECTS
          </button>
          </Link>
      </div> 
    )
  }
}