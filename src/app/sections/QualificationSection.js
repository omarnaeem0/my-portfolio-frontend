import { useState } from "react";
import qualification from "../constants/qualification";

export default function QualificationSection() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="text-center lg:p-2 py-16">
      <h3 className="text-2xl lg:text-3xl py-2 font-semibold text-gray-600 dark:text-white">
        {qualification.title}
      </h3>
      <p className="text-md lg:text-lg py-2 leading-6 lg:leading-8 text-gray-800 dark:text-white">
        {qualification.description}
      </p>
      <div className="flex flex-col justify-center items-center py-6 px-4 lg:px-10 max-w-5xl m-auto ">
        <div className="flex flex-row gap-10 mb-10">
          {qualification.qualifications.map((each, index) => (
            <h4
              key={each.title}
              onClick={() => setSelected(index)}
              className={`text-xl font-bold cursor-pointer hover:text-blue-500 hover:dark:text-blue-500 ${
                selected === index
                  ? "dark:text-blue-500 text-blue-500"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {each.title}
            </h4>
          ))}
        </div>
        <div className="w-96 flex flex-col">
          {qualification.qualifications[selected].items.map((each, index) => (
            <div key={index} className={`w-full flex flex-col`}>
              <div
                className={`w-0.5 self-center absolute mx-auto ${
                  selected !== 1 ? "h-24" : "h-40"
                } ${
                  index !==
                  qualification.qualifications[selected].items.length - 1
                    ? "bg-blue-500"
                    : ""
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full absolute bg-blue-500 top-0 -right-[5px]`}
                ></div>
              </div>
              <div
                className={`w-1/2 px-4 ${
                  index % 2 === 0 ? "self-start" : "self-end"
                } ${selected !== 1 ? "h-24" : "h-40"}`}
              >
                <h2
                  className={`text-sm font-bold text-gray-800 dark:text-white flex-wrap mb-1`}
                >
                  {each.title}
                </h2>
                <h4
                  className={`text-sm text-gray-800 dark:text-white flex-wrap mb-1`}
                >
                  {each.place}
                </h4>
                <p
                  className={`text-xs text-gray-800 dark:text-white flex-wrap`}
                >
                  {each.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
