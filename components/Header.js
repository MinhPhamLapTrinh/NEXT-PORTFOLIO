import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import Link from "next/link";
const links = [
  {
    name: "Intro",
    href: "intro",
  },
  {
    name: "About me",
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
      <header className="bg-white fixed w-1/2 top-10 py-3 rounded-3xl z-50">
        <nav>
          <ul className="flex justify-evenly">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link href={`#${link.href}`} passHref legacyBehavior>
                  <div className="px-2 hover:bg-gray-200 rounded-lg">
                    <button
                      type="button"
                      className="text-lg text-cyan-900 hover:text-black"
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
                <button type="button">
                  <FaGithub size="1.5em" />
                </button>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/minhpham1143/"
                passHref
                legacyBehavior
              >
                <button type="button">
                  <FaLinkedin size="1.5em" />
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
