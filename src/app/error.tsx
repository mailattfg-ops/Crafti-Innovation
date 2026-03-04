"use client";

import { useEffect } from "react";
import { RefreshCcw, AlertCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen editorial-bg-ivory flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-full bg-[url('/images/filler_artistry.png')] opacity-[0.02] grayscale pointer-events-none" />

            <div className="container max-w-3xl relative z-10">
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 p-12 md:p-24 shadow-2xl relative overflow-hidden">
                    {/* Error Header */}
                    <ScrollReveal>
                        <div className="h-16 w-16 bg-brand-accent text-white rounded-2xl flex items-center justify-center mb-12 shadow-xl animate-pulse">
                            <AlertCircle className="w-8 h-8" />
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-brand-dark mb-8 tracking-tighter uppercase leading-[0.9]">
                            INTERRUPTED<br />
                            <span className="italic text-brand-accent font-serif lowercase tracking-normal opacity-70">artistry.</span>
                        </h2>

                        <p className="text-xl text-slate-600 leading-relaxed font-serif italic mb-12 border-l-2 border-brand-accent/30 pl-8 max-w-xl">
                            "An unexpected anomaly has momentarily paused our creative process. We have documented the event and are ready to resume the craft."
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <button
                                onClick={() => reset()}
                                className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white bg-brand-dark px-10 py-5 hover:bg-brand-accent transition-all group"
                            >
                                <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
                                Resume Craft
                            </button>

                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                Incident ID: {error.digest || "INTERNAL_VAR_01"}
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Technical Metadata */}
                    <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center opacity-30 select-none">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 underline decoration-brand-accent/50 underline-offset-4">Studio System Error</span>
                        <div className="flex gap-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-12 h-px bg-slate-200" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
