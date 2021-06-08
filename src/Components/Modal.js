import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  render() {
    return (
      // onClick attr will call the method that is passed in as prop which is hideModal
      <div className="modal-container" onClick={this.props.hideModal}>
        <div className="modal-body">
          <div className="modal-title">{this.props.projectData.title}</div>
          <div className="close-icon">
            <i className={'window close outline icon'}></i>
          </div>
          <div className="modal-content">
            <div className="modal-image-wrapper">
              <div className="modal-img">
                <video 
                  controls
                  muted 
                  playsInline 
                  loop 
                  preload="auto"
                  className="modal-img"
                  title="Picture of each project's home page"
                >
                  <source src={this.props.projectData.webm_url} type="video/webm" title="Video showing demo of each project"/>
                  <source src={this.props.projectData.mp4_url} type="video/mp4" title="Video showing demo of each project"/>
                </video>
              </div>
            </div>
            <div className="modal-details">
              {this.props.projectData.demo_desc}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;