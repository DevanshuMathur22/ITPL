import ServiceHero from "@/components/services/ServiceHero";
import Content from "@/components/services/Content";
import Form from "@/components/services/Form";
import Blog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQPremium";
export default function ServicePage() {
  return (
    <div>
      <ServiceHero />
      <Content />
      <Blog />
      <FAQ />
      <Form />
    </div>
  );
}