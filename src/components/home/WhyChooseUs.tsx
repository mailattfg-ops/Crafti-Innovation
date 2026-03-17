"use client";

import { whyChooseUsData } from "@/data/homeData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
    return (
        <section className="section-padding editorial-bg-ivory border-slate-200">
            <div className="editorial-grid w-full">
                {/* Left Side: Editorial Philosophy */}
                <div className="px-8 py-4 md:px-12 md:py-6 lg:px-16 lg:py-8 xl:px-18 xl:py-9 lg:sticky lg:top-0 h-fit">
                    <ScrollReveal>
                        <span className="editorial-quote">“</span>
                        <h2 className="editorial-heading mb-4 md:mb-6 lg:mb-8">
                            OUR<br />
                            <span className="text-brand-dark opacity-60 italic font-serif lowercase tracking-normal">Philosophy.</span>
                        </h2>
                        <p className="section-desc text-slate-700 mb-2 md:mb-4 lg:mb-6">
                            "Crafting not just products, but legacies of excellence and sustainable artistry."
                        </p>

                        {/* Aesthetic Marker: Dots */}
                        <div className="flex gap-2 mb-2 md:mb-4 lg:mb-8">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-accent/30" />
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right Side: Staggered Feature List */}
                <div className="px-8 md:px-16 lg:px-18 space-y-8 md:space-y-12">
                    {whyChooseUsData.map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className="group relative flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                                {/* Slide counter + line */}
                                <div className="flex items-center gap-4">
                                    <span className="text-brand-accent font-black text-[10px] md:text-xs uppercase tracking-[0.4em]">0{idx + 1}</span>
                                    <div className="h-px flex-1 bg-brand-accent transition-colors duration-700" />
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-brand-dark uppercase tracking-tighter leading-none group-hover:text-brand-accent transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="section-desc text-slate-600 border-l-2 pl-6 md:pl-8 border-brand-accent transition-colors duration-700">
                                        "{item.description}"
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
