"use client";

import { heroData } from "@/data/homeData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-stretch overflow-hidden bg-brand-light pt-20">
            <div className="container mx-auto px-0 flex flex-col lg:flex-row items-stretch">

                {/* Text Section */}
                <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10">
                    <ScrollReveal direction="down">
                        <h1 className="editorial-heading mb-12">
                            {heroData.title.main}<br />
                            <span className="text-brand-dark opacity-60">{heroData.title.highlight}</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="text-2xl text-slate-700 max-w-xl leading-relaxed font-serif italic mb-12">
                            "{heroData.description}"
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="flex flex-wrap gap-6 items-center">
                            <Link
                                href="/contact"
                                className="group px-12 py-6 bg-brand-accent text-white font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter inline-flex items-center gap-4"
                            >
                                Contact Us <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <Link
                                href="/services"
                                className="px-12 py-6 border-2 border-brand-dark/20 text-brand-dark font-black text-xl transition-all hover:bg-brand-dark/5 uppercase tracking-tighter"
                            >
                                Discover More
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Hero Image Section */}
                <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full overflow-hidden">
                    <Image
                        src="/images/home_hero_new_1772613660238.png"
                        alt="Crafti Innovations Craftsmanship"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle aesthetic overlay */}
                    <div className="absolute inset-0 bg-brand-dark/5" />
                </div>
            </div>
        </section>
    );
}
