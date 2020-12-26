import React from 'react';
import ProjectComponent from '../Components/ProjectComponent';
import Modal from "../Components/ModalComponent"
import './ProjectsPage.css';
import Parallax from '../lib/Parallax';

class Projects extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      offset: 0,
      projectData: undefined
    };

    this.projectList = [
      {
        title : 'Movie Night',
        img_url: '/images/movie-night-image.png', 
        github_url:'https://github.com/RivaD2/Movie-Night',
        tools_used:'Balsamiq,HTML, CSS,JavaScript, EJS, ES6, Nodemon, Postgresql, Express.js, Heroku, Github, Trello, and public API from themoviedb.org. Credit for the background images used on this project goes to Netflix.',
        text_desc:'This app makes it easy to pick a movie from a recommendation list based of ratings. The user can choose which movies to watch based of this list and add them to a watchlist. The project used a public API to get movie data and the user can choose which movies to watch based of this list. They can then add movies to the watchlist and delete movies from the watchlist. This involved setting up a server,using various SQL commands, creating GET and POST routes and storing data in a database.'
      },
      {
        title: 'Raw Materials', 
        img_url: 'images/raw-materials-image.png', 
        github_url:'https://github.com/RivaD2/Raw-Material',
        tools_used:'HTML, jQuery, JavaScript, CSS, local storage ',
        text_desc:'A smooth looking, modern online shopping experience for high-end quality morning beverage products. Users can add items to a cart and save the items. They can delete the items and the amount due is upated. '
      },
      {
        title: 'Bus Mall', 
        img_url: 'images/busMall-image.png',
        github_url:'https://github.com/RivaD2/Bus-Mall',
        tools_used:'HTML, CSS, vanilla JavaScript',
        text_desc:'The BusMall project challenge was to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side)The app’s purpose is to have group members choose which product, of the three displayed images, that they would be most likely to purchase. I had to store, calculate, and visually display the resulting data using Chart.js'
      }
    ]
  
  }
//code for Parallax
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

  /*showModal code:
    - I can pass showModal function to the ProjectComponents (movie night, raw materials, etc.)
    - The components can call the showModal function and pass in their specific img_url
    */
  
  showModal = (projectData) => {
    this.setState({
      projectData: projectData
    })
  }

  //hideModal Code:
  hideModal = () => {
    this.setState({
      projectData: undefined
    })
  }

  render() {
    return (
    <div className="projects-container">
      {this.state.projectData !== undefined &&
      /* passed in img_url and hideModal function as props
        -Inside the ModalComponent code, the img_url tells the component what image to show
        -Inside the ModalComponent code, the hideModal function tells the component HOW to close the modal
        by calling the function*/
        (<Modal projectData={this.state.projectData} hideModal={this.hideModal}></Modal>)
      }
      <header 
          className='header-background'
          style={{ backgroundPositionY: this.state.offset / 2}}
        >
          <section
            className='info-container'
            style={{ marginBottom: this.state.offset / 3 }}
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
                  style={{ backgroundImage: `url(${this.props.parallaxImgArray[index]})` }}>
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
