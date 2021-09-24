import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  onVideoClick = e => {
    e.stopPropagation();
  }

  render() {
    const { hideModal, projectData } = this.props;
    return (
      <div className="modal-container" onClick={hideModal}>
        <div className="modal-body">
          <div className="modal-title">{projectData.title}</div>
          <div className="close-icon">
            <i className={'window close outline icon'}></i>
          </div>
          <div className="modal-content">
            <div className="modal-image-wrapper">
              <div className="modal-img" onClick={this.onVideoClick}>
                <video 
                  controls
                  muted 
                  playsInline 
                  loop 
                  preload="auto"
                  className="modal-img"
                  title="Video to demo project selected"
                >
                  <source src={projectData.webm_url} type="video/webm" title="Video showing demo of each project"/>
                  <source src={projectData.mp4_url} type="video/mp4" title="Video showing demo of each project"/>
                </video>
              </div>
            </div>
            <div className="modal-details">
              {projectData.demo_desc}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;