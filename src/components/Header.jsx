import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Header = ({ about }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const showMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const closeMenu = () => {
    setMobileMenu(false);
  };
  return (
    <div className="flex items-center justify-between lg:px-15 px-8 py-6 mb-10">
      <div>
        <h1 className="lg:text-4xl text-3xl font-semibold text-gray-200">
          Dev_Sunder
        </h1>
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
      <nav className="mobile-nav lg:hidden block">
        <div onClick={showMobileMenu}>
          {mobileMenu ? (
            <IoMdClose className="text-white text-3xl cursor-pointer" />
          ) : (
            <IoMenu className="text-white text-3xl cursor-pointer" />
          )}
        </div>

        <div className={`${mobileMenu ? "showMenu" : "hideMenu"}`}>
          <ul className="bg-[#0d12255a] w-[280px] h-screen p-4 backdrop-blur-2xl">
            <li
              className="flex items-center gap-2 px-6 py-2  rounded-lg text-md text-white font-normal cursor-pointer"
              onClick={closeMenu}
            >
              <FaRegUser className="text-md font-normal" />{" "}
              <Link to="/">About</Link>
            </li>
            <li
              className="flex items-center gap-2 px-6 py-2   rounded-lg text-md text-white font-normal cursor-pointer"
              onClick={closeMenu}
            >
              <PiSuitcaseSimpleBold className="text-md font-normal" />{" "}
              <Link to="/projects">My Works</Link>
            </li>
            <li
              className="flex items-center gap-2 px-6 py-2   rounded-lg text-md text-white font-normal cursor-pointer"
              onClick={closeMenu}
            >
              <MdOutlineContactPage className="text-md font-normal" />{" "}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
