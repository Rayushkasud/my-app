// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
// import navIcon1 from "./assets/nav-icon1.svg";
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Rayushka Sud
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#experience" className="mr-5 hover:text-white">
            Experience
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/rayushka-s-0a67951a5/"
              target="_blank"
            >
              <img src={"./assets/nav-icon1.svg"} alt="Linkedin" />
            </a>
            <a href="https://github.com/Rayushkasud" target="_blank">
              <img src={"./assets/nav-icon2.svg"} alt="" />
            </a>
            {/* <a href="#">
              <img src={"./assets/nav-icon3.svg"} alt="" />
            </a> */}
          </div>
        </nav>
        <a
          target="_blank"
          href="https://1drv.ms/w/s!Amax6wuBOC4OccwU00V0ol-9rJE"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base mt-4 md:mt-0"
        >
          Resume
          {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
        </a>
      </div>
    </header>
  );
}
