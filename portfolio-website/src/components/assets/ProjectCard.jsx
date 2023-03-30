import React from 'react'
import ProjectCardClicked from './ProjectCardClicked';
export const ProjectCard = ({projectNumber, projectPhotoUrl, projectDesc, projectStack}) => {
  return (<>
    <label htmlFor={projectNumber} className="btn">
      
    </label>
      <ProjectCardClicked projectNumber={projectNumber} />
    </>
  )
}

export default ProjectCard;
