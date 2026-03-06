"use client";

import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
    url?: string;
}

/* ═══════════════════════════════════════════════════════
 * SPLINE 3D BACKGROUND
 *
 * KEY DECISIONS:
 * ─ `fixed` instead of `absolute` so the canvas stays still
 *   while the user scrolls — it behaves like a wallpaper.
 * ─ `inset-0 w-screen h-screen` fills the entire viewport
 *   on every screen size with zero overflow.
 * ─ `z-[-1]` places it behind ALL page content automatically.
 * ─ `pointer-events-none` lets clicks/interactions pass through
 *   to the actual page elements above it.
 * ─ `aria-hidden` removes it from the accessibility tree.
 *
 * Swap the `url` prop with your own Spline project URL.
 * ═══════════════════════════════════════════════════════ */
export default function SplineScene({
    url = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
}: SplineSceneProps) {
    return (
        <div
            className={[
                "fixed inset-0",           /* covers entire viewport, never moves */
                "w-screen h-screen",       /* explicit dimensions as safety */
                "z-[-1]",                  /* behind everything */
                "overflow-hidden",         /* no canvas bleed */
                "pointer-events-none",     /* clicks pass through */
            ].join(" ")}
            aria-hidden="true"
        >
            <Suspense
                fallback={
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border border-white/8 animate-pulse" />
                    </div>
                }
            >
                {/*
         * Spline renders a <canvas>. We force it to fill 100% × 100%
         * via both the parent container and inline styles on the
         * component itself (the library exposes a `style` prop).
         */}
                <Spline
                    scene={url}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Suspense>

            {/* Dark vignette overlay — keeps text legible but lets the 3D breathe */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.90) 100%)",
                }}
            />
        </div>
    );
}
