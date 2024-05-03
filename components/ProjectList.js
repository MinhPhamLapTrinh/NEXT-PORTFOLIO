import personalWeb1 from "../public/personal-web/personal-web-1.png";
import personalWeb2 from "../public/personal-web/personal-web-2.png";
import personalWeb3 from "../public/personal-web/personal-web-3.png";
import museum1 from "../public/next-museum-collection/museum1.png";
import museum2 from "../public/next-museum-collection/museum2.png";
import museum3 from "../public/next-museum-collection/museum3.png";
import museum4 from "../public/next-museum-collection/museum4.png";
import museum5 from "../public/next-museum-collection/museum5.png";
import museum6 from "../public/next-museum-collection/museum6.png";
import museum7 from "../public/next-museum-collection/museum7.png";
import museum8 from "../public/next-museum-collection/museum8.png";
import sg1 from "../public/sglotus/sg1.png";
import sg2 from "../public/sglotus/sg2.png";
import sg3 from "../public/sglotus/sg3.png";
import sg4 from "../public/sglotus/sg4.png";
import sg5 from "../public/sglotus/sg5.png";
import sg6 from "../public/sglotus/sg6.png";
import sg7 from "../public/sglotus/sg7.png";
import sg8 from "../public/sglotus/sg8.png";

export const projectList = [
  {
    title: "Portfolio Website",
    description:
      "My portfolio website showcases my projects and skills in web development. Built with Next.js, React, and TailwindCSS, it's designed for performance and seamless navigation. Explore my work and learn about my expertise in frontend development.",
    link: "https://github.com/MinhPhamLapTrinh/NEXT-PORTFOLIO",
    demo: "https://next-portfolio-app-woad.vercel.app/",
    tags: ["React", "Next.js", "TailwindCSS"],
    image: [personalWeb1, personalWeb2, personalWeb3],
  },
  {
    title: "The Met Museum",
    description:
      "Developed a full-stack web app that connects with the Metropolitan Museum of Art's public API, allowing users to explore over 470,000 artworks. I have applied Next.js and React for a responsive user interface. The back-end, created with Node.js and Express.js, uses MongoDB for data storage and JWT for secure user authentication.",
    link: "https://github.com/MinhPhamLapTrinh/NEXT-MUSEUM",
    demo: "https://next-museum.vercel.app/",
    tags: ["React", "Next.js", "Bootstrap", "Node.js", "Express.js", "JWT"],
    image: [
      museum1,
      museum2,
      museum3,
      museum4,
      museum5,
      museum6,
      museum7,
      museum8,
    ],
  },
  {
    title: "Saigon Lotus Employee Time Tracking",
    description:
      "Developed a web app that allows restaurant staff to clock in and out, and view their time records. The front-end, built a responsive user interface using Next.js, React, and Tailwind. The back-end, created with Node.js and Express.js, manages employee data in MongoDB and secures owner data by JWT, providing the owner with the ability to add employees, edit their time records, and view their total working hours within the specific range of date.",
    link: "https://github.com/MinhPhamLapTrinh/NEXT-MUSEUM",
    demo: "https://next-museum.vercel.app/",
    tags: ["React", "Next.js", "TailwindCSS", "Node.js", "Express.js", "JWT"],
    image: [sg1, sg2, sg3, sg4, sg5, sg6, sg7, sg8],
  },
];
