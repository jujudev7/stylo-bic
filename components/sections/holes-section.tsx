"use client";

import { FadeInWhenVisible } from "@/components/animations/fade-in-when-visible";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HolesSectionProps {
  imgTrouBouchon: any;
  imgTrouEncre: any;
}

export function HolesSection({
  imgTrouBouchon,
  imgTrouEncre,
}: HolesSectionProps) {
  return (
    <section className="trous xl:-mt-10 -mt-4 xl:rounded-t-[100px] rounded-t-[50px] bg-blue-50 flex flex-col items-center text-center xl-pt-24 pt-12 xl:pb-48 pb-24">
      <div className="mx-4">
        <h2 className="xl:text-5xl text-4xl text-blue-800 font-bold xl:mb-16 mb-8">
          2 trous qui changent tout !
        </h2>
        <div className="flex flex-row justify-center mx-auto gap-6 mb-16">
          <FadeInWhenVisible direction="left">
            <Image
              src={imgTrouBouchon}
              alt="trou bouchon"
              className="rounded-xl drop-shadow-lg hover:drop-shadow-2xl transform transition-transform duration-300 hover:-translate-y-4"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible direction="right" delay={0.2}>
            <Image
              src={imgTrouEncre}
              alt="trou encre"
              className="rounded-xl drop-shadow-lg hover:drop-shadow-2xl transform transition-transform duration-300 hover:-translate-y-4"
            />
          </FadeInWhenVisible>
        </div>
        <h4 className="xl:text-4xl text-3xl font-bold mb-8">
          Un capuchon qui sauve des vies
        </h4>
        <p className="text-lg mx-auto xl:w-3/5 w-4/5 mb-6">
          Aviez-vous déjà remarqué le trou situé à l&apos;extrémité du capuchon
          d&apos;un stylo BIC ?
        </p>

        <p className="text-lg mx-auto xl:w-3/5 w-4/5 mb-6">
          Pourtant, peu de gens connaissent sa réelle utilité. Ce trou a une
          fonction bien précise, salvatrice...
        </p>
        <p className="text-lg mx-auto xl:w-3/5 w-4/5 mb-6">
          En effet, cette simple perforation peut sauver des vies ! Oui, oui.
          Que celui qui n&apos;a jamais mâchouillé le bout de son stylo me jette
          la première pierre…
        </p>

        <p className="text-lg mx-auto xl:w-3/5 w-4/5 mb-6">
          Malheureusement, il arrive parfois que certaines personnes avalent
          accidentellement le bouchon. C&apos;est là qu&apos;entre en jeu le
          fameux trou.
        </p>
        <div className="relative w-full sm:w-3/4 max-w-4xl aspect-video overflow-hidden rounded-xl my-8 hover:drop-shadow-2xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/s8mlXnRK9Ow?"
            title="BIC, Secrets de Fabrication de stylo à bille Cristal"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            frameBorder="0"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <Button
          size="xl:lg "
          className="xl:text-lg text-white rounded-xl bg-indigo-500 hover:bg-blue-900 border-2 border-yellow-400 xl:py-8 xl:my-8 py-4 my-4 px-4"
        >
          Vous êtes à un clic de signer votre meilleur achat 🖋️
        </Button>
      </div>
    </section>
  );
}
