"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  { name: "BEES 1er Degré", detail: "Brevet d'État d'Éducateur Sportif" },
  { name: "Bayesian PT", detail: "Bayesian Personal Trainer Certified" },
  { name: "PNCE Niveau 3", detail: "Certification Internationale Canadienne" },
  { name: "Sciences", detail: "Entraînement & Nutrition" },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

  return (
    <section id="about" ref={sectionRef} className="relative py-20 sm:py-24 lg:py-28 bg-bpt-cream overflow-hidden">

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.6 }}
              className="h-px bg-bpt-red mb-6 overflow-hidden"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[11px] font-semibold tracking-[0.3em] text-bpt-red uppercase block mb-8"
            >
              01 — Philosophie
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-heading text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.02] tracking-[-0.03em] text-bpt-charcoal"
            >
              Pas de solutions
              <br />
              <span className="italic font-light text-bpt-text-muted/70">
                miracles
              </span>
              ,
              <br />
              que des
              <br />
              résultats
              <span className="text-bpt-red">.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-7 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="max-w-xl"
            >
              <p className="mb-6 text-[15px] leading-[1.9] text-bpt-text-muted font-light sm:text-[17px]">
                Je suis Baptiste, coach sportif et nutritionnel certifié sur la Côte d&apos;Azur.
                Mon approche est simple : <strong className="font-medium text-bpt-charcoal">comprendre ton corps</strong>,
                définir des objectifs réalistes et construire un programme qui
                s&apos;intègre dans <strong className="font-medium text-bpt-charcoal">ta vie</strong>.
              </p>
              <p className="text-[15px] leading-[1.9] text-bpt-text-muted font-light sm:text-[17px]">
                Chaque personne est unique. C&apos;est pourquoi chaque programme l&apos;est aussi.
                Science de l&apos;entraînement, nutrition adaptée et un suivi humain.
                C&apos;est ce qui fait la différence entre un régime qui échoue et une
                <strong className="font-medium text-bpt-charcoal"> transformation qui dure</strong>.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="relative mt-24 border-t border-bpt-border pt-16"
        >
          <div className="shimmer-line absolute top-0 left-0 right-0 h-px overflow-hidden" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + 0.1 * i }}
                className="group relative rounded-3xl border border-bpt-border/70 bg-white/40 p-5 sm:p-6 lg:border-0 lg:bg-transparent lg:p-0"
              >
                <span className="pointer-events-none absolute -left-1 -top-2 select-none font-heading text-[3rem] leading-none font-light text-bpt-border/50 lg:text-[4rem]">
                  0{i + 1}
                </span>
                <div className="pt-10">
                  <h4 className="text-[14px] font-semibold text-bpt-charcoal mb-1 group-hover:text-bpt-red transition-colors duration-300">
                    {cert.name}
                  </h4>
                  <p className="text-[12px] leading-relaxed text-bpt-text-muted/70">{cert.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
