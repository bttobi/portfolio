import React from 'react';
import ProjectCard from '../assets/ProjectCard';

const Projects = () => {
  return (
    <div id="projects" style={{height: "100vh", width: "100%"}} className="article">
      <div className="projects-wrapper ml-16 mr-16 pt-16">
        <ProjectCard projectNumber={"project-1"}/>  
      </div>
    </div>
  )
}

export default Projects