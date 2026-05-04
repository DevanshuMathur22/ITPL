import CustomSoftwareHero from "@/components/custom-software-developer/CustomSoftwareHero";
import Methodology from "@/components/custom-software-developer/Methodology";
import ProcessFlow from "@/components/custom-software-developer/ProcessFlow";
import ServicesTabs from "@/components/custom-software-developer/ServicesTabs";
import SolutionsGrid from "@/components/custom-software-developer/SolutionsGrid";
import OurBlog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQPremium";
export default function CustomSoftwarePage() {
  return (
    <div>
      <CustomSoftwareHero />
      <ServicesTabs />
      <SolutionsGrid /> 
      <Methodology />
      <ProcessFlow />
      <OurBlog />
      <FAQ />
    </div>
  )
}