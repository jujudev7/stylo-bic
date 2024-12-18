"use client";

import { AnimatedBorderButton } from "@/components/ui/animated-border-button";
import Image from "next/image";

interface CTASectionProps {
  EditionLimitee: any;
  StyloBic: any;
}

export function CTASection({ EditionLimitee, StyloBic }: CTASectionProps) {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-center">
          <div className="absolute left-0 w-[200px] flex items-center justify-center">
            <Image
              src={EditionLimitee}
              className="animate-spin-slow w-[200px]"
              alt="édition limitée"
            />
            <Image
              src={StyloBic}
              className="absolute w-[120px] rotate-[33deg]"
              alt="stylo BIC"
            />
          </div>
          <div className="text-center">
            <h2 className="text-4xl text-yellow-400 font-bold mb-8">
              Prêt à Découvrir l&apos;Excellence ?
            </h2>
            <p className="text-xl mb-12 text-gray-300">
              Commandez dès maintenant et rejoignez l&apos;élite de
              l&apos;écriture !
            </p>
            <AnimatedBorderButton className="text-lg rounded-2xl hover:text-yellow-400 bg-indigo-700 hover:bg-slate-950 py-8">
              Commander LE stylo
            </AnimatedBorderButton>
          </div>
        </div>
      </div>
    </section>
  );
}
