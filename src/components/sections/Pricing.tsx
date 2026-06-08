"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Check,
  MapPin,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/33613743141";

type PrivatePlan = {
  name: string;
  price: string;
  unit: string;
  badge: string;
  description: string;
  travel: string;
  highlights: string[];
  icon: LucideIcon;
  dark?: boolean;
};

type RemotePlan = {
  name: string;
  sub: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const privatePlans: PrivatePlan[] = [
  {
    name: "Nice & alentours",
    price: "50",
    unit: "/ séance",
    badge: "Le plus demandé",
    description:
      "Coaching individuel en présentiel. Programme sur-mesure, correction en temps réel et suivi de ta progression séance après séance.",
    travel: "Déplacement Nice & proches environs",
    highlights: ["Séance 1:1 personnalisée", "Correction technique en direct", "Suivi progression"],
    icon: MapPin,
  },
  {
    name: "Monaco",
    price: "70",
    unit: "/ séance",
    badge: "Monaco",
    description:
      "Même coaching personnalisé, pour les séances en extérieur sur Monaco. Tarif adapté au déplacement.",
    travel: "Déplacement sur Monaco",
    highlights: ["Séance 1:1 personnalisée", "Coaching en extérieur", "Suivi progression"],
    icon: MapPin,
  },
];

const remotePlans: RemotePlan[] = [
  {
    name: "Sport",
    sub: "À distance",
    price: "80",
    unit: "/ mois",
    description: "Programme d'entraînement complet, livré chaque mois.",
    features: [
      "Programme mensuel personnalisé",
      "Vidéos explicatives détaillées",
      "Suivi hebdomadaire WhatsApp",
    ],
  },
  {
    name: "Nutrition",
    sub: "À distance",
    price: "80",
    unit: "/ mois",
    description: "Plan alimentaire construit autour de ton quotidien.",
    features: [
      "Bilan nutritionnel complet",
      "Plan alimentaire personnalisé",
      "Recettes adaptées à tes goûts",
    ],
  },
  {
    name: "Sport + Nutrition",
    sub: "Formule complète",
    price: "150",
    unit: "/ mois",
    featured: true,
    description: "L'offre complète pour ceux qui veulent des résultats rapides et durables.",
    features: [
      "Sport + nutrition synchronisés",
      "Suivi WhatsApp prioritaire",
      "Ajustements continus",
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative overflow-hidden bg-bpt-cream py-28 sm:py-36 lg:py-44"
    >

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
              02 — Tarifs
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-heading text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.04] tracking-[-0.03em] text-bpt-charcoal"
            >
              Des formules claires,
              <br />
              <span className="font-light italic text-bpt-text-muted/55">
                adaptées à tes objectifs
              </span>
              <span className="text-bpt-red">.</span>
            </motion.h2>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative mb-24 overflow-hidden rounded-[34px] border border-bpt-border/70 bg-[linear-gradient(180deg,rgba(247,245,240,0.88)_0%,rgba(255,255,255,0.92)_100%)] p-4 shadow-[0_30px_90px_rgba(26,26,26,0.06)] sm:p-5 lg:p-7"
        >
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-bpt-red/35 to-transparent" />

          <div className="mb-8 flex flex-col gap-4 px-1 sm:px-2 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3 sm:items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-bpt-red/8 text-bpt-red">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bpt-red">
                  En présentiel
                </p>
                <h3 className="text-[18px] font-semibold text-bpt-charcoal sm:text-[20px]">
                  Coaching privé en présentiel
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-bpt-red/15 bg-bpt-red/7 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-bpt-red">
                Nice 50€
              </span>
              <span className="rounded-full border border-bpt-charcoal/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-bpt-charcoal">
                Monaco 70€
              </span>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
            <div className="rounded-[28px] border border-white/80 bg-white/75 p-5 shadow-[0_20px_60px_rgba(26,26,26,0.04)] sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bpt-text-muted/60">
                 Pourquoi choisir le coaching privé
              </p>
              <p className="mt-4 text-[15px] leading-[1.85] text-bpt-text-muted">
                 Un accompagnement en face à face pour bénéficier de corrections immédiates,
                 d&apos;un suivi précis et d&apos;une expérience entièrement adaptée à votre rythme.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Séances 100% personnalisées",
                  "Tarifs affichés en toute transparence",
                  "Réservation simple et rapide",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-bpt-border/70 bg-bpt-cream/70 px-4 py-3 text-[12px] uppercase tracking-[0.08em] text-bpt-charcoal"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {privatePlans.map((plan, i) => {
                const Icon = plan.icon;

                return (
                  <motion.a
                    key={plan.name}
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.45 + 0.12 * i }}
                    className={cn(
                      "group relative block overflow-hidden rounded-[30px] border p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_36px_100px_rgba(26,26,26,0.14)] sm:p-6 lg:p-10",
                      plan.dark
                        ? "border-bpt-charcoal bg-bpt-charcoal text-white shadow-[0_28px_90px_rgba(26,26,26,0.18)]"
                        : "border-white/80 bg-white text-bpt-charcoal shadow-[0_24px_80px_rgba(26,26,26,0.08)]"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-0",
                        plan.dark
                          ? "bg-[radial-gradient(circle_at_top_right,rgba(212,52,63,0.28),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_32%)]"
                          : "bg-[radial-gradient(circle_at_top_right,rgba(178,34,52,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(26,26,26,0.04),transparent_28%)]"
                      )}
                    />

                    <div className="relative">
                      <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span
                            className={cn(
                              "inline-flex rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]",
                              plan.dark
                                ? "border border-white/10 bg-white/8 text-white/80"
                                : "border border-bpt-red/15 bg-bpt-red/7 text-bpt-red"
                            )}
                          >
                            {plan.badge}
                          </span>

                          <div className="mt-4 flex items-center gap-3">
                            <div
                              className={cn(
                                "flex h-12 w-12 items-center justify-center rounded-2xl",
                                plan.dark ? "bg-white/10 text-white" : "bg-bpt-charcoal/6 text-bpt-charcoal"
                              )}
                            >
                              <Icon className="h-5 w-5" />
                            </div>

                            <div>
                              <h4 className="text-[21px] font-semibold sm:text-[24px]">{plan.name}</h4>
                              <p
                                className={cn(
                                  "mt-1 text-[11px] uppercase tracking-[0.14em]",
                                  plan.dark ? "text-white/45" : "text-bpt-text-muted/60"
                                )}
                              >
                                Coaching individuel
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="sm:text-right">
                          <div className="flex items-end gap-1">
                            <span className="font-heading text-[3.1rem] leading-none tracking-[-0.05em] sm:text-[4rem]">
                              {plan.price}€
                            </span>
                          </div>
                          <span
                            className={cn(
                              "mt-1 block text-[12px]",
                              plan.dark ? "text-white/45" : "text-bpt-text-muted/55"
                            )}
                          >
                            {plan.unit}
                          </span>
                        </div>
                      </div>

                      <p
                        className={cn(
                          "text-[15px] leading-[1.8]",
                          plan.dark ? "text-white/72" : "text-bpt-text-muted"
                        )}
                      >
                        {plan.description}
                      </p>

                      <div
                        className={cn(
                          "mt-6 rounded-2xl border px-4 py-4 text-[12px] uppercase tracking-[0.08em]",
                          plan.dark
                            ? "border-white/10 bg-white/6 text-white/72"
                            : "border-bpt-border/70 bg-bpt-cream/70 text-bpt-charcoal"
                        )}
                      >
                        {plan.travel}
                      </div>

                      <div className="mt-6 space-y-3">
                        {plan.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-3">
                            <Check
                              className={cn(
                                "mt-0.5 h-4 w-4 flex-shrink-0",
                                plan.dark ? "text-bpt-red-light" : "text-bpt-red"
                              )}
                            />
                            <span
                              className={cn(
                                "text-[13px] leading-[1.7]",
                                plan.dark ? "text-white/72" : "text-bpt-text-muted"
                              )}
                            >
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div
                        className={cn(
                          "mt-8 flex min-h-11 flex-wrap items-center justify-between gap-3 rounded-3xl border px-5 py-4 transition-all duration-500 sm:rounded-full",
                          plan.dark
                            ? "border-white/10 bg-white/8 group-hover:bg-white/12"
                            : "border-bpt-border/70 bg-bpt-cream/55 group-hover:bg-bpt-cream/80"
                        )}
                      >
                        <span className="text-[12px] font-semibold uppercase tracking-[0.14em]">
                          Réserver cette séance
                        </span>
                        <div
                          className={cn(
                            "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45",
                            plan.dark ? "bg-white text-bpt-charcoal" : "bg-bpt-charcoal text-white"
                          )}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.62 }}
        >
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="h-px w-full flex-1 bg-gradient-to-r from-transparent via-bpt-border to-bpt-border" />
            <span className="inline-flex items-center gap-2 rounded-full border border-bpt-border/70 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-bpt-charcoal">
              <Sparkles className="h-3.5 w-3.5 text-bpt-red" />
              Si tu préfères commencer à distance
            </span>
            <div className="h-px w-full flex-1 bg-gradient-to-l from-transparent via-bpt-border to-bpt-border" />
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {remotePlans.map((plan, i) => (
              <motion.a
                key={plan.name}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.72 + 0.08 * i }}
                className={cn(
                  "group relative block overflow-hidden rounded-[28px] border p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(26,26,26,0.08)] sm:p-7",
                  plan.featured
                    ? "border-bpt-charcoal bg-bpt-charcoal text-white shadow-[0_24px_80px_rgba(26,26,26,0.15)]"
                    : "border-bpt-border/70 bg-white"
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0",
                    plan.featured
                      ? "bg-[radial-gradient(circle_at_top_right,rgba(212,52,63,0.30),transparent_36%)]"
                      : "bg-[radial-gradient(circle_at_top_right,rgba(178,34,52,0.06),transparent_28%)]"
                  )}
                />

                <div className="relative">
                  {plan.featured && (
                    <span className="mb-5 inline-flex rounded-full border border-bpt-red/20 bg-bpt-red/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-bpt-red-light">
                      Recommandé
                    </span>
                  )}

                  <p
                    className={cn(
                      "text-[11px] uppercase tracking-[0.16em]",
                      plan.featured ? "text-white/45" : "text-bpt-text-muted/55"
                    )}
                  >
                    {plan.sub}
                  </p>

                  <h4
                    className={cn(
                      "mt-2 text-[22px] font-semibold sm:text-[24px]",
                      plan.featured ? "text-white" : "text-bpt-charcoal"
                    )}
                  >
                    {plan.name}
                  </h4>

                  <div className="mt-5 flex items-end gap-1">
                    <span
                      className={cn(
                        "font-heading text-[2.7rem] leading-none tracking-[-0.05em] sm:text-[3rem]",
                        plan.featured ? "text-white" : "text-bpt-charcoal"
                      )}
                    >
                      {plan.price}€
                    </span>
                    <span
                      className={cn(
                        "pb-1 text-[12px]",
                        plan.featured ? "text-white/45" : "text-bpt-text-muted/55"
                      )}
                    >
                      {plan.unit}
                    </span>
                  </div>

                  <p
                    className={cn(
                      "mt-4 text-[14px] leading-[1.75]",
                      plan.featured ? "text-white/70" : "text-bpt-text-muted"
                    )}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check
                          className={cn(
                            "mt-0.5 h-4 w-4 flex-shrink-0",
                            plan.featured ? "text-bpt-red-light" : "text-bpt-red"
                          )}
                        />
                        <span
                          className={cn(
                            "text-[13px] leading-[1.7]",
                            plan.featured ? "text-white/72" : "text-bpt-text-muted"
                          )}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className={cn(
                      "mt-8 flex min-h-11 flex-wrap items-center justify-between gap-3 rounded-3xl border px-5 py-4 transition-all duration-500 sm:rounded-full",
                      plan.featured
                        ? "border-white/10 bg-white/8 group-hover:bg-white/12"
                        : "border-bpt-border/70 bg-bpt-cream/50 group-hover:bg-bpt-cream/75"
                    )}
                  >
                    <span
                      className={cn(
                        "text-[12px] font-semibold uppercase tracking-[0.14em]",
                        plan.featured ? "text-white" : "text-bpt-charcoal"
                      )}
                    >
                      Choisir cette formule
                    </span>
                    <div
                      className={cn(
                        "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45",
                        plan.featured ? "bg-white text-bpt-charcoal" : "bg-bpt-charcoal text-white"
                      )}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
