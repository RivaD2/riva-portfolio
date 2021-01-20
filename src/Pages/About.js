import React from 'react'

export default class About extends React.Component {
showAbout = (about) => {
  this.setState({
    about
  })
}
render() {
    return (
        <div className="about-container">
          <div className="headshot">
          <img src="./Riva.jpg" alt="profile" />
            <button 
                className="project-button">
                HOME
            </button>
          </div>
        </div> 
    )
  }
}