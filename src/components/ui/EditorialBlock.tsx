"use client";

import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";
import { Trophy, Home as HomeIcon, Layout, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface EditorialBlockProps {
    quote?: string;
    heading: string;
    subheading?: string;
    description?: string;
    iconName?: string;
    images: string[];
    reverse?: boolean;
    bgIvory?: boolean;
    ctaLabel?: string;
    ctaLink?: string;
    useSectionTitle?: boolean;
}

const iconMap = {
    Trophy,
    Home: HomeIcon,
    Layout
};

export function EditorialBlock({
    quote,
    heading,
    subheading,
    description,
    iconName,
    images,
    reverse = false,
    bgIvory = true,
    ctaLabel,
    ctaLink,
    useSectionTitle = false
}: EditorialBlockProps) {
    const Icon = iconName ? iconMap[iconName as keyof typeof iconMap] : null;

    return (
        <section className={cn(
            "section-padding overflow-hidden",
            bgIvory ? 'editorial-bg-ivory' : 'bg-white'
        )}>
            <div className={cn(
                "flex flex-col w-full",
                reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            )}>

                {/* Text Area */}
                <div className={cn(
                    "p-8 md:p-16 lg:p-24 flex flex-col justify-center w-full lg:w-1/2",
                )}>
                    <ScrollReveal direction={reverse ? "left" : "right"}>
                        <span className="editorial-quote">“</span>
                        <h2 className={useSectionTitle ? "section-title mb-6 md:mb-8" : "editorial-heading mb-8"}>
                            {heading}
                        </h2>

                        {Icon && (
                            <div className="flex items-start gap-4 mt-8 md:mt-12">
                                <Icon className="w-8 h-8 md:w-12 md:h-12 text-brand-accent shrink-0" />
                                <div className="space-y-4 md:space-y-6">
                                    <div className="space-y-2 md:space-y-4">
                                        <h3 className="text-xl md:text-2xl font-black text-brand-accent uppercase tracking-tight">{subheading}</h3>
                                        <p className="text-sm md:text-base text-slate-600 italic leading-relaxed max-w-md">
                                            "{description}"
                                        </p>
                                    </div>

                                    {ctaLabel && ctaLink && (
                                        <Link
                                            href={ctaLink}
                                            className="inline-flex items-center gap-4 px-8 py-4 bg-brand-dark text-white font-black text-[10px] md:text-xs tracking-[0.3em] uppercase hover:bg-brand-accent transition-all duration-300 shadow-xl group/btn w-fit"
                                        >
                                            {ctaLabel}
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                    </ScrollReveal>
                </div>

                {/* Gallery Area */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 self-stretch">
                    {images.slice(0, 9).map((src, idx) => {
                        const isHiddenOnMobile = idx >= 4;
                        
                        return (
                            <div 
                                key={idx}
                                className={cn(
                                    "aspect-square relative overflow-hidden bg-slate-100",
                                    isHiddenOnMobile ? "hidden lg:block" : "block"
                                )}
                            >
                                <div className="group w-full h-full relative">
                                    <Image
                                        src={src}
                                        alt={`${heading} gallery ${idx}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 1024px) 50vw, 33vw"
                                        priority={idx < 2}
                                    />
                                </div>
                            </div>
                        );
                    })}
                    {/* Fill empty slots */}
                    {images.length < 4 && Array.from({ length: 4 - images.length }).map((_, idx) => (
                        <div key={`empty-${idx}`} className="aspect-square bg-slate-100" />
                    ))}
                </div>
            </div>
        </section>
    );
}
