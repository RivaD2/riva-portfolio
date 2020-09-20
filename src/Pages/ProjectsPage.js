import React from 'react';
import ProjectComponent from '../Components/ProjectComponent';
import Modal from "./Components/ModalComponent"
import './ProjectsPage.css';

class Projects extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      offset: 0,
      modalImage: undefined
    };

    this.projectList = [
      {
        title : 'Movie Night',
        img_url: '/images/movie-night-image.png', 
        tools_used:'Balsamiq,HTML, CSS,JavaScript, EJS, ES6, Nodemon, Postgresql, Express.js, Heroku, Github, Trello, and public API from themoviedb.org. Credit for the background images used on this project goes to Netflix.',
        text_desc:'This app makes it easy to pick a movie from a recommendation list based of ratings. The user can choose which movies to watch based of this list and add them to a watchlist. The project used a public API to get movie data and the user can choose which movies to watch based of this list. They can then add movies to the watchlist and delete movies from the watchlist. This involved setting up a server,using various SQL commands, creating GET and POST routes and storing data in a database.'
      },
      {title: 'Raw Materials', 
      img_url: 'images/raw-materials-image.png', 
      tools_used:'HTML, jQuery, JavaScript, CSS, local storage ',
      text_desc:'A smooth looking, modern online shopping experience for high-end quality morning beverage products. Users can add items to a cart and save the items. They can delete the items and the amount due is upated. '
      },
      {title: 'Bus Mall', 
      img_url: 'images/busMall-image.png',
      tools_used:'HTML, CSS, vanilla JavaScript',
      text_desc:'The BusMall project challenge was to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side)The app’s purpose is to have group members choose which product, of the three displayed images, that they would be most likely to purchase. I had to store, calculate, and visually display the resulting data using Chart.js'
      }
    ]
  
  }
//code for Paralax
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
  
  //name of component is always the same as name of file
  //each component is combo of JS and HTML
  /*There are two things that components have that make them React components
    - props: is how a parent communicates to child. They are read only from childs perspective
    -state: how a component manages itself so it can read, write, edit its own state and no other
    components know about its state
    - each componenet is self-contained and props is how they are connected
    */
   //parens tell react that I am switching from JS to HTML
  render() {
    return (
    <div className="projects-container">
      {/* rather than if statement I did an inline boolean
      if this is falsy, React will ignore it */}
      {this.state.modalImage !== undefined &&
        (<Modal img_url={this.state.modalImage}></Modal>)
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
        {this.projectList.map(projectData => {
          console.log(projectData);
          return [
            //I passed projectData (an obj) into the object Component as a prop
            //A prop is the react word for data that is passed into a Component
            <ProjectComponent projectData={projectData}></ProjectComponent>,
            <div className="parallax-divider-container"/>
          ]
        })
        }
    </div>
    )
  }
}
export default Projects;
// React uses function to generate HTML
//in React partials are constructors or functions