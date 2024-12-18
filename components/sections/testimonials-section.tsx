"use client";
import { FadeInWhenVisible } from "../animations/fade-in-when-visible";
import { TestimonialCard } from "../testimonial-card";

const testimonials = [
  {
    name: "Emmanuel Macron",
    role: "Président",
    content:
      "La fluidité de l'écriture est incomparable. Un investissement qui en vaut la peine.",
    image: "/testimonials/macron.png",
  },
  {
    name: "Stephen King",
    role: "Écrivain",
    content:
      "L'acte d'écrire peut ouvrir tant de portes, comme si un stylo n'était pas vraiment une plume mais une étrange variété de passe-partout.",
    image: "/testimonials/stephen-king.png",
  },
  {
    name: "Léna Situations",
    role: "Entrepreneuse",
    content:
      "Ce stylo est devenu mon compagnon d'écriture quotidien. La qualité est exceptionnelle !",
    image: "/testimonials/lena-situations.webp",
  },
  {
    name: "Mary Higgins Clark",
    role: "Écrivaine",
    content:
      "Le jour de ma mort, je voudrais que l'on dépose dans mon cercueil un cahier à spirale, un stylo et une bouteille de vin. Je serai ainsi équipée pour écrire depuis l'au-delà.",
    image: "/testimonials/higgins-clark.png",
  },
  {
    name: "Philippe Starck",
    role: "Designer",
    content: "Le design est juste magnifique ! C'est un véritable objet d'art.",
    image: "/testimonials/philippe-starck.webp",
  },
  {
    name: "Marty Feldman",
    role: "Acteur / Scénariste",
    content:
      "Un stylo est bien plus puissant qu'une épée, et tellement plus pratique pour écrire.",
    image: "/testimonials/marty-feldman.png",
  },
  {
    name: "Quentin Tarantino",
    role: "Réalisateur",
    content:
      "Pour être romancier, il me suffit d'un stylo et d'une feuille de papier.",
    image: "/testimonials/quentin-tarantino.png",
  },
  {
    name: "Leïla Slimani",
    role: "Écrivaine",
    content:
      "Tous les dictateurs arabes le savent bien: en éduquant les hommes, on prend le risque qu'ils vous renversent. Et qu'ils défilent un jour, un stylo à la main.",
    image: "/testimonials/leila-slimani.jpg",
  },
  {
    name: "Bruno Masure",
    role: "Journaliste / Écrivain",
    content:
      "Les écrivains à l'humeur aigre utilisent généralement un stylo à bile.",
    image: "/testimonials/bruno-masure.png",
  },
  {
    name: "Joséphine Baker",
    role: "Chanteuse / Danseuse",
    content:
      "Vous devez apprendre à vous protéger avec le stylo, et non avec le pistolet.",
    image: "/testimonials/josephine-baker.jpg",
  },
  {
    name: "Grand Corps Malade",
    role: "Chanteur / Réalisateur",
    content:
      "Laisse moi mon stylo, y'a pas moyen que je m'arrête ; j'ai une envie d'écrire comme t'as une envie de cigarette.",
    image: "/testimonials/grand-corps-malade.jpg",
  },
  {
    name: "Kylian Mbappé",
    role: "Footballeur",
    content: "C'est avec ce stylo que j'ai signé mon contrat au Real Madrid.",
    image: "/testimonials/kylian-mbappe.png",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative -mt-20 pt-24 pb-72 rounded-t-[100px] bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-yellow-400 font-bold text-center mb-16">
          Ce qu&apos;en Disent Nos Clients
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInWhenVisible key={index} delay={Math.floor(index / 3) * 0.2}>
              <TestimonialCard {...testimonial} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
