'use client';
import brandsData from '../../../public/trustedBrandsData.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const TrustedByBrands = () => {
  return (
    <div className="py-20 px-6 md:px-10 lg:px-20 bg-teal-800 text-white text-center">
      <h2 className="text-2xl md:text-3xl text-[#5ce1e6] font-semibold mb-10">Trusted by Global Brands</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {brandsData.map((brand) => (
          <SwiperSlide key={brand.id}>
            <a href={brand.url} target="_blank" rel="noopener noreferrer">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-20 mx-auto grayscale hover:grayscale-0 transition duration-300"
              />
              <h3 className="text-xl font-bold"> {brand.name } </h3>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrustedByBrands;
