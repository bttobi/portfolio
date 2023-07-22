import React from "react";
import ProjectCard from "../assets/ProjectCard";
import { data } from "../data/projects";

const Projects = () => {
  const projects = data;

  return (
    <section
      id="experience"
      style={{ minHeight: "100vh", width: "100%" }}
      className="article mt-16 flex flex-col pb-16 font-article shadow-top-bottom shadow-black"
    >
      <p className="mb-4 pt-24 text-center text-2xl font-bold lg:pt-28">
        Selected projects:
      </p>
      <p className="text-center text-xl">
        Visit my{" "}
        <a
          className="github-link underline"
          href="https://github.com/bttobi"
          target="_blank"
        >
          Github
        </a>{" "}
        for more
      </p>
      <p className="text-center text-xl">Click card to see details</p>
      <div className="projects-wrapper mt-4 flex w-full flex-grow flex-col items-center justify-center md:flex-row">
        {projects.map((el) => (
          <ProjectCard projectInfo={el} key={el.id} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
