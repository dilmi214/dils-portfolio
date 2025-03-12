import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/projects.css'
const Projects = () => {
  return (
    <div className='container'>
      <h1 className="projects-title">My Projects</h1>
        <div className="projects">
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
        </div>
    </div>
  )
}

export default Projects