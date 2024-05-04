import Image from "next/image";
import photo from "../public/photo.jpg"
import { MdOutlineFileDownload } from "react-icons/md";

export default function Introduction() {
  return (
    <>
      <div className="inline-block">
        <div className="flex items-center justify-center">
          <Image
            src={photo}
            alt="toji"
            width="110"
            height="110"
            quality="95"
            className="bg-green-200 px-2 py-2 rounded-full flex items-center"
          />
        </div>
        <div className="text-center max-w-prose mx-auto py-5 text-2xl px-2 sm:text-3xl">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#E8DFCA] to-[#F5EFE6] sm:text-6xl">
            Hello, I&apos;m Minh
          </h1>
          <p className="mt-4 text-gray-200 sm:text-lg">
            A college student studying Computer Programming and Analysis at
            Seneca College.
          </p>
          <p className="mt-4 text-gray-200 sm:text-lg">
            My academic focus is on software development, algorithms, and web
            development.
          </p>
          <p className="mt-4 text-gray-200 sm:text-lg">
            I have hands-on experience with various projects where I&apos;ve
            applied classroom concepts to real-world challenges.
          </p>
        </div>
        <div className="flex items-center justify-center pt-5 flex-col sm:flex-row">
          <div className="flex space-x-3 font-bold flex-col sm:flex-row sm:space-y-0 space-y-3">
            <button
              type="button"
              className="flex bg-[#FFEBB2] text-gray-500 rounded-2xl px-4 py-2 hover:bg-yellow-600 hover:text-gray-200"
            >
            <a href="/My-Resume.pdf">
              Download Resume
            </a>
              <MdOutlineFileDownload size="1.5em" className="pl-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
