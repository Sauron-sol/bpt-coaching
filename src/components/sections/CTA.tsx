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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.02 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-heading text-[clamp(8rem,20vw,18rem)] leading-none tracking-tighter text-bpt-charcoal whitespace-nowrap"
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
              className="font-heading text-[clamp(2.8rem,7vw,6rem)] leading-[0.92] tracking-[-0.04em] text-bpt-charcoal"
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
              className="group inline-flex items-center gap-5"
            >
              <span className="flex flex-col">
                <span className="text-[11px] tracking-[0.2em] text-bpt-text-muted/70 uppercase mb-2">
                  Consultation gratuite
                </span>
                <span className="text-[14px] font-semibold tracking-[0.1em] text-bpt-charcoal uppercase hover-line">
                  Discuter sur WhatsApp
                </span>
              </span>
              <span className="w-16 h-16 rounded-full bg-bpt-charcoal flex items-center justify-center group-hover:bg-bpt-red transition-colors duration-500 group-hover:scale-105">
                <ArrowUpRight className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-500" />
              </span>
            </a>

            <div className="flex items-center gap-6 mt-10 text-[11px] tracking-[0.15em] text-bpt-text-muted/70 uppercase">
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
