import React from 'react'
import ProjectCardClicked from './ProjectCardClicked';

const ProjectCard = ({projectInfo}) => {
  return (
    <>
      <label aria-label="Open project details" htmlFor={projectInfo.id} className="btn shadow-lg hover:scale-105 shadow-black border-none w-1/4 mt-10 lg:w-1/6 h-48 lg:h-96 md:h-48 sm:h-36 flex flex-col p-0 mx-0 lg:mx-8 xl:mx-16 justify-center bg-gradient-to-r from-cyan-600 to-cyan-400 text-white z-10">
          {projectInfo.scene}
          <p className="absolute w-min z-20 rounded-lg bg-blue-darker bg-opacity-60 lg:text-xl text-sm p-2 break-words">{projectInfo.name}</p>
      </label>
      <ProjectCardClicked 
      projectInfo={projectInfo} />
    </>
  )
}

export default ProjectCard;
