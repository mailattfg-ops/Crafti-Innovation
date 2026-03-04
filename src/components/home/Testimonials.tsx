"use client";

import { testimonialsData } from "@/data/homeData";
import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Testimonials() {
    return (
        <section className="py-24 bg-white border-t border-slate-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="editorial-heading mb-4">TESTIMONIALS.</h2>
                        <p className="text-slate-500 italic font-medium">"Reflections of our commitment to excellence."</p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                    {testimonialsData.map((t, idx) => (
                        <div key={idx} className="bg-white p-12 md:p-16 hover:bg-brand-light transition-colors group">
                            <ScrollReveal delay={idx * 0.1}>
                                <div className="space-y-8">
                                    <Quote className="w-12 h-12 text-brand-dark opacity-10" />
                                    <p className="text-slate-600 italic leading-relaxed text-xl">
                                        "{t.content}"
                                    </p>
                                    <div className="pt-8 border-t border-slate-100">
                                        <p className="font-black text-brand-dark uppercase tracking-tight text-lg">{t.name}</p>
                                        <p className="text-brand-accent text-xs font-black uppercase tracking-widest">{t.role}</p>
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
