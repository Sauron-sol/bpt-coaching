"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Philosophie", href: "#about" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Avis", href: "#testimonials" },
];

const WHATSAPP_URL = "https://wa.me/33613743141";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_#E5E0D8] py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Logo Baptiste Personal Trainer"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div className="hidden sm:block leading-none">
            <span className="text-[13px] font-semibold tracking-[0.2em] text-bpt-charcoal uppercase">
              Baptiste
            </span>
            <span className="block text-[11px] tracking-[0.15em] text-bpt-text-muted uppercase">
              Personal Trainer
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-bpt-text-muted hover:text-bpt-charcoal transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-bpt-charcoal text-white text-[13px] font-medium tracking-wide rounded-full hover:bg-bpt-red transition-colors duration-300"
          >
            Prendre RDV
          </a>
        </div>

        <button
          className="md:hidden text-bpt-charcoal p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-bpt-border"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15px] font-medium text-bpt-text-muted hover:text-bpt-charcoal py-3 border-b border-bpt-border/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-bpt-charcoal text-white text-[13px] font-medium rounded-full"
              >
                Prendre rendez-vous
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
