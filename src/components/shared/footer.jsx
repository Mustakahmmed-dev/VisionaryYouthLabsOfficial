import Link from "next/link"
import Logo from "./Logo"
import NavLink from "./NavLink"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start bg-primary-custom px-6 py-10 text-white">
            {/* Company profile related */}
            <div className="max-w-96">
                <Logo></Logo>
                <address>
                    Rohingya refugee camps, Cox's Bazar, Bangladesh, <br />
                </address>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi facere nostrum repellendus vel eius!</p>
            </div>

            {/* Services links */}
            <div>
                <h2 className="text-xl mb-3 text-gray-300 font-bold">Services</h2>
                <ul>
                    <li><NavLink href="/services/lead-generation" className=" hover:text-[#5ce1e6] md:p-3">Lead Generation</NavLink></li>
                    <li><NavLink href="/services/digital-marketing-solutions" className=" hover:text-[#5ce1e6] md:p-3">Digital Marketing Solutions</NavLink></li>
                    <li><NavLink href="/services/web-development" className=" hover:text-[#5ce1e6] md:p-3">Web Development</NavLink></li>
                    <li><NavLink href="/services/data-entry" className=" hover:text-[#5ce1e6] md:p-3">Data Entry</NavLink></li>
                    <li><NavLink href="/services/virtual-assistance" className=" hover:text-[#5ce1e6] md:p-3">Virtual Assitance</NavLink></li>

                </ul>
            </div>

            {/* Company */}
            <div>
                <h2 className="text-xl mb-3 text-gray-300 font-bold">Company</h2>
                <ul>
                    <li><NavLink href="/" className=" hover:text-[#5ce1e6] md:p-3">Home</NavLink></li>
                    <li><NavLink href="/about/company" className=" hover:text-[#5ce1e6] md:p-3">Company</NavLink></li>
                    <li><NavLink href="/about/team" className=" hover:text-[#5ce1e6] md:p-3">Team</NavLink></li>
                    <li><NavLink href="/blog" className=" hover:text-[#5ce1e6] md:p-3">Blog</NavLink></li>
                    <li><NavLink href="/contact" className=" hover:text-[#5ce1e6] md:p-3">Contact</NavLink></li>

                </ul>
            </div>

            {/* Social Media Connections */}
             <div>
                <h2 className="text-xl mb-3 text-gray-300 font-bold">Connect with Us</h2>
                <div className="flex gap-2">
                    <Link href="https://www.linkedin.com/company/visionaryyouthlabs/"> <Linkedin className="text-white" size={28} /> </Link>
                    <Link href="https://www.facebook.com/visionaryyouthlabs/"> <Facebook className="text-white" size={28} /> </Link>
                    <Link href="https://www.instagram.com/visionaryyouthlabs/"> <Instagram className="text-white" size={28} /> </Link>
                    <Link href="/"> <Twitter className="text-white" size={28} /> </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer