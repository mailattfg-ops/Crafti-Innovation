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
    description: "Explore the artisanal services of Crafi Innovations. We offer bespoke interior design, unique handmade products, and large-scale manufacturing with a focus on creative excellence.",
};

export default function ServicesPage() {
    return (
        <main className="bg-brand-light">
            {/* Services Introduction */}
            <section className="hero-viewport bg-brand-light">
                <div className="absolute inset-0 lg:relative lg:flex lg:flex-row items-stretch h-full">
                    {/* Image Layer */}
                    <div className="absolute inset-0 lg:relative lg:flex-1 lg:order-2 overflow-hidden">
                        <Image
                            src="/images/services_hero_new_1772613707429.png"
                            alt="Our Services - Crafi Innovations"
                            fill
                            className="object-cover lg:object-center"
                        />
                        <div className="absolute inset-0 hero-image-overlay z-10" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-20 h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:flex-1 lg:order-1 p-6 md:p-16 lg:p-24 pt-32 lg:pt-32">
                        <ScrollReveal direction="down">
                            <span className="editorial-quote mx-auto lg:mx-0">“</span>
                            <h1 className="editorial-heading mb-6 lg:mb-6 mx-auto lg:mx-0">
                                ARTISTIC<br />
                                <span className="text-white lg:text-brand-dark opacity-60 lg:opacity-40">EXCELLENCE.</span>
                            </h1>
                            <p className="section-desc text-slate-200 lg:text-slate-700 max-w-lg mb-8 mx-auto lg:mx-0">
                                "Transcending the ordinary through a meticulous dedication to the craft, transforming raw inspiration into singular expressions of artistry."
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Services Grid (Editorial Style) */}
            <section className="section-padding bg-brand-light">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-dark border border-brand-dark">
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
                                        className="flex items-center justify-between w-full group/link text-brand-accent font-black uppercase tracking-widest text-[10px] md:text-sm"
                                    >
                                        <span>Inquire Details</span>
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/link:translate-x-2 transition-transform" />
                                    </Link>
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section (Editorial) */}
            <section className="section-padding editorial-bg-ivory overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12 items-center">
                        <div className="lg:w-1/3">
                            <ScrollReveal direction="right">
                                <h2 className="editorial-heading mb-6 md:mb-10 lg:mb-12">
                                    OUR<br />
                                    <span className="text-brand-dark opacity-60">PROCESS.</span>
                                </h2>
                                <p className="section-desc text-slate-600">
                                    "From the first sketch to the final touch, our goal is always forward, ensuring excellence at every step."
                                </p>
                            </ScrollReveal>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-dark border border-brand-dark">
                            {[
                                { step: "01", title: "ANALYZE", desc: "Understanding the artistic vision and functional requirements." },
                                { step: "02", title: "DESIGN", desc: "Precision CAD and prototype development for unique pieces." },
                                { step: "03", title: "CRAFT", desc: "Meticulous production by our team of skilled artisans." },
                                { step: "04", title: "DELIVER", desc: "Final quality check and delivery to your space." }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 md:p-12 bg-brand-light transition-colors">
                                    <ScrollReveal delay={idx * 0.1}>
                                        <span className="text-brand-accent font-black text-xs md:text-sm tracking-widest mb-3 md:mb-4 block">{item.step}</span>
                                        <h4 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase tracking-tight text-brand-dark">{item.title}</h4>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
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
                bgIvory={true}
            />
            <EditorialBlock
                {...editorialSections[2]}
                bgIvory={true}
            />
        </main>
    );
}
