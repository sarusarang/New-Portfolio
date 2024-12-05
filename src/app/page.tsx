import Hero from "@/Components/Hero";
import Header from "@/Components/Header";

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

      </section>


    </>

  );
}
