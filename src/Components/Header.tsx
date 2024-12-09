"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";



export default function Header() {

    return (

        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    )
}



function Navbar({ className }: { className?: string }) {

    const [active, setActive] = useState<string | null>(null);

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>


                <MenuItem setActive={setActive} active={active} item="Home" >

                </MenuItem>

             

                    <MenuItem setActive={setActive} active={active} item="Projects">

                        <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Kemach Equipments"
                                href="#projects"
                                src="/Screenshot 2024-12-02 141216.png"
                                description="A dealer of BobCat machineries"
                            />
                            <ProductItem
                                title="Xpaina"
                                href="#projects"
                                src="/Screenshot 2024-12-02 141429.png"
                                description="An E-commerce site for Footwares"
                            />
                            <ProductItem
                                title="Volant"
                                href="#projects"
                                src="/Screenshot 2024-12-02 142428.png"
                                description="An E-commerce site for Footwares."
                            />
                            <ProductItem
                                title="Rogue"
                                href="#projects"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                            />
                        </div>

                    </MenuItem>
               

                <MenuItem setActive={setActive} active={active} item="Stack">

                </MenuItem>


                <MenuItem setActive={setActive} active={active} item="Contact">

                </MenuItem>

            </Menu>


        </div>
    );
}