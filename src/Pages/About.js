import React from 'react'
import { Link } from 'react-router-dom';
import SvgHeader from '../Components/SvgHeader';
import './About.css';

/**
 * Returns the About me page
 */
const About = () => {
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
        <button className="about-project-button">
          <Link to="/"> PROJECTS</Link>
        </button>
      </div> 
    )
}
export default About;