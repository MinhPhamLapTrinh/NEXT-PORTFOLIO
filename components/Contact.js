import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
export default function Contact() {
  const socialLinks = [
    {
      label: "Github",
      url: "https://github.com/MinhPhamLapTrinh",
      icon: <FaGithub size="3em" />,
    },
    {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/minhpham1143/",
      icon: <FaLinkedin size="3em" />,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center pb-5">
        <h1 className="text-5xl font-sm">Contact Me</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col space-y-10 ml-10 w-1/2">
          <h1 className="font-small text-2xl text-gray-500 ml-auto">
            Thank you for spending time on checking out my portfolio website.
          </h1>
          <div className="container">
            <a
              className="btn bg-[#FFEC9E] text-gray-500 font-bold px-10 py-5 rounded-full hover:bg-[#FFBB70]"
              href="mailto:phamducminh910@gmail.com?subject=Hello from your Portfolio Website!"
              rel="noopener"
            >
              Email Me
            </a>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <ul>
            {socialLinks.map((link, idx) => (
              <li
                className="bg-white rounded-full px-5 py-5 mb-10 hover:bg-gray-700 hover:text-white"
                key={idx}
              >
                <Link href={link.url} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center justify-center space-x-5">
                      <span>{link.icon}</span>
                      <span className="text-3xl">{link.label}</span>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
