"use client"
import Image from "next/image"
import Link from "next/link"
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#060037] via-[#130749] to-[#1f0d60] text-white">
      <div className="container mx-auto px-4 py-18 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="text-center md:text-left md:ml-10 md:max-w-2xl ">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Complete Digital Solutions
            <br />
            For{' '}
        <span className="text-[#5ce1e6]">
          <Typewriter
            words={['Brands', 'Businesses', 'Organizations']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            We help businesses grow faster with modern tech, data-driven lead generation, web development, and full-service digital marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/" className="btn-primary-custom">
              Learn More
            </Link>
            <Link href="/contact" className="btn-secondary-custom">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[500px]">
          <Image
            src="/images/group-project.svg"
            alt="Team working together illustration"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
