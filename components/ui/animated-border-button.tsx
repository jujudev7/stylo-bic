"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "./button";

interface AnimatedBorderButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedBorderButton({
  children,
  className,
}: AnimatedBorderButtonProps) {
  return (
    <div className="relative">
      {/* Gradient animé */}
      <motion.div
        className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-75"
        animate={{
          background: [
            "linear-gradient(90deg, transparent 0%, #fbbf24 50%, transparent 100%)",
            "linear-gradient(180deg, transparent 0%, #fbbf24 50%, transparent 100%)",
            "linear-gradient(270deg, transparent 0%, #fbbf24 50%, transparent 100%)",
            "linear-gradient(0deg, transparent 0%, #fbbf24 50%, transparent 100%)",
            "linear-gradient(90deg, transparent 0%, #fbbf24 50%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Bouton avec fond sombre */}
      <Button
        size="lg"
        className={cn(
          "relative bg-indigo-600 text-white border-2 border-blue-950 hover:bg-black hover:border-amber-400/50 transition-colors",
          className
        )}
      >
        {children}
      </Button>
    </div>
  );
}
