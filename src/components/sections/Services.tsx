"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import {
  ArrowUpRight,
  Check,
  Crown,
  Dumbbell,
  MapPin,
  Monitor,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import FloatingOrbs from "./FloatingOrbs";

const WHATSAPP_URL = "https://wa.me/33613743141";

type ServiceMode = "presentiel" | "distance";

type Service = {
  num: string;
  title: string;
  location: string;
  mode: ServiceMode;
  price: string;
  unit: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  kicker: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    num: "01",
    title: "Coaching Privé",
    location: "Nice & alentours",
    mode: "presentiel",
    price: "50€",
    unit: "/ séance",
    description:
      "Des séances individuelles où chaque mouvement compte. Programme construit autour de toi, corrigé en temps réel, adapté à ton évolution.",
    tags: ["En présentiel", "Sur-mesure", "Suivi progression"],
    icon: MapPin,
    kicker: "Le plus demandé",
  },
  {
    num: "02",
    title: "Coaching Privé",
    location: "Monaco",
    mode: "presentiel",
    price: "70€",
    unit: "/ séance",
    description:
      "Un accompagnement premium pour ceux qui exigent le meilleur. Flexibilité totale, approche haut de gamme, résultats à la hauteur de tes ambitions.",
    tags: ["Premium", "Flexibilité horaire", "Exclusif"],
    icon: Crown,
    kicker: "Format premium",
  },
  {
    num: "03",
    title: "Programme Sport",
    location: "À distance",
    mode: "distance",
    price: "80€",
    unit: "/ mois",
    description:
      "Un programme d'entraînement complet, livré chaque mois. Vidéos explicatives, planning détaillé et suivi hebdomadaire par WhatsApp.",
    tags: ["Programme mensuel", "Vidéos", "Suivi WhatsApp"],
    icon: Dumbbell,
    kicker: "Mensuel",
  },
  {
    num: "04",
    title: "Coaching Nutrition",
    location: "À distance",
    mode: "distance",
    price: "80€",
    unit: "/ mois",
    description:
      "Un plan alimentaire pensé pour toi. Pas de restriction absurde — de la science, du goût, et des résultats mesurables.",
    tags: ["Plan personnalisé", "Recettes", "Ajustements"],
    icon: Sparkles,
    kicker: "Rééquilibrage ciblé",
  },
  {
    num: "05",
    title: "Sport + Nutrition",
    location: "À distance — formule complète",
    mode: "distance",
    price: "150€",
    unit: "/ mois",
    description:
      "L'offre la plus complète. Entraînement et nutrition synchronisés pour maximiser chaque effort. C'est la formule que je recommande.",
    tags: ["Transformation totale", "Accès prioritaire", "Résultats optimaux"],
    icon: Crown,
    kicker: "Formule signature",
    featured: true,
  },
];

const modeStyles: Record<
  ServiceMode,
  {
    label: string;
    icon: LucideIcon;
    chipClassName: string;
    iconClassName: string;
  }
