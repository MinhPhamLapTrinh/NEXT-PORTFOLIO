import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import AboutMe from "@/components/About";
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#1A4D2E] via-[#4F6F52] via-[#E8DFCA] to-[#F5EFE6] min-h-screen">
      <div className="pl-2">
        <Header />
      </div>
      <div className="flex flex-col space-y-20 pt-10 items-center justify-center">
        <div id="intro">
          <Introduction />
        </div>
        <div id="about" className="pt-6">
          <AboutMe />
        </div>
      </div>
    </main>
  );
}
