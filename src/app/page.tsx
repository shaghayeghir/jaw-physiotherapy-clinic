import { BenefitsSection } from "@/features/landing/sections/BenefitsSection";
import HeroSection from "@/features/landing/sections/HeroSection";
import Navbar from "@/features/landing/sections/Navbar";
import { SymptomsSection } from "@/features/landing/sections/SymptomsSection";

export default function Page() {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <BenefitsSection />

    </>
  );
}
