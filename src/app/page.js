import CallToAction from "@/components/shared/CallToAction";
import Hero from "@/components/shared/Hero";
import PortfolioOverview from "@/components/shared/PortfolioOverview";
import ServicesOverview from "@/components/shared/ServicesOverview";
import Testimonials from "@/components/shared/Testimonials";
import TrustedByBrands from "@/components/shared/TrustedByBrands";
import WhyChooseUs from "@/components/shared/WhyChooseUs";

export default function Home() {
  return (
   <div className="min-h-[70vh]">
    <Hero></Hero>
    <ServicesOverview></ServicesOverview>
    <WhyChooseUs></WhyChooseUs>
    <PortfolioOverview></PortfolioOverview>
    <Testimonials></Testimonials>
    <TrustedByBrands></TrustedByBrands>
    <CallToAction></CallToAction>
   </div>
  );
}
