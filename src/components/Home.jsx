import React from 'react'
import './Home.css'
// import myImage from 'assert/.star.jp

function Home() {
  return (
    <div>
        <div className='head-text'>
            Hello, I'm <span className='gradient-text'> Pimmy </span>
        </div>
        <div className='description'>
            <p className='text'>
                Welcome to my little web space this is my personal website
            </p>  
            <p className='text'>
                I’m learning to build web projects and explore front-end development.
            </p>
            <div className='Img-star-large'>
                <img src="star-large.png" alt="star" />
            </div>
            <div className='Img-star-small'>
                <img src="star-small.png" alt="star" />            
            </div>
        </div>
    </div>

  )
}

export default Home