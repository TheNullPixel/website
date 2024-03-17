import React from "react";

export default function About() {
  return (
    <section id="About">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Welcome
            <br className="hidden lg:inline-block" /> I'm Null Pixel
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm currently completing my final year of study for my Bachelors
            degree in Software Engineering at Queen's University Belfast. Aside
            from my studies and personal projects, I'm a part time placement
            engineer working on frontend development and testing of a mobile
            app.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Portfolio
            </a>
            <a
              href="https://github.com/null-pixel-dev"
              className="ml-4 inline-flex"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./github-dark.svg" width="32" height="32" />
            </a>
            <a
              href="https://www.x.com/nullpixeldev"
              className="ml-4 inline-flex"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./twitter-dark.svg" width="32" height="32" />
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./favicon.png"
          />
        </div>
      </div>
    </section>
  );
}
