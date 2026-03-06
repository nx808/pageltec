"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "./MagneticButton";

/* ===== CALL TO ACTION ===== */
export default function CallToAction() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.35 });

    return (
        <section
            ref={ref}
            id="cta"
            className="relative py-40 md:py-64 px-6 flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Top divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

            <div className="flex flex-col items-center text-center gap-8 max-w-4xl w-full">
                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-[10px] tracking-[0.4em] uppercase text-white/25 font-light"
                >
                    Let&apos;s create
                </motion.p>

                {/* Slogan */}
                <motion.h2
                    initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
                    animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.045em] leading-[0.9] mb-6"
                >
                    <span className="block text-gradient">Digital Precision.</span>
                    <span className="block text-white/90 mt-2">Human Vision.</span>
                </motion.h2>

                {/* Sub */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.25 }}
                    className="text-base md:text-lg text-white/35 font-light max-w-[40ch] mx-auto leading-relaxed"
                >
                    Bereit, Ihre digitale Präsenz auf das nächste Level zu heben?
                </motion.p>

                {/* Magnetic CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 }}
                    className="flex items-center justify-center"
                >
                    <MagneticButton strength={0.28}>
                        <button
                            id="cta-button"
                            className="group relative px-10 py-5 text-[11px] tracking-[0.25em] uppercase font-semibold
                         bg-white text-black border border-white
                         hover:bg-black hover:text-white
                         transition-colors duration-400 ease-[var(--ease-out-expo)]
                         overflow-hidden"
                        >
                            <span className="relative z-10">Start your New Experience.</span>
                            {/* Shine sweep */}
                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 pointer-events-none" />
                        </button>
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Ambient glow */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-white/[0.018] rounded-full blur-[120px]" />
            {/* Bottom divider */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-transparent via-white/10 to-transparent" />
        </section>
    );
}
