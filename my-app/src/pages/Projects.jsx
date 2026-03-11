import React from 'react'
import ProjectItem from '../components/ProjectItem'

const Projects = () => {
  return (
    <div
      className='container'
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        boxSizing: 'border-box',
      }}
    >
      <h1
        className="projects-title"
        style={{
          fontSize: '2.2rem',
          fontWeight: '700',
          marginBottom: '30px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        My Projects
      </h1>

      {/* Featured backlink section */}
      <div
        style={{
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '18px',
          padding: '28px 24px',
          marginBottom: '40px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
          backdropFilter: 'blur(6px)',
          textAlign: 'left',
        }}
      >
        <p
          style={{
            margin: '0 0 8px 0',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#cbb6ff',
          }}
        >
          Featured Project
        </p>

        <h2
          style={{
            margin: '0 0 12px 0',
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#fff',
            lineHeight: '1.2',
          }}
        >
          CVGen AI – AI Resume Builder Microsite
        </h2>

        <p
          style={{
            margin: '0 0 18px 0',
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#e9e3ff',
            maxWidth: '800px',
          }}
        >
          An AI-powered resume builder microsite designed to help students, graduates,
          and job seekers create professional resumes quickly and easily.
        </p>

        <a
          href="https://sites.google.com/iit.ac.lk/cvgenai/home"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 20px',
            borderRadius: '12px',
            background: '#ffffff',
            color: '#2b145a',
            fontWeight: '700',
            fontSize: '0.95rem',
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
          }}
        >
          Visit AI Resume Builder →
        </a>
      </div>

      <div
        className="projects"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          alignItems: 'stretch',
        }}
      >
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
