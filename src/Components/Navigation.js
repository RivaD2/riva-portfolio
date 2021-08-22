import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

/**
 * Returns Nav component
 */
const Navigation  = () => {
  const navBarData = [
    {
     to:{pathname:"https://docs.google.com/document/d/1n62VPLj99ntJl5JMbh3I_3doLoJ3Zo5lKY4E4y7gZwo/edit?usp=sharing"},
     target: '#',
     ariaLabel: "Link to my resume",
     imageSrc: "/images/cv-icon.png",
     text: "Resume"
    },
    {
      to:{pathname:"https://www.linkedin.com/in/riva-davidowski-rivad/"},
      target:'#',
      ariaLabel:"link to LinkedIn account",
      imageSrc: "/images/linkedin-logo.png",
      text:"LinkedIn"
    },
    {
      to:{pathname:"https://github.com/RivaD2"},
      target:'#',
      ariaLabel:"link to github account",
      imageSrc: "/images/github-image2.png",
      text: "Github"
    },
    {
      to:"/",
      ariaLabel:"Link to home page",
      iconClassName:"home icon",
      text:"Home"
    },
    {
      to:"/about",
      ariaLabel:"Link to about me page",
      iconClassName: "address book icon",
      text: "About"
    }
  ]

  return (
    <div className="navbar-container" id="mySidenav">
      {navBarData.map(link => (
        <Link
          to={link.to}
          target={link.target}
          className="sidenav-item"
          aria-label={link.ariaLabel}
        >
          {link.imageSrc ?
            <img
              src={link.imageSrc}
              alt={link.ariaLabel}
              className="sidenav-image"
            />  :
            <div className="sidenav-image sidenav-icon">
              <i className={link.iconClassName} title={link.ariaLabel}></i>
            </div>
          }
          <div className="header-logo">
           {link.text}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Navigation;
