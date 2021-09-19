import React, {useState, useEffect} from 'react';
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
    const imageUrl = await HttpClient.getNasaImage('GSFC_20171208_Archive_e001427');
    setBackgroundUrl(`url('${imageUrl}')`);
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
         <p>Hello there! I am a fullstack JavaScript developer who enjoys
         learning about how JavaScript works under the hood and I seek to understand concepts on a deeper level.</p>
         <p>I focus on my efforts onbuilding exciting features using frontend web technologies and writing clean code (and I absoutely love a good review)!</p>
         <p>As a lifelong learner, I work to improve my understanding and execution of code through daily practice and
          continuous study.
         </p>
        </div>
        <div className="external-button-container">
          {externalLinkData.map(link => (
            <button className="project-button">{link.text}
              <Link
                to={link.to}
                target={link.target}
                aria-label={link.ariaLabel}
              >
              </Link>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage;