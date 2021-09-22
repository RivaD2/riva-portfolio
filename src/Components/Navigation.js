import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

/**
 * Returns Nav component
 */
const Navigation  = () => {
  const navBarData = [
    {
      to:"/",
      ariaLabel:"Link to home page",
      iconClassName:"home icon",
      text:"Home"
    },
    {
      to:"/about",
      ariaLabel:"Link to about me page",
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
          {link.iconClassName &&
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
