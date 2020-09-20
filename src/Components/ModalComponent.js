import React from 'react';
import './ModalComponent.css';

class ModalComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            // onClick attr will call the method that is passed in as prop which is hideModal
            <div className="modal-container" onClick={this.props.hideModal}>
                <div className="modal-content">
                    <div className="modal-img">
                        <img src={this.props.projectData.img_url} alt="project-gif"className="modal-gif"></img>
                    </div>
                    <div className="modal-details">
                        <div className="modal-title">{this.props.projectData.title}</div>
                        <button className="project-page-button">CLOSE </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalComponent;