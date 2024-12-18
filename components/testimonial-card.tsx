"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-5 bg-white rounded-xl border-4 border-transparent hover:border-yellow-400 h-full flex flex-col"
    >
      <div className="flex items-center mb-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden mr-4 hover:scale-110">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <div className="text-gray-700 italic flex-grow">
        {/* Contenu citation avec icônes */}
        <p className="flex items-start min-h-[6rem]">
          {/* Quote Open Icon */}
          <Image
            src={"/icons/quote-open.svg"}
            width={16}
            height={16}
            alt="Quote Open"
            className="mr-1"
          />
          {/* Content + Quote Close */}
          <span className="flex-1">
            {content}
            <Image
              src={"/icons/quote-close.svg"}
              width={16}
              height={16}
              alt="Quote Close"
              className="inline ml-1"
            />
          </span>
        </p>
      </div>
    </motion.div>
  );
}
