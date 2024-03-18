import React from "react";

export default function About({ footerHeight }) {
  return (
    <section id="About">
      <div className="relative">
        <div className="fixed bottom-20 left-16 z-40 flex flex-col space-y-4">
          <a
            href="https://github.com/null-pixel-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./icons/github-dark.svg"
              width="32"
              height="32"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.twitter.com/nullpixeldev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./icons/twitter-dark.svg"
              width="32"
              height="32"
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.instagram.com/nullpixeldev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./icons/instagram-dark.svg"
              width="32"
              height="32"
              alt="Instagram"
            />
          </a>
        </div>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-orbitron font-medium text-white">
              Welcome
              <br className="hidden lg:inline-block" /> I'm Null Pixel
            </h1>
            <p className="mb-8 leading-relaxed">
              I'm currently completing my final year of study for my Bachelors
              degree in Software Engineering at Queen's University Belfast.
              Aside from my studies and personal projects, I'm a part time
              placement engineer working on frontend development and testing of
              a mobile app.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex font-orbitron text-white bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-teal hover:text-black rounded text-lg"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex font-orbitron text-white bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-teal hover:text-black rounded text-lg"
              >
                See My Portfolio
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
      </div>
    </section>
  );
}
