"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AlignJustify, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import NavLink from "./NavLink";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
    const mainLinks = <>
        <li><NavLink href="/" exact className="block hover:text-[#5ce1e6] md:p-3">Home</NavLink></li>
        <li className="relative">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-end hover:text-[#5ce1e6] md:p-3">
                    About <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-primary-custom text-white">
                    <DropdownMenuItem><NavLink href="/about/company" className="block w-full hover:text-black">Company</NavLink></DropdownMenuItem>
                    <DropdownMenuItem><NavLink href="/about/team" className="block w-full hover:text-black">Team Members</NavLink></DropdownMenuItem>
                    <DropdownMenuItem><NavLink href="/academy" className="block w-full hover:text-black">Visionary Youth Labs Academy for Rohingya</NavLink></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </li>
        <li className="relative">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-end hover:text-[#5ce1e6] md:p-3">
                    Services <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-primary-custom text-white">
                    <DropdownMenuItem><NavLink href="/services/lead-generation" className="block w-full hover:text-black">Lead Generation</NavLink></DropdownMenuItem>
                    <DropdownMenuItem><NavLink href="/services/advertisement" className="block w-full hover:text-black">Advertisement</NavLink></DropdownMenuItem>
                    <DropdownMenuItem><NavLink href="/services/web-development" className="block w-full hover:text-black">Web Development</NavLink></DropdownMenuItem>
                    <DropdownMenuItem><NavLink href="/academy" className="block w-full hover:text-black">Visionary Youth Labs Academy for Rohingya</NavLink></DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
        </li>
        <li><NavLink href="/projects" className="block hover:text-[#5ce1e6] md:p-3">Projects</NavLink></li>
        <li><NavLink href="/blog" className="block hover:text-[#5ce1e6] md:p-3">Blog</NavLink></li>
        <li><NavLink href="/contact" className="block hover:text-[#5ce1e6] md:p-3">Contact</NavLink></li>

    </>;

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    return (
        <div className="">
            {/* Large devices */}
            <nav className="hidden p-4 md:flex justify-between items-center text-white bg-primary-custom gap-5">
                <div className="w-28">
                    <Logo></Logo>
                </div>

                <div>
                    <ul className="flex">
                        {mainLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <Link href="/hire-us" className="btn-secondary-custom mr-4 text-nowrap">Hire Us</Link>
                    <Link href="/login" className="btn-primary-custom">Login</Link>
                </div>
            </nav>

            {/* Small Devices */}
            <nav className=" md:hidden p-5 text-white bg-primary-custom">
                <div className="flex items-center justify-between">
                    <div className="w-28">
                        <Logo></Logo>
                    </div>
                    <div>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer btn-nav-toggle"> {isMenuOpen ? <AlignJustify size={28} /> : <X size={28} />} </button>
                    </div>
                </div>

                <div className={`${isMenuOpen ? "hidden" : ""}`}>
                    <div>
                        <ul className="flex flex-col gap-4 my-4">
                            {mainLinks}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link href="/hire-us" className="btn-secondary-custom">Hire Us</Link>
                        <Link href="/login" className="btn-primary-custom">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar