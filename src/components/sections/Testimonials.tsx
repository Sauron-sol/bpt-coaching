"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FloatingOrbs from "./FloatingOrbs";

const testimonials = [
  {
    quote:
      "Baptiste m'a accompagnée pendant 6 mois. -12kg, une forme physique que je n'avais jamais eue. Son approche bienveillante et scientifique fait toute la différence.",
    name: "Sophie M.",
    context: "Perte de poids · Nice",
  },
  {
    quote:
      "Le coaching à distance est top. Programmes clairs, vidéos bien expliquées, suivi WhatsApp réactif. +8kg de muscle en 4 mois.",
    name: "Thomas R.",
    context: "Prise de masse · À distance",
  },
  {
    quote:
      "J'ai complètement changé ma relation avec la nourriture. Plus d'énergie, meilleur sommeil. Je me sens enfin bien dans mon corps.",
    name: "Laura D.",
    context: "Rééquilibrage alimentaire · Monaco",
  },
  {
    quote:
      "Les séances privées sont intenses mais toujours adaptées. Il pousse à se dépasser tout en restant à l'écoute. Un vrai professionnel.",
    name: "Marc P.",
    context: "Coaching privé · Nice",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-28 sm:py-36 lg:py-44 bg-bpt-charcoal overflow-hidden"
    >
      <FloatingOrbs variant="dark" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 0.5px, transparent 0.5px)",
          backgroundSize: "32px 32px",
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : {}}
            transition={{ duration: 0.6 }}
            className="h-px bg-bpt-red mb-6"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[11px] font-semibold tracking-[0.3em] text-bpt-red uppercase block mb-8"
          >
            03 — Témoignages
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.02] tracking-[-0.03em] text-white"
          >
            Ce qu&apos;ils en
            <br />
            <span className="italic font-light text-white/55">disent</span>
            <span className="text-bpt-red">.</span>
          </motion.h2>
        </div>

        {/* Staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-20">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + 0.12 * i }}
              className={i % 2 === 1 ? "md:mt-24" : ""}
            >
              {/* Large quotation mark */}
              <span className="font-heading text-[5rem] leading-none text-bpt-red/25 block -mb-10 select-none">
                &ldquo;
              </span>
              <p className="text-[18px] sm:text-[20px] leading-[1.65] text-white/90 font-light">
                {t.quote}
              </p>
              <footer className="flex items-center gap-4 mt-8">
                <div className="w-10 h-px bg-bpt-red/60" />
                <div>
                  <cite className="not-italic text-[13px] font-semibold text-white block tracking-wide">
                    {t.name}
                  </cite>
                  <span className="text-[11px] tracking-[0.15em] text-white/50 uppercase">
                    {t.context}
                  </span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-[11px] text-white/45 mt-24 tracking-wide"
        >
          * Témoignages représentatifs. Les résultats individuels peuvent varier.
        </motion.p>
      </div>
    </section>
  );
}
