"use client";

import { LucideIcon, Feather, Palette, Scale } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap: { [key: string]: LucideIcon } = {
  Feather,
  Palette,
  Scale,
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-xl shadow-lg border border-gray-100"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}