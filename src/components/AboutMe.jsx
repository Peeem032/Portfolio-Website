import React from 'react'
import './AboutMe.css'

function InfoBox({title, children: content}) {
  return (
    <div>
      
       <div className="info-box">
        <p className="info-title">
          {title}
        </p>
        <div className="info-content">
          {content}
        </div>
      </div>
    </div>
  )
}

function AboutMe() {
  return (
    <>
      <div className='aboutMe'>
        AboutMe
      </div>
      <InfoBox title="My Name">
        <p> Pimmanee Boonrit </p>
      </InfoBox>
      <InfoBox title="Like">
        <p> Cat, Boyfriend </p>
      </InfoBox>
      <InfoBox title="My Hobby">
        <p> Coding, Drawing, Eat, Sleep </p>
      </InfoBox>
      <InfoBox>
        <p> นครดารา </p>
      </InfoBox>
    </>
  );
}

export default AboutMe