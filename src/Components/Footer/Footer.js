import React from 'react'
import '../Footer/Footer.css'

function Footer() {
  return (
    <div>
        <div id='contact' className="contact">
            <h2 className='pink'>Contact Me</h2>
            <div>griffingcaitlyn@gmail.com</div>
            <div>469-278-6558</div>
        </div>
        <div id='heart'>
          Made with <span className='pink'>♡</span> by Caitlyn Griffing
        </div>
    </div>
  )
}

export default Footer