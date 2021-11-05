import React from 'react';
import ArrowBox from '../Components/ArrowBox';
import SvgHeader from '../Components/SvgHeader';
import { Link } from 'react-router-dom';
import './HomePage.css';

/**
 * Returns homepage component
 */
const HomePage = () => {
  const externalLinkData = [
    {
    to:{pathname:"https://docs.google.com/document/d/1n62VPLj99ntJl5JMbh3I_3doLoJ3Zo5lKY4E4y7gZwo/edit?usp=sharing"},
    target: '#',
    ariaLabel: "Link to my resume",
    text: "Resume"
   },
   {
     to:{pathname:"https://www.linkedin.com/in/riva-davidowski-rivad/"},
     target:'#',
     ariaLabel:"link to LinkedIn account",
     text:"LinkedIn"
   },
   {
     to:{pathname:"https://github.com/RivaD2"},
     target:'#',
     ariaLabel:"link to github account",
     text: "Github"
   },
  ];

  return (
    <div className="home-container" >
      <div className="svg-container">
        <header className="svg-header">
         <SvgHeader />
        </header>
        <div className="introduction-text">
        <p>Fullstack JavaScript developer | Enjoys learning how JavaScript works under the hood.</p>
         <p>Passion for frontend web technologies and writing clean code | Loves a good code review!</p>
        </div>
        <div className="home-button-container">
          {externalLinkData.map(link => (
             <Link
              to={link.to}
              target={link.target}
              aria-label={link.ariaLabel}
              key={link.text}
            >
            <button className="home-button">{link.text}</button>
            </Link>
          ))}
        </div>
        <ArrowBox />
      </div>
    </div>
  )
}

export default HomePage;