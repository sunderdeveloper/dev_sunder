import React from "react";
import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";

import { MdPhoneAndroid } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import profilePic from "../assets/profile-pic.jpeg";
import resume from "../assets/Sunder_Neknar_Frontend_Developer.pdf";

const Profile = () => {
  return (
    <div className="w-full lg:w-3/12 mx-auto lg:sticky md:top-10">
      <img className="w-[250px] mx-auto rounded-2xl" src={profilePic} alt="" />
      <div className="w-full h-auto bg-[#070b1a] px-6 py-4 pt-20 rounded-2xl -mt-20">
        <h1 className="font-normal font-roboto capitalize text-[28px] text-white my-2 mb-3 text-center">
          Neknar Sunder
        </h1>
        <span className="flex justify-center w-fit px-6 py-2 bg-[#656c8941] rounded-sm text-white text-[16px] text-center mx-auto">
          Frontend Dev
        </span>
        <div className="px-4 mt-6">
          <div className="flex items-center gap-4 justify-start   pb-4 border-b border-gray-800">
            <span className="w-10 h-10 bg-[#656c8941] text-white text-2xl rounded-md p-2 flex items-center justify-center">
              <MdPhoneAndroid />
            </span>
            <div>
              <h4 className="text-white text-sm">Phone</h4>
              <h3 className="text-white">
                <a href="tel:+919652344724">(+91) 9652344724</a>
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-start my-4 pb-4 border-b border-gray-800">
            <span className="w-10 h-10 bg-[#656c8941] text-white text-2xl rounded-md p-2 flex items-center justify-center">
              <FaRegEnvelope />
            </span>
            <div>
              <h4 className="text-white text-sm">Email</h4>
              <h3 className="text-white">
                <a href="mailto:sunderneknar@gmail.com">
                  sunderneknar@gmail.com
                </a>
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-start my-4 pb-4 border-b border-gray-800">
            <span className="w-10 h-10 bg-[#656c8941] text-white text-2xl rounded-md p-2 flex items-center justify-center">
              <FaLocationDot />
            </span>
            <div>
              <h4 className="text-white text-sm">Location</h4>
              <h3 className="text-white">Hyderabad</h3>
            </div>
          </div>
        </div>
        <ul className="flex items-center gap-3 justify-center mb-4 mt-6">
          <li className="bg-[#656c8941] w-10 h-10 text-white rounded-md text-center p-2 text-xl cursor-pointer flex items-center justify-center">
            <a href="https://github.com/sunderdeveloper" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li className="bg-[#656c8941] w-10 h-10 text-white rounded-md text-center p-2 text-xl cursor-pointer flex items-center justify-center">
            <a href="https://www.linkedin.com/in/neknarsunder/" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="bg-[#656c8941] w-10 h-10 text-white rounded-md text-center p-2 text-xl cursor-pointer flex items-center justify-center">
            <a href="#" target="_blank">
              <FaDiscord />
            </a>
          </li>
        </ul>
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-2 text-lg font-semibold rounded-md mb-3 mt-2">
            <a href={resume} target="_blank">
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
