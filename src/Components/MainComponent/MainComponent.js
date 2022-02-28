import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Project from '../Project/Project'
import About from '../About/About'
import Resume from '../Resume/resume'

function MainComponent() {
  return (
        <React.Fragment>
            <Header />
            <About />
            <Project />
            <Resume />
            <Footer />
        </React.Fragment>
  )
}

export default MainComponent