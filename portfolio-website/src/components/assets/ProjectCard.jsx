import React from 'react'
import ProjectCardClicked from './ProjectCardClicked';
export const ProjectCard = ({projectNumber, projectPhotoUrl, projectDesc, projectStack}) => {
  return (
    <>
      <label htmlFor={projectNumber} className="btn shadow-lg hover:scale-105 shadow-black border-none w-1/4 h-96 flex flex-col p-0 m-0 justify-start bg-gradient-to-r from-cyan-600 to-cyan-400 text-white">
        <div className="rounded-t-lg w-full h-1/2" style={{backgroundImage: "URL('/cat_page.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} />
        <p className="text-center text-xl mt-10">The Cat Page</p>
        <p className="mt-10">Click to see the details</p>
      </label>
      <ProjectCardClicked projectNumber={projectNumber} />
    </>
  )
}

export default ProjectCard;