> = {
  presentiel: {
    label: "En présentiel",
    icon: MapPin,
    chipClassName:
      "border-bpt-red/15 bg-bpt-red/7 text-bpt-red shadow-[0_10px_24px_rgba(178,34,52,0.08)]",
    iconClassName: "bg-bpt-red/10 text-bpt-red",
  },
  distance: {
    label: "À distance",
    icon: Monitor,
    chipClassName:
      "border-bpt-charcoal/10 bg-white/85 text-bpt-charcoal shadow-[0_10px_24px_rgba(26,26,26,0.05)]",
    iconClassName: "bg-bpt-charcoal/[0.06] text-bpt-charcoal",
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const featuredService = useMemo(
    () => services.find((service) => service.featured),
    []
  );
  const standardServices = useMemo(
    () => services.filter((service) => !service.featured),
    []
  );

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F7F5F0_0%,#F2EEE6_100%)] py-28 sm:py-36 lg:py-44"
    >
      <FloatingOrbs variant="cream" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-18 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 56 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6 h-px bg-bpt-red"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 block text-[11px] font-semibold uppercase tracking-[0.3em] text-bpt-red"
            >
              02 — Offres
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-3xl font-heading text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02] tracking-[-0.03em] text-bpt-charcoal"
            >
              Des offres plus lisibles,
              <br />
              <span className="font-light italic text-bpt-text-muted/55">
                pensées pour être scannées en 3 secondes
              </span>
              <span className="text-bpt-red">.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="rounded-[28px] border border-white/70 bg-white/70 p-6 shadow-[0_20px_60px_rgba(26,26,26,0.05)] backdrop-blur-sm"
          >
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-bpt-charcoal">
              Lecture immédiate
            </p>

            <div className="mb-4 flex flex-wrap gap-3">
              {(["presentiel", "distance"] as const).map((mode) => {
                const ModeIcon = modeStyles[mode].icon;

                return (
                  <span
                    key={mode}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] font-medium tracking-[0.08em] uppercase",
                      modeStyles[mode].chipClassName
                    )}
                  >
                    <ModeIcon className="h-3.5 w-3.5" />
                    {modeStyles[mode].label}
                  </span>
                );
              })}
            </div>

            <p className="text-[13px] leading-[1.7] text-bpt-text-muted">
              Les séances en <strong className="text-bpt-charcoal">présentiel</strong> sont
              mises en avant, tandis que les formules <strong className="text-bpt-charcoal">à
              distance</strong> sont regroupées avec leurs prix mensuels visibles immédiatement.
            </p>
          </motion.div>
        </div>

        <div className="rounded-[32px] border border-white/70 bg-white/45 px-6 py-4 shadow-[0_24px_80px_rgba(26,26,26,0.05)] backdrop-blur-sm lg:px-8">
          {standardServices.map((service, i) => {
            const ServiceIcon = service.icon;
            const ModeIcon = modeStyles[service.mode].icon;

            return (
              <motion.a
                key={service.num}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + 0.08 * i }}
                className="group relative block border-b border-bpt-border/70 py-7 last:border-b-0"
              >
                <div className="absolute inset-0 rounded-[24px] bg-white/0 transition-all duration-500 group-hover:bg-white/75 group-hover:shadow-[0_26px_80px_rgba(26,26,26,0.08)]" />

                <div className="relative grid gap-6 lg:grid-cols-[88px_minmax(0,1.1fr)_minmax(0,1.55fr)_auto] lg:items-center">
                  <div className="flex items-center gap-4 lg:block">
                    <span className="block text-[12px] font-mono text-bpt-text-muted/35 transition-colors duration-300 group-hover:text-bpt-red">
                      {service.num}
                    </span>

                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 shadow-[0_12px_32px_rgba(26,26,26,0.05)]",
                        modeStyles[service.mode].iconClassName
                      )}
                    >
                      <ServiceIcon className="h-5 w-5" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-bpt-charcoal/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-bpt-charcoal">
                        {service.kicker}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]",
                          modeStyles[service.mode].chipClassName
                        )}
                      >
                        <ModeIcon className="h-3 w-3" />
                        {modeStyles[service.mode].label}
                      </span>
                    </div>

                    <h3 className="text-[22px] font-semibold text-bpt-charcoal transition-colors duration-300 group-hover:text-bpt-red">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-bpt-text-muted/65">
                      {service.location}
                    </p>
                  </div>

                  <div>
                    <p className="text-[14px] font-light leading-[1.75] text-bpt-text-muted">
                      {service.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-bpt-border/70 bg-white/75 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-bpt-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-6 lg:block lg:text-right">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-bpt-text-muted/55">
                        Tarif aperçu
                      </p>
                      <div className="mt-1 flex items-end gap-1 lg:justify-end">
                        <span className="font-heading text-[2.2rem] leading-none tracking-[-0.04em] text-bpt-charcoal">
                          {service.price}
                        </span>
                        <span className="pb-1 text-[12px] text-bpt-text-muted/65">
                          {service.unit}
                        </span>
                      </div>
                    </div>

                    <div className="mt-0 flex h-12 w-12 items-center justify-center rounded-full border border-bpt-border/60 bg-white/70 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:rotate-45 group-hover:border-bpt-charcoal group-hover:bg-bpt-charcoal lg:mt-5 lg:ml-auto">
                      <ArrowUpRight className="h-4 w-4 text-bpt-text-muted/70 transition-colors duration-500 group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {featuredService && (
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.72 }}
            className="group relative mt-10 block overflow-hidden rounded-[34px] border border-bpt-charcoal/10 bg-bpt-charcoal p-8 text-white shadow-[0_40px_120px_rgba(26,26,26,0.2)] lg:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,52,63,0.35),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_32%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:items-end">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-bpt-red/25 bg-bpt-red/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-bpt-red-light">
                    <Crown className="h-3.5 w-3.5" />
                    Formule signature
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
                    <Monitor className="h-3.5 w-3.5" />
                    À distance
                  </span>
                </div>

                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-white/10 text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
                    <featuredService.icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">
                      {featuredService.num} — {featuredService.kicker}
                    </p>
                    <h3 className="mt-2 font-heading text-[clamp(2rem,4vw,3.5rem)] leading-[0.98] tracking-[-0.04em] text-white">
                      {featuredService.title}
                    </h3>
                    <p className="mt-2 text-[12px] uppercase tracking-[0.16em] text-white/45">
                      {featuredService.location}
                    </p>
                  </div>
                </div>

                <p className="max-w-2xl text-[15px] font-light leading-[1.85] text-white/72">
                  {featuredService.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Programme sport + stratégie nutrition synchronisés",
                    "Suivi WhatsApp prioritaire toute la semaine",
                    "Ajustements continus selon tes résultats",
                    "Formule idéale pour une transformation complète",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/6 px-4 py-4"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-bpt-red-light" />
                      <span className="text-[13px] leading-[1.7] text-white/72">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  Prix aperçu
                </p>

                <div className="mt-4 flex items-end gap-2">
                  <span className="font-heading text-[4.25rem] leading-none tracking-[-0.05em] text-white">
                    {featuredService.price}
                  </span>
                  <span className="pb-2 text-[14px] text-white/50">{featuredService.unit}</span>
                </div>

                <p className="mt-3 text-[14px] leading-[1.7] text-white/62">
                  Le package le plus convaincant visuellement — parfait pour casser la monotonie
                  de la liste et pousser l’offre la plus rentable.
                </p>

                <div className="mt-6 space-y-3">
                  {featuredService.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-3 text-[12px] uppercase tracking-[0.12em] text-white/72">
                      <span className="h-1.5 w-1.5 rounded-full bg-bpt-red-light" />
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between rounded-full border border-white/10 bg-white/6 px-5 py-4 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
                    Demander cette formule
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-bpt-charcoal transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        )}
      </div>
    </section>
  );
}
