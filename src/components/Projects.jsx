import React, { useState } from "react";
import ProjectsData from "../data/ProjectsData";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const [popupOpen, setPopupOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(ProjectsData);
  const [activeCategory, setActiveCategory] = useState("all");

  const showSelectedCategory = (category) => {
    setActiveCategory(ProjectsData);
    if (category === "all") {
      setSelectedCategory(ProjectsData);
    } else {
      const filteredItems = ProjectsData.filter(
        (item) => item.category === category,
      );
      setSelectedCategory(filteredItems);
    }
  };

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
  gsap;
  useGSAP(() => {
    gsap.from(".project_card", {
      y: -30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.3,
    });
  });

  return (
    <>
      <div className="w-full lg:w-9/12 md:mx-auto bg-[#070b1a] p-6 rounded-2xl ">
        <div className="filterBtns p-2 text-white mb-6 flex items-center justify-end gap-4">
          <button
            className="bg-[#656c8941] px-6 py-3 rounded-4xl text-md cursor-pointer"
            onClick={() => showSelectedCategory("all")}
          >
            <span className="w-2 h-2 bg-gray-100 z-10"></span>
            All
          </button>
          <button
            className="bg-[#656c8941] px-6 py-3 rounded-4xl text-md cursor-pointer"
            onClick={() => showSelectedCategory("React js")}
          >
            React Js
          </button>
          <button
            className="bg-[#656c8941] px-6 py-3 rounded-4xl text-md cursor-pointer"
            onClick={() => showSelectedCategory("Javascript")}
          >
            Javascript
          </button>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {selectedCategory.map((item) => {
            return (
              <div
                className="w-full p-4 mb-3 border border-gray-500 rounded-xl cursor-pointer project_card"
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
      </div>

      {popupOpen && (
        <ProjectCard projectDetails={selectedProject} close={closePopUp} />
      )}
    </>
  );
};

export default Projects;
