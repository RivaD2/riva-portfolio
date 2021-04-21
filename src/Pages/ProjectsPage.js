import React from 'react';
import HttpClient from '../HttpClient';
import Project from '../Components/Project';
import Modal from "../Components/Modal"
import Parallax from '../lib/Parallax';
import SvgHeader from '../Components/SvgHeader';
import ArrowBox from '../Components/ArrowBox';
import './ProjectsPage.css';

class Projects extends React.Component {
  state = {
    offset: 0,
    projectData: undefined,
    projectPageNasaImages: new Array(3),
  };

  projectList = [
    {
      title : 'Aqaba',
      img_url: '/images/aqaba.png',
      webm_url: '/images/aqaba(1).webm',
      mp4_url: 'https://s3-us-west-2.amazonaws.com/nazarov.artemexmachina.com/rivad2/aqaba.mp4',
      github_url:'https://github.com/RivaD2/aqaba', 
      tools_used:'React, React-Spring, React Responsive Carousel, React Router DOM, OAuth 2.0 with Google APIs, Axios, Material-UI, CSS, and my API-server',
      text_desc:'Aqaba by Miram Mirani is a fragrance site that carries a product I\'m interested in: Aqaba perfumes. ' +
      'I decided to rebuild the site and give it a completely new, modern look while still keeping the Jordanian influence and appeal of the original site. ',
      demo_desc: 'This ongoing project has helped to solidify my knowledge of Function components, Class-based components, component hierarchy, ' + 
      'state management, and incorporating third party libraries. \n\n I want this site to feel more modern that the current Aqaba site, with clean navigation, design, and functionality. I\'ve successfully been able to hit my MVP for this e-commerce site but continue to work on additional features. \n\n' +  
      'Future goals of this project include: finishing OAuth login using Google Developers API, refactoring components to use Redux or Context API for state management, completing the checkout page to complete the e-commerce flow, and additional CSS styling.',
    },
    {
      title: 'Greener', 
      img_url: '/images/greenerLogin.png',
      webm_url: '/images/greenerLogin.webm',
      mp4_url: 'https://s3-us-west-2.amazonaws.com/nazarov.artemexmachina.com/rivad2/greenerLogin.mp4',
      github_url:'https://github.com/RivaD2/GreenerFrontEnd',
      tools_used:'React Native, Redux, Expo, Sign In With Google, Google App Auth, Axios',
      text_desc:'A casual game app modeled after Tamagatchi designed to help people relax. ' +
      'The app allows the user to perform actions on a plant to gain currency for upgrading and expanding their terrarium. Login is possible through form submission or OAuth. ',
      demo_desc:'Through this week-long project I implemented front-end to back-end OAuth via Google. \n\n ' + 
      ' I refactored duplicated logic into a standalone component for reuse, and created the action buttons that reward in-game currency to the user. \n\n' + 
      'Working on this project solidified to me the importance of writing clean code and provided insight into coding patterns and how to manage feature tasks progress.'
    },
    {
      title: 'Project Pinstrat', 
      img_url: 'images/pinstrat-jpg.jpg',
      webm_url:'/images/pinstrat.webm', 
      mp4_url: 'https://s3-us-west-2.amazonaws.com/nazarov.artemexmachina.com/rivad2/pinstrat.mp4',
      github_url:'https://github.com/RivaD2/project-pinstrat',
      tools_used:'MongoDB, Mongoose, Bcrypt, Express.js, Node.js',
      text_desc:'Project Pinstrat involved building a back-end server and database interface for Pinstrat (our client, an existing in-production application) as well as encrypting HTTP request data and filtering results. ',
      demo_desc: 'For this project I took on the role of project manager and was responsible for communicating client needs to the rest of our team. I also ' + 
      'set up the CRUD routes, the database and the MongoDB Schema and Model.\n\n ' + 
      'Pinstrat provides customized gameplay feedback to users from a game-generated hash. I worked with the client to implement encryption on the request to prevent access to game data that players haven\'t unlocked during gameplay. \n\n' + 
      'Originally, the client was using game data hardcoded in a JSON file and shipped with the app. It was our task to create a database so the game data could be dynamic and secure.'
    },
    {
      title: 'Movie Night', 
      img_url: './images/home.png',
      webm_url: 'https://s3-us-west-2.amazonaws.com/nazarov.artemexmachina.com/rivad2/movie-night.webm',
      mp4_url: '/images/movie-night.mp4',
      github_url:'https://github.com/RivaD2/Movie-Night',
      tools_used:'PostgreSQL, EJS, Express.js, the Movie Database API (TMDb)',
      text_desc:'Movie Night makes it easy for a user to pick a movie from a recommendation list based on ratings. ' + 
      'The user can find top-rated movies and add them to a watchlist.',
      demo_desc: 'I took the lead role in the overall styling of this project and created the MovieDetail page, which presents movie information and the option to add it to the watchlist, and the Watchlist page, which enables a user to see and delete movies from the watchlist. \n\n' + 
      'Initially this project used Superagent to query the Movie Database API and fetch from the local PostgreSQL database. \n\n ' +
      'Recently I migrated the backend from PostgreSQL to my personal MongoDB API server by creating a new Mongoose Schema and Model to mirror the table from PostgreSQL. From there, I refactored the routes to use Axios instead of Superagent.'
    }
  ]

  componentDidMount = async () => {
    const imageIdArray = ['PIA12833', 'PIA23002','GSFC_20171208_Archive_e001500', 'GSFC_20171208_Archive_e000720'];
    const imagesArray = await Promise.all(
      imageIdArray.map(image => {
        return HttpClient.getNasaImage(image);
      })
    )
    this.setState({
      projectPageNasaImages: imagesArray
    })
    // Turns off parallax for mobile
    if(window.innerWidth < 600) return;
    window.addEventListener('scroll', this.parallaxShift);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }
  
  // Setting parallax offset for header
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };

  showModal = projectData => {
    this.setState({
      projectData: projectData
    })
  }

  hideModal = () => {
    this.setState({
      projectData: undefined
    })
  }

  render() {
    const {projectData, offset} = this.state;

    return (
    <div className="projects-container">
      {projectData &&
        (<Modal projectData={projectData} hideModal={this.hideModal}/>)
      }
      <header className='header-background'style={{ backgroundPositionY: offset / 2}}>
        <section className='info-container'style={{ marginBottom: offset / 3 }}>
          <div className="svg-projects">
            <SvgHeader />
          </div>
            <p className="header-text-projects">PROJECTS</p>
          <ArrowBox />
        </section>
      </header>
        {this.projectList.map((projectData,index) => {
            return [
              <Project projectData={projectData} showModal={this.showModal}/>,
              <Parallax 
                className="parallax-divider-container" 
                shift={1.5}
                minWidth={600}
              >
                <div className="api-image"
                  style={{backgroundImage: `url(${this.state.projectPageNasaImages[index]})`}}>
                </div>
             </Parallax>
            ]
         })
        }
        <div className="to-top-container">
         <button className="project-page-button to-top" onClick={() => window.scrollTo(0,0)}>BACK TO TOP</button>
        </div>
    </div>
    )
  }
}

export default Projects;
