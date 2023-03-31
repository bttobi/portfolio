import React from 'react'
import ProjectCardClicked from './ProjectCardClicked';
import CatDispScene from '../scenes/CatDispScene';

const ProjectCard = ({projectNumber, projectPhotoUrl, projectDesc, projectStack}) => {
  return (
    <>
      <label htmlFor={projectNumber} className="btn shadow-lg hover:scale-105 shadow-black border-none w-64 h-96 flex flex-col p-0 m-0 justify-start bg-gradient-to-r from-cyan-600 to-cyan-400 text-white">
        <div className="rounded-t-lg w-full h-full flex flex-col align-center justify-center items-center">
          <div className="absolute z-20 text-white">
            <p className="text-xl mt-10 z-20 rounded-lg" style={{backgroundColor: "#1b262c"}}>The Cat Page</p>
            <p className="mt-10 z-20 p-1 rounded-lg" style={{backgroundColor: "#1b262c"}}>Click to see the details</p>
          </div>
          <CatDispScene />
        </div>
      </label>
      <ProjectCardClicked projectNumber={projectNumber} />
    </>
  )
}

export default ProjectCard;
