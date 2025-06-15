import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
      <div className="navigation">
        <div className="home-nav button_nav"> Home </div>
        <div className="aboutMe-nav button_nav"> About Me </div>
        <div className="project-nav"> Project </div>
      </div>  
    </div>
  )
}

export default Header