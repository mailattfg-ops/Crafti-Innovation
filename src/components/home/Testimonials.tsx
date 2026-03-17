"use client";

import { testimonialsData } from "@/data/homeData";
import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Testimonials() {
    return (
        <section className="section-padding editorial-bg-ivory border-slate-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-6 md:mb-8 lg:mb-12">
                    <ScrollReveal>
                        <h2 className="section-title mb-6 md:mb-8 text-brand-dark">TESTIMONIALS.</h2>
                        <p className="section-desc text-slate-500 max-w-2xl mx-auto">"Reflections of our commitment to excellence and artisanal mastery."</p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                    {testimonialsData.map((t, idx) => (
                        <div key={idx} className="bg-white p-8 md:p-12 lg:p-16 hover:bg-brand-light transition-colors group">
                            <ScrollReveal delay={idx * 0.1}>
                                <div className="space-y-6 md:space-y-8">
                                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-brand-dark opacity-10" />
                                    <p className="section-desc text-slate-600 italic leading-relaxed">
                                        "{t.content}"
                                    </p>
                                    <div className="pt-6 md:pt-8 border-t border-slate-100">
                                        <p className="font-black text-brand-dark uppercase tracking-tight text-sm md:text-base lg:text-lg">{t.name}</p>
                                        <p className="text-brand-accent text-[10px] md:text-xs font-black uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
