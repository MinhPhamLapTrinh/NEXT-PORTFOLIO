import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { projectList } from "./ProjectList";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

export default function Project() {
  const [currImg, setCurrImg] = useState(new Array(projectList.length).fill(0));
  const handleNextImage = (projectIdx) => {
    setCurrImg((preState) => {
      const newState = [...preState];

      newState[projectIdx] =
        (newState[projectIdx] + 1) % projectList[projectIdx].image.length;
      console.log(newState);
      return newState;
    });
  };

  const handlePreviousImage = (projectIdx) => {
    setCurrImg((preState) => {
      const newState = [...preState];

      newState[projectIdx] =
        (newState[projectIdx] - 1) % projectList[projectIdx].image.length;
      return newState;
    });
  };
  return (
    <>
      <div className="flex flex-col space-y-10 items-center justify-center pb-5">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
          My Works
        </h1>
        <ul className="flex flex-col space-y-10 items-center md:px-0 px-3">
          {projectList.map((project, idx) => (
            <li
              key={idx}
              className="flex flex-col md:flex-row md:justify-around bg-[#F0EBE3] rounded-lg md:w-3/4 w-full md:h-96"
            >
              <div className="flex flex-col px-10 text-gray-700 py-5 md:w-1/2 w-full">
                <span className="text-2xl font-bold text-black">
                  {project.title}
                </span>
                <span className="text-sm">{project.description}</span>
                <ul className="flex flex-wrap justify-around md:justify-start pt-2 space-x-3">
                  {project.tags.map((tag, index) => (
                    <li
                      className="bg-gradient-to-b from-[#FFFBDA] via-[#FFEC9E] via-[#FFBB70] to-[#ED9455] px-3 py-1 text-gray-600 rounded-full text-gray-300 text-sm"
                      key={index}
                    >
                      #{tag}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 flex flex-row justify-around text-black">
                  <a
                    href={project.link}
                    alt="github link"
                    target="_blank"
                    className="hover:text-xl hover:underline"
                  >
                    <FaGithub size="2em" className="mr-3" /> Link
                  </a>
                  <a
                    href={project.demo}
                    alt="demo link"
                    target="_blank"
                    className="hover:text-xl hover:underline"
                  >
                    <IoIosLink size="2em" className="mr-3" />
                    Demo
                  </a>
                </div>
              </div>
              <div className="relative h-full mt-10">
                <Image
                  src={project.image[currImg[idx]]}
                  width="800"
                  height="200"
                  alt="pics"
                  className="shadow-2xl rounded-t-2xl rounded-lg object-cover"
                />
                {currImg[idx] === 0 ? (
                  <></>
                ) : (
                  <>
                    <div className="absolute md:top-10 bottom-10 pb-10 left-0 flex items-center">
                      <button
                        className="bg-slate-300 bg-opacity-60 rounded-full px-2 py-2"
                        type="button"
                        onClick={() => handlePreviousImage(idx)}
                      >
                        <GrFormPrevious />
                      </button>
                    </div>
                  </>
                )}

                <div className="absolute ml-10 md:top-10 bottom-10 pb-10 right-0 flex items-center">
                  <button
                    className="bg-slate-300 bg-opacity-60 rounded-full px-2 py-2"
                    type="button"
                    onClick={() => handleNextImage(idx)}
                  >
                    <MdNavigateNext />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
