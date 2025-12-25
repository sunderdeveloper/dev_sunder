import React from "react";
import IconsSlider from "./IconsSlider";

const About = () => {
  return (
    <div className="w-full lg:w-9/12 md:mx-auto bg-[#070b1a] p-6 rounded-2xl">
      <h1 className="text-xl md:text-3xl text-white font-roboto font-normal w-fit border-b-3 pb-2 border-blue-700 mb-6">
        About
      </h1>
      <p className="text-white md:text-xl mb-4 text-md">
        I’m a passionate Frontend Developer with a strong foundation in HTML,
        CSS, JavaScript, and React. I enjoy turning ideas into clean,
        responsive, and user-friendly interfaces using modern tools like
        Tailwind CSS. I focus on writing maintainable code and continuously
        improving my problem-solving skills through hands-on projects.
      </p>
      <p className="text-white md:text-xl mb-10 text-md">
        Currently, I’m sharpening my React skills by building real-world
        applications and exploring best practices in component design, routing,
        and state management. My goal is to grow as a developer, contribute
        meaningful solutions, and create engaging web experiences.
      </p>

      <h1 className="text-xl md:text-3xl text-white font-roboto font-normal w-fit border-b-3 pb-2 border-blue-700 mb-6">
        Education
      </h1>
      <div className="flex md:flex-wrap md:justify-start lg:justify-normal lg:flex-nowrap md:gap-4 md:flex-row flex-col items-center justify-between mb-8 gap-4">
        <div className="border border-gray-600 py-3 px-5 rounded-xl ">
          <span className="text-gray-400 text-sm">2020 - 2023</span>
          <h3 className="lg:text-xl text-white font-semibold">
            BSC Computer Science
          </h3>
          <h4 className="text-white my-1">
            Sardar Patel College - Secunderabad
          </h4>
        </div>
        <div className="border border-gray-600 py-3 px-5 rounded-xl ">
          <span className="text-gray-400 text-sm">2018 - 2020</span>
          <h3 className="lg:text-xl text-white font-semibold">
            Board of Intermediate - MPC
          </h3>
          <h4 className="text-white my-1">
            New Chaitanya Junior College - ECIL
          </h4>
        </div>
        <div className="border border-gray-600 py-3 px-5 rounded-xl ">
          <span className="text-gray-400 text-sm">2020 - 2023</span>
          <h3 className="lg:text-xl text-white font-semibold">
            SSC - Telangana State Board
          </h3>
          <h4 className="text-white my-1">JNP High School - Jawahar Nagar</h4>
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col  gap-10 mb-10">
        <div className="w-full md:w-6/12">
          <h1 className="text-xl md:text-3xl text-white font-roboto font-normal w-fit border-b-3 pb-2 border-blue-700 mb-6">
            Experiences
          </h1>
          <div className="border border-gray-600 py-3 px-5 rounded-xl ">
            <span className="text-gray-400 text-sm">2023 - Present</span>
            <h3 className="text-xl text-white font-semibold">
              Frontend Developer
            </h3>
            <h4 className="text-white my-1">
              Dgtal Veb Media - Digital Marketing Agency Hyderabad
            </h4>
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <h1 className="text-xl md:text-3xl text-white font-roboto font-normal w-fit border-b-3 pb-2 border-blue-700 mb-6">
            Knowledges
          </h1>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-4">
            <span className="bg-[#656c8941] text-white text-md py-1 px-6 rounded-sm cursor-pointer">
              HTML
            </span>
            <span className="bg-[#656c8941] text-white text-md py-1 px-6 rounded-sm cursor-pointer">
              CSS
            </span>
            <span className="bg-[#656c8941] text-white text-md py-1 px-6 rounded-sm cursor-pointer">
              Javascript
            </span>
            <span className="bg-[#656c8941] text-white text-md py-1 px-6 rounded-sm cursor-pointer">
              Bootstrap
            </span>
            <span className="bg-[#656c8941] text-white text-md py-1 px-6 rounded-sm cursor-pointer">
              Tailwind Css
            </span>
            <span className="bg-[#656c8941] text-white text-md py-1 px-6 rounded-sm cursor-pointer">
              React Js
            </span>
            <span className="bg-[#656c8941] text-white text-md py-1 px-6 rounded-sm cursor-pointer">
              Redux
            </span>
            <span className="bg-[#656c8941] text-white text-md py-1 px-6 rounded-sm cursor-pointer">
              Github
            </span>
            <span className="bg-[#656c8941] text-white text-md py-1 px-6 rounded-sm cursor-pointer">
              Canva
            </span>
          </div>
        </div>
      </div>

      <IconsSlider />
    </div>
  );
};

export default About;
