import React from 'react'
import ProjectCardClicked from './ProjectCardClicked';
import CatDispScene from '../scenes/CatDispScene';

const ProjectCard = ({projectInfo}) => {
  return (
    <>
      <label htmlFor={projectInfo.id} className="btn shadow-lg hover:scale-105 shadow-black border-none w-1/3 h-1/3 mt-10 lg:w-1/5 lg:h-3/4 flex flex-col p-0 mx-0 lg:mx-8 xl:mx-16 justify-start bg-gradient-to-r from-cyan-600 to-cyan-400 text-white z-10">
        <div className="rounded-t-lg w-full h-full flex flex-col align-center justify-center items-center">
          <div className="absolute flex flex-col align-center justify-center items-center z-10 text-white lg:w-60 w-min lg:text-xl text-md">
            <p className="flex p-2 justify-center flex-wrap mt-0 lg:mt-10 z-20 rounded-lg lg:mb-0 bg-blue-darker bg-opacity-60">{projectInfo.name}</p>
            <p className="flex justify-center flex-wrap  mt-10 z-20 p-1 rounded-lg bg-blue-darker bg-opacity-60">Click to see details</p>
          </div>
          {projectInfo.scene}
        </div>
      </label>
      <ProjectCardClicked 
      projectInfo={projectInfo} />
    </>
  )
}

export default ProjectCard;
