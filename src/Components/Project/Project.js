import React from 'react'
import img1 from './images/MerakiFS.png'

function Project() {
  return (
    <div id='project'>
        <h1>My <span id='project' className='pink'>Project</span></h1>
        <div className="projEach">
          <img src={img1} alt="" />
          <h2>Title of Project</h2>
          <button>Deployed</button>
          <button>GitHub Repo</button>
        </div>
        <div className="projEach">
          <img src={img1} alt="" />
          <h2>Title of Project</h2>
          <button>Deployed</button>
          <button>GitHub Repo</button>
        </div>
        <div className="projEach">
          <img src={img1} alt="" />
          <h2>Title of Project</h2>
          <button>Deployed</button>
          <button>GitHub Repo</button>
        </div>
        <div className="projEach">
          <img src={img1} alt="" />
          <h2>Title of Project</h2>
          <button>Deployed</button>
          <button>GitHub Repo</button>
        </div>
        <div className="projEach">
          <img src={img1} alt="" />
          <h2>Title of Project</h2>
          <button>Deployed</button>
          <button>GitHub Repo</button>
        </div>
        <div className="projEach">
          <img src={img1} alt="" />
          <h2>Title of Project</h2>
          <button>Deployed</button>
          <button>GitHub Repo</button>
        </div>
    </div>
  )
}

export default Project