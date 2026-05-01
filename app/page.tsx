import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ImageParallax from "@/components/sections/ImageParallax";
import ServiceSection from "@/components/sections/ServiceSection";
import SmoothReveal from "@/components/SmoothReveal";
import WhyChoose from "@/components/sections/WhyChoose";
import OurWorkSlider from "@/components/sections/OurWorkSlider";
import IndustryTech from "@/components/sections/IndustryTech";
import TestimonialAuto from "@/components/sections/TestimonialAuto";
import Blog from "@/components/sections/Blog";
import FAQPremium from "@/components/sections/FAQPremium";
import ServicePrograms from "@/components/sections/ServicePrograms";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServiceSection />    
        {/* <SmoothReveal /> */}
        <WhyChoose />  
        <OurWorkSlider  />
        <IndustryTech />
        <TestimonialAuto  />
        <Blog />
        <FAQPremium />
        <ServicePrograms />
      {/* <ImageParallax /> */}
     
    </main>
  );
}