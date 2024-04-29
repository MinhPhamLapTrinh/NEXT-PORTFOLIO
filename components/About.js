import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export default function AboutMe() {
  const toolList = [
    {
      label: "ReactJS",
      icon: <FaReact size="3em" className="pt-2" />,
    },
    {
      label: "NextJS",
      icon: <TbBrandNextjs size="3em" className="pt-2" />,
    },
    {
      label: "Git",
      icon: <FaGitAlt size="3em" className="pt-2" />,
    },
    {
      label: "JavaScript",
      icon: <IoLogoJavascript size="3em" className="pt-2" />,
    },
  ];
  return (
    <>
      <div className="inline-block">
        <div className="flex items-center justify-center pb-5">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#E8DFCA] to-[#F5EFE6]">
            About me
          </h1>
        </div>
        <p className="mb-3 font-medium text-lg sm:text-xl text-center max-w-prose mx-auto text-gray-200">
          I&apos;m [Your Name], a Computer Science student at [Your
          College/University Name]. I have a passion for technology and a knack
          for solving complex problems with innovative solutions. My studies
          focus on software development, data structures, algorithms, and
          artificial intelligence. Beyond academics, I&apos;ve gained valuable
          experience through internships and projects, allowing me to work on
          real-world applications. I&apos;m active in tech clubs and hackathons,
          where I enjoy collaborating with peers and exploring new technologies.
        </p>
        <p className="mb-3 font-medium text-lg sm:text-xl text-center max-w-prose mx-auto mt-5 text-gray-200">
          In my free time, I enjoy [Your Hobbies/Interests], which help me stay
          energized and focused. I believe in using technology to make a
          positive impact on the world, and I&apos;m excited to share my journey
          with you through this portfolio. I&apos;m looking forward to
          connecting with others in the tech community who share my interests
          and values.
        </p>
        <div className="flex items-center justify-center pt-10 px-5 md:px-0">
          <div className="w-full bg-[#EADBC8] rounded-lg overflow-hidden shadow-xl">
            <div className="px-10 pt-3 pb-10 mx-auto">
              <div className="font-bold text-xl mb-2 text-gray-700">
                Tools, I&apos;m using to build this app.
              </div>
              <ul className="flex flex-row flex-wrap justify-center">
                {toolList.map((tool, idx) => (
                  <li
                    key={idx}
                    className="bg-white md:w-1/5 md:px-2 shadow-lg rounded-full flex flex-row justify-center w-1/2 md:flex md:flex-col md:items-center m-2"
                  >
                    <div className="flex md:items-center space-x-1 md:flex md:flex-col md:py-0 py-3">
                      <span className="md:pl-3">{tool.icon}</span>
                      <span className="font-medium flex items-center justify-center">
                        {tool.label}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
