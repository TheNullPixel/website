import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-orbitron font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Null Pixel
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 font-orbitron hover:text-teal">
            Portfolio
          </a>
          <a href="#skills" className="mr-5 font-orbitron hover:text-teal">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-black border-0 py-1 px-3 font-orbitron focus:outline-none rounded text-white hover:text-gray hover:bg-teal mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
