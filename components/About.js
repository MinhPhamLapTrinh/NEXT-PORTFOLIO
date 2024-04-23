import Image from "next/image";
import DevTool from "../public/dev.png";
export default function AboutMe() {
  return (
    <>
      <div className="inline-block">
        <div className="flex items-center justify-center pb-5">
          <h1 className="text-5xl font-bold">About me</h1>
        </div>
        <p className="mb-3 font-medium text-lg text-center max-w-prose mx-auto">
          I&apos;m [Your Name], a Computer Science student at [Your
          College/University Name]. I have a passion for technology and a knack
          for solving complex problems with innovative solutions. My studies
          focus on software development, data structures, algorithms, and
          artificial intelligence. Beyond academics, I&apos;ve gained valuable
          experience through internships and projects, allowing me to work on
          real-world applications. I&apos;m active in tech clubs and hackathons,
          where I enjoy collaborating with peers and exploring new technologies.
        </p>
        <p className="mb-3 font-medium text-lg text-center max-w-prose mx-auto mt-5">
          In my free time, I enjoy [Your Hobbies/Interests], which help me stay
          energized and focused. I believe in using technology to make a
          positive impact on the world, and I&apos;m excited to share my journey with
          you through this portfolio. I&apos;m looking forward to connecting with
          others in the tech community who share my interests and values.
        </p>
        <div className="flex items-center justify-center pt-5">
          <div className="max-w-lg bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <Image
              className="w-1/2 h-auto mx-auto"
              src={DevTool}
              alt="Dev Tools"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Tools, I am using every single day
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
