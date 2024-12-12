"use client";

import { motion } from "framer-motion";
import { Feather, Gem, LucideIcon, Palette, Scale } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap: { [key: string]: LucideIcon } = {
  Feather,
  Palette,
  Scale,
  Gem,
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-blue-950 rounded-xl shadow-lg border border-gray-100"
    >
      <div className="flex flex-row items-center gap-4">
        {" "}
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl text-yellow-400 font-semibold mb-2">{title}</h3>
      </div>

      <p className="text-gray-50 my-3">{description}</p>
    </motion.div>
  );
}

