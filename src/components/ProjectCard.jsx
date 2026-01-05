import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

const ProjectCard = ({ projectDetails, close }) => {
  console.log(projectDetails);
  return (
    <div className="bg-[#00000097] fixed inset-0 flex lg:flex-row flex-col lg:items-start items-center justify-center lg:gap-2 gap-4 backdrop-blur-md lg:p-10 p-4 top-0">
      <div className=" w-full lg:w-1/2 bg-[#323232] lg:p-10 p-6 rounded-xl text-white">
        <h3 className="font-bold text-3xl text-center mb-4">
          {projectDetails.title}
        </h3>
        <div className="flex lg:items-center items-start lg:gap-0 gap-2 justify-between my-6 flex-col">
          <div className="flex items-center gap-2">
            <FaCode className="text-xl" />
            <h3 className="lg:text-xl text-md font-semibold">
              Tech Stack: {projectDetails.category}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <FaLink className="text-xl" />
            <h3 className="lg:text-xl text-md font-semibold">
              Link:{" "}
              <a
                href={projectDetails.projectLink}
                target="_blank"
                className="lg:inline block"
              >
                {" "}
                {projectDetails.projectLink}
              </a>
            </h3>
          </div>
        </div>

        <div>
          <img src={projectDetails.image} alt="" className="rounded-lg" />
        </div>
      </div>
      <span
        className="text-white flex items-center justify-center rounded-3xl text-3xl font-semibold cursor-pointer"
        onClick={() => close()}
      >
        &times;
      </span>
    </div>
  );
};

export default ProjectCard;
