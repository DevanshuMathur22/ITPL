import Cards from "@/components/ui,ux-developer/Cards";
import Hero from "@/components/ui,ux-developer/Hero";
import Slider from "@/components/ui,ux-developer/Slider";
import Standing from "@/components/ui,ux-developer/Standing";
import Uidesign from "@/components/ui,ux-developer/Uidesign";
import UiUxProcess from "@/components/ui,ux-developer/UiUxProcess";
import Blog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQPremium";
import Timeline from "@/components/ui,ux-developer/Timeline";

export default function UIUXDeveloper() { 
    return (
        <main>
            <Hero />
            <Uidesign />
            <UiUxProcess />
            <Cards/>
            <Slider />
            <Standing />
            <Timeline />
            <Blog />
            <FAQ />
        </main>
    )
}