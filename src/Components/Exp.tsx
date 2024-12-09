"use client"
import { AnimatedTestimonials } from './ui/animated-testimonials';
import DotPattern from "./ui/dot-pattern";
import BlurFade from './ui/blur-fade';
import { cn } from '@/lib/utils';

export default function Exp() {


    const testimonials = [
        {
            quote: "I’ve completed 17 diverse projects, specializing in full-stack development, integrations, and scalable solutions, while enhancing my technical expertise and problem-solving skills.",
            name: "Ex-Media",
            designation: "Software Developer  ( August 2024 - Present )",
            src: "/Ex-media.png",
        },

        {
            quote:
                "As an Intern built and deployed individual projects, showcasing proficiency in front-end and back-end development",
            name: "Luminar Technolab",
            designation: "Full Stack Developer Intern  ( October 2023 - June 2024 )",
            src: "/images.jpeg",
        },

    ];



    return (


        <>


            <section className='bg-black sm:pt-16 sm:pb-8 relative'>

                <BlurFade delay={0.25} inView>

                    <h1 className='bg-transparent text-balance tracking-tight text-gray-900 sm:text-7xl bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>Work Experience</h1>

                    <AnimatedTestimonials testimonials={testimonials} autoplay />

                </BlurFade>

                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                    )}
                />


            </section>




        </>


    )
}
