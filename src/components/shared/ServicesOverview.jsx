"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const ServicesOverview = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/servicesData.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <section className="bg-[#060037] px-6 md:px-10 lg:px-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Choose Your Needs From Our Services
                </h2>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.serviceID} className="bg-[#0b004d] rounded-xl shadow-lg hover:shadow-xl transition">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="h-60 w-full object-cover rounded-xl mb-4"
                            />
                            <div className="p-6 space-y-5">

                                <h3 className="text-xl font-semibold text-center">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-300 text-center">
                                    {service.shortDescription}
                                </p>
                                <div className="text-center">
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="btn-secondary-custom"
                                    >
                                       Learn more about {service.title}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesOverview