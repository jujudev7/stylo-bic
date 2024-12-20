"use client";

import { FadeInWhenVisible } from "@/components/animations/fade-in-when-visible";
import { FeatureCard } from "@/components/feature-card";
import Image from "next/image";

interface FeaturesSectionProps {
  schema: any;
}

export function FeaturesSection({ schema }: FeaturesSectionProps) {
  return (
    <section className="pt-24 pb-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Caractéristiques Exceptionnelles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FadeInWhenVisible delay={0}>
            <FeatureCard
              title="La Solidité d'un Diamant"
              description="Robustesse et précision grâce à nos billes ultra-solides et parfaitement sphériques."
              icon="Gem"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <FeatureCard
              title="Un Design Intemporel"
              description="Un objet qui traverse les époques, mêlant artisanat, tradition et modernité."
              icon="Feather"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.4}>
            <FeatureCard
              title="L'Équilibre Parfait"
              description="Une écriture fluide et précise grâce à une prise en main naturelle et confortable."
              icon="Scale"
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <Image src={schema} alt="schema BIC Cristal" className="mt-16" />
        </FadeInWhenVisible>
        <h3 className="text-4xl my-12 text-center font-bold">
          Les Secrets de Fabrication
        </h3>

        <iframe
          width="854"
          height="480"
          src="https://www.youtube.com/embed/AjK-uX2KHSw?"
          title="BIC, Secrets de Fabrication de stylo à bille Cristal"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          frameBorder="0"
          className="mx-auto rounded-xl my-8 hover:drop-shadow-2xl"
        ></iframe>
      </div>
    </section>
  );
}
