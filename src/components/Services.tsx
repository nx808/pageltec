"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const services = [
    {
        id: "01",
        title: "Premium 3D\nWebdesign",
        description:
            "Immersive digitale Erlebnisse, die Ihre Marke in eine neue Dimension transformieren.",
        tags: ["Spline", "WebGL", "Three.js"],
        href: "/services/webdesign",   // ✓ Correct route
    },
    {
        id: "02",
        title: "Custom Apps\n(Next.js / React)",
        description:
            "Maßgeschneiderte Webanwendungen — schnell, skalierbar und auf Performance getrimmt.",
        tags: ["Next.js", "React", "TypeScript"],
        href: "/services/webdesign",   // ✓ Grouped with Webdesign page
    },
    {
        id: "03",
        title: "AI\nIntegration",
        description:
            "Intelligente Automatisierung und KI-gestützte Features nahtlos integriert.",
        tags: ["OpenAI", "LLMs", "Automation"],
        href: "/services/ai",           // ✓ Eigene AI-Unterseite
    },
    {
        id: "04",
        title: "Social Media\nMarketing",
        description:
            "Strategischer Reichweitenaufbau und authentische Markenkommunikation.",
        tags: ["Content", "Strategy", "Growth"],
        href: "/services/social-media", // ✓ Correct route
    },
    {
        id: "05",
        title: "Logo, Marketing\n& Design",
        description:
            "Jahrelange Expertise in Logo, Print, Medien und ganzheitlichem Branding.",
        tags: ["Branding", "Print", "Identity"],
        href: "/services/design",       // ✓ Correct route
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
    visible: {
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    },
};

function ServiceCard({ service }: { service: (typeof services)[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const r = cardRef.current!.getBoundingClientRect();
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
    };

    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            onMouseMove={onMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="group relative flex flex-col items-center text-center p-8 md:p-12 rounded-2xl border border-white/[0.07] bg-white/[0.025] overflow-hidden cursor-default"
        >
            {/* Cursor spotlight */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                style={{
                    opacity: hovered ? 1 : 0,
                    background: `radial-gradient(380px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.05), transparent 65%)`,
                }}
            />

            <div className="relative z-10 flex flex-col items-center gap-4">
                <span className="text-[10px] font-mono tracking-widest text-white/20">{service.id}</span>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.025em] whitespace-pre-line text-gradient">
                    {service.title}
                </h3>
                <p className="text-sm md:text-base text-white/40 leading-relaxed font-light max-w-[34ch]">
                    {service.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                    {service.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-[9px] tracking-wider uppercase font-medium text-white/30 border border-white/[0.09] rounded-full group-hover:border-white/20 group-hover:text-white/50 transition-all duration-400">
                            {tag}
                        </span>
                    ))}
                </div>
                <Link
                    href={service.href}
                    className="text-[10px] tracking-[0.2em] uppercase text-white/25 hover:text-white/60 transition-colors duration-300 border-b border-white/10 hover:border-white/30 pb-px"
                >
                    Mehr erfahren →
                </Link>
            </div>

            {/* Border glow on hover */}
            <motion.div
                className="absolute inset-0 rounded-2xl border border-white/[0.12] pointer-events-none"
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}

export default function Services() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section
            ref={ref}
            id="services"
            className="relative py-32 md:py-48 px-6 flex flex-col items-center"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                className="flex flex-col items-center text-center mb-16 md:mb-24"
            >
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/25 mb-5">Services</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight text-gradient">
                    Was wir erschaffen.
                </h2>
            </motion.div>

            {/* Grid — 1 col mobile, 2 col tablet, 3 col wide (last 2 cards centered) */}
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            >
                {services.map((s) => (
                    <ServiceCard key={s.id} service={s} />
                ))}
            </motion.div>

            {/* Ambient glow */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/[0.012] rounded-full blur-[160px]" />
        </section>
    );
}
