import AboutHero from "@/components/about/AboutHero";
import Clients from "@/components/about/Clients";
import FeaturesPremium from "@/components/about/FeaturesPremium";
import Stats from "@/components/about/Stats";
import Switch from "@/components/about/Switch";
export default function About() {
    return (
        <main>
        <AboutHero />
        <Stats />
        <Clients />
        <Switch />
        <FeaturesPremium />
        </main>
    );
    }