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
        title : 'Pawnee Parks',
        img_url: '',
        gif_url: '',
        github_url:'',
        tools_used:'',
        text_desc:''
      },
      {
        title: 'Project Pinstrat', 
        img_url: '/images/pinstrat-jpg.jpg',
        gif_url:'/images/pinstrat-gif.gif', 
        github_url:'https://github.com/RivaD2/project-pinstrat',
        tools_used:'MongoDB, bcrypt, Express, Node.js',
        text_desc:'Backend server and database interface for Pinstrat(our client), including encrypted request data and filtered results'
      },
      {
        title: '', 
        img_url: '',
        if_url: '',
        github_url:'',
        tools_used:'',
        text_desc:''
      }
    ]

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };

  showModal = (projectData) => {
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
        (<Modal 
          projectData={projectData} 
          hideModal={this.hideModal}
        />)
      }
      <header 
        className='header-background'
        style={{ backgroundPositionY: offset / 2}}
        >
        <section
          className='info-container'
          style={{ marginBottom: offset / 3 }}
          >
          <div className="svg-smaller">
            <SvgHeader />
          </div>
          <p className = "header-text-projects">PROJECTS</p>
          <ArrowBox />
        </section>
        </header>
        {this.projectList.map((projectData,index) => {
            return [
              <Project projectData={projectData} showModal={this.showModal}/>,
              <Parallax className="parallax-divider-container" shift={1.5}>
                <div className="api-image"
                  style={{backgroundImage: `url(${this.props.parallaxImgArray[index]})`}}>
                </div>
              </Parallax>
            ]
        })
        }
    </div>
    )
  }
}
export default Projects;
