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

const capabilities = [
    {
        title: "GPT & LLM Integration",
        description:
            "OpenAI, Mistral und lokale LLMs nahtlos in Ihre Anwendung integriert — für Chatbots, Generierung und Automatisierung.",
        tags: ["OpenAI", "Mistral", "LangChain"],
    },
    {
        title: "KI-gestützte Workflows",
        description:
            "Zeitaufwändige Geschäftsprozesse automatisieren: Dokumentenverarbeitung, E-Mail-Routing, Content-Pipelines.",
        tags: ["Automation", "n8n", "Zapier"],
    },
    {
        title: "RAG & Wissensdatenbanken",
        description:
            "Retrieval-Augmented Generation: Ihre eigenen Daten als Wissensbasis für präzise, kontextbewusste KI-Antworten.",
        tags: ["RAG", "Embeddings", "Pinecone"],
    },
    {
        title: "KI-Chatbots & Assistenten",
        description:
            "24/7-Kundensupport, Lead-Qualifizierung und interne Helpdesks — trainiert auf Ihre Inhalte und Ihre Marke.",
        tags: ["Chatbot", "Support", "Training"],
    },
];

const stats = [
    { num: "80%", label: "Zeitersparnis durch Automatisierung" },
    { num: "24/7", label: "KI verfügbar, kein Urlaub, keine Pausen" },
    { num: "100%", label: "Individuell auf Ihr Business angepasst" },
];

export default function AIPage() {
    return (
        <main className="relative z-10 flex flex-col items-center w-full">

            {/* ← Back */}
            <div className="w-full max-w-5xl px-6 pt-10 flex">
                <Link href="/" className="eyebrow hover:text-white/60 transition-colors duration-300">
                    ← Zurück
                </Link>
            </div>

            {/* ══ HERO ══════════════════════════════════════════════════════ */}
            <section className="section">
                <div className="container">
                    <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
                        className="eyebrow">
                        Services — KI & Automatisierung
                    </motion.p>

                    <motion.h1
                        custom={1} variants={fadeUp} initial="hidden" animate="visible"
                        className="text-gradient font-black"
                        style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
                    >
                        AI Integration.<br />Intelligent skalieren.
                    </motion.h1>

                    <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
                        className="text-base sm:text-lg text-white/45 font-light prose-wide">
                        Wir integrieren modernste KI-Technologien direkt in Ihr Unternehmen —
                        für smarte Prozesse, weniger Aufwand und messbaren Vorsprung.
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
                            <motion.div key={i} custom={i + 3} variants={fadeUp} className="card">
                                <span className="text-4xl md:text-5xl font-black text-white no-prose-max">
                                    {s.num}
                                </span>
                                <span className="text-[11px] text-white/35 font-light max-w-[18ch] mx-auto text-center">
                                    {s.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══ CAPABILITIES ═════════════════════════════════════════════ */}
            <section className="section" style={{ paddingBlockStart: 0 }}>
                <div className="container">
                    <motion.div
                        initial="hidden" animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch"
                    >
                        {capabilities.map((c, i) => (
                            <motion.div key={i} custom={i + 6} variants={fadeUp} className="card">
                                <h2 className="text-xl md:text-2xl font-bold text-white">{c.title}</h2>
                                <p className="text-sm md:text-base text-white/40 font-light">{c.description}</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {c.tags.map((t) => (
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

            {/* ══ CTA CARD ═════════════════════════════════════════════════ */}
            <section className="section" style={{ paddingBlockStart: 0 }}>
                <div className="container">
                    <motion.div
                        custom={10} variants={fadeUp} initial="hidden" animate="visible"
                        className="card w-full border-white/20 bg-gradient-to-b from-white/[0.06] to-white/[0.01]"
                        style={{ gap: "2rem", padding: "clamp(2.5rem, 5vw, 5rem)" }}
                    >
                        <p className="eyebrow">Bereit für KI?</p>
                        <h2
                            className="text-white font-black"
                            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
                        >
                            Jetzt KI in Ihr<br />Unternehmen bringen.
                        </h2>
                        <p className="text-sm md:text-base text-white/40 font-light">
                            Unverbindliches Erstgespräch — wir analysieren Ihre Prozesse
                            und zeigen, wo KI den größten Hebel hat.
                        </p>
                        <Link
                            href="/#cta"
                            className="px-10 py-5 bg-white text-black text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-black hover:text-white border border-white transition-colors duration-300"
                        >
                            Kostenlos anfragen
                        </Link>
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
