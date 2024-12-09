import Hero from "@/Components/Hero";
import Header from "@/Components/Header";
import Exp from "@/Components/Exp";
import Projects from "@/Components/Projects";

export default function Home() {
  return (


    <>


      <section className="w-full h-full">

        {/* navbar */}
        <div className="sm:block hidden">

          <Header />

        </div>

        {/* Hero */}
        <div className="h-[100vh]">

          <Hero />

        </div>


        {/* Experience */}
        <div className="">

          <Exp />

        </div>

        {/* Projects */}
        <div className="" id="projects">

          <Projects />

        </div>

      </section>


    </>

  );
}
