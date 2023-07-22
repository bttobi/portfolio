import React from "react";
import ProjectCardClicked from "./ProjectCardClicked";

const ProjectCard = ({ projectInfo }) => {
  return (
    <>
      <label
        aria-label="Open project details"
        htmlFor={projectInfo.id}
        className="btn z-10 mx-4 mt-10 flex h-48 w-1/2 flex-col justify-center border-none bg-gradient-to-r from-cyan-600 to-cyan-400 p-0 text-white shadow-lg shadow-black hover:scale-105 sm:h-36 md:h-48 md:w-1/4 lg:mx-8 lg:h-96 lg:w-1/5 xl:mx-16"
      >
        {projectInfo.scene}
        <p className="absolute z-20 break-words rounded-lg bg-blue-darker bg-opacity-60 p-2 text-sm lg:w-min lg:text-xl">
          {projectInfo.name}
        </p>
      </label>
      <ProjectCardClicked projectInfo={projectInfo} />
    </>
  );
};

export default ProjectCard;
