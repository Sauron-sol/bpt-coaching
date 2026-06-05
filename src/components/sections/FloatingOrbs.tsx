"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs({
  variant = "light",
}: {
  variant?: "light" | "dark" | "cream";
}) {
  const colors =
    variant === "dark"
      ? {
          orb1: "bg-bpt-red/[0.07]",
          orb2: "bg-white/[0.03]",
          orb3: "bg-bpt-red/[0.04]",
          ring: "border-white/[0.03]",
        }
      : variant === "cream"
        ? {
            orb1: "bg-bpt-red/[0.04]",
            orb2: "bg-bpt-warm/60",
            orb3: "bg-bpt-red/[0.03]",
            ring: "border-bpt-border/30",
          }
        : {
            orb1: "bg-bpt-red/[0.03]",
            orb2: "bg-bpt-cream/80",
            orb3: "bg-bpt-red/[0.02]",
            ring: "border-bpt-border/20",
          };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large slow-moving orb */}
      <motion.div
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, -60, 40, -20, 0],
          scale: [1, 1.15, 0.95, 1.08, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full ${colors.orb1} blur-[100px]`}
      />

      {/* Medium orb */}
      <motion.div
        animate={{
          x: [0, -60, 30, -50, 0],
          y: [0, 40, -30, 60, 0],
          scale: [1, 0.9, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className={`absolute top-[40%] -left-[5%] w-[500px] h-[500px] rounded-full ${colors.orb2} blur-[80px]`}
      />

      {/* Small accent orb */}
      <motion.div
        animate={{
          x: [0, 40, -20, 30, 0],
          y: [0, -30, 50, -40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 7 }}
        className={`absolute bottom-[10%] right-[20%] w-[300px] h-[300px] rounded-full ${colors.orb3} blur-[60px]`}
      />

      {/* Decorative ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className={`absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full border ${colors.ring}`}
      />

      {/* Second ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className={`absolute bottom-[20%] left-[5%] w-[250px] h-[250px] rounded-full border ${colors.ring}`}
      />
    </div>
  );
}
