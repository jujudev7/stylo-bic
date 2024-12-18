"use client";

import { ArtSection } from "@/components/sections/art-section";
import { CTASection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HolesSection } from "@/components/sections/holes-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import schema from "../public/bic-cristal-schema.jpg";
import imgDessin1 from "../public/dessin-bic-1.jpg";
import imgDessin2 from "../public/dessin-bic-2.jpg";
import imgDessin3 from "../public/dessin-bic-3.jpg";
import EditionLimitee from "../public/edition-limitee.png";
import StyloBic from "../public/stylo-bic.png";
import imgTrouBouchon from "../public/trou-bouchon.jpg";
import imgTrouEncre from "../public/trou-encre.jpg";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <FeaturesSection schema={schema} />
      <HolesSection
        imgTrouBouchon={imgTrouBouchon}
        imgTrouEncre={imgTrouEncre}
      />
      <TestimonialsSection />
      <ArtSection
        imgDessin1={imgDessin1}
        imgDessin2={imgDessin2}
        imgDessin3={imgDessin3}
      />
      <CTASection EditionLimitee={EditionLimitee} StyloBic={StyloBic} />
    </main>
  );
}

