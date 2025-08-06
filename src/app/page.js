import Hero from "@/components/shared/Hero";
import PortfolioOverview from "@/components/shared/PortfolioOverview";
import ServicesOverview from "@/components/shared/ServicesOverview";
import WhyChooseUs from "@/components/shared/WhyChooseUs";

export default function Home() {
  return (
   <div className="min-h-[70vh]">
    <Hero></Hero>
    <ServicesOverview></ServicesOverview>
    <WhyChooseUs></WhyChooseUs>
    <PortfolioOverview></PortfolioOverview>
   </div>
  );
}
