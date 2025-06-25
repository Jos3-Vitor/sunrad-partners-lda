import Image from "next/image";
import Hero from "@/components/Hero";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import InstitutionalMessageSection from "@/components/InstitutionalMessageSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <InstitutionalMessageSection />
      <ValuesSection />
    </main>
  );
}
