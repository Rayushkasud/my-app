import React from "react";

import Particle from "./Particles";

export default function About() {
  return (
    <div id="ray">
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Rayushka.
            </h1>
            <teaxtarea
              id="ray"
              className="mb-8 leading-relaxed bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900  text-base outline-none text-gray-100 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
            >
              I am a recent Computer Science Engineering graduate currently
              working as a Software Engineer. My pursuit for knowledge is driven
              by my hunger and passion to learn and I am constantly looking for
              new opportunities to learn and challenge myself in these areas by
              extensive reading, participating in industry events, and
              experimenting and prototyping with fellow tech enthusiasts.
            </teaxtarea>

            {/* <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See My Past Work
              </a>
            </div> */}
          </div>
          <div id="ray" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <img
              className="object-cover object-center rounded "
              alt="Rayushka"
              src={"./assets/images/rayushka.png"}
            />
          </div>
        </div>
      </section>
      <Particle className="-z-50" />
    </div>
  );
}
