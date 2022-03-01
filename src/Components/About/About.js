import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
const selfie = require('./images/selfie.jpeg')

function About() {
  return (
    <div id='about'>
      <div id="inside">
        <h2>About <span className='pink'>Me</span></h2>
        <div className='aboutme' id="bioPhoto">
          <img src={ selfie } alt="" />
        </div>
        <div className='aboutme' id="bioText">
          <h3><span className='pink'>JACK</span> OF ALL TRADES, <span className='pink'>MASTER</span> OF SOME</h3>
          <p>My name is <span className='pink'>Caitlyn</span> and I'm a <span className='pink'>Full-Stack Web Developer</span>!
          I attended Southern Methodist University to further my career goal with Full Stack Development.</p>
          <br />
          <p>A forever student in this rapidly transforming industry, I'm eager to stay up to date with technical advances through continued coursework and professional development</p>
          <br />
          <p>
          With FRONT-END DEVELOPMENT I am using the latest standards with HTML5/CSS3 with added functionality using JavaScript, jQuery, React.js, many CSS frameworks
          With BACK-END DEVELOPMENT applications I am using Node.js, Express.js, MySQL, Mongo DB Databases
          </p>
          <br />
          <p>My objective is to obtain a key position within a stable yet dynamic organization, which will allow me to utilize my production, communications, and interpersonal capabilities toward the growth and success of myself, my teammates, and our clients in a positive and meaningful way. I want to ensure quality, fulfillment, precision, and excellence.</p>
        </div> 
      </div>
    </div>
  )   
}

export default About