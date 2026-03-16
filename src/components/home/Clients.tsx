"use client";

import { prestigiousClients } from "@/data/homeData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import NextImage from "next/image";
import { cn } from "@/lib/utils";

export function Clients() {
    return (
        <section className="section-padding editorial-bg-ivory border-slate-200 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Editorial Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4 lg:gap-8 mb-6 md:mb-12 lg:mb-16">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] md:text-sm block mb-4">Our Network</span>
                            <h2 className="section-title mb-6 md:mb-8 text-brand-dark">
                                GLOBAL<br />
                                <span className="text-brand-accent opacity-60 italic font-serif lowercase tracking-normal">Partnerships.</span>
                            </h2>
                            <p className="section-desc max-w-2xl border-l-2 border-brand-accent/30 pl-6 md:pl-8 text-slate-600">
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
                            className="group relative h-40 md:h-48 border-r border-b border-slate-200 bg-white transition-all duration-700 flex items-center justify-center p-8 md:p-10"
                        >
                            <ScrollReveal delay={idx * 0.05} className="h-full w-full flex flex-col items-center justify-center translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                                <div className="relative w-full h-16 md:h-20 transition-all duration-700 mb-6 flex items-center justify-center">
                                    <div className="relative w-full h-full max-w-[120px] md:max-w-[150px]">
                                        <NextImage
                                            src={client.logo}
                                            alt={client.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <span className="text-[10px] md:text-[11px] font-black text-brand-dark uppercase tracking-[0.2em] leading-tight opacity-40 group-hover:opacity-100 transition-opacity duration-700 text-center max-w-[90%]">
                                    {client.name}
                                </span>
                            </ScrollReveal>

                            {/* Accent Dot */}
                            <div className="absolute top-3 right-3 md:top-4 md:right-4 w-1 h-1 rounded-full bg-slate-200 group-hover:bg-brand-accent transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
