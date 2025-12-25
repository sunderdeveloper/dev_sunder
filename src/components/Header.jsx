import React from "react";
import { FaRegUser } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-15 py-6 mb-10">
      <div>
        <h1 className="text-4xl font-semibold text-gray-200">Dev_Sunder</h1>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-2 px-6 py-2 bg-[#0d12255a] rounded-lg text-md text-white font-normal cursor-pointer">
            <FaRegUser className="text-md font-normal" />{" "}
            <Link to="/">About</Link>
          </li>
          <li className="flex items-center gap-2 px-6 py-2 bg-[#0d12255a] rounded-lg text-md text-white font-normal cursor-pointer">
            <PiSuitcaseSimpleBold className="text-md font-normal" />{" "}
            <Link to="/projects">My Works</Link>
          </li>
          <li className="flex items-center gap-2 px-6 py-2 bg-[#0d12255a] rounded-lg text-md text-white font-normal cursor-pointer">
            <MdOutlineContactPage className="text-md font-normal" />{" "}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
