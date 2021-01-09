import React from 'react';
import ProjectComponent from '../Components/ProjectComponent';
import Modal from "../Components/ModalComponent"
import './ProjectsPage.css';
import Parallax from '../lib/Parallax';

class Projects extends React.Component {
    state = {
      offset: 0,
      projectData: undefined
    };

    projectList = [
      {
        title : 'Pawnee Parks',
        img_url: '', 
        github_url:'',
        tools_used:'',
        text_desc:''
      },
      {
        title: 'Project Pinstrat', 
        img_url: '', 
        github_url:'https://github.com/RivaD2/project-pinstrat',
        tools_used:'MongoDB, bcrypt, Express, Node.js',
        text_desc:'Backend server and database interface for Pinstrat(our client), including encrypted request data and filtered results'
      },
      {
        title: 'Greener', 
        img_url: '',
        github_url:'https://github.com/RivaD2/GreenerFrontEnd',
        tools_used:'React Native, Redux, expo Google Sign-In, expo App Auth, Axios',
        text_desc:'A plant simulator app designed to be a low-stress game experience'
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
          <h1>RIVA DAVIDOWSKI</h1>
          <p className = "header-text-projects">PROJECTS</p>
        </section>
          <div className="arrow-box">
            <div></div>
            <div></div>
            <div></div>
         </div>
        </header>
        {this.projectList.map((projectData,index) => {
            return [
              <ProjectComponent projectData={projectData} showModal={this.showModal}/>,
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
