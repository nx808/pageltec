"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 44, filter: "blur(10px)" },
    visible: (i: number) => ({
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.95, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

const expertise = [
    {
        label: "Logo & Corporate Identity",
        description:
            "Einzigartige Markenzeichen von der Idee bis zum vollständigen CI-Handbuch.",
    },
    {
        label: "Marketing & Kampagnen",
        description:
            "Kreative Konzepte für Print & Digital, die Ihre Botschaft klar transportieren.",
    },
    {
        label: "Print & Druckvorstufe",
        description:
            "Visitenkarten, Flyer, Broschüren, Schilder — druckfähig in höchster Qualität.",
    },
    {
        label: "Medienproduktion",
        description:
            "Video-Editing, Motion Graphics und visuelle Medien für alle Kanäle.",
    },
    {
        label: "UX / UI Design",
        description:
            "Interfaces, die intuitiv sind, begeistern und Ihre Marke digital konsequent fortführen.",
    },
    {
        label: "Packaging & Produkt-Design",
        description:
            "Verpackungsdesign, das am Point-of-Sale überzeugt und Markenwerte auf den Punkt bringt.",
    },
];

export default function DesignPage() {
    return (
        <main className="relative z-10 flex flex-col items-center w-full">

            {/* ← Back */}
            <div className="w-full max-w-5xl px-6 pt-10 flex">
                <Link href="/" className="eyebrow hover:text-white/60 transition-colors duration-300">
                    ← Zurück
                </Link>
            </div>

            {/* ══ HERO SECTION ══════════════════════════════════════════════ */}
            <section className="section">
                <div className="container">
                    <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
                        className="eyebrow">
                        Services — Design
                    </motion.p>

                    <motion.h1
                        custom={1} variants={fadeUp} initial="hidden" animate="visible"
                        className="text-gradient font-black"
                        style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
                    >
                        Logo. Marketing.<br />Print. Medien.
                    </motion.h1>

                    <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
                        className="text-base sm:text-lg text-white/45 font-light prose-wide">
                        Jahrelange Expertise in visueller Kommunikation. Wir gestalten
                        Identitäten, die überzeugen — analog und digital.
                    </motion.p>
                </div>
            </section>

            {/* ══ EXPERIENCE BADGE ══════════════════════════════════════════ */}
            <section className="section" style={{ paddingBlockStart: 0 }}>
                <div className="container">
                    <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
                        className="card border-white/20 bg-white/[0.04]"
                        style={{ padding: "clamp(3rem, 6vw, 5rem)" }}
                    >
                        <span
                            className="font-black text-white leading-none"
                            style={{ fontSize: "clamp(5rem, 15vw, 9rem)" }}
                        >
                            10+
                        </span>
                        <span className="text-sm text-white/40 font-light tracking-wide">
                            Jahre Designerfahrung
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* ══ EXPERTISE GRID ════════════════════════════════════════════ */}
            <section className="section" style={{ paddingBlockStart: 0 }}>
                <div className="container">
                    <motion.div
                        initial="hidden" animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.11 } } }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch"
                    >
                        {expertise.map((e, i) => (
                            <motion.div key={i} custom={i + 4} variants={fadeUp}
                                className="card group hover:border-white/15 transition-colors duration-500"
                            >
                                <h3 className="text-base md:text-lg font-bold text-white
                  group-hover:text-gradient transition-all duration-500">
                                    {e.label}
                                </h3>
                                <p className="text-sm text-white/40 font-light">{e.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="w-full py-12 border-t border-white/[0.05] flex flex-col items-center gap-3">
                <p className="eyebrow tracking-widest">© 2026 Pagel Tec</p>
                <Link href="/" className="text-[10px] text-white/20 hover:text-white/40 transition-colors">
                    ← Zur Startseite
                </Link>
            </footer>
        </main>
    );
}
