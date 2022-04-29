import React from 'react'
import Footer from '../Footer/Footer'
import Project from './Project'
import './Project.css'

const ProjectWrapper = () => {
  return (
      <div>
        <section id="projects">
            <h1>My Projects</h1>
            <div class="myproject">
                <Project />
                <Footer />
            </div>
        </section>
    </div>
  )
}

export default ProjectWrapper