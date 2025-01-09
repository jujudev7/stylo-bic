"use client";

import { FadeInWhenVisible } from "@/components/animations/fade-in-when-visible";
import { FeatureCard } from "@/components/feature-card";
import Image from "next/image";

interface FeaturesSectionProps {
  schema: any;
}

export function FeaturesSection({ schema }: FeaturesSectionProps) {
  return (
    <section className="xl:pt-24 pt-12 xl:pb-36 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center md:mb-16 mb-8">
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
          <Image
            src={schema}
            alt="schema BIC Cristal"
            className="md:mt-16 mt-8"
          />
        </FadeInWhenVisible>
        <h3 className="text-4xl my-12 text-center font-bold">
          Les Secrets de Fabrication
        </h3>

        <div className="relative pt-[56.25%] w-full overflow-hidden rounded-xl my-8 hover:drop-shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/AjK-uX2KHSw?"
            title="Petit trou Bic, Jamy nous explique tout"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            frameBorder="0"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
