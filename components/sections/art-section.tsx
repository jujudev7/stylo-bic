"use client";

import { FadeInWhenVisible } from "@/components/animations/fade-in-when-visible";
import Image from "next/image";

interface ArtSectionProps {
  imgDessin1: any;
  imgDessin2: any;
  imgDessin3: any;
}

export function ArtSection({
  imgDessin1,
  imgDessin2,
  imgDessin3,
}: ArtSectionProps) {
  return (
    <section className="relative -mt-24 xl:py-24 py-12 xl:rounded-t-[100px] rounded-t-[50px] bg-blue-900 text-white overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="xl:text-4xl sm:text-3xl text-2xl font-bold md:mb-16 mb-8">
          Objet d&apos;Art et Source de Créativité
        </h2>
        <div className="grid grid-cols-3 gap-8 justify-center items-center md:mb-10 mb-6">
          <FadeInWhenVisible delay={0}>
            <Image
              src={imgDessin1}
              alt="dessin au stylo Bic"
              className="rounded-xl border-2 border-white max-w-full h-auto hover:scale-110 transition-transform duration-300"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.4}>
            <Image
              src={imgDessin2}
              alt="dessin au stylo Bic"
              className="rounded-xl border-2 border-white max-w-full h-auto hover:scale-110 transition-transform duration-300"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.8}>
            <Image
              src={imgDessin3}
              alt="dessin au stylo Bic"
              className="rounded-xl border-2 border-white max-w-full h-auto hover:scale-110 transition-transform duration-300"
            />
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
