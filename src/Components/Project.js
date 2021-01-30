import React from 'react';
import './Project.css';

class Project extends React.Component {
  state = {
    image:this.props.projectData.img_url,
  }

    onDemoClick = () => {
      this.props.showModal(this.props.projectData);
    }
    
  render() { 
    const {
      title, 
      img_url,
      tools_used, 
      text_desc, 
      github_url
    } = this.props.projectData;
    
      return (
        <div className="project-container">
          <div className="image-container-wrap">
            <div className="image-container" style={{backgroundImage:`url(${img_url})`}}>
          </div>
          </div>
          <div className="detail-container">
            <div className="project-title">{title}</div>
            <div className="tools-desc-container">
              <div id="tools-used-desc" className="project-text"> <b>TOOLS USED:</b>  
                  <blockquote>{tools_used}
                  </blockquote>
              </div>  
            </div>
          
            <div className ="desc-container"></div>
            <div className="project-desc">
              {/* <p id="movie-night-title-desc">MOVIE NIGHT</p> */}
              <div id="text-desc" className="project-text"><b>ABOUT {title}:</b>
                <blockquote>{text_desc}
                </blockquote> 
              </div>   
            </div>
            <div className="button-spacer"></div>
            <div className="button-container">
              <button className="project-page-button" onClick={this.onDemoClick}>VIEW DEMO</button>
              <a 
                href={github_url} 
                target="RivaD2" 
                className="project-page-button">
                  SOURCE CODE
              </a>
            </div>
          </div>
        </div>
    )
  }
}

export default Project;