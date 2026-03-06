import SplineScene from "@/components/SplineScene";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";

export default function Home() {
    return (
        <>
            {/*
       * SplineScene is rendered here (at page level) so it exists
       * as a fixed layer behind all page content.
       * position:fixed means it won't affect document flow at all.
       */}
            <SplineScene />

            <main className="relative flex flex-col items-center w-full">
                <Hero />
                <Services />
                <CallToAction />

                <footer className="w-full py-12 border-t border-white/[0.05] flex flex-col items-center gap-2">
                    <p className="eyebrow tracking-widest">© {new Date().getFullYear()} Pagel Tec</p>
                    <p className="text-[10px] text-white/15 font-light">
                        Crafted with precision by Lucio Pagel
                    </p>
                </footer>
            </main>
        </>
    );
}
