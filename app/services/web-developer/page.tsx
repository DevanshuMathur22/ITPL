import Switch from "@/components/webdeveloper/Switch"
import Hero from "@/components/webdeveloper/Hero"
import ToolsSection from "@/components/webdeveloper/ToolsSection"
import Industries from "@/components/webdeveloper/Industries"
import WhyChoose from "@/components/webdeveloper/WhyChoose"
import Methodolog from "@/components/webdeveloper/Methodolog"
import Blog from "@/components/sections/Blog"
import FAQ from "@/components/sections/FAQPremium"
export default function WebDeveloperPage() {
  return (
    <div>
      <Hero />
      <Switch />
     <ToolsSection />
     <Industries />
     <WhyChoose />
      <Methodolog />
      <Blog/>
      <FAQ />
    </div>
  )
}