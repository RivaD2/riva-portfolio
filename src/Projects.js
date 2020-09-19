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
          <div className="arrow-box">
          <div></div>
          <div></div>
          <div></div>
         </div>
        </header>
        

        
       

        <div className="project-container">
          <div className="movie-container">
          <div className="image-container">
            <div className="project-image">
          
          <div className="img-title">MOVIE NIGHT</div>
          <div className="tools-desc-container">
            <div className="tools-used-desc">TOOLS USED:  
            Nodemon, PostgreSQL, JS, HTML, CSS, EJS, ES6, 
                  Express.js, Heroku, Github, Trello, and public API from themoviedb.org. 
                  Credit for the background images used on this project goes to Netflix.
              </div>  
              </div>
            <div className="button-container">
            <button className="project-page-button">VIEW DEMO</button>
            <button className="project-page-button">VIEW CODE</button>
            </div>
          </div>
          </div>
          
          <div className ="desc-container"></div>
            <div className="project-desc">
              {/* <p id="movie-night-title-desc">MOVIE NIGHT</p> */}
              <div id="text-desc">ABOUT MOVIE NIGHT: This app makes it easy to pick a movie from a recommendation list based of 
                ratings. The user can choose which movies to watch based of this list and add them to a watchlist.
                The project used a public API to get movie data and the user can choose which movies to watch based of this list. They can then add movies to the watchlist and delete movies from the watchlist. This involved setting up a server
                ,using various SQL commands, creating GET and POST routes and storing data in a database. 
                </div>   
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