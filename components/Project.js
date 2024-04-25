import Image from "next/image";
import dev1 from "../public/dev.png";
import dev2 from "../public/toji.png";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
export default function Project() {
  const [nextImg, setNextImg] = useState(0);
  const img = [dev1, dev2];

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
      <div className="flex items-center justify-center pb-5">
        <h1 className="text-5xl font-sm">My Works</h1>
      </div>

      <div className="flex flex-col space-y-10">
        <div className="flex space-x-10">
          <div className="flex justify-between space-x-10 bg-gray-50 px-2 py-2 rounded-lg">
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
          </div>

          <div className="flex justify-between space-x-10 bg-gray-50 px-2 py-2 rounded-lg">
            <div className="shadow-2xl mt-2">
              <Image src={dev1} width="300" height="300" alt="pics" />
            </div>
            <span>This is my personal website</span>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="flex justify-between space-x-10 bg-gray-50 px-2 py-2 rounded-lg">
            <span>This is my personal website</span>
            <div className="shadow-2xl mt-2">
              <Image src={dev1} width="300" height="300" alt="pics" />
            </div>
          </div>
          <br />
          <div className="flex justify-between space-x-10 bg-gray-50 px-2 py-2 rounded-lg">
            <div className="shadow-2xl mt-2">
              <Image src={dev1} width="300" height="300" alt="pics" />
            </div>
            <span>This is my personal website</span>
          </div>
        </div>
      </div>
    </>
  );
}
