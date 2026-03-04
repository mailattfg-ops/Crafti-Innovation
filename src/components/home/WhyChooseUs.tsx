"use client";

import { whyChooseUsData } from "@/data/homeData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
    return (
        <section className="editorial-section editorial-bg-ivory border-y border-slate-200">
            <div className="editorial-grid w-full">
                {/* Left Side: Editorial Philosophy */}
                <div className="p-12 md:p-24 lg:sticky lg:top-32 h-fit border-b lg:border-b-0 lg:border-r border-slate-200">
                    <ScrollReveal>
                        <span className="editorial-quote">“</span>
                        <h2 className="editorial-heading mb-8">
                            OUR<br />
                            <span className="text-brand-dark opacity-60 italic font-serif lowercase tracking-normal">Philosophy.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-serif italic mb-12">
                            "Crafting not just products, but legacies of excellence and sustainable artistry."
                        </p>

                        {/* Aesthetic Marker: Dots */}
                        <div className="flex gap-2 mb-12">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-accent/30" />
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right Side: Staggered Feature List */}
                <div className="p-12 md:p-24 space-y-24">
                    {whyChooseUsData.map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className={cn(
                                "group relative flex flex-col gap-8",
                                idx % 2 !== 0 ? "md:pl-12" : ""
                            )}>
                                {/* Slide counter + line */}
                                <div className="flex items-center gap-4">
                                    <span className="text-brand-accent font-black text-xs uppercase tracking-[0.4em]">0{idx + 1}</span>
                                    <div className="h-px flex-1 bg-slate-200 group-hover:bg-brand-accent transition-colors duration-700" />
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-3xl md:text-4xl font-black text-brand-dark uppercase tracking-tighter leading-none group-hover:text-brand-accent transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-serif italic border-l-2 border-slate-200 pl-8 group-hover:border-brand-accent transition-colors duration-700">
                                        "{item.description}"
                                    </p>
                                </div>

                                {/* Aesthetic Marker: Metadata */}
                                <div className="pt-8 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Standard of Excellence // 2024</span>
                                    <div className="flex gap-1">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="w-1 h-3 bg-brand-accent" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
