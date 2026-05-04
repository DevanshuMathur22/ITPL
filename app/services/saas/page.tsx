import Hero from "@/components/saasdeveloper/Hero"
import Service from "@/components/saasdeveloper/Service"
import SolutionsGrid from "@/components/saasdeveloper/Solution"
import Why from "@/components/saasdeveloper/Why"
import Metho from "@/components/saasdeveloper/Metho"
import Industries from "@/components/webdeveloper/Industries"
import Blog from "@/components/sections/Blog"
import FAQ from "@/components/sections/FAQPremium"
export default function SaasDeveloper() { 
    return (
        <main>
            <Hero />
            <Service />
            <SolutionsGrid />
            <Why />
            <Metho />
            <Industries />
            <Blog />
            <FAQ />
        </main>
    )
}