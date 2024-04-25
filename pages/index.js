import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import AboutMe from "@/components/About";
import Project from "@/components/Project";
import MySkill from "@/components/Skills";
export default function Home() {
  return (
    <body className="bg-gradient-to-b from-[#1A4D2E] via-[#4F6F52] via-[#E8DFCA] via-[#BACD92] to-[#F5EFE6] min-h-screen w-full">
      <div className="flex items-center justify-center">
        <Header />
      </div>
      <div className="flex items-center justify-center pt-2">
        <div className="flex flex-col space-y-20 pt-10 items-center justify-center">
          <div id="intro" className="pt-20">
            <Introduction />
          </div>
          <div id="about" className="pt-20">
            <AboutMe />
          </div>
          <div id="projects" className="pt-20">
            <Project />
          </div>
          <div id="skills" className="pt-20">
            <MySkill />
          </div>
        </div>
      </div>
    </body>
  );
}
