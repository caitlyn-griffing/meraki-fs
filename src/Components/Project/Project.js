import React from 'react'
import '../Project/Project.css'
import { placeholder, heatWave, beatTheTimer, merakiFS, noteTaker, passwordGenerator, raversOutlet } from './images'

function Project() {
  return (
    <div id='project'>
        <h1>My <span id='project' className='pink'>Project</span></h1>
        <div className="projEach">
          <img src={ heatWave } alt="" />
          <h2>Heat Wave</h2>
          <button><a href="https://caitlyn-griffing.github.io/heat-wave/">Deployed</a></button>
          <button><a href="https://github.com/caitlyn-griffing/heat-wave">GitHub Repo</a></button>
        </div>
        <div className="projEach">
          <img src={ beatTheTimer } alt="" />
          <h2>Beat the Timer</h2>
          <button><a href="https://caitlyn-griffing.github.io/Beat-the-Timer//">Deployed</a></button>
          <button><a href="https://github.com/caitlyn-griffing/Beat-the-Timer">GitHub Repo</a></button>
        </div>
        <div className="projEach">
          <img src={ merakiFS } alt="" />
          <h2>Meraki FS</h2>
          <button><a href="https://caitlyn-griffing.github.io/caits-corner/">Deployed</a></button>
          <button><a href="https://github.com/caitlyn-griffing/caits-corner">GitHub Repo</a></button>
        </div>
        <div className="projEach">
          <img src={ noteTaker } alt="" />
          <h2>Note Taker</h2>
          <button><a href="https://post-yo-note.herokuapp.com/">Deployed</a></button>
          <button><a href="https://github.com/caitlyn-griffing/note-taker">GitHub Repo</a></button>
        </div>
        <div className="projEach">
          <img src={ passwordGenerator } alt="" />
          <h2>Password Generator</h2>
          <button><a href="https://caitlyn-griffing.github.io/Password-Generator/">Deployed</a></button>
          <button><a href="https://github.com/caitlyn-griffing/Password-Generator">GitHub Repo</a></button>
        </div>
        <div className="projEach">
          <img src={ raversOutlet } alt="" />
          <h2>Ravers Outlet</h2>
          <button><a href="https://raversoutlet.herokuapp.com/">Deployed</a></button>
          <button><a href="https://github.com/caitlyn-griffing/raversoutlet">GitHub Repo</a></button>
        </div>
    </div>
  )
}

export default Project