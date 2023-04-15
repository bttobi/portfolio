import React from 'react';
import ProjectCard from '../assets/ProjectCard';
import { data } from '../data/projects';

const Projects = () => {
  const projects = data;

  return (
      <section id="projects" style={{minHeight: "100vh", width: "100%"}} className="article flex flex-col mt-16 pb-16 shadow-top-bottom shadow-black">
        <p className="font-bold text-2xl pt-24  mb-4 lg:pt-28 text-center">Selected projects:</p>
        <p className="text-xl text-center">Visit my <a className="github-link underline" href="https://github.com/bttobi" target="_blank">Github</a> for more</p>
        <p className="text-xl text-center">Click card to see details</p>
        <div className="projects-wrapper w-full flex flex-grow lg:flex-row flex-col items-center justify-center mt-16">
          {projects.map(el => <ProjectCard projectInfo={el} key={el.id}/>)}
        </div>
      </section>
  )
}
export default Projects