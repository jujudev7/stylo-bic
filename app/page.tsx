"use client";

import { FeatureCard } from "@/components/feature-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { AnimatedBorderButton } from "@/components/ui/animated-border-button";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import schema from "../public/bic-cristal-schema.jpg";
import imgDessin1 from "../public/dessin-bic-1.jpg";
import imgDessin2 from "../public/dessin-bic-2.jpg";
import imgDessin3 from "../public/dessin-bic-3.jpg";
import imgTrouBouchon from "../public/trou-bouchon.jpg";
import imgTrouEncre from "../public/trou-encre.jpg";

export default function Home() {
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl font-rochester text-white mb-12"
            >
              Stylo <span className="font-sans font-light">BIC</span> Cristal
            </motion.h1>
            <h2 className="text-6xl font-bold text-yellow-400 mb-6">
              L&apos;Excellence à l&apos;État Pur
            </h2>
            <p className="text-gray-100 text-lg leading-8">
              Découvrez notre stylo d&apos;exception
              <span className="px-2 py-1 rounded bg-yellow-400 font-bold text-blue-900 ml-1 mb-2">
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
              className="rounded-full my-16"
              priority
            />

            <div className="flex justify-center gap-4 mt-10">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-sky-100"
              >
                En savoir plus
              </Button>
              <AnimatedBorderButton>Commander Maintenant</AnimatedBorderButton>
            </div>
          </div>
        </div>
      </div>

      {/* Section Caractéristiques */}
      <section className="pt-24 pb-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Caractéristiques Exceptionnelles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="La Solidité d'un Diamant"
              description="Robustesse et précision grâce à nos billes ultra-solides et parfaitement sphériques."
              icon="Gem"
            />
            <FeatureCard
              title="Un Design Intemporel"
              description="Un objet qui traverse les époques, mêlant artisanat, tradition et modernité."
              icon="Feather"
            />
            <FeatureCard
              title="L'Équilibre Parfait"
              description="Une écriture fluide et précise grâce à une prise en main naturelle et confortable."
              icon="Scale"
            />
          </div>
          <Image src={schema} alt="schema BIC Cristal" className="mt-16" />
        </div>
      </section>

      {/* Section Trous */}
      <section className="trous bg-blue-50 flex flex-col items-center text-center py-24">
        <h2 className="text-5xl text-blue-800 font-bold mb-16">
          2 trous qui changent tout !
        </h2>
        <div className="flex flex-row mx-auto gap-6 mb-16">
          <Image
            src={imgTrouBouchon}
            alt="trou bouchon"
            className="rounded-xl drop-shadow-lg hover:drop-shadow-xl"
          />
          <Image
            src={imgTrouEncre}
            alt="trou encre"
            className="rounded-xl drop-shadow-lg hover:drop-shadow-xl"
          />
        </div>
        <h4 className="text-4xl font-bold mb-8">
          Un capuchon qui sauve des vies
        </h4>
        <p className="text-lg w-3/5 mb-6">
          Aviez-vous déjà remarqué le trou situé à l’extrémité du capuchon d’un
          stylo BIC ?<br />
          Pourtant, peu de gens connaissent sa réelle utilité. Ce trou a une
          fonction bien précise, salvatrice...
        </p>
        <p className="text-lg w-3/5 mb-6">
          En effet, cette simple perforation peut sauver des vies ! Oui, oui.
          Que celui qui n’a jamais machouillé le bout de son stylo me jete la
          première pierre… Malheureusement, il arrive pardois que certaines
          personnes avalent accidentellement le bouchon. C’est là qu’entre en
          jeu le fameux trou.
        </p>
        <p className="text-lg w-3/5 mb-6">
          Ce dernier permet en effet de ne pas obstruer totalement les voies
          respiratoires et assure le passage d’air dans la trachée en attendant
          l’arrivée de secours. Une idée simple, mais qui fait toute la
          différence !
        </p>
        <p className="text-lg w-3/5 mb-6">
          Par ailleurs, ce trou évite également une pression excessive dans le
          capuchon. Ce qui facilite son retrait en éliminant un &quot;effet
          ventouse&quot;. Ingénieux, non ?{" "}
        </p>

        <h4 className="text-4xl font-bold my-8">Jamais en panne sèche</h4>

        <iframe
          width="854"
          height="480"
          src="https://www.youtube.com/embed/s8mlXnRK9Ow?rel=0&modestbranding=1"
          title="Petit trou stylo Bic, Jamy explique son utilité"
          frameborder="0"
          allowfullscreen
          className="rounded-xl mb-8"
        ></iframe>

        <p className="text-lg w-3/5 mb-6">
          À peu près au niveau du milieu du corps de stylo, un autre petit trou
          existe.
          <br />
          Il est indispensable pour son bon fonctionnement.
        </p>
        <p className="text-lg w-3/5 mb-6">
          Grâce à l’air qui passe dans ce petit trou, la pression est la même à
          l’intérieur comme à l’extérieur du stylo. Ceci permet ainsi à l’encre
          d’arriver jusqu’à la pointe lors de l’utilisation, tout en évitant les
          fuites.
        </p>
        <Button
          size="lg"
          className="text-lg text-white rounded-xl bg-indigo-500 hover:bg-blue-900 border-2 border-yellow-400 py-8 my-8"
        >
          Vous êtes à un clic de signer votre meilleur achat 🖋️
        </Button>
      </section>

      {/* Section Témoignages */}
      <section className="pt-24 pb-48 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-yellow-400 font-bold text-center mb-16">
            Ce qu&apos;en Disent Nos Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Emmanuel Macron"
              role="Président"
              content="La fluidité de l’écriture est incomparable. Un investissement qui en vaut la peine."
              image="/testimonials/macron.png"
            />

            <TestimonialCard
              name="Stephen King"
              role="Écrivain"
              content="L’acte d’écrire peut ouvrir tant de portes, comme si un stylo n’était pas vraiment une plume mais une étrange variété de passe-partout."
              image="/testimonials/stephen-king.png"
            />
            <TestimonialCard
              name="Léna Situations"
              role="Entrepreneuse"
              content="Ce stylo est devenu mon compagnon d’écriture quotidien. La qualité est exceptionnelle !"
              image="/testimonials/lena-situations.webp"
            />
            <TestimonialCard
              name="Mary Higgins Clark"
              role="Écrivaine"
              content="Le jour de ma mort, je voudrais que l’on dépose dans mon cercueil un cahier à spirale, un stylo et une bouteille de vin. Je serai ainsi équipée pour écrire depuis l’au-delà."
              image="/testimonials/higgins-clark.png"
            />
            <TestimonialCard
              name="Philippe Starck"
              role="Designer"
              content="Le design est juste magnifique ! C’est un véritable objet d’art."
              image="/testimonials/philippe-starck.webp"
            />

            <TestimonialCard
              name="Marty Feldman"
              role="Acteur / Scénariste"
              content="Un stylo est bien plus puissant qu’une épée, et tellement plus pratique pour écrire."
              image="/testimonials/marty-feldman.png"
            />
            <TestimonialCard
              name="Quentin Tarantino"
              role="Réalisateur"
              content="Pour être romancier, il me suffit d’un stylo et d’une feuille de papier."
              image="/testimonials/quentin-tarantino.png"
            />

            <TestimonialCard
              name="Leïla Slimani"
              role="Écrivaine"
              content="Tous les dictateurs arabes le savent bien: en éduquant les hommes, on prend le risque qu’ils vous renversent. Et qu’ils défilent un jour, un stylo à la main."
              image="/testimonials/leila-slimani.jpg"
            />

            <TestimonialCard
              name="Bruno Masure"
              role="Journaliste / Écrivain"
              content="Les écrivains à l’humeur aigre utilisent généralement un stylo à bile."
              image="/testimonials/bruno-masure.png"
            />

            <TestimonialCard
              name="Joséphine Baker"
              role="Chanteuse / Danseuse"
              content="Vous devez apprendre à vous protéger avec le stylo, et non avec le pistolet."
              image="/testimonials/josephine-baker.jpg"
            />
            <TestimonialCard
              name="Grand Corps Malade"
              role="Chanteur / Réalisateur"
              content="Laisse moi mon stylo, y’a pas moyen que je m’arrête ; j’ai une envie d’écrire comme t’as une envie de cigarette."
              image="/testimonials/grand-corps-malade.jpg"
            />
          </div>
        </div>
      </section>

      {/* Section ART */}
      <section className="relative -mt-14 py-24 rounded-t-[60px] bg-blue-900 text-white overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16">
            Objet d&apos;Art et Source de Créativité
          </h2>
          <div className="flex flex-wrap gap-8 justify-center mb-10">
            <Image
              src={imgDessin1}
              alt="dessin au stylo Bic"
              className="rounded-xl border-2 border-white w-full md:w-1/3 h-auto max-w-[300px]"
            />
            <Image
              src={imgDessin2}
              alt="dessin au stylo Bic"
              className="rounded-xl border-2 border-white w-full md:w-1/3 h-auto max-w-[300px]"
            />
            <Image
              src={imgDessin3}
              alt="dessin au stylo Bic"
              className="rounded-xl border-2 border-white w-full md:w-1/3 h-auto max-w-[300px]"
            />
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-yellow-400 font-bold mb-8">
            Prêt à Découvrir l&apos;Excellence ?
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Commandez dès maintenant et rejoignez l&apos;élite de
            l&apos;écriture !
          </p>
          <AnimatedBorderButton className="text-lg rounded-2xl hover:text-yellow-400 bg-indigo-700 hover:bg-slate-900 py-8">
            Commander pour 99€
          </AnimatedBorderButton>
        </div>
      </section>
    </main>
  );
}

