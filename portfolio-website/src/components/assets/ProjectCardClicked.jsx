import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import TechIcon from './TechIcon';

const ProjectCardClicked = ({projectInfo}) => {
  return (
    <>
      <input type="checkbox" className="modal-toggle" id={projectInfo.id} />
      <label htmlFor={projectInfo.id} className="modal cursor-pointer">
        <label className="modal-box h-min bg-gradient-to-r from-cyan-600 to-cyan-400">
          <button aria-label="Close modal">
            <label htmlFor={projectInfo.id} className="close-btn cursor-pointer rounded-lg p-2 absolute right-3 top-3 bg-red-500 "><AiOutlineCloseCircle size={20}/></label>
          </button>
          <p className="font-bold text-xl text-center">{projectInfo.name}</p>
          <p className="py-4 text-center">{projectInfo.desc}</p>
          <ul className="mt-4 flex flex-row flex-wrap align-center items-baseline justify-around">
            {projectInfo.tech.map((techName, index) => 
              <TechIcon name={techName} key={index}/>
            )}
          </ul>
          {projectInfo.name != "Coming Soon" &&
          <div className="button-wrapper flex align-center items-center justify-around">
            <button className="mt-8" aria-label="Open project demo">
              <a href={projectInfo.demo_url} className="modal-action btn border-none font-bold p-3 m-0 rounded-lg w-min text-white" target="_blank">
                Demo
              </a>
            </button>
            <button className="mt-8" aria-label="Open Github repository">
              <a href={projectInfo.github_url} className="modal-action btn border-none font-bold p-3 m-0 rounded-lg w-min text-white" target="_blank">
                Github
              </a>
            </button>
          </div>} 
        </label>
      </label>
    </>
  )
}

export default ProjectCardClicked