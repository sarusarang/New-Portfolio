"use client"
import DotPattern from "./ui/dot-pattern";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { cn } from "@/lib/utils";

export default function Hero() {




    const people = [
        {
            id: 1,
            name: "React Js",
            designation: "",
            image:
                "/5c7b53a7be1dd267f24f7559584d1345.jpg",
        },
        {
            id: 2,
            name: "Next Js",
            designation: "",
            image: "/images.jpg",
        },
        {
            id: 3,
            name: "Java Script",
            designation: "",
            image:
                "/javascript-js.256x256.png",
        },
        {
            id: 4,
            name: "Type Script",
            designation: "",
            image:
                "/images.png",
        },
        {
            id: 5,
            name: "Tailwind Css",
            designation: "",
            image:
                "/images (1).png",
        },
        {
            id: 6,
            name: "Node Js",
            designation: "",
            image:
                "/79c51d0e3a3f60b504da6bcc20ab1afc.jpg",
        },
        {
            id: 7,
            name: "Mongo DB",
            designation: "",
            image:
                "/MongoDB-Emblem.jpg",
        },

        {
            id: 8,
            name: "React Query",
            designation: "",
            image:
                "/TanStack.png",
        },

        {
            id: 9,
            name: "C++",
            designation: "",
            image:
                "/images (2).png",
        },



    ];



    return (


        <>
            <section className="w-full h-[100vh] relative">


                <div className="relative isolate px-6  lg:px-8 bg-black h-full">

                    <div className="mx-auto max-w-4xl py-14 sm:py-48 lg:py-30">


                        <div className="text-center flex flex-col items-center">

                            <h1 className="text-balance tracking-tight text-gray-900 sm:text-7xl bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                                HEY, I&apos;M SARANG A SOFTWARE DEVELOPER
                            </h1>

                            <div className="max-w-2xl">
                                <p className="mt-5 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                                    I am a passionate software developer skilled in designing, coding, and delivering high-quality applications.
                                    With a strong foundation in Full-Stack Development.
                                </p>
                            </div>



                            <div className="flex flex-row items-center justify-center mb-10 w-full mt-3 relative">
                                <AnimatedTooltip items={people} />
                            </div>

                        </div>


                    </div>

                </div>


                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                    )}
                />

            </section >

        </>


    )
}
