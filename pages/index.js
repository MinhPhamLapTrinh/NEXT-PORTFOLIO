import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import AboutMe from "@/components/About";
import Project from "@/components/Project";
import MySkill from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#1A4D2E] via-[#4F6F52] via-[#E8DFCA] via-[#BACD92] via-[#4F6F52] to-[#F5EFE6] min-h-screen w-full overflow-x-hidden">
      <div className="flex items-center justify-center">
        <Header />
      </div>

      <div className="flex flex-col space-y-20 pt-10">
        <div className="flex flex-col items-center justify-center">
          <div id="intro" className="pt-20 animate-fade-in" data-aos="fade-up">
            <Introduction />
          </div>
          <div
            id="about"
            className="pt-20"
          >
            <AboutMe />
          </div>
        </div>
        <div id="projects" className="pt-20">
          <Project />
        </div>
        <div id="skills" className="pt-20">
          <MySkill />
        </div>
        <div id="contact" className="pt-20">
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}
