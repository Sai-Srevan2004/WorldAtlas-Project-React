import React from 'react'
import '../Css/Home.css'
import About from './About'

const Home = () => {
  return (
    <>
    <div className='hero-section'>
        <div className="sec-1">
             <h2>Explore The World, One Country At a Time</h2>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In tempora temporibus ad, magni ducimus omnis nostrum voluptate.</p>
             <button>
              start Exploring
             </button>
        </div>
        <div className="sec-2">
          <img src="https://www.shutterstock.com/image-photo/famous-monuments-world-grouped-together-260nw-313571078.jpg" alt="img" />
        </div>
    </div>
    <About/>
    </>
  )
}

export default Home
