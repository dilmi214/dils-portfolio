import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/projects.css'

const Projects = () => {
  return (
    <div className='container'>
      <h1 className="projects-title">My Projects</h1>

      {/* Featured Project Backlink */}
      <div className="featured-project">
        <h2>AI Resume Builder Microsite</h2>
        <p>
          Explore my AI-powered resume builder designed to help students and
          job seekers create professional resumes quickly using intelligent
          automation.
        </p>

        <a
          href="https://sites.google.com/iit.ac.lk/cvgenai/home"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Visit the AI Resume Builder →
        </a>
      </div>

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
