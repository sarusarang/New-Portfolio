"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import BlurFade from './ui/blur-fade';


export default function Projects() {



    const MyProjects = [


        {
            title: "Kemach Equipments",
            description:
                "Its a  website for a business to showcase their products, with a specific focus on their dealer, BOB CAT. The site highlights product listings, detailed descriptions, and dealer information, providing users with an easy and informative browsing experience. ",
            link: "https://kemachequipments.com",
            src: "/Screenshot 2024-12-02 141216.png"
        },
        {
            title: "Volant Footware",
            description:
                "An e-commerce website for footwear, featuring a user-friendly cart system and product view functionality. The site allows customers to browse through a variety of footwear products, view detailed information, and easily add items to their cart for purchase. ",
            link: "https://volantfootwear.com",
            src: "/Screenshot 2024-12-02 142428.png"
        },
        {
            title: "Xpaina",
            description:
                "An e-commerce website for footwear, featuring a user-friendly cart system and product view functionality. The site allows customers to browse through a variety of footwear products, view detailed information, and easily add items to their cart for purchase. ",
            link: "https://xpania.in",
            src: "/Screenshot 2024-12-02 141429.png"
        },


    ]


    return (


        <>

            <section className="bg-black">

                <BlurFade delay={0.50} inView>

                    <h1 className='bg-transparent text-balance tracking-tight text-gray-900 sm:text-7xl bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'> My Projects</h1>

                    <div className="max-w-7xl mx-auto sm:px-8 px-2" > 

                        <HoverEffect items={MyProjects} />

                    </div>

                </BlurFade>

            </section>


        </>


    )
}
