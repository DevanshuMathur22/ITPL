import CustomSoftwareHero from "@/components/custom-software-developer/CustomSoftwareHero";
import ServicesTabs from "@/components/custom-software-developer/ServicesTabs";
import SolutionsGrid from "@/components/custom-software-developer/SolutionsGrid";
export default function CustomSoftwarePage() {
  return (
    <div>
      <CustomSoftwareHero />
      <ServicesTabs />
      <SolutionsGrid /> 
    </div>
  )
}