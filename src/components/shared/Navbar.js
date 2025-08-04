"use client";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const mainLinks = <>
        <li><Link href="/" className=" block hover:text-[#5ce1e6] md:p-3">Home</Link></li>
        <li className="cursor-pointer block hover:text-[#5ce1e6] md:p-3">About
           
        </li>
        <li><Link href="/" className=" block hover:text-[#5ce1e6] md:p-3">Services</Link></li>
        <li><Link href="/" className=" block hover:text-[#5ce1e6] md:p-3">Portfolio</Link></li>
        <li><Link href="/" className=" block hover:text-[#5ce1e6] md:p-3">Blog</Link></li>
    </>;

    const [open, setOpen] = useState(true);

    return (
        <div className="">
            {/* Large devices */}
            <nav className="hidden md:flex justify-between items-center p-5 text-white bg-primary-custom gap-5">
                <div>
                    {/* Logo image */}
                    <h2>Visionary Youth Labs</h2>
                    <p>The leading tech company</p>
                </div>

                <div>
                    <ul className="flex">
                        {mainLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <button className="btn-normal mr-4">Hire Us</button>
                    <button className="btn-normal">Login</button>
                </div>
            </nav>

            {/* Small Devices */}
            <nav className=" md:hidden p-5 text-white bg-primary-custom">
                <div className="flex justify-between">
                    <div>
                        {/* Logo image */}
                        <h2>Visionary Youth Labs</h2>
                        <p>The leading tech company</p>
                    </div>
                    <div>
                        <button onClick={() => setOpen(!open)} className="cursor-pointer btn-nav-toggle"> {open ? <AlignJustify size={28} /> : <X size={28} />} </button>
                    </div>
                </div>

                <div className={`${open ? "hidden" : ""}`}>
                    <div>
                        <ul className="flex flex-col gap-4 my-4">
                            {mainLinks}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button className="btn-normal">Hire Us</button>
                        <button className="btn-normal">Login</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar