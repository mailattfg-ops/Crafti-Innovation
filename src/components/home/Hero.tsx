"use client";

import { heroData } from "@/data/homeData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Hero() {
    return (
        <section className="hero-viewport bg-brand-light">
            {/* Background Image - Absolute on Mobile, Split on Desktop */}
            <div className="absolute inset-0 lg:relative lg:flex lg:flex-row items-stretch h-full">
                
                {/* Image Layer */}
                <div className="absolute inset-0 lg:relative lg:flex-1 lg:order-2 overflow-hidden">
                    <Image
                        src="/images/home_hero_new_1772613660238.png"
                        alt="Crafi Innovations"
                        fill
                        className="object-cover lg:object-center"
                        priority
                    />
                    {/* Faded Overlay for Mobile / Subtle for Desktop */}
                    <div className="absolute inset-0 hero-image-overlay z-10" />
                </div>

                {/* Content Layer */}
                <div className="relative z-20 h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:flex-1 lg:order-1 p-6 md:p-16 lg:p-24 pt-32 lg:pt-32">
                    <ScrollReveal direction="down">
                        <h1 className="editorial-heading mb-6 lg:mb-6 max-w-2xl mx-auto lg:mx-0">
                            {heroData.title.main}<br />
                            <span className="text-brand-accent italic font-serif lowercase tracking-normal opacity-70">{heroData.title.highlight}</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="section-desc text-slate-200 lg:text-slate-700 max-w-lg mb-8 lg:mb-8 mx-auto lg:mx-0">
                            "{heroData.description}"
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center">
                            <Link
                                href="/contact"
                                className="group w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 bg-brand-accent text-white font-black text-sm lg:text-base overflow-hidden transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter inline-flex items-center justify-center gap-4 lg:gap-6 shadow-xl"
                            >
                                Contact Us <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <Link
                                href="/services"
                                className="w-full sm:w-auto px-6 lg:px-10 py-3 lg:py-4 border-2 border-brand-dark/20 text-brand-dark font-black text-xs lg:text-base transition-all hover:bg-brand-dark/5 uppercase tracking-tighter text-center"
                            >
                                Discover More
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
