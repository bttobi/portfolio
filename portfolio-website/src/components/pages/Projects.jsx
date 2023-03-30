import React from 'react';
import ProjectCard from '../assets/ProjectCard';

const Projects = () => {
  return (
    <div id="projects" style={{height: "100vh", width: "100%"}} className="article">
      <p className="font-bold text-2xl pt-32 text-center">Selected projects:</p>
      <p className="text-xl text-center">Visit my Github for more</p>
      <div className="projects-wrapper w-full flex flex-row items-center justify-evenly mt-48">
        <ProjectCard projectNumber={"project-1"}/>  
      </div>
    </div>
  )
}

export default Projects