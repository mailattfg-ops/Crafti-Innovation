"use client";

import { prestigiousClients } from "@/data/homeData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function Clients() {
    return (
        <section className="editorial-section editorial-bg-ivory border-t border-slate-200 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Editorial Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
                    <div className="max-w-2xl">
                        <ScrollReveal>
                            <span className="editorial-quote">“</span>
                            <h2 className="editorial-heading mb-8">
                                GLOBAL<br />
                                <span className="text-brand-dark opacity-60 italic font-serif lowercase tracking-normal">Partnerships.</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-serif italic border-l-2 border-brand-accent/30 pl-8">
                                "Collaborating with leading institutions and visionary brands across the globe to deliver excellence in every initiative."
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Editorial Grid of Clients */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-slate-200">
                    {prestigiousClients.map((client, idx) => (
                        <div
                            key={idx}
                            className="group relative h-40 border-r border-b border-slate-200 bg-white hover:bg-brand-light transition-all duration-700 flex items-center justify-center p-8 text-center"
                        >
                            <ScrollReveal delay={idx * 0.05}>
                                <div className="space-y-3">
                                    <span className="text-[9px] font-black text-brand-accent/40 uppercase tracking-widest block group-hover:text-brand-accent transition-colors">
                                        Client {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                    </span>
                                    <h3 className="text-xs md:text-sm font-black text-brand-dark uppercase tracking-widest leading-tight group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100 italic">
                                        {client}
                                    </h3>
                                </div>
                            </ScrollReveal>

                            {/* Accent Dot */}
                            <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-slate-200 group-hover:bg-brand-accent transition-colors" />
                        </div>
                    ))}
                </div>

                {/* Bottom Metadata */}
                <ScrollReveal delay={0.5}>
                    <div className="mt-12 flex items-center justify-between opacity-30 select-none">
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-px bg-slate-300" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Archival Registry</span>
                        </div>
                        <div className="flex gap-2">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-1 h-1 rounded-full bg-brand-dark" />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
