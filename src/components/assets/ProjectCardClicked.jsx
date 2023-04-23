import React from 'react';
import { GrClose } from 'react-icons/gr';
import TechIcon from './TechIcon';

const ProjectCardClicked = ({projectInfo}) => {
  return (
    <>
      <input type="checkbox" className="modal-toggle" id={projectInfo.id} />
      <label htmlFor={projectInfo.id} className="modal cursor-pointer">
        <label className="modal-box h-min bg-gradient-to-r from-cyan-600 to-cyan-400 px-0">
          <button aria-label="Close modal">
            <label htmlFor={projectInfo.id} className="close-btn cursor-pointer rounded-lg p-2 absolute right-3 top-3 bg-red-500 "><GrClose fill={"white"} size={20}/></label>
          </button>
          <p className="font-bold text-xl text-center">{projectInfo.name}</p>
          <p className="p-4 text-center">{projectInfo.desc}</p>
          {projectInfo.tech.length != 0 &&
          <ul className="mt-4 flex flex-row flex-wrap align-center items-baseline justify-around text-black bg-white py-4 shadow-blue-dark">
            {projectInfo.tech.map((techName, index) => 
              <TechIcon name={techName} key={index}/>
            )}
          </ul>}
          {projectInfo.name != "More Coming Soon" && //to be implemented
          <div className="button-wrapper flex flex-col align-center items-center justify-around font-main mx-8">
            <button className="mt-4 mb-0 flex justify-center items-center align-center content-center" aria-label="Open project demo">
              <a href={projectInfo.demo_url} className="modal-action btn border-none font-bold p-4 m-0 rounded-lg h-full text-white text-center flex justify-center lg:text-lg text-sm" target="_blank">
                Project Demo
              </a>
            </button>
          </div>} 
        </label>
      </label>
    </>
  )
}

export default ProjectCardClicked