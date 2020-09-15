import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="banner-text">
            <h1 class="greeting-text">HELLO, I'M RIVA DAVIDOWSKI</h1>
            <p class="greeting-two-text">Front End Focused Engineer with Full Stack Experience</p>
            <button class="project-button">VIEW PROJECTS</button>
          </div>
        </header>
        <ul class="navbar-container">
          <li>
            <img src="/images/cv-icon.png" class="header-logo" alt="resume"></img>
      <a  href="placeholder" class="nav-link">My resume</a>
          </li>
          <li>
          <img src="/images/email.png" class="header-logo" alt="contact"></img>
      <a  href="placeholder" class="nav-link">Contact Me</a>
      </li>
      <li>
          <img src="/images/github-image2.png" class="header-logo" alt="github"></img>
      <a  href="placeholder" class="nav-link">GitHub</a>
      </li>
      <li>
          <img src="/images/linkedin-logo.png" class="header-logo" alt="linkedin"></img>
      <a  href="placeholder" class="nav-link">LinkedIn</a>
      </li>
      </ul>
      <div className="column-container">
        <div className="column" id="column-one">
          <div className="project-container">
            <div className="project-image" id="raw-materials-image">
            </div>
            <div className="project-title">
              Raw Materials
            </div>
            <div className="project-desc">
            A smooth looking, modern online shopping experience for high-end quality morning 
            beverage products like whole leaf tea and whole bean coffee.
            </div>
          </div>
        </div>
        <div className="column" id="column-two">
        <div className="project-container">
        <div className="banner-image">
          </div>
            <div className="bio-title">
              About Me: 
            </div>
            <div className="bio-desc">
            Hello, my name is Riva Davidowski and I’m a Software Engineer. I started learning  Russian when 
            I was a child and since then  I’ve become fascinated with languages. 
            On my journey to find meaningful work, I discovered a love for coding because it presents a similar 
            language challenge. I’ve spent most of my professional career solving customer-facing issues 
            and have acquired a diverse set of skills across various industries.
           I approach learning with curiosity and I believe that this trait is useful because it allows 
           me to learn new skills quickly. I’m passionate about problem-solving and approach troubleshooting 
           with the customer’s perspective in mind. This skill along with my passion for understanding 
           the way things work is why I would be an asset to any team.

            </div>
          </div>
          <div className="project-container">
            <div className="project-image" id="busMall-image">
              
            </div>
            <div className="project-title">
             BusMall
            </div>
            <div className="project-desc">
            The app’s purpose is to have group members choose which product, of the three displayed images,
            that they would be most likely to purchase. I had to store, calculate, and visually display the 
            resulting data using Chart.js.
            </div>
          </div>
        </div>
        <div className="column" id="column-three">
        <div className="project-container">
            <div className="project-image" id="movie-night-image">
              
            </div>
            <div className="project-title">
             Movie Night
            </div>
            <div className="project-desc">
            Movie Night makes it easy for a user to pick a movie from a 
            recommendation list based of ratings. The project used a public API, SQL, and Heroku.
            </div>
          </div>
        </div>


      </div>

















    </div>
      
  );
}

export default App;
