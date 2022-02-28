import React from 'react'
import '../Footer/Footer.css'

function Footer() {
  return (
    <div>
        <div id='contact' className="contact">
            <h2 className='pink'>Contact Me</h2>
            <p>griffingcaitlyn@gmail.com</p>
            <p>Phone Number</p>
        </div>
        <div id='heart'>
          Made with <span className='pink'>♡</span> by Caitlyn Griffing
        </div>
    </div>
  )
}

export default Footer