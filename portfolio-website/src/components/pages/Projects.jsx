import React from 'react';
import ProjectCard from '../assets/ProjectCard';
import { data } from '../data/projects';

const Projects = () => {
  const projects = data;

  return (
      <div id="projects" style={{height: "100vh", width: "100%"}} className="article bg-blue-darker bg-opacity-70" >
        <p className="font-bold text-2xl pt-24 lg:pt-32 text-center">Selected projects:</p>
        <p className="text-xl text-center">Visit my <a className="github-link underline" href="https://github.com/bttobi" target="_blank">Github</a> for more</p>
        <div className="projects-wrapper w-full h-2/3 flex lg:flex-row flex-col items-center justify-center mt-8 lg:mt-16">
          {projects.map(el => <ProjectCard projectInfo={el} key={el.id}/>)}
        </div>
      </div>
  )
}

export default Projects