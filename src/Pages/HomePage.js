import React, {useState, useEffect} from 'react';
import './HomePage.css';
import SvgHeader from '../Components/SvgHeader';
import HttpClient from '../HttpClient';
import {Link} from 'react-router-dom';

/**
 * Returns homepage component
 */
const HomePage = props => {
  const [backgroundUrl, setBackgroundUrl] = useState('');
  
  useEffect(() => { 
    (async () => {
      const imageUrl = await HttpClient.getNasaImage('GSFC_20171208_Archive_e001427');
      setBackgroundUrl(`url('${imageUrl}')`);
    })();
  }, []);

  return (
    <div className="home-container" style={{backgroundImage: backgroundUrl}}>
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