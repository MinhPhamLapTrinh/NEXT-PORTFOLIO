import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export default function AboutMe() {
  return (
    <>
      <div className="inline-block">
        <div className="flex items-center justify-center pb-5">
          <h1 className="text-5xl font-medium">About me</h1>
        </div>
        <p className="mb-3 font-small text-lg text-center max-w-prose mx-auto">
          I&apos;m [Your Name], a Computer Science student at [Your
          College/University Name]. I have a passion for technology and a knack
          for solving complex problems with innovative solutions. My studies
          focus on software development, data structures, algorithms, and
          artificial intelligence. Beyond academics, I&apos;ve gained valuable
          experience through internships and projects, allowing me to work on
          real-world applications. I&apos;m active in tech clubs and hackathons,
          where I enjoy collaborating with peers and exploring new technologies.
        </p>
        <p className="mb-3 font-small text-lg text-center max-w-prose mx-auto mt-5">
          In my free time, I enjoy [Your Hobbies/Interests], which help me stay
          energized and focused. I believe in using technology to make a
          positive impact on the world, and I&apos;m excited to share my journey
          with you through this portfolio. I&apos;m looking forward to
          connecting with others in the tech community who share my interests
          and values.
        </p>
        <div className="flex items-center justify-center pt-5">
          <div className="w-full bg-[#EADBC8] rounded-lg overflow-hidden shadow-xl">
            <div className="px-10 pt-3 pb-10 mx-auto">
              <div className="font-bold text-xl mb-2">
                Tools, I&apos;m using every single day
              </div>
              <div className="block">
                <div className="flex space-x-10 items-center justify-center">
                  <div className="bg-white w-1/4 shadow-lg rounded-full flex flex-col items-center">
                    <FaNodeJs size="3em" className="pt-2" />{" "}
                    <div className="font-medium">NodeJS</div>
                  </div>
                  <div className="bg-white w-1/4 shadow-lg rounded-full flex flex-col items-center">
                    <FaReact size="3em" className="pt-2" />{" "}
                    <div className="font-medium">ReactJS</div>
                  </div>
                  <div className="bg-white w-1/4 shadow-lg rounded-full flex flex-col items-center">
                    <TbBrandNextjs size="3em" className="pt-2" />{" "}
                    <div className="font-medium">NextJS</div>
                  </div>
                </div>
                {/* Second Row */}
                <div className="flex space-x-10 items-center justify-center pt-5">
                  <div className="bg-white w-1/4 shadow-lg rounded-full flex flex-col items-center">
                    <FaGitAlt size="3em" className="pt-2" />{" "}
                    <div className="font-medium">Git</div>
                  </div>
                  <div className="bg-white w-1/4 shadow-lg rounded-full flex flex-col items-center">
                    <SiExpress size="3em" className="pt-2" />{" "}
                    <div className="font-medium">ExpressJS</div>
                  </div>
                  <div className="bg-white w-1/4 shadow-lg rounded-full flex flex-col items-center">
                    <IoLogoJavascript size="3em" className="pt-2" />{" "}
                    <div className="font-medium">JavaScript</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
