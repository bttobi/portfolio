import React from 'react';
import ProjectCard from '../assets/ProjectCard';
import { data } from '../data/projects';

const Projects = () => {
  const projects = data;

  return (
    <div id="projects" style={{height: "100vh", width: "100%"}} className="article">
      <p className="font-bold text-2xl pt-32 text-center">Selected projects:</p>
      <p className="text-xl text-center">Visit my Github for more</p>
      <div className="projects-wrapper w-full h-1/3 flex lg:flex-row flex-col items-center justify-evenly mt-48">
        {projects.map(el => <ProjectCard projectInfo={el} key={el.id}/>)}
      </div>
    </div>
  )
}

export default Projects