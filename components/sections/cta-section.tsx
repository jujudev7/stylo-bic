"use client";

import { AnimatedBorderButton } from "@/components/ui/animated-border-button";
import Image from "next/image";

export function CTASection({ EditionLimitee, StyloBic }) {
  return (
    <section className="xl:py-24 py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative">
          {/* Sur grands écrans (lg et plus), la div est en position absolute */}
          <div className="hidden lg:flex absolute left-2 sm:left-5 w-[180px] items-center justify-center">
            <Image
              src={EditionLimitee}
              className="animate-spin-slow w-[180px]"
              alt="édition limitée"
            />
            <Image
              src={StyloBic}
              className="absolute w-[120px] rotate-[33deg]"
              alt="stylo BIC"
            />
          </div>

          <div className="text-center">
            <h2 className="sm:text-4xl text-3xl text-yellow-400 font-bold mb-8">
              Prêt à Découvrir l&apos;Excellence ?
            </h2>

            <p className="xl:text-xl sm:text-lg text-base sm:mb-12 mb-8 text-gray-300">
              Commandez dès maintenant et rejoignez l&apos;élite de
              l&apos;écriture !
            </p>

            {/* Sur petits écrans (en dessous de lg), la div est intégrée dans le flux */}
            <div className="lg:hidden flex items-center justify-center mb-12">
              <div className="relative w-[120px] md:w-[180px] flex items-center justify-center">
                <Image
                  src={EditionLimitee}
                  className="animate-spin-slow w-[120px] md:w-[180px]"
                  alt="édition limitée"
                />
                <Image
                  src={StyloBic}
                  className="absolute w-[80px] md:w-[120px] rotate-[33deg]"
                  alt="stylo BIC"
                />
              </div>
            </div>

            <AnimatedBorderButton className="text-lg rounded-2xl hover:text-yellow-400 bg-indigo-700 hover:bg-slate-950 py-8">
              Commander LE stylo
            </AnimatedBorderButton>
          </div>
        </div>
      </div>
    </section>
  );
}
