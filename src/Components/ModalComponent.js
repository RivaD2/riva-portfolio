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
                <img src={this.props.img_url} alt="project-gif"className="modal-gif"></img>
                <button className="project-page-button">CLOSE </button>
            </div>
        )
    }
}

export default ModalComponent;