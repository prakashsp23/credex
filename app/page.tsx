import { ContactForm } from "@/components/contact-form";
import { FeaturesSection } from "@/components/features";
import { HeroSection } from "@/components/sections/hero-section";
import HowItWorks from "@/components/sections/how-it-works";
import HeroHeader from "@/components/navbar";
import Testimonials from "@/components/sections/testimonial-section";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <HeroHeader />
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <Testimonials />
        <ContactForm />
      </ReactLenis>
    </>
  );
}
