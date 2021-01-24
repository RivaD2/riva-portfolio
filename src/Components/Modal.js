import React from 'react';
import './Modal.css';

class Modal extends React.Component {
    render() {
        return (
            // onClick attr will call the method that is passed in as prop which is hideModal
            <div className="modal-container" onClick={this.props.hideModal}>
                <div className="modal-body">
                <div className="modal-title">{this.props.projectData.title}</div>
                    <div className="modal-content">
                        <div className="modal-img">
                            <img 
                              src={this.props.projectData.gif_url} 
                              alt="project-gif"
                              className="modal-gif"
                            />
                        </div>
                        <div className="modal-details">
                        <div className="close-icon">
                        <i className={'window close outline icon'}></i>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;