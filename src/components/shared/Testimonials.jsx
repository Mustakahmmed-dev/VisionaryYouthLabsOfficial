'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import testimonialsData from '../../../public/testimonialsData.json';
console.log(testimonialsData)

const Testimonials = () => {
    const displayedTestimonials = testimonialsData.slice(0, 6);

    return (
        <section className="py-20 bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {displayedTestimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-gray-900 p-6 rounded-xl shadow-md h-full flex flex-col justify-between">
                                <p className="text-md mb-4 italic">“{item.testimonial}”</p>
                                <div className="flex items-center gap-4 mt-6">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="text-left">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-400">
                                            {item.title} @ {item.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="mt-10">
                    <a
                        href="/testimonials"
                        className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full transition"
                    >
                        View All Testimonials
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
