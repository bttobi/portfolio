import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ProjectCardClicked = ({projectInfo}) => {
  return (
    <>
      <input type="checkbox" className="modal-toggle" id={projectInfo.id} />
      <label htmlFor={projectInfo.id} className="modal cursor-pointer">
        <label htmlFor="" className="modal-box h-min bg-gradient-to-r from-cyan-600 to-cyan-400">
          <label htmlFor={projectInfo.id} className="close-btn cursor-pointer rounded-lg p-2 absolute right-3 top-3 bg-red-500 "><AiOutlineCloseCircle /></label>
          <p className="font-bold text-xl text-center">{projectInfo.title}</p>
          <p className="py-4 text-center">{projectInfo.desc}</p>
          <ul className="mt-4 flex flex-row align-center items-baseline justify-around">
            <li className="mt-2 flex flex-col items-center w-1/3">
              <img width="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="React.js" />
              <span className="mt-2">React.js</span>
            </li>
            <li className="mt-2 flex flex-col items-center w-1/3">
              <img width="48" src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" />
              <span className="mt-2">Firebase</span>
            </li>
            <li className="mt-2 flex flex-col items-center w-1/3">
              <img width="48" src="https://vectorwiki.com/images/Skj0l__react-query-icon.svg" alt="React Query" />
              <span className="mt-2">React Query</span>
            </li>
          </ul>
          <ul className="mt-4 flex flex-row align-center items-baseline justify-around">
            <li className="mt-2 flex flex-col items-center w-1/3">
              <img width="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333" alt="Tailwind CSS" />
              <span className="mt-2">Tailwind CSS</span>
            </li>
            <li className="mt-2 flex flex-col items-center w-1/3">
              <img width="72" src="https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg" alt="DaisyUI" />
              <span className="mt-2">daisyUI</span>
            </li>
            <li className="mt-2 flex flex-col items-center w-1/3">
              <img width="48" src="/react-router.svg" alt="React Router" />
              <span className="mt-2">React Router</span>
            </li>
          </ul>
          <div className="button-wrapper flex align-center items-center justify-around">
            <a href={projectInfo.demo_url} className="modal-action btn border-none font-bold p-3 rounded-lg w-min text-white">
              Demo
            </a>
            <a href={projectInfo.github_url} className="modal-action btn border-none font-bold p-3 rounded-lg w-min text-white">
              Github
            </a>
          </div>
        </label>
      </label>
    </>
  )
}

export default ProjectCardClicked