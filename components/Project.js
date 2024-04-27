import Image from "next/image";
import personalWeb1 from "../public/personal-web/personal-web-1.png";
import personalWeb2 from "../public/personal-web/personal-web-2.png";
import personalWeb3 from "../public/personal-web/personal-web-3.png";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";

export default function Project({ description, imageList, gitHubLink }) {
  const [nextImg, setNextImg] = useState(0);
  const img = [personalWeb1, personalWeb2, personalWeb3];

  const handleNextImage = () => {
    setNextImg((nextImg + 1) % img.length);
  };

  const handlePreviousImage = () => {
    if (nextImg === 0) {
      return;
    }
    setNextImg((nextImg - 1) % img.length);
  };
  return (
    <>
      <div className="flex flex-col space-y-10 items-center justify-center pb-5">
        <h1 className="text-5xl font-sm">My Works</h1>
        <div className="flex flex-col space-y-10 px-2 w-3/4">
          <div className="flex flex-row justify-around bg-[#F0EBE3] rounded-lg">
            <span className="flex px-10 py-5 w-1/2">
              This is my personal website. This is my personal website. This is
              my personal website. This is my personal website. This is my
              personal website. This is my personal website. This is my personal
              website. This is my personal website.
            </span>
            <div className="relative">
              <Image
                src={img[(nextImg + 1) % img.length]}
                width="700"
                height="400"
                alt="pics"
                className="shadow-2xl rounded-t-2xl rounded-br-lg mt-10 absolute bottom-0"
              />
              <Image
                src={img[nextImg]}
                width="700"
                height="400"
                alt="pics"
                className="shadow-2xl rounded-t-2xl rounded-br-lg mt-10"
              />
              <div className="absolute  bottom-20 pb-10 left-0 flex items-center">
                <button
                  className="bg-slate-300 bg-opacity-60 rounded-full px-2 py-2"
                  type="button"
                  onClick={handlePreviousImage}
                >
                  <GrFormPrevious />
                </button>
              </div>
              <div className="absolute ml-10 bottom-20 pb-10 right-0 flex items-center">
                <button
                  className="bg-slate-300 bg-opacity-60 rounded-full px-2 py-2"
                  type="button"
                  onClick={handleNextImage}
                >
                  <MdNavigateNext />
                </button>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
}
