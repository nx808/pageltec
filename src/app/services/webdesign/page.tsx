"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/*
 * ════════════════════════════════════════════════════════════════
 * EXEMPLARY SUBPAGE — /services/webdesign
 *
 * This page demonstrates the canonical layout structure that
 * ALL subpages must follow:
 *
 *   <main>                        ← relative z-10 flex-col/center
 *     <section class="section">   ← global spacing via CSS
 *       <div class="container">   ← max-width + centered column
 *         <p class="eyebrow">     ← section label
 *         <h1>                    ← fluid clamp, leading-none, text-gradient
 *         <p class="prose-wide">  ← subline, max-w-[44ch] guaranteed
 *       </div>
 *     </section>
 *   </main>
 *
 * Spacing philosophy:
 * ─ Between SECTIONS: handled by `var(--section-py)` = clamp(6rem, 10vw, 10rem)
 * ─ Between BLOCKS inside section: `gap-16` or `gap-20` on .container
 * ─ Between ELEMENTS inside a block: `gap-6` or `gap-8` on flex children
 * ─ Text width: p → 44ch (global), h1 → 56rem (global), h2 → 48rem (global)
 * ════════════════════════════════════════════════════════════════
 */

const fadeUp = {
    hidden: { opacity: 0, y: 44, filter: "blur(10px)" },
    visible: (i: number) => ({
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.95, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

const features = [
    {
        title: "Premium 3D Webdesign",
        items: [
            "Interaktive 3D-Szenen mit Spline & Three.js",
            "Immersive WebGL-Erlebnisse für maximale Wirkung",
            "Physikbasierte Animationen & Parallax-Effekte",
            "Pixelgenaues, responsives Design auf allen Geräten",
            "Next.js App Router für ultraschnelle Performance",
        ],
    },
    {
        title: "Custom Apps (Next.js / React)",
        items: [
            "Individuelle Web-Applikationen von Grund auf",
            "TypeScript-First Entwicklung für Robustheit",
            "RESTful & GraphQL API-Integrationen",
            "Authentifizierung, Dashboard & Admin-Panels",
            "CI/CD-Deployments auf Vercel, AWS oder eigener Infra",
        ],
    },
];

const chatbotFeatures = [
    "KI-Chatbot für 24/7-Kundensupport auf Ihrer Website",
    "GPT-basierter Assistent, trainiert auf Ihre Inhalte",
    "Live-Chat-Weiterleitung bei komplexen Anfragen",
    "Nahtlose Integration in bestehende Webseiten",
    "Analytics-Dashboard für Chatbot-Performances",
];

export default function WebdesignPage() {
    return (
        <main className="relative z-10 flex flex-col items-center w-full">

            {/* ── BACK LINK ──────────────────────────────── */}
            <div className="w-full max-w-5xl px-6 pt-10 flex">
                <Link
                    href="/"
                    className="eyebrow hover:text-white/60 transition-colors duration-300"
                >
                    ← Zurück
                </Link>
            </div>

            {/* ══════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════ */}
            <section className="section">
                {/*
         * .container provides:
         *   max-width: 72rem (var(--container-max))
         *   flex-col, items-center
         *   gap: 4rem (64px) between each direct child block
         */}
                <div className="container">

                    {/* ─ Eyebrow */}
                    <motion.p
                        custom={0} variants={fadeUp} initial="hidden" animate="visible"
                        className="eyebrow"
                    >
                        Services — Webdesign &amp; Apps
                    </motion.p>

                    {/* ─ H1: inherits global max-w-[56rem] + mx-auto + leading-none */}
                    <motion.h1
                        custom={1} variants={fadeUp} initial="hidden" animate="visible"
                        className="text-gradient font-black"
                        style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
                    >
                        Webdesign &<br />Custom Apps.
                    </motion.h1>

                    {/* ─ Subline: .prose-wide = max-w-[60ch] (slightly longer than default 44ch) */}
                    <motion.p
                        custom={2} variants={fadeUp} initial="hidden" animate="visible"
                        className="text-base sm:text-lg text-white/45 font-light prose-wide"
                    >
                        Wir bauen digitale Produkte, die nicht nur gut aussehen —
                        sie performen, skalieren und begeistern.
                    </motion.p>

                </div>
            </section>

            {/* ══════════════════════════════════════════════
          FEATURE CARDS SECTION
          ══════════════════════════════════════════════ */}
            <section className="section" style={{ paddingBlockStart: 0 }}>
                <div className="container">

                    {/*
           * Card grid — gap-8 between cards.
           * Each card uses the .card CSS class for inner padding + gap.
           * Cards stretch to equal height with items-stretch.
           */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch"
                    >
                        {features.map((block, bi) => (
                            <motion.div
                                key={bi}
                                custom={bi + 3}
                                variants={fadeUp}
                                className="card"
                            >
                                {/* Card heading — h2 global styles apply: max-w-3xl, centered */}
                                <h2 className="text-xl md:text-2xl font-bold text-white">
                                    {block.title}
                                </h2>

                                {/* List — no-prose-max removes the p max-width for list items */}
                                <ul className="flex flex-col gap-3 w-full items-center">
                                    {block.items.map((item, ii) => (
                                        <li
                                            key={ii}
                                            className="flex items-center gap-3 text-sm text-white/45 font-light no-prose-max"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* ══════════════════════════════════════════════
          KI CHATBOT ADD-ON SECTION
          ══════════════════════════════════════════════ */}
            <section className="section" style={{ paddingBlockStart: 0 }}>
                <div className="container">

                    <motion.div
                        custom={6} variants={fadeUp} initial="hidden" animate="visible"
                        className="card w-full border-white/20 bg-gradient-to-b from-white/[0.06] to-white/[0.01]"
                        style={{ gap: "2.5rem", padding: "clamp(2.5rem, 5vw, 5rem)" }}
                    >
                        <p className="eyebrow">Add-on Service</p>

                        {/* h2 global: max-w-3xl + centered */}
                        <h2
                            className="text-white font-black"
                            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
                        >
                            KI-Chatbot für<br />Ihre Website.
                        </h2>

                        {/* Subline — default p global: max-w 44ch */}
                        <p className="text-sm md:text-base text-white/40 font-light">
                            Werten Sie Ihre Webseite mit einem intelligenten, GPT-basierten
                            Chatbot auf — der Ihre Kunden kennt und immer verfügbar ist.
                        </p>

                        {/* Feature list */}
                        <ul className="flex flex-col gap-3 items-center w-full">
                            {chatbotFeatures.map((f, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 text-sm text-white/45 font-light no-prose-max"
                                >
                                    <span className="w-1 h-1 rounded-full bg-white/35 shrink-0" />
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/#cta"
                            className="px-10 py-5 bg-white text-black text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-black hover:text-white border border-white transition-colors duration-300"
                        >
                            Jetzt anfragen
                        </Link>
                    </motion.div>

                </div>
            </section>

            {/* ── Footer ──────────────────────────────────── */}
            <footer className="w-full py-12 border-t border-white/[0.05] flex flex-col items-center gap-3">
                <p className="eyebrow tracking-widest">© 2026 Pagel Tec</p>
                <Link href="/" className="text-[10px] text-white/20 hover:text-white/40 transition-colors">
                    ← Zur Startseite
                </Link>
            </footer>

        </main>
    );
}
