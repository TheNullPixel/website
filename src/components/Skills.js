import { CogIcon } from "@heroicons/react/solid";
import React from "react";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CogIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-orbitron font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            This section showcases the technical skills and tools I've developed
            over years of academics and continuous learning through industry
            opportunity. From languages to design tools, each skill is a
            building block in my ability to innovate and excel in digital
            projects.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray rounded flex p-4 h-full items-center">
              <img
                src="./icons/git.svg"
                width="32"
                height="32"
                alt="Git"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="title-font font-medium text-white">Git</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray rounded flex p-4 h-full items-center">
              <img
                src="./icons/figma.svg"
                width="32"
                height="32"
                alt="Figma"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="title-font font-medium text-white">Figma</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray rounded flex p-4 h-full items-center">
              <img
                src="./icons/html5.svg"
                width="32"
                height="32"
                alt="Figma"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="title-font font-medium text-white">HTML5</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray rounded flex p-4 h-full items-center">
              <img
                src="./icons/css3.svg"
                width="32"
                height="32"
                alt="Figma"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="title-font font-medium text-white">CSS3</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray rounded flex p-4 h-full items-center">
              <img
                src="./icons/javascript.svg"
                width="32"
                height="32"
                alt="Figma"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="title-font font-medium text-white">
                JavaScript
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray rounded flex p-4 h-full items-center">
              <img
                src="./icons/typescript.svg"
                width="32"
                height="32"
                alt="Figma"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="title-font font-medium text-white">
                TypeScript
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray rounded flex p-4 h-full items-center">
              <img
                src="./icons/tailwindcss.svg"
                width="32"
                height="32"
                alt="Figma"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="title-font font-medium text-white">
                TailwindCSS
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray rounded flex p-4 h-full items-center">
              <img
                src="./icons/react.svg"
                width="32"
                height="32"
                alt="Figma"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="title-font font-medium text-white">React</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray rounded flex p-4 h-full items-center">
              <img
                src="./icons/java.svg"
                width="32"
                height="32"
                alt="Figma"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="title-font font-medium text-white">Java</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray rounded flex p-4 h-full items-center">
              <img
                src="./icons/python.svg"
                width="32"
                height="32"
                alt="Figma"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="title-font font-medium text-white">Python</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray rounded flex p-4 h-full items-center">
              <img
                src="./icons/nodejs.svg"
                width="32"
                height="32"
                alt="Figma"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="title-font font-medium text-white">Node.js</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray rounded flex p-4 h-full items-center">
              <img
                src="./icons/docker.svg"
                width="32"
                height="32"
                alt="Figma"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="title-font font-medium text-white">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
