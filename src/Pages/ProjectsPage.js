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
        img_url: '',
        gif_url: '',
        github_url:'',
        tools_used:'React, Redux, Axios, Semantic-UI, MongoDB',
        text_desc:'Aqaba by Miram Mirini is a fragrance site that carries an amazing product, Aqaba. ' +
        'I decided to rebuild the site and give it a completely new look while still keeping the Jordanian influence and appeal the site and product had to offer. ',
        demo_desc: '',
      },
      {
        title: 'Project Pinstrat', 
        img_url: '/images/pinstrat-jpg.jpg',
        gif_url:'/images/pinstrat-gif.gif', 
        github_url:'https://github.com/RivaD2/project-pinstrat',
        tools_used:'MongoDB, bcrypt, Express, Node.js',
        text_desc:'Project Pinstrat involved building a back-end server and database interface for Pinstrat(our client) as well as encrypted request data and filtered results. ',
        demo_desc: 'My contributions: ' + 
        '- set up all crud routes, the database and the Mongoose Schema. I also worked with ' + 
        ' the client to implement encryption on the request to prevent access to game data that players haven\'t unlocked during gameplay.'
      },
      {
        title: 'Greener', 
        img_url: '',
        gif_url: '',
        github_url:'https://github.com/RivaD2/GreenerFrontEnd',
        tools_used:'React Native, Redux, Expo Google Sign In, Expo Google Oauth, Axios',
        text_desc:'A game site modeled after Tamagatchi designed to help people relax. ' +
        'Login is possible through a form submission or OAuth. This app allows the user to perform actions on the plant and gain currency.',
        demo_desc:'',
      },
      {
        title: 'Movie Night', 
        img_url: '',
        gif_url: '',
        github_url:'https://github.com/RivaD2/Movie-Night',
        tools_used:'PostgreSQL, Vanilla JS, Express, the Movie Database Api (TMDb)',
        text_desc:'Movie Night makes it easy for a user to pick a movie from a recommendation list based of ratings. ' + 
        'The user can choose which movies to watch based of this list and add them to a watchlist.',
        demo_desc: '',
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
