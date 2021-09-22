import React, {useState, useEffect} from 'react';
import ArrowBox from '../Components/ArrowBox';
import './HomePage.css';
import SvgHeader from '../Components/SvgHeader';
import HttpClient from '../HttpClient';
import {Link} from 'react-router-dom';

/**
 * Returns homepage component
 */
const HomePage = () => {
  const [backgroundUrl, setBackgroundUrl] = useState('');

  useEffect(() => {
    getHomePageImage();
  }, []);

  const getHomePageImage = async () => {
    try {
      const imageUrl = await HttpClient.getNasaImage('GSFC_20171208_Archive_e001427');
      setBackgroundUrl(`url('${imageUrl}')`);
    } catch (err) {
      console.err(err);
    }
  };

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
    <div className="home-container" style={{backgroundImage: backgroundUrl}}>
      <div className="svg-container">
        <div className="svg-header">
         <SvgHeader />
        </div>
        <div className="introduction-text">
        <p>Fullstack JavaScript developer | Enjoys learning how JavaScript works under the hood.</p>
         <p>Passion for frontend web technologies and writing clean code | Loves a good code review!</p>
        </div>
        <div className="home-button-container">
          {externalLinkData.map(link => (
            <button className="home-button">{link.text}
              <Link
                to={link.to}
                target={link.target}
                aria-label={link.ariaLabel}
              >
              </Link>
            </button>
          ))}
        </div>
        <ArrowBox />
      </div>
    </div>
  )
}

export default HomePage;