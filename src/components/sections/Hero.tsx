"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import FloatingOrbs from "./FloatingOrbs";

const WHATSAPP_URL = "https://wa.me/33613743141";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-bpt-cream noise-bg">
      <FloatingOrbs variant="cream" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Rotating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-32 right-8 lg:right-20 z-20 hidden lg:block"
      >
        <div className="relative w-[100px] h-[100px]">
          <svg viewBox="0 0 100 100" className="animate-spin-slow w-full h-full">
            <defs>
              <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="fill-bpt-charcoal/40" style={{ fontSize: "9.5px", letterSpacing: "3px", fontWeight: 500 }}>
              <textPath href="#circle">
                COACHING · SPORT · NUTRITION · RÉSULTATS ·{" "}
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-bpt-red" />
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center px-6 pt-24 sm:pt-28 lg:px-12">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left — Title + description */}
            <div className="lg:col-span-7">
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 flex flex-wrap items-center gap-3 sm:mb-8 sm:gap-4"
              >
                <div className="w-12 h-px bg-bpt-red" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bpt-red sm:tracking-[0.3em]">
                  Coach certifié — Nice & Monaco
                </span>
              </motion.div>

              {/* Title — no overflow-hidden, proper line-height */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8 max-w-[10ch] font-heading text-[clamp(2.5rem,12vw,7.5rem)] leading-[0.98] tracking-[-0.03em] text-bpt-charcoal sm:mb-10 sm:leading-[1.05]"
              >
                Le corps
                <br />
                <span className="italic font-light text-bpt-text-muted/70">
                  que tu
                </span>
                <br />
                mérites
                <span className="text-bpt-red">.</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-10 max-w-md text-[15px] leading-[1.8] text-bpt-text-muted"
              >
                Un accompagnement sur-mesure alliant science de
                l&apos;entraînement et nutrition personnalisée.
                Pas de promesse miracle, que des résultats concrets.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <div className="flex flex-col items-start gap-4">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-bpt-text-muted/70">
                    Première consultation gratuite
                  </span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-full bg-bpt-charcoal px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-bpt-red sm:w-auto sm:px-7 sm:py-4"
                  >
                    <span>Prendre RDV</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right — Baptiste "genie" style: photo fading into logo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="flex flex-col items-center lg:col-span-5 lg:items-end"
            >
              <div className="relative flex flex-col items-center">
                {/* Photo — large, no card, seamless fade on all sides */}
                <div
                  className="relative aspect-[10/11.5] w-full max-w-[320px] sm:w-[480px] sm:max-w-[480px] sm:h-[540px] lg:w-[560px] lg:max-w-[560px] lg:h-[620px]"
                  style={{
                    maskImage: `radial-gradient(ellipse 70% 58% at 50% 35%, black 40%, transparent 75%)`,
                    WebkitMaskImage: `radial-gradient(ellipse 70% 58% at 50% 35%, black 40%, transparent 75%)`,
                  }}
                >
                  <Image
                    src="/baptiste-coach.png"
                    alt="Baptiste — Coach sportif et nutritionnel"
                    fill
                    sizes="(max-width: 640px) 400px, (max-width: 1024px) 480px, 560px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Logo — ROUND, big, overlapping deeply into the fade zone */}
                <div className="relative z-10 -mt-20 sm:-mt-40 lg:-mt-52">
                  <div className="relative h-[160px] w-[160px] overflow-hidden rounded-full ring-4 ring-bpt-cream shadow-2xl sm:h-[220px] sm:w-[220px] sm:ring-[6px]">
                    <Image
                      src="/logo.jpeg"
                      alt="Logo Baptiste Personal Trainer"
                      fill
                      sizes="(max-width: 640px) 160px, 220px"
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Name */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="mt-5 text-[11px] tracking-[0.2em] text-bpt-text-muted/70 uppercase text-center"
                >
                  Baptiste · Personal Trainer
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="relative z-10 border-t border-bpt-border"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 divide-y divide-bpt-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { value: "2018", label: "Année de création" },
              { value: "4", label: "Certifications internationales" },
              { value: "5", label: "Formules sur-mesure" },
            ].map((stat) => (
              <div key={stat.label} className="px-4 py-5 text-center sm:px-5 sm:py-6 lg:px-8 lg:py-8 lg:text-left">
                <p className="font-heading text-xl tracking-tight text-bpt-charcoal lg:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-bpt-text-muted/60 sm:tracking-[0.15em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
