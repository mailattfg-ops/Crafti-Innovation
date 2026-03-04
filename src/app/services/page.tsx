"use client";

import { expertiseData } from "@/data/homeData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EditorialCard } from "@/components/ui/EditorialCard";
import { EditorialBlock } from "@/components/ui/EditorialBlock";
import { editorialSections } from "@/data/homeData";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore the artisanal services of Crafti Innovations. We offer bespoke interior design, unique handmade products, and large-scale manufacturing with a focus on creative excellence.",
};

export default function ServicesPage() {
    return (
        <main className="bg-white pt-20">
            {/* Services Introduction */}
            <section className="editorial-section editorial-bg-ivory">
                <div className="editorial-grid w-full">
                    <div className="p-12 md:p-24 flex flex-col justify-center">
                        <ScrollReveal direction="down">
                            <span className="editorial-quote">“</span>
                            <h1 className="editorial-heading mb-8">
                                ARTISTIC<br />
                                <span className="text-brand-dark opacity-60">EXCELLENCE.</span>
                            </h1>
                            <p className="text-2xl text-slate-700 max-w-xl leading-relaxed font-serif italic mb-12">
                                "Our dedication to creative craftsmanship ensures that every product and service is truly one of a kind."
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden">
                        <Image
                            src="/images/services_hero_new_1772613707429.png"
                            alt="Our Services"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Services Grid (Editorial Style) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
                        {expertiseData.map((service, idx) => (
                            <EditorialCard
                                key={service.id}
                                index={idx}
                                title={service.title}
                                description={service.description}
                                iconName={service.id}
                                footer={
                                    <Link
                                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                                        className="flex items-center justify-between w-full group/link text-brand-accent font-black uppercase tracking-widest text-sm"
                                    >
                                        <span>Inquire Details</span>
                                        <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                                    </Link>
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section (Editorial) */}
            <section className="py-24 editorial-bg-ivory border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/3">
                            <ScrollReveal direction="right">
                                <h2 className="editorial-heading mb-8">
                                    OUR<br />
                                    <span className="text-brand-dark opacity-60">PROCESS.</span>
                                </h2>
                                <p className="text-xl text-slate-600 italic font-medium leading-relaxed">
                                    "From the first sketch to the final touch, our goal is always forward, ensuring excellence at every step."
                                </p>
                            </ScrollReveal>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-300">
                            {[
                                { step: "01", title: "ANALYZE", desc: "Understanding the artistic vision and functional requirements." },
                                { step: "02", title: "DESIGN", desc: "Precision CAD and prototype development for unique pieces." },
                                { step: "03", title: "CRAFT", desc: "Meticulous production by our team of skilled artisans." },
                                { step: "04", title: "DELIVER", desc: "Final quality check and delivery to your space." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-12 hover:bg-brand-light transition-colors">
                                    <ScrollReveal delay={idx * 0.1}>
                                        <span className="text-brand-accent font-black text-sm tracking-widest mb-4 block">{item.step}</span>
                                        <h4 className="text-2xl font-black mb-4 uppercase tracking-tight text-brand-dark">{item.title}</h4>
                                        <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
                                    </ScrollReveal>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Relocated Editorial Categories from Home */}
            <EditorialBlock
                {...editorialSections[1]}
                bgIvory={false}
            />
            <EditorialBlock
                {...editorialSections[2]}
                bgIvory={true}
            />
        </main>
    );
}
