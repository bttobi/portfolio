import React from "react";
import { GrClose } from "react-icons/gr";
import TechIcon from "./TechIcon";

const ProjectCardClicked = ({ projectInfo }) => {
  return (
    <>
      <input type="checkbox" className="modal-toggle" id={projectInfo.id} />
      <label htmlFor={projectInfo.id} className="modal cursor-pointer">
        <label className="modal-box h-min bg-gradient-to-r from-cyan-600 to-cyan-400 px-0">
          <button aria-label="Close modal">
            <label
              htmlFor={projectInfo.id}
              className="close-btn absolute right-3 top-3 cursor-pointer rounded-lg bg-red-500 p-2"
            >
              <GrClose size={20} />
            </label>
          </button>
          <p className="text-center text-xl font-bold">{projectInfo.name}</p>
          <p className="p-4 text-center">{projectInfo.desc}</p>
          {projectInfo.tech.length != 0 && (
            <ul className="align-center mt-4 flex flex-row flex-wrap items-baseline justify-around bg-white py-4 text-black shadow-blue-dark">
              {projectInfo.tech.map((techName, index) => (
                <TechIcon name={techName} key={index} />
              ))}
            </ul>
          )}
          {projectInfo.name != "More Coming Soon" && ( //to be implemented
            <div className="button-wrapper align-center mx-8 flex flex-col items-center justify-around font-main">
              <button
                className="align-center mt-4 mb-0 flex content-center items-center justify-center"
                aria-label="Open project demo"
              >
                <a
                  href={projectInfo.demo_url}
                  className="modal-action btn m-0 flex h-full justify-center rounded-lg border-none p-4 text-center text-sm font-bold text-white lg:text-lg"
                  target="_blank"
                >
                  Project Demo
                </a>
              </button>
            </div>
          )}
        </label>
      </label>
    </>
  );
};

export default ProjectCardClicked;
