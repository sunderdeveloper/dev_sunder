import React, { useState } from "react";
import ProjectsData from "../data/ProjectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const [popupOpen, setPopupOpen] = useState(false);

  const displayData = (project) => {
    setSelectedProject(project);

    setPopupOpen(true);
  };
  const closePopUp = () => {
    if (popupOpen === true) {
      setPopupOpen(false);
    }
    setSelectedProject(null);
  };

  return (
    <>
      <div className="w-full lg:w-9/12 md:mx-auto bg-[#070b1a] p-6 rounded-2xl grid md:grid-cols-2 grid-cols-1 gap-6">
        {ProjectsData.map((item) => {
          return (
            <div
              className="w-full p-4 mb-3 border border-gray-500 rounded-xl cursor-pointer"
              key={item.id}
              onClick={() => displayData(item)}
            >
              <img
                src={item.image}
                alt=""
                className="rounded-md shadow-gray-800 shadow-md"
              />
              <h3 className="text-center text-white mt-3 text-[20px] font-semibold ">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>

      {popupOpen && (
        <ProjectCard projectDetails={selectedProject} close={closePopUp} />
      )}
    </>
  );
};

export default Projects;
