import React from 'react';
import HttpClient from '../HttpClient';
import Project from '../Components/Project';
import Modal from "../Components/Modal"
import Parallax from '../lib/Parallax';
import './ProjectsPage.css';


class Projects extends React.Component {
  state = {
    projectData: undefined,
    projectPageNasaImages: new Array(3),
    projectListData: []
  };

  componentDidMount = () => {
    this.fetchNasaImages();
    this.fetchProjectDetails();
  }

  /**
   * Fetches Nasa images from Nasa Image and Video library
   * @returns {Promise} Promise that takes in array of images from API and returns a single promise
   * that resolves to an array of results(images) from API
   */
  fetchNasaImages = async () => {
    try {
      const imageIdArray = ['PIA12833', 'PIA23002','GSFC_20171208_Archive_e001500', 'GSFC_20171208_Archive_e000720','GSFC_20171208_Archive_e000877','sts083-507-023','PIA06939'];
      console.log(imageIdArray);
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

  /**
   * Fetches project data from json file
   */
  fetchProjectDetails = async () => {
    try {
      const projectListData = await HttpClient.getProjectListData();
      this.setState({
        projectListData
      });
    } catch(err) {
      console.log(err);
    }
  }
  
  /**
   * Shows modal for demo
   * @param  {object} projectData project data from json file
   */
  showModal = projectData => {
    this.setState({
      projectData: projectData
    });
  }

  /**
   * Hides demo modal when there is no project data to display
   */
  hideModal = () => {
    this.setState({
      projectData: undefined
    });
  }

  render() {
    const { projectData } = this.state;
    return (
    <div className="projects-container">
      {projectData &&
        (<Modal projectData={projectData} hideModal={this.hideModal}/>)
      }
      <header className='header-background'>
        <p className="header-text-projects">PROJECTS</p>
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
