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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-12">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Logo Baptiste Personal Trainer"
            width={36}
            height={36}
            className="h-9 w-9 flex-shrink-0 rounded-full"
          />
          <div className="hidden min-w-0 leading-none sm:block">
            <span className="block truncate text-[12px] font-semibold uppercase tracking-[0.16em] text-bpt-charcoal md:text-[13px] md:tracking-[0.2em]">
              Baptiste
            </span>
            <span className="block truncate text-[11px] uppercase tracking-[0.12em] text-bpt-text-muted md:tracking-[0.15em]">
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
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-bpt-charcoal px-6 py-2.5 text-[13px] font-medium tracking-wide text-white transition-colors duration-300 hover:bg-bpt-red"
          >
            Prendre RDV
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-bpt-border/80 bg-white/70 text-bpt-charcoal shadow-sm md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
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
            id="mobile-menu"
            className="absolute left-0 right-0 top-full border-b border-bpt-border bg-white shadow-[0_18px_40px_rgba(26,26,26,0.08)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-6 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-11 items-center border-b border-bpt-border/50 py-3 text-[15px] font-medium text-bpt-text-muted transition-colors hover:text-bpt-charcoal"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-bpt-charcoal px-6 py-3 text-[13px] font-medium text-white"
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
