import Image from "next/image";
import toji from "../public/toji.png";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export default function Introduction() {
  return (
    <>
      <div className="inline-block">
        <div className="flex items-center justify-center">
          <Image
            src={toji}
            alt="toji"
            width="120"
            height="120"
            quality="95"
            className="bg-cyan-800 px-2 py-2 rounded-full flex items-center"
          />
        </div>
        <div className="text-center max-w-prose mx-auto py-5 text-2xl px-2">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-700 to-teal-400">
            Hello, I&apos;m Minh
          </h1>
          <p className="mt-4">
            a college student studying Computer Programming and Analysis at
            Seneca College.
          </p>
          <p className="mt-4">
            My academic focus is on software development, algorithms, and web
            development.
          </p>
          <p className="mt-4">
            I have hands-on experience with various projects where I&apos;ve
            applied classroom concepts to real-world challenges.
          </p>
        </div>
        <div className="flex items-center justify-center pt-5">
          <div className="flex space-x-3 font-bold">
            <button
              type="button"
              className="flex bg-cyan-800 text-white rounded-2xl px-6 py-2 hover:bg-cyan-600"
            >
              <RiContactsFill size="1.5em" className="pr-2" /> Contact me
            </button>
            <button
              type="button"
              className="flex bg-cyan-800 text-white rounded-2xl px-4 py-2 hover:bg-cyan-600"
            >
              Download Resume
              <MdOutlineFileDownload size="1.5em" className="pl-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
