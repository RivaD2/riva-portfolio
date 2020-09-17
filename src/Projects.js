import React from 'react';
import './App.css';
import './Projects.css';

class Projects extends React.Component {
  constructor() {
    super()
  
    this.state = {
      offset: 0
    };
  }
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
        </header>

        <div className="arrow-box">
          <span></span>
          <span></span>
          <span></span>
         </div>

        <div className="project-container">
          <div ClassName ="move-night-container"></div>
          <div className="project-image" id="movie-night-image">
          <p>MOVIE NIGHT</p>
          </div>
          <div ClassName ="movie-night-desc-container">
          <div className="project-desc">
          The app’s purpose is to have group members choose which product, of the three displayed images,
          that they would be most likely to purchase. I had to store, calculate, and visually display the 
          resulting data using Chart.js.
          </div>
          </div>
        </div>
        </div>
    )
  }
}
export default Projects;
// React uses function to generate HTML
//in React partials are constructors or functions