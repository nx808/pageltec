import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Pagel Tec — Innovation visualisieren. Exzellenz skalieren.",
    description:
        "Smarte Webseiten, individuelle Software und maßgeschneiderte KI-Lösungen für die Welt von morgen.",
    authors: [{ name: "Lucio Pagel" }],
    keywords: ["Webdesign", "3D", "KI", "AI", "Next.js", "React", "Software", "Lucio Pagel"],
    openGraph: {
        title: "Pagel Tec",
        description: "Digital Precision. Human Vision.",
        type: "website",
        locale: "de_DE",
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="de" className={inter.variable}>
            <body
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
                className="bg-black text-white antialiased overflow-x-hidden"
            >
                {/*
         * Main wrapper:
         * - relative so z-index stacking works against the fixed Spline canvas
         * - isolate creates a new stacking context, preventing z-index leaks
         */}
                <div className="relative isolate">
                    {children}
                </div>
            </body>
        </html>
    );
}
