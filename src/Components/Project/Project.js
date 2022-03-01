import React from 'react'
import '../Project/Project.css'
import { placeholder, heatWave, beatTheTimer, caitlynsCreations, noteTaker, passwordGenerator, raversOutlet } from './images'

function Project() {
  return (
    <div id='project'>
        <h1>My <span id='project' className='pink'>Project</span></h1>
        <div className="projEach">
          <img src={ heatWave } alt="" />
          <h2>Heat Wave</h2>
          <button><a href="https://github.com/caitlyn-griffing">Deployed</a></button>
          <button><a href="https://github.com/caitlyn-griffing">GitHub Repo</a></button>
        </div>
        <div className="projEach">
          <img src={ beatTheTimer } alt="" />
          <h2>Title of Project</h2>
          <button><a href="https://github.com/caitlyn-griffing">Deployed</a></button>
          <button><a href="https://github.com/caitlyn-griffing">GitHub Repo</a></button>
        </div>
        <div className="projEach">
          <img src={ caitlynsCreations } alt="" />
          <h2>Title of Project</h2>
          <button><a href="https://github.com/caitlyn-griffing">Deployed</a></button>
          <button><a href="https://github.com/caitlyn-griffing">GitHub Repo</a></button>
        </div>
        <div className="projEach">
          <img src={ noteTaker } alt="" />
          <h2>Title of Project</h2>
          <button><a href="https://github.com/caitlyn-griffing">Deployed</a></button>
          <button><a href="https://github.com/caitlyn-griffing">GitHub Repo</a></button>
        </div>
        <div className="projEach">
          <img src={ passwordGenerator } alt="" />
          <h2>Title of Project</h2>
          <button><a href="https://github.com/caitlyn-griffing">Deployed</a></button>
          <button><a href="https://github.com/caitlyn-griffing">GitHub Repo</a></button>
        </div>
        <div className="projEach">
          <img src={ raversOutlet } alt="" />
          <h2>Title of Project</h2>
          <button><a href="https://github.com/caitlyn-griffing">Deployed</a></button>
          <button><a href="https://github.com/caitlyn-griffing">GitHub Repo</a></button>
        </div>
    </div>
  )
}

export default Project