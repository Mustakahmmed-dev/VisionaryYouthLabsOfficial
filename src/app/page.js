import Hero from "@/components/shared/Hero";
import ServicesOverview from "@/components/shared/ServicesOverview";
import WhyChooseUs from "@/components/shared/WhyChooseUs";

export default function Home() {
  return (
   <div className="min-h-[70vh]">
    <Hero></Hero>
    <ServicesOverview></ServicesOverview>
    <WhyChooseUs></WhyChooseUs>

   </div>
  );
}
