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

const stats = [
    { num: "+340%", label: "Avg. Reichweitengewinn" },
    { num: "< 48h", label: "Content-Turnaround" },
    { num: "100%", label: "Datenbasiert & transparent" },
];

const offerings = [
    {
        title: "Content Strategy & Creation",
        description:
            "Maßgeschneiderte Inhalte, die Ihre Zielgruppe ansprechen, Mehrwert bieten und zum Interagieren einladen.",
        tags: ["Copywriting", "Storytelling", "Video"],
    },
    {
        title: "Community Management",
        description:
            "Authentische Markenkommunikation, proaktives Engagement und nachhaltiger Beziehungsaufbau.",
        tags: ["Engagement", "Moderierung", "Branding"],
    },
    {
        title: "Sponsored Ads & Reichweite",
        description:
            "Gezielte Werbekampagnen auf Meta, TikTok & Co. für messbares Wachstum und klaren ROI.",
        tags: ["Meta Ads", "TikTok Ads", "Analytics"],
    },
    {
        title: "Performance Tracking",
        description:
            "Klare KPIs, regelmäßige Reports und datengestützte Optimierungen für stetigen Fortschritt.",
        tags: ["KPIs", "Reports", "A/B Testing"],
    },
];

export default function SocialMediaPage() {
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
                        Services — Social Media
                    </motion.p>

                    <motion.h1
                        custom={1} variants={fadeUp} initial="hidden" animate="visible"
                        className="text-gradient font-black"
                        style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
                    >
                        Social Media<br />Marketing.
                    </motion.h1>

                    <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
                        className="text-base sm:text-lg text-white/45 font-light prose-wide">
                        Strategisch. Authentisch. Wirkungsvoll. Wir bauen Ihre Reichweite
                        auf, stärken Ihre Marke und wandeln Follower in treue Kunden.
                    </motion.p>
                </div>
            </section>

            {/* ══ STATS ════════════════════════════════════════════════════ */}
            <section className="section" style={{ paddingBlockStart: 0 }}>
                <div className="container">
                    <motion.div
                        initial="hidden" animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full"
                    >
                        {stats.map((s, i) => (
                            <motion.div key={i} custom={i + 3} variants={fadeUp}
                                className="card"
                            >
                                <span className="text-4xl md:text-5xl font-black text-white no-prose-max">
                                    {s.num}
                                </span>
                                <span className="text-[11px] text-white/35 font-light max-w-[16ch] mx-auto text-center">
                                    {s.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══ OFFERINGS ════════════════════════════════════════════════ */}
            <section className="section" style={{ paddingBlockStart: 0 }}>
                <div className="container">
                    <motion.div
                        initial="hidden" animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch"
                    >
                        {offerings.map((o, i) => (
                            <motion.div key={i} custom={i + 6} variants={fadeUp} className="card">
                                <h2 className="text-xl md:text-2xl font-bold text-white">{o.title}</h2>
                                <p className="text-sm md:text-base text-white/40 font-light">{o.description}</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {o.tags.map((t) => (
                                        <span key={t}
                                            className="px-3 py-1 text-[9px] tracking-wider uppercase text-white/30 border border-white/[0.09] rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>
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
