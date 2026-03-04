"use client";

import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";
import { Trophy, Home as HomeIcon, Layout } from "lucide-react";

interface EditorialBlockProps {
    quote?: string;
    heading: string;
    subheading?: string;
    description?: string;
    iconName?: string;
    images: string[];
    reverse?: boolean;
    bgIvory?: boolean;
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
    bgIvory = true
}: EditorialBlockProps) {
    const Icon = iconName ? iconMap[iconName as keyof typeof iconMap] : null;

    return (
        <section className={`editorial-section overflow-hidden ${bgIvory ? 'editorial-bg-ivory' : 'bg-white'}`}>
            <div className={`editorial-grid w-full ${reverse ? 'lg:flex-row-reverse' : ''}`}>

                {/* Text Area */}
                <div className={`p-12 md:p-24 flex flex-col justify-center ${reverse ? 'lg:order-2' : ''}`}>
                    <ScrollReveal direction={reverse ? "left" : "right"}>
                        <span className="editorial-quote">“</span>
                        <h2 className="editorial-heading mb-8">
                            {heading}
                        </h2>

                        {Icon && (
                            <div className="flex items-start gap-4 mt-8">
                                <Icon className="w-10 h-10 text-brand-accent shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-black text-brand-accent uppercase tracking-tight">{subheading}</h3>
                                    <p className="text-slate-600 italic leading-relaxed max-w-md">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        )}
                    </ScrollReveal>
                </div>

                {/* Gallery Area */}
                <div className={`gallery-grid bg-slate-200 ${reverse ? 'lg:order-1' : ''}`}>
                    {images.slice(0, 9).map((src, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.05}>
                            <div className="gallery-item group">
                                <Image
                                    src={src}
                                    alt={`${heading} gallery ${idx}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </ScrollReveal>
                    ))}
                    {/* Fill empty slots if less than 9 images */}
                    {images.length < 9 && Array.from({ length: 9 - images.length }).map((_, idx) => (
                        <div key={`empty-${idx}`} className="gallery-item bg-slate-100" />
                    ))}
                </div>
            </div>
        </section>
    );
}
