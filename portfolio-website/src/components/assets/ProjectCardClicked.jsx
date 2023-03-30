import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ProjectCardClicked = ({projectNumber, projectPhotoUrl, projectDesc, projectStack}) => {
  return (
    <>
      <input type="checkbox" className="modal-toggle" id={projectNumber} />
      <label htmlFor={projectNumber} className="modal cursor-pointer">
        <label htmlFor="" className="modal-box" style={{backgroundColor: "#222831"}}>
          <label htmlFor={projectNumber} className="close-btn cursor-pointer rounded-lg p-2 absolute right-3 top-3 bg-red-500 "><AiOutlineCloseCircle /></label>
          <h3 className="font-bold text-lg">Cat Page</h3>
          <p className="py-4">Page made for cat lovers. You can create an account, search for cat breeds and funny gifs as well as add them to favourites!</p>
          <ul className="mt-4 px-4 flex flex-row">
            <li className="mt-2"><img width="64" alt="React.js" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"/></li>
            <li className="mt-2"><img width="64" src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" /></li>
            <li className="mt-2"><img width="64" src="https://vectorwiki.com/images/Skj0l__react-query-icon.svg" alt="React Query" /></li>
            <li className="mt-2"><img src="" alt="Tailwind CSS" /></li>
            <li className="mt-2"><img src="" alt="DaisyUI" /></li>
            <li className="mt-2"><img src="" alt="React Router" /></li>
          </ul>
          <div className="button-wrapper flex align-center items-center justify-around">
            <a href="#demo" className="modal-action btn w-min">
              Demo
            </a>
            <a href="#github" className="modal-action btn w-min">
              Github
            </a>
          </div>
        </label>
      </label>
    </>
  )
}

export default ProjectCardClicked