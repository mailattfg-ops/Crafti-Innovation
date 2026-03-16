"use client";

import Link from "next/link";
import { MoveLeft, Compass } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function NotFound() {
    return (
        <div className="min-h-screen editorial-bg-ivory flex items-center justify-center p-6 pt-24 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-full bg-[url('/images/filler_artistry.png')] opacity-[0.03] grayscale pointer-events-none" />

            <div className="container max-w-3xl relative z-10">
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 p-12 md:p-24 shadow-2xl relative">
                    {/* Editorial Marker */}
                    <div className="absolute top-0 right-0 p-8 flex flex-col items-end opacity-20 select-none">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-1">Index</span>
                        <span className="text-4xl font-black italic tracking-tighter leading-none">404</span>
                    </div>

                    <ScrollReveal>
                        <div className="h-16 w-16 bg-brand-dark text-white rounded-2xl flex items-center justify-center mb-12 shadow-xl">
                            <Compass className="w-8 h-8" />
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-brand-dark mb-8 tracking-tighter uppercase leading-[0.8]">
                            UNFINISHED<br />
                            <span className="italic text-brand-accent font-serif lowercase tracking-normal opacity-70">narrative.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-serif italic mb-12 border-l-2 border-brand-accent/30 pl-8">
                            "The design you are seeking has not yet been carved into our records. Let us guide you back to our creative collections."
                        </p>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-brand-dark hover:text-brand-accent transition-colors group"
                        >
                            <span className="h-12 w-12 border border-slate-200 rounded-full flex items-center justify-center group-hover:border-brand-accent transition-colors">
                                <MoveLeft className="w-5 h-5" />
                            </span>
                            Back to Studio
                        </Link>
                    </ScrollReveal>

                    {/* Footer decoration */}
                    <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center opacity-30 select-none">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Crafi Innovations Archive</span>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-1 h-1 rounded-full bg-slate-400" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
