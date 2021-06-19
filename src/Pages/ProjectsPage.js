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
    projectListData: []
  };

  componentDidMount = () => {
    this.fetchNasaImages();
    this.fetchProjectDetails();
    // Turns off parallax for mobile
    if(window.innerWidth < 600) return;
    window.addEventListener('scroll', this.parallaxShift);
  }

  fetchNasaImages = async () => {
    try {
      const imageIdArray = ['PIA12833', 'PIA23002','GSFC_20171208_Archive_e001500', 'GSFC_20171208_Archive_e000720'];
      const imagesArray = await Promise.all(
        imageIdArray.map(image => {
          return HttpClient.getNasaImage(image);
        })
      )
      this.setState({
        projectPageNasaImages: imagesArray
      });
    } catch (err) {
      console.log(err);
    }
  }

  fetchProjectDetails = async () => {
    try {
      const projectListData = await HttpClient.getProjectListData();
      this.setState({
        projectListData
      });
    } catch (err) {
      console.log(err);
    }
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
    });
  }

  hideModal = () => {
    this.setState({
      projectData: undefined
    });
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
      {this.state.projectListData.map((projectListData,index) => {
        return [
          <Project projectData={projectListData} showModal={this.showModal} key={projectListData.title}/>,
          <Parallax 
            className="parallax-divider-container" 
            shift={1.5}
            minWidth={600}
            key={'parallax' + projectListData.title}
           >
            <div className="api-image"
              style={{backgroundImage: `url(${this.state.projectPageNasaImages[index]})`}}>
            </div>
          </Parallax>
        ]})
      }
      <div className="to-top-container">
        <button className="project-page-button to-top" onClick={() => window.scrollTo(0,0)}>BACK TO TOP</button>
      </div>
    </div>
    )
  }
}

export default Projects;
