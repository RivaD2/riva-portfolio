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
                    <div className="modal-img" style={{backgroundImage:`url(${this.props.projectData.gif_url})`}}>
                    </div>
                      {/* <img 
                        src={this.props.projectData.gif_url} 
                        alt="project-gif"
                        className="modal-gif"
                      /> */}
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