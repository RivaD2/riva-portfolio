import React from 'react';
import './ProjectComponent.css';

class ProjectComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onDemoClickCallback = this.onDemoClick.bind(this);
    }
    onDemoClick() {
      console.log(this.props.projectData.title + ' was clicked!');
      this.props.showModal(this.props.projectData);
    }
    render() { return (
        <div className="project-container">
          <div className="image-container">
              <img src={this.props.projectData.img_url} alt="project-gif"className="project-gif"></img>
          </div>
          <div className="movie-container">
            <div className="project-title">{this.props.projectData.title}</div>
            <div className="tools-desc-container">
              <div id="tools-used-desc" className="project-text"> <b>TOOLS USED:</b>  
                  <blockquote>{this.props.projectData.tools_used}
                  </blockquote>
              </div>  
            </div>
          
            <div className ="desc-container"></div>
            <div className="project-desc">
              {/* <p id="movie-night-title-desc">MOVIE NIGHT</p> */}
              <div id="text-desc" className="project-text"><b>ABOUT {this.props.projectData.title}:</b>
                <blockquote>{this.props.projectData.text_desc}
                </blockquote> 
              </div>   
            </div>
            <div className="button-spacer"></div>
            <div className="button-container">
              <button className="project-page-button" onClick={this.onDemoClickCallback}>VIEW DEMO</button>
              <a href={this.props.projectData.github_url} target="RivaD2" className="project-page-button">SOURCE CODE</a>
              <button className="project-page-button">LIVE VERSION </button>
            </div>
          </div>
        </div>
    )}
}

export default ProjectComponent;