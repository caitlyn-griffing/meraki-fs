import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'

function About() {
  return (
    <div id='about'>
      <div id="inside">
        <h2>About Me</h2>
        <div className='aboutme' id="bioPhoto">
          <p>Hello</p>
        </div>
        <div className='aboutme' id="bioText">
          <h3>~JACK OF ALL TRADES, MASTER OF SOME~</h3>
          <p>My name is Caitlyn and I'm a Full-Stack Web Developer!
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