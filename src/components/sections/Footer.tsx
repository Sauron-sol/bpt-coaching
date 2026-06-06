"use client";

import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/33613743141";
const INSTAGRAM_URL = "https://www.instagram.com/baptiste.personal.trainer06/";

export default function Footer() {
  return (
    <footer className="bg-bpt-charcoal">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Large brand + links */}
        <div className="grid grid-cols-1 gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.jpeg"
                alt="Logo Baptiste Personal Trainer"
                width={32}
                height={32}
                className="rounded-full opacity-80"
              />
              <div className="min-w-0 leading-none">
                <span className="text-[11px] font-semibold tracking-[0.25em] text-white/80 uppercase">
                  Baptiste
                </span>
              <span className="block text-[11px] tracking-[0.2em] text-white/60 uppercase">
                  Personal Trainer
                </span>
              </div>
            </div>
            <p className="text-[14px] leading-[1.8] text-white/70 max-w-sm font-light">
              Coach sportif et nutritionnel certifié sur la Côte d&apos;Azur.
              Accompagnement personnalisé depuis 2018.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] text-white/60 uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Philosophie", href: "#about" },
                { label: "Tarifs", href: "#pricing" },
                { label: "Avis", href: "#testimonials" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-[13px] text-white/75 transition-colors duration-300 hover:text-white hover-line"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] text-white/60 uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-[13px] text-white/75 transition-colors duration-300 hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-[13px] text-white/75 transition-colors duration-300 hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li className="text-[13px] text-white/60">Nice & Monaco</li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3 lg:text-right">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] text-white/60 uppercase mb-6">
              Suivre
            </h4>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 max-w-full items-center break-all text-[12px] text-white/75 transition-colors duration-300 hover:text-bpt-red"
            >
              @baptiste.personal.trainer06
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/60 tracking-wide">
            © 2026 Baptiste Personal Trainer
          </p>
          <p className="text-[11px] text-white/60 tracking-[0.15em] uppercase">
            Sport & Nutrition — Côte d&apos;Azur
          </p>
        </div>
      </div>
    </footer>
  );
}
