import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
export default function Home() {
  return (
    <main className="bg-gradient-to-br from-cyan-200 via-sky-100 to-blue-50 h-screen">
      <div className="flex flex-col space-y-20 pt-10 items-center justify-center">
        <Header />
        <Introduction />
      </div>
    </main>
  );
}
