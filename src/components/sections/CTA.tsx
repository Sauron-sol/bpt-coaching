"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import FloatingOrbs from "./FloatingOrbs";

const WHATSAPP_URL = "https://wa.me/33613743141";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-48 bg-bpt-cream noise-bg overflow-hidden">
      <FloatingOrbs variant="cream" />

      {/* Large watermark text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.02 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="whitespace-nowrap font-heading text-[clamp(5rem,20vw,18rem)] leading-none tracking-tighter text-bpt-charcoal"
        >
          TRANSFORMATION
        </motion.p>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.6 }}
              className="h-px bg-bpt-red mb-8"
            />

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-[clamp(2.35rem,11vw,6rem)] leading-[0.94] tracking-[-0.04em] text-bpt-charcoal"
            >
              Prêt à
              <br />
              <span className="italic font-light text-bpt-text-muted/70">commencer</span>
              <span className="text-bpt-red"> ?</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-5"
          >
            <p className="text-[15px] leading-[1.8] text-bpt-text-muted font-light mb-10 max-w-md">
              Le premier pas est toujours le plus important. Envoie-moi un message
              sur WhatsApp, on discute de tes objectifs, sans engagement
              et sans pression.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 flex-wrap items-center gap-4 rounded-[32px] border border-bpt-border/70 bg-white/70 px-5 py-4 backdrop-blur-sm sm:flex-nowrap sm:gap-5"
            >
              <span className="flex flex-col">
                <span className="text-[11px] tracking-[0.2em] text-bpt-text-muted/70 uppercase mb-2">
                  Consultation gratuite
                </span>
                <span className="text-[14px] font-semibold tracking-[0.1em] text-bpt-charcoal uppercase hover-line">
                  Discuter sur WhatsApp
                </span>
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-bpt-charcoal transition-colors duration-500 group-hover:scale-105 group-hover:bg-bpt-red sm:h-16 sm:w-16">
                <ArrowUpRight className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-500" />
              </span>
            </a>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.15em] text-bpt-text-muted/70">
              <span>Sans engagement</span>
              <span className="w-1 h-1 rounded-full bg-bpt-border" />
              <span>Réponse sous 24h</span>
              <span className="w-1 h-1 rounded-full bg-bpt-border" />
              <span>100% gratuit</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
