"use client";

import { AnimatedBorderButton } from "@/components/ui/animated-border-button";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <div className="relative md:min-h-screen pb-10 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute">
          <motion.div
            className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl"
            animate={{
              x: ["-25%", "25%"],
              y: ["-25%", "25%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-20 md:pb-16 pt-10 pb-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:text-7xl text-5xl font-rochester text-white mb-12"
            >
              Stylo <span className="font-sans font-light">BIC</span> Cristal
            </motion.h1>
            <h2 className="md:text-6xl text-3xl font-bold text-yellow-400 mb-6">
              L&apos;Excellence à l&apos;État Pur
            </h2>
            <p className="text-gray-100 md:text-lg text-sm leading-8">
              Découvrez notre stylo d&apos;exception
              <span className="px-2 py-1 rounded bg-yellow-400 font-bold text-slate-950 ml-1 mb-2">
                édition limitée !
              </span>{" "}
              <br />
              Quand l&apos;artisanat traditionnel rencontre l&apos;innovation
              moderne.
            </p>

            <Image
              src="/cristal.gif"
              alt="stylo Biq cristal"
              width={1100}
              height={200}
              className="rounded-full md:my-16 my-8"
              priority
            />

            <div className="flex justify-center gap-4 mt-10">
              <Button
                size="lg"
                className="bg-white px-4 text-gray-900 hover:bg-sky-100"
              >
                En savoir plus
              </Button>
              <AnimatedBorderButton>Commander Maintenant</AnimatedBorderButton>
            </div>
          </div>
        </div>
      </div>

      <video autoPlay loop muted className="w-full">
        <source src="/videos/bic-story.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
    </>
  );
}
