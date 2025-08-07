'use client'

import Link from 'next/link'
import portfolioData from '../../../public/portfolioData.json'

const PortfolioOverview = () => {
  const itemsToShow = portfolioData.slice(0, 6)

  return (
    <section className="px-6 py-24 md:px-10 lg:px-20 bg-[#0d0628] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Recent Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {itemsToShow.map((item) => (
            <div
              key={item.portfolioID}
              className="bg-[#120b36] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{item.shortDescription}</p>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="inline-block mt-2 text-[#5ce1e6] font-medium hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-block border border-[#5ce1e6] text-[#5ce1e6] px-6 py-3 rounded-lg hover:bg-[#5ce1e6] hover:text-[#060037] transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioOverview
