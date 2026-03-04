import { companyProfile } from "@/data/homeData";
import { Palette } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EditorialCard } from "@/components/ui/EditorialCard";
import { EditorialBlock } from "@/components/ui/EditorialBlock";
import { editorialSections } from "@/data/homeData";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Discover the artistic legacy of Crafti Innovations. From our humble beginnings in 2003 to our global presence today, we are dedicated to excellence in every piece we craft.",
};

export default function AboutPage() {
    return (
        <main className="bg-white pt-20">
            {/* About Hero (Editorial) */}
            <section className="editorial-section editorial-bg-ivory border-b border-slate-200">
                <div className="editorial-grid w-full">
                    <div className="p-12 md:p-24 flex flex-col justify-center">
                        <ScrollReveal direction="down">
                            <span className="editorial-quote">“</span>
                            <h1 className="editorial-heading mb-8">
                                ARTISTIC<br />
                                <span className="text-brand-dark opacity-60">LEGACY.</span>
                            </h1>
                            <p className="text-2xl text-slate-700 max-w-xl leading-relaxed font-serif italic mb-12">
                                "Our journey is defined by a relentless pursuit of perfection in every piece we craft."
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden">
                        <Image
                            src="/images/about_hero_new_1772613691759.png"
                            alt="Crafti Innovations Studio"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Dynamic Narrative Sections (Matching User Image) */}
            {companyProfile.narrative.map((item, idx) => (
                <section key={idx} className={`relative overflow-hidden ${idx % 2 === 0 ? 'bg-white' : 'editorial-bg-ivory'} border-b border-slate-200`}>
                    <div className={`flex flex-col lg:flex-row min-h-[80vh] ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Text Content */}
                        <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center relative">
                            <ScrollReveal direction={idx % 2 === 0 ? "right" : "left"}>
                                <div className="space-y-8 max-w-2xl">
                                    <h2 className="text-brand-accent font-black text-sm tracking-widest uppercase mb-4">{item.title}</h2>
                                    <div
                                        className="text-2xl text-slate-700 leading-relaxed font-medium"
                                        dangerouslySetInnerHTML={{
                                            __html: item.content
                                                .replace(/'Crafti Innovations'/g, "<strong>'Crafti Innovations'</strong>")
                                                .replace(/'Crafti Innovations Private Limited'/g, "<strong>'Crafti Innovations Private Limited'</strong>")
                                                .replace(/Crafti Innovations/g, "<strong>Crafti Innovations</strong>")
                                        }}
                                    />
                                </div>
                            </ScrollReveal>

                            {/* Metadata / Logo Marker (Bottom Left) */}
                            <div className="absolute bottom-12 left-12 opacity-40 group">
                                <Palette className="w-8 h-8 text-brand-dark" />
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="lg:w-1/2 relative min-h-[60vh] overflow-hidden">
                            <Image
                                src={[
                                    "/images/about_history_new_1772613726539.png",
                                    "/images/about_facility_new_1772613741689.png",
                                    "/images/about_artistry_new_1772613759387.png"
                                ][idx]}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/40 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/40 to-transparent" />

                            {/* Slide Number / Dots (Editorial Visuals from image) */}
                            <div className="absolute bottom-12 right-12 flex flex-col items-end text-white/60">
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {Array.from({ length: 9 }).map((_, i) => (
                                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    ))}
                                </div>
                                <span className="font-mono text-sm tracking-tighter">0{idx + 1}</span>
                            </div>
                        </div>
                    </div>
                </section>
            ))}


            {/* History Summary/Stats Section */}
            <section className="py-24 editorial-bg-ivory border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { label: "Founded", value: "2003" },
                            { label: "Pvt Ltd Since", value: "2022" },
                            { label: "Facility Size", value: "1.5 Acre" },
                            { label: "Craft Quality", value: "Premium" }
                        ].map((stat, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="flex flex-col border-l-4 border-brand-accent pl-8">
                                    <span className="text-4xl font-black text-brand-dark mb-2">{stat.value}</span>
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section - High Impact Showcase */}
            <section className="py-24 lg:py-40 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center mb-24 text-center">
                        <ScrollReveal>
                            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] block mb-6 px-4 py-2 border border-brand-accent/20 rounded-full">Honors & Recognition</span>
                            <h2 className="text-6xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-none mb-8">
                                REMARKABLE<br />
                                <span className="text-brand-accent italic">ACHIEVEMENTS.</span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-serif italic">
                                "Celebrating years of excellence, dedicated leadership, and the prestigious recognition from national and international leaders."
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                        {companyProfile.achievements?.map((ach, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.05} direction={idx % 2 === 0 ? "up" : "down"}>
                                <div className="group relative bg-[#F9F9F7] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col h-full rounded-2xl border border-slate-100">
                                    <div className="relative h-72 overflow-hidden">
                                        <Image
                                            src={ach.image}
                                            alt={ach.title}
                                            fill
                                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors" />

                                        {/* Slide Count */}
                                        <div className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-xl flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            <span className="text-xs font-black text-brand-dark leading-none">0{idx + 1}</span>
                                        </div>
                                    </div>

                                    <div className="p-10 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-4 group-hover:text-brand-accent transition-colors">
                                            {ach.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed italic font-serif opacity-80 group-hover:opacity-100 transition-opacity">
                                            "{ach.description}"
                                        </p>

                                        {/* Aesthetic Marker */}
                                        <div className="mt-8 pt-8 border-t border-slate-200/60 flex items-center justify-between">
                                            <div className="flex gap-1.5 overflow-hidden">
                                                {[...Array(5)].map((_, i) => (
                                                    <div key={i} className="w-1 h-1 rounded-full bg-brand-accent/20 group-hover:bg-brand-accent transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }} />
                                                ))}
                                            </div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">Certified Excellence</div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards Section Relocated from Home */}
            <EditorialBlock
                {...editorialSections[0]}
                bgIvory={true}
            />
        </main>
    );
}
