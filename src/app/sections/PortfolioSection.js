"use client";
import { useState, useCallback } from "react";
import { HiExternalLink } from "react-icons/hi";
import portfolio from "../constants/portfolio";
import ImageCarousel from "../components/ImageCarousel";

export default function PortfolioSection() {
  const [selected, setSelected] = useState(0);
  const onNext = useCallback(() => {
    if (selected === portfolio.projects.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  }, [setSelected, selected]);
  const onPrevious = useCallback(() => {
    if (selected === 0) {
      setSelected(portfolio.projects.length - 1);
    } else {
      setSelected(selected - 1);
    }
  }, [setSelected, selected]);
  return (
    <div className="text-center lg:p-2 py-16">
      <h3 className="text-2xl lg:text-3xl py-2 font-semibold text-gray-600 dark:text-white">{portfolio.title}</h3>
      <p className="text-md lg:text-lg py-2 leading-6 lg:leading-8 text-gray-800 dark:text-white">
        {portfolio.description}
      </p>
      <div className="flex flex-row items-center flex-wrap py-10 max-w-5xl mx-auto">
        <div className="relative w-full">
          <div className="relative h-144 lg:h-96 xl:h-128 overflow-hidden rounded-lg">
            {portfolio.projects.map((project, index) => (
              <div
                key={project.name}
                className={`h-full w-full absolute transition-all duration-500 ${
                  selected === index ? "opacity-100" : `translate-x-full opacity-0`
                }`}
              >
                <div className="flex flex-col lg:flex-row w-full h-full bg-gradient-to-r from-blue-400/30 bg-violet-400/30 dark:from-blue-600/30 dark:to-violet-900/30 rounded-3xl p-0">
                  <ImageCarousel images={project.images} />
                  <div className="flex flex-col justify-between flex-1 text-left p-4 lg:p-8">
                    <div>
                      <h3 className="text-gray-600 dark:text-white font-bold text-md lg:text-xl mb-1">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 dark:text-white text-xs lg:text-sm w-full overflow-clip">
                        {project.intro}
                      </p>
                      {project.techStack.frameworks && (
                        <>
                          <h4 className="text-gray-600 dark:text-white font-bold text-sm lg:text-md mt-1 mb-0">
                            Frameworks/Libraries used:
                          </h4>
                          <p className="text-gray-600 dark:text-white text-xs lg:text-sm w-full overflow-clip">
                            {project.techStack.frameworks}
                          </p>
                        </>
                      )}
                      {project.techStack.languages && (
                        <>
                          <h4 className="text-gray-600 dark:text-white font-bold text-sm lg:text-md mt-1 mb-0">
                            Languages used:
                          </h4>
                          <p className="text-gray-600 dark:text-white text-xs lg:text-sm w-full overflow-clip">
                            {project.techStack.languages}
                          </p>
                        </>
                      )}
                      {project.techStack.database && (
                        <>
                          <h4 className="text-gray-600 dark:text-white font-bold text-sm lg:text-md mt-1 mb-0">
                            Database used:
                          </h4>
                          <p className="text-gray-600 dark:text-white text-xs lg:text-sm w-full overflow-clip">
                            {project.techStack.database}
                          </p>
                        </>
                      )}
                    </div>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        className="z-30 flex flex-row self-end items-center bg-gradient-to-t lg:bg-gradient-to-r from-blue-500 to-violet-500 duration-500 px-4 py-2 rounded-xl ml-8 text-white"
                      >
                        Demo <HiExternalLink className="ml-2" />
                      </a>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 left-1/2 bottom-4">
            {portfolio.projects.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  selected === index ? "bg-indigo-500/60" : "bg-gray-400/40"
                } hover:bg-indigo-500`}
                onClick={() => setSelected(index)}
              ></button>
            ))}
          </div>
          <div className="absolute top-0 right-0 h-full w-full flex justify-between items-center pointer-events-auto">
            <button className="pl-2 cursor-pointer group focus:outline-none" type="button" onClick={onPrevious}>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-800/20 dark:bg-indigo-200/20 group-hover:bg-indigo-800/30 dark:group-hover:bg-indigo-200/30 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-indigo-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" className="pr-2 cursor-pointer group focus:outline-none" onClick={onNext}>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-800/20 dark:bg-indigo-200/20 group-hover:bg-indigo-800/30 dark:group-hover:bg-indigo-200/30 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-indigo-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
