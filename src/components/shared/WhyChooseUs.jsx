'use client'
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <section className="relative z-10 py-20 px-6 md:px-10 lg:px-20 bg-[#0a0326]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            What Makes <span className="text-[#5ce1e6]">Visionary Youth Labs</span> Different
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We're not just another digital agency. We’re your partners in building impactful online success — offering elite lead generation, strategic branding, custom development, and end-to-end marketing with global expertise.
          </p>
          <ul className="text-gray-400 space-y-3 list-disc pl-5">
            <li>ROI-focused services tailored to your goals</li>
            <li>Creative meets data – every decision backed by strategy</li>
            <li>Specialized global team with industry experience</li>
            <li>Transparent communication & measurable outcomes</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/WhyChooseUs_ShareGoal.svg"
            alt="Visionary digital agency illustration"
            width={500}
            height={400}
            className="w-full max-w-md drop-shadow-2xl"
            priority
          />
        </div>

      </div>

      {/* Gradient Glow Behind Content */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-[#5ce1e61a] via-transparent to-transparent opacity-40 blur-2xl" />
    </section>
  )
}

export default WhyChooseUs