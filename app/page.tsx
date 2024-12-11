"use client";

import { FeatureCard } from "@/components/feature-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <main className="relative">
      {/* Hero Section avec animation de lueur */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              L&apos;Excellence à l&apos;État Pur
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              {" "}
              Découvrez notre stylo d&apos;exception !<br /> Quand
              l&apos;artisanat traditionnel rencontre l&apos;innovation moderne.
            </motion.p>

            <Image
              src="/cristal.gif"
              alt="stylo Biq cristal"
              width={1100}
              height={200}
              className="rounded-full my-20"
            />

            <div className="flex justify-center gap-4 mt-10">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-sky-100"
              >
                En savoir plus
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white bg-slate-700 hover:bg-black hover:text-white"
              >
                Commander Maintenant
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Caractéristiques */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Caractéristiques Exceptionnelles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Bille en Or 18 Carats"
              description="Une écriture fluide et précise grâce à notre plume artisanale"
              icon="Feather"
            />
            <FeatureCard
              title="Design Intemporel"
              description="Un équilibre parfait entre tradition et modernité"
              icon="Palette"
            />
            <FeatureCard
              title="Équilibre Parfait"
              description="Conçu pour une prise en main naturelle et confortable"
              icon="Scale"
            />
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Ce qu&apos;en Disent Nos Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Léna Situations"
              role="Entrepreneuse"
              content="Ce stylo est devenu mon compagnon d'écriture quotidien. La qualité est exceptionnelle."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            />
            <TestimonialCard
              name="Philippe Starck"
              role="Designer"
              content="Le design est tout simplement magnifique. C'est un véritable objet d'art."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            />
            <TestimonialCard
              name="Emmanuel Macron"
              role="Président"
              content="La fluidité de l'écriture est incomparable. Un investissement qui en vaut la peine."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            />

            <TestimonialCard
              name="Stephen King"
              role="Écrivain"
              content="L'acte d'écrire peut ouvrir tant de portes, comme si un stylo n'était pas vraiment une plume mais une étrange variété de passe-partout."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            />

            <TestimonialCard
              name="Quentin Tarantino"
              role="Réalisateur"
              content="Pour être romancier, il me suffit d'un stylo et d'une feuille de papier."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            />

            <TestimonialCard
              name="Mary Higgins Clark"
              role="Écrivaine"
              content="Le jour de ma mort, je voudrais que l'on dépose dans mon cercueil un cahier à spirale, un stylo et une bouteille de vin. Je serai ainsi équipée pour écrire depuis l'au-delà."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            />
            <TestimonialCard
              name="Leïla Slimani"
              role="Écrivaine"
              content="Tous les dictateurs arabes le savent bien: en éduquant les hommes, on prend le risque qu'ils vous renversent. Et qu'ils défilent un jour, un stylo à la main."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            />

            <TestimonialCard
              name="Joséphine Baker"
              role="Chanteuse / Danseuse"
              content="Vous devez apprendre à vous protéger avec le stylo, et non avec le pistolet."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            />
            <TestimonialCard
              name="Marty Feldman"
              role="Acteur / Scénariste"
              content="Un stylo est bien plus puissant qu’une épée, et tellement plus pratique pour écrire."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            />
            <TestimonialCard
              name="Bruno Masure"
              role="Journaliste / Écrivain"
              content="Les écrivains à l’humeur aigre utilisent généralement un stylo à bile."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            />
            <TestimonialCard
              name="Grand Corps Malade"
              role="Chanteur / Réalisateur"
              content="Laisse moi mon stylo, y’a pas moyen que je m’arrête ; j’ai une envie d’écrire comme t’as une envie de cigarette."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            />
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Prêt à Découvrir l&apos;Excellence ?
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Commandez dès maintenant et rejoignez l&apos;élite de
            l&apos;écriture
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            Commander pour 99€
          </Button>
        </div>
      </section>
    </main>
  );
}

