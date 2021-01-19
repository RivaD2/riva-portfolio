import React from 'react'

export default class About extends React.Component {
render() {
    return (
        <div className="about-container">
          <div className="headshot">
          <img src="./Riva.jpg" alt="profile" />
            <button 
                // onClick={this.props.setPage('About')}
                className="project-button">
                HOME
            </button>
          </div>
        </div> 
    )
  }
}