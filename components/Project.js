import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { projectList } from "./ProjectList";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

export default function Project() {
  const [nextImg, setNextImg] = useState(0);

  const handleNextImage = (idx) => {
    setNextImg((nextImg + 1) % projectList[idx].image.length);
  };

  const handlePreviousImage = (idx) => {
    if (nextImg === 0) {
      return;
    }
    setNextImg((nextImg - 1) % projectList[idx].image.length);
  };
  return (
    <>
      <div className="flex flex-col space-y-10 items-center justify-center pb-5">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
          My Works
        </h1>
        {/* <div className="flex flex-col space-y-10 px-2 md:w-3/4"> */}
        <ul className="flex flex-col space-y-10 items-center md:px-0 px-3">
          {projectList.map((project, idx) => (
            <li
              key={idx}
              className="flex flex-col md:flex-row md:justify-around bg-[#F0EBE3] rounded-lg md:w-3/4 w-full"
            >
              <div className="flex flex-col px-10 text-md text-[#294B29] font-bold py-5 md:w-1/2 w-full">
                {project.description}
                <ul className="flex flex-wrap justify-between md:justify-start pt-5 space-x-3">
                  {project.tags.map((tag, index) => (
                    <li
                      className="bg-gradient-to-b from-[#FFFBDA] via-[#FFEC9E] via-[#FFBB70] to-[#ED9455] px-3 py-1 text-gray-600 rounded-full text-gray-300"
                      key={index}
                    >
                      #{tag}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 flex flex-row justify-around text-black">
                  <a href={project.link} alt="github link" target="_blank" className="hover:text-xl hover:underline">
                    <FaGithub size="2em" className="mr-3" /> Link
                  </a>
                  <a href={project.demo} alt="demo link" target="_blank" className="hover:text-xl hover:underline">
                    <IoIosLink size="2em" className="mr-3" />
                    Demo
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={project.image[nextImg]}
                  width="700"
                  height="400"
                  alt="pics"
                  className="shadow-2xl rounded-t-2xl rounded-br-lg mt-10 object-cover"
                />
                <div className="absolute md:bottom-20 bottom-10 pb-10 left-0 flex items-center">
                  <button
                    className="bg-slate-300 bg-opacity-60 rounded-full px-2 py-2"
                    type="button"
                    onClick={() => handlePreviousImage(idx)}
                  >
                    <GrFormPrevious />
                  </button>
                </div>
                <div className="absolute ml-10 md:bottom-20 bottom-10 pb-10 right-0 flex items-center">
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
        {/* <div className="flex justify-between space-x-20 bg-gray-50 px-2 py-2 rounded-lg">
            <span>This is my personal website</span>
            <div className="relative">
              <Image
                src={img[nextImg]}
                width="300"
                height="300"
                alt="pics"
                className="shadow-2xl rounded-md"
              />
              <div className="absolute top-20 pt-16 left-0 flex items-center">
                <button
                  className="bg-slate-300 bg-opacity-80 rounded-full px-2 py-2"
                  type="button"
                  onClick={handlePreviousImage}
                >
                  <GrFormPrevious />
                </button>
              </div>
              <div className="absolute top-20 pt-16 right-0 flex items-center">
                <button
                  className="bg-slate-300 bg-opacity-80 rounded-full px-2 py-2"
                  type="button"
                  onClick={handleNextImage}
                >
                  <MdNavigateNext />
                </button>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
