"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";
import {
    Palette,
    Hammer,
    Trophy,
    Layout,
    Home as HomeIcon,
    Globe,
    Target,
    Eye,
    Compass
} from "lucide-react";

const iconMap = {
    handmade: Palette,
    interiors: Hammer,
    gifts: Trophy,
    production: Layout,
    craftsmanship: HomeIcon,
    reach: Globe,
    Mission: Target,
    Vision: Eye,
    Values: Compass,
    // Add fallback/generic names if needed
    Palette,
    Hammer,
    Trophy,
    Layout,
    Home: HomeIcon,
    Globe,
    Target,
    Eye,
    Compass
};

interface EditorialCardProps {
    title: string;
    description: string;
    iconName?: string;
    index?: number;
    className?: string;
    footer?: ReactNode;
}

export function EditorialCard({
    title,
    description,
    iconName,
    index = 0,
    className,
    footer
}: EditorialCardProps) {
    const Icon = iconName ? (iconMap[iconName as keyof typeof iconMap] || Palette) : null;

    return (
        <div className={cn(
            "bg-white p-12 md:p-16 hover:bg-brand-light transition-colors group flex flex-col h-full",
            className
        )}>
            <ScrollReveal delay={index * 0.1}>
                {Icon && (
                    <div className="h-16 w-16 bg-brand-dark text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-accent transition-all duration-500 shadow-xl border border-white/10">
                        <Icon className="w-8 h-8" />
                    </div>
                )}

                <h3 className="text-3xl font-black text-brand-dark mb-6 uppercase tracking-tight leading-none group-hover:text-brand-accent transition-colors">
                    {title}
                </h3>

                <p className="text-slate-600 italic leading-relaxed text-lg mb-8">
                    "{description}"
                </p>

                {footer && (
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center">
                        {footer}
                    </div>
                )}
            </ScrollReveal>
        </div>
    );
}
