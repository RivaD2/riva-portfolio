import React from 'react';
import Project from '../components/Project';
import Modal from "../components/Modal"
import Parallax from '../lib/Parallax';
import SvgHeader from '../components/SvgHeader';
import ArrowBox from '../components/ArrowBox';
import './ProjectsPage.css';

class Projects extends React.Component {
    state = {
      offset: 0,
      projectData: undefined
    };

    projectList = [
      {
        title : 'Aqaba',
        img_url: '/images/aqaba.png',
        gif_url: '/videos/aqaba.webm',
        github_url:'', 
        tools_used:'React, React-Spring, React Responsive Carousel, React Router DOM, Axios, Material-UI, CSS, and my API-server',
        text_desc:'Aqaba by Miram Mirini is a fragrance site that carries a product I\'m interested in, Aqaba. ' +
        'I decided to rebuild the site and give it a completely new look while still keeping the Jordanian influence and appeal the site and product have to offer. ',
        demo_desc: 'My goals for this project are to solidify my knowledge of Function components, Class-based components, component hierarchy, ' + 
        'state management, and incorporation of third party libaries. \n\n I want this site to feel more modern with clean navigation, design and functionality and so far I\'ve successfully been able to hit my MVP for this e-commerce site. \n\n' + 
        'A user arrives at the landing page, is presented with clear navigation and ways to search, and can add/remove items from their cart. \n\n' + 
        'This project is still in progress and future goals include: Implementing OAuth login so a user can sign in with Google, refactoring components to use Redux or Context API for state management, building a Checkout page to conclude the e-commerce flow, building out the Gifts page to include the rest of Miriam Mirini\'s products as well as an option for the user to easily get back to the Product page from the Cart. ',
      },
      {
        title: 'Greener', 
        img_url: '/images/greenerLogin.png',
        gif_url: '/videos/greenerLogin.webm',
        github_url:'https://github.com/RivaD2/GreenerFrontEnd',
        tools_used:'React Native, Redux, Expo Google Sign In, Expo Google Oauth, Axios',
        text_desc:'A game site modeled after Tamagatchi designed to help people relax. ' +
        'Login is possible through a form submission or OAuth. This app allows the user to perform actions on a plant to gain currency.',
        demo_desc:'Through this week long project I implemented front-end to back-end OAuth via Google and built out the front-end action buttons. \n\n ' + 
        ' I extracted Terriarum logic into its own component for reuse and created the action buttons that increment in-game currency for the user. \n\n' + 
        'This was a challenging project as we all had different ideas of what our scope should be to hit MVP. Working on this project solidified my understanding into why writing clean code matters and how code reviews can not only help us to become a better developers, but also provide insight into our teammates\' commits, feature tasks, and the direction of the project as a whole.'
      },
      {
        title: 'Project Pinstrat', 
        img_url: '/images/pinstrat-jpg.jpg',
        gif_url:'/videos/pinstrat.webm', 
        github_url:'https://github.com/RivaD2/project-pinstrat',
        tools_used:'MongoDB, Bcrypt, Express, Node.js',
        text_desc:'Project Pinstrat involved building a back-end server and database interface for Pinstrat(our client) as well as encrypted request data and filtered results. ',
        demo_desc: 'For this project I took on the role as PM and was responsible for communicating client needs to the rest of our team. I also ' + 
        'set up the CRUD routes, the database and the MongoDB Schema and Model.\n\n ' + 
        'I worked with the client to implement encryption on the request to prevent access to game data that players haven\'t unlocked during gameplay. \n\n' + 
        'Originally, the client (another developer) had all ' + 
        'game data in a JSON file. It was our job to create a DB so his data was secure and add filtering and encryption of the game data.'
      },
      {
        title: 'Movie Night', 
        img_url: './images/home.png',
        gif_url: './videos/movie-night.webm',
        github_url:'https://github.com/RivaD2/Movie-Night',
        tools_used:'PostgreSQL, Vanilla JS, Express, the Movie Database Api (TMDb)',
        text_desc:'Movie Night makes it easy for a user to pick a movie from a recommendation list based of ratings. ' + 
        'The user can choose which movies to watch based off this list and add them to a watchlist.',
        demo_desc: 'I played a key role in the overall styling of this project and created the MovieDetail page and Watchlist page which enable the users to add and delete movies from a watchlist. \n\n' + 
        'Initially this project made Ajax calls to the Movie DB Api via Superagent and then queried the DB using PostgreSQL. \n\n ' +
        'Recently I decided to migrate the backend from PostgreSQL to my personal API server by creating a new Mongoose Schema and Model that mirrored the table in PostgreSQL. From there, I refactored the routes to use Axios to make the Ajax calls instead.'
      }
    ]

  componentDidMount() {
    console.log(window.innerWidth);
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
                  style={{backgroundImage: `url(${this.props.parallaxImgArray[index]})`}}>
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
