import React from 'react'
const resumePDF = require('./images/resumePDF.png')

function resume() {
  return (
    <div id="resume">
      <h2>Resume</h2>
      <div>
        <a  href="https://docs.google.com/document/d/1_DyaDZphOEJHVtZxtbkl13LrWUGCMBTLMiyJ71ILP1M/edit?usp=sharing" target='blank'><img src={ resumePDF } alt="" /></a>
      </div>
    </div>
  )
}

export default resume