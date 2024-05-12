import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function MySkill() {
  const skillList = [
    {
      skillName: "Python",
      icon: <FaPython />,
    },
    {
      skillName: "HTML",
      icon: <FaHtml5 />,
    },
    {
      skillName: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      skillName: "JavaScript",
      icon: <IoLogoJavascript />,
    },
    {
      skillName: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      skillName: "Express",
      icon: <SiExpress />,
    },
    {
      skillName: "Next.js",
      icon: <TbBrandNextjs />,
    },
    {
      skillName: "React",
      icon: <FaReact />,
    },
    {
      skillName: "Git",
      icon: <FaGitAlt />,
    },
    {
      skillName: "MongoDB",
      icon: <DiMongodb />,
    },
    {
      skillName: "TailwindCSS",
      icon: <SiTailwindcss />,
    },
    {
      skillName: "PostgreSQL",
      icon: <BiLogoPostgresql />,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center pb-5">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-600">
          My Skills
        </h1>
      </div>
      <div className="flex items-center justify-center pt-5 pl-3" data-aos="fade-up-right">
        <div className="md:w-1/2 sm:w-full">
          <ul className="flex flex-wrap justify-center gap-2 pr-3 md:pr-0 text-lg text-gray-800">
            {skillList.map((skill, idx) => (
              <li
                key={idx}
                className="flex items-center justify-center py-2 px-5 bg-[#B5C18E] rounded-lg shadow-lg hover:text-3xl text-2xl text-white"
              >
                <span className="text-5xl">{skill.icon}</span>
                <span className="font-small">{skill.skillName}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
