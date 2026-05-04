import Hero from "@/components/mobiledeveloper/Hero"
import ProcessSection from "@/components/mobiledeveloper/ProcessSection"
import Service from "@/components/mobiledeveloper/Service"
import Showcase from "@/components/mobiledeveloper/Showcase"
import Switch from "@/components/mobiledeveloper/Switch"
import Blog from "@/components/sections/Blog"
import FAQ from "@/components/sections/FAQPremium"
export default function MobileDeveloper() { 
    return (
        <main>
            <Hero />
            <Service />
            <Showcase   />  
            <ProcessSection />
            <Switch />
            <Blog />
            <FAQ />
        </main>
    )
}