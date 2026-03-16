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
    description: "Discover the artistic legacy of Crafi Innovations. From our humble beginnings in 2003 to our global presence today, we are dedicated to excellence in every piece we craft.",
};

export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* About Hero (Editorial) */}
            <section className="hero-viewport bg-brand-light">
                <div className="absolute inset-0 lg:relative lg:flex lg:flex-row items-stretch h-full">
                    {/* Image Layer */}
                    <div className="absolute inset-0 lg:relative lg:flex-1 lg:order-2 overflow-hidden">
                        <Image
                            src="/images/about_hero_new_1772613691759.png"
                            alt="Crafi Innovations Studio"
                            fill
                            className="object-cover lg:object-center"
                        />
                        <div className="absolute inset-0 hero-image-overlay z-10" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-20 h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:flex-1 lg:order-1 p-6 md:p-16 lg:p-24 pt-32 lg:pt-32">
                        <ScrollReveal direction="down">
                            <h1 className="editorial-heading mb-6 lg:mb-6 mx-auto lg:mx-0">
                                ARTISTIC<br />
                                <span className="text-white lg:text-brand-dark opacity-60 lg:opacity-40">LEGACY.</span>
                            </h1>
                            <p className="section-desc text-white lg:text-slate-700 max-w-lg mb-8 mx-auto lg:mx-0">
                                "A legacy of uncompromising mastery, where every silhouette and stitch is a testament to the pursuit of absolute perfection."
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Dynamic Narrative Sections (Matching User Image) */}
            {companyProfile.narrative.map((item, idx) => (
                <section key={idx} className={`relative overflow-hidden ${idx % 2 === 0 ? 'bg-white' : 'editorial-bg-ivory'} border-b border-slate-200 section-padding overflow-hidden`}>
                    <div className={`flex flex-col lg:flex-row min-h-[60vh] md:min-h-[80vh] ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Text Content */}
                        <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
                            <ScrollReveal direction={idx % 2 === 0 ? "right" : "left"}>
                                <div className="space-y-6 md:space-y-8 max-w-2xl">
                                    <h2 className="text-brand-accent font-black text-[10px] md:text-sm tracking-widest uppercase mb-2 md:mb-4">{item.title}</h2>
                                    <div
                                        className="section-desc text-slate-700"
                                        dangerouslySetInnerHTML={{
                                            __html: item.content
                                                .replace(/'Crafi Innovations'/g, "<strong>'Crafi Innovations'</strong>")
                                                .replace(/'Crafi Innovations Private Limited'/g, "<strong>'Crafi Innovations Private Limited'</strong>")
                                                .replace(/Crafi Innovations/g, "<strong>Crafi Innovations</strong>")
                                        }}
                                    />
                                </div>
                            </ScrollReveal>

                            {/* Metadata / Logo Marker (Bottom Left) */}
                            <div className="hidden lg:block absolute bottom-8 left-8 md:bottom-12 md:left-12 opacity-40 group">
                                <Palette className="w-6 h-6 md:w-8 md:h-8 text-brand-dark" />
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="lg:w-1/2 px-8 pb-8 md:p-0 relative">
                            <div className="relative h-full min-h-[40vh] md:min-h-[60vh] overflow-hidden rounded-2xl md:rounded-none">
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
                                <div className="absolute inset-x-0 top-0 h-24 md:h-32 bg-linear-to-b from-black/40 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-linear-to-t from-black/40 to-transparent" />

                                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex flex-col items-end text-white/60">
                                    <div className="grid grid-cols-3 gap-1.5 md:gap-2 mb-3 md:mb-4">
                                        {Array.from({ length: 9 }).map((_, i) => (
                                            <div key={i} className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/40" />
                                        ))}
                                    </div>
                                    <span className="font-mono text-xs md:text-sm tracking-tighter">0{idx + 1}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}


            {/* History Summary/Stats Section */}
            <section className="section-padding editorial-bg-ivory border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { label: "Founded", value: "2003" },
                            { label: "Pvt Ltd Since", value: "2022" },
                            { label: "Facility Size", value: "1.5 Acre" },
                            { label: "Craft Quality", value: "Premium" }
                        ].map((stat, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="flex flex-col border-l-4 border-brand-accent pl-4 md:pl-8">
                                    <span className="text-2xl md:text-4xl font-black text-brand-dark mb-1 md:mb-2">{stat.value}</span>
                                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section - High Impact Showcase */}
            <section className="section-padding editorial-bg-ivory border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col mb-12 md:mb-16 lg:mb-20">
                        <ScrollReveal>
                            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] md:text-sm block mb-4">Recognition & Excellence</span>
                            <h2 className="section-title mb-6 md:mb-8">
                                REMARKABLE<br />
                                <span className="text-brand-dark opacity-60 italic font-serif lowercase tracking-normal">Achievements.</span>
                            </h2>
                            <p className="section-desc max-w-2xl border-l-2 border-brand-accent/30 pl-6 md:pl-8">
                                "Celebrating years of excellence, dedicated leadership, and the prestigious recognition from national and international leaders."
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        {companyProfile.achievements?.map((ach, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="group relative flex flex-col gap-6 md:gap-8">
                                    <div className="relative aspect-16/10 md:aspect-video overflow-hidden rounded-4xl shadow-2xl">
                                        <Image
                                            src={ach.image}
                                            alt={ach.title}
                                            fill
                                            className="object-cover transition-all duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-700" />
                                    </div>

                                    <div className="space-y-4 md:space-y-6">
                                        <h3 className="text-2xl md:text-4xl font-black text-brand-dark uppercase tracking-tighter leading-tight group-hover:text-brand-accent transition-colors duration-500">
                                            {ach.title}
                                        </h3>
                                        <p className="section-desc text-lg md:text-xl text-slate-600 leading-relaxed font-serif italic opacity-80 group-hover:opacity-100 transition-opacity">
                                            "{ach.description}"
                                        </p>
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
