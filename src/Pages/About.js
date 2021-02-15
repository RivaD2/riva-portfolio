import React from 'react'
import {Link} from 'react-router-dom';
import SvgHeader from '../components/SvgHeader';
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
          <p className="bio-info">My fascination with coding mirrors my love for language learning because both require real dedication, persistence, and push you outside of your comfort zone.</p> 
          <p className="bio-info">I find that I like to focus my efforts on delivering code that is clean, consistent, and customer focused.</p> 
          <p className="bio-info">Because of my varied background, I have shown that I can learn new technologies to solve problems, that I am curious and eager to learn, and that I am someone who really sets the bar high for the work I deliver.</p>
          <p className="bio-info"> In my free time you can find me: 
          <br/>
            <li>Hangin' around on static trapeze (I love all circus arts)</li>
            <li>Handstands, lots and lots of handstands</li>
            <li>Tending to my many plants and playin' with my cat Ragnar</li>
            <li>Sketching and working with Acrylic and Watercolors</li>
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