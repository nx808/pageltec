"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/*
 * HERO — now Spline lives globally as a fixed z-[-1] layer,
 * so Hero only needs its text content + a bottom gradient
 * to fade the 3D into the solid black of the Services section.
 */
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 52, filter: "blur(14px)" },
    visible: {
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
    },
};

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.15 });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    /* Parallax: text drifts up 80px as section exits the viewport */
    const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
    /* Content fades out in top 60% of scroll */
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section
            ref={ref}
            className="section section--hero"
        >
            {/*
       * Bottom-of-section gradient: fades the 3D background into
       * solid black so Services cards sit cleanly on a dark surface.
       * The 3D canvas is fixed, this gradient is position:absolute.
       */}
            <div
                className="pointer-events-none absolute bottom-0 inset-x-0 h-48"
                style={{
                    background: "linear-gradient(to bottom, transparent, #000)",
                }}
            />

            {/* ── Text Content ── */}
            <motion.div
                ref={ref}
                variants={stagger}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                style={{ y: textY, opacity }}
                className="container relative z-10 flex flex-col items-center gap-8"
            >
                {/* Eyebrow */}
                <motion.p variants={fadeUp} className="eyebrow">
                    Fortschritt, der bewegt.
                </motion.p>

                {/* H1 — fluid size, tight leading, gradient */}
                <motion.h1
                    variants={fadeUp}
                    className="text-gradient font-black"
                    style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)" }}
                >
                    Innovation visualisieren.<br />
                    Exzellenz skalieren.
                </motion.h1>

                {/* Subline — inherits global p max-w + centering */}
                <motion.p
                    variants={fadeUp}
                    className="text-base sm:text-lg text-white/45 font-light prose-wide"
                >
                    Wir entwickeln smarte Webseiten, individuelle Software und
                    maßgeschneiderte KI-Lösungen für die Welt von morgen.
                </motion.p>

                {/* Scroll indicator */}
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 mt-4">
                    <span className="eyebrow">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                        className="divider-line"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
