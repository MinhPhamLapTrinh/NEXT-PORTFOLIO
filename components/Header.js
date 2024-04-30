import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import Link from "next/link";
const links = [
  {
    name: "Intro",
    href: "intro",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Projects",
    href: "projects",
  },
  {
    name: "Skills",
    href: "skills",
  },
  {
    name: "Contact",
    href: "contact",
  },
];
export default function Header() {
  return (
    <>
      <header className="bg-gradient-to-b from-[#FFFBDA] via-[#FFEC9E] via-[#FFBB70] to-[#ED9455] fixed w-full sm:w-full md:w-1/2 top-5 py-3 rounded-3xl z-50">
        <nav>
          <ul className="flex justify-evenly">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link href={`#${link.href}`} passHref legacyBehavior>
                  <div className="px-2 hover:bg-yellow-700 rounded-lg">
                    <button
                      type="button"
                      className="text-sm font-bold md:text-lg sm:text-md text-cyan-900 hover:text-white"
                    >
                      {link.name}
                    </button>
                  </div>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://github.com/MinhPhamLapTrinh"
                passHref
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  <button type="button">
                    <FaGithub size="1.5em" />
                  </button>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/minhpham1143/"
                passHref
                legacyBehavior
                target="_blank"
              >
                <a target="_blank" rel="noopener noreferrer">
                  <button type="button" className="pr-2">
                    <FaLinkedin size="1.5em" />
                  </button>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
