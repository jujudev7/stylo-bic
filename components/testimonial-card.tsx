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
      className="p-6 bg-white rounded-xl shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <div className="text-gray-700 italic">
        {/* Contenu citation avec icônes */}
        <p className="flex items-start">
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

