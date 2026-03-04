import { projectsData } from "@/data/projectsData";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Projects",
    description: "View the prestigious initiatives of Crafti Innovations. Our work spans national heritage projects, high-end resort decors, and international trade showcases.",
};

export default function ProjectsPage() {
    return (
        <main className="bg-white pt-24 min-h-screen">
            {/* Split Screen Editorial Hero */}
            <section className="editorial-section editorial-bg-ivory border-b border-slate-200">
                <div className="editorial-grid w-full">
                    <div className="p-12 md:p-24 flex flex-col justify-center">
                        <ScrollReveal direction="down">
                            <span className="editorial-quote">“</span>
                            <h1 className="editorial-heading mb-8">
                                PRESTIGIOUS<br />
                                <span className="text-brand-dark opacity-60">INITIATIVES.</span>
                            </h1>
                            <p className="text-2xl text-slate-700 max-w-xl leading-relaxed font-serif italic mb-12">
                                "Building cultural touchstones and delivering excellence across national and international stages."
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden">
                        <Image
                            src="/images/projects_hero_final_v3_1772620310379.png"
                            alt="Prestigious Projects Exhibition"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Subtle aesthetic overlay */}
                        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/20 to-transparent" />
                    </div>
                </div>
            </section>

            {/* Projects Timeline/Grid */}
            <div className="container mx-auto px-6 py-24 space-y-40">
                {projectsData.map((project, idx) => (
                    <ScrollReveal key={project.id} delay={0.1}>
                        <div className={cn(
                            "flex flex-col lg:flex-row gap-16 lg:gap-24 items-start",
                            idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                        )}>
                            {/* Project Info */}
                            <div className="lg:w-2/5 sticky top-32">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="text-brand-accent font-mono text-sm tracking-tighter italic">0{idx + 1}</span>
                                        <div className="h-px flex-1 bg-slate-100" />
                                    </div>

                                    <h2 className="text-5xl font-black text-brand-dark uppercase tracking-tighter leading-none">
                                        {project.title}
                                    </h2>

                                    <div className="space-y-4">
                                        <span className="text-brand-accent font-black text-xs uppercase tracking-widest block">
                                            {project.initiative}
                                        </span>
                                        <p className="text-lg text-slate-600 leading-relaxed font-serif italic border-l-2 border-slate-100 pl-6">
                                            "{project.description}"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Project Visuals - Editorial Collage */}
                            <div className="lg:w-3/5 w-full">
                                <div className="grid grid-cols-2 md:grid-cols-6 md:grid-rows-4 gap-4 min-h-[500px] md:h-[700px]">
                                    {/* Large Main Image */}
                                    <div className="col-span-2 md:col-span-4 md:row-span-3 relative h-64 md:h-auto overflow-hidden group rounded-xl">
                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-brand-dark/5" />
                                    </div>

                                    {/* Secondary Image - Top Right */}
                                    <div className="col-span-1 md:col-span-2 md:row-span-2 relative h-40 md:h-auto overflow-hidden group rounded-xl">
                                        <Image
                                            src={project.images[1]}
                                            alt={`${project.title} detail`}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Small Image - Mid Right */}
                                    <div className="col-span-1 md:col-span-1 md:row-span-1 relative h-40 md:h-auto overflow-hidden group rounded-xl">
                                        <Image
                                            src={project.images[2]}
                                            alt={`${project.title} detail`}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </div>
                                    {/* Small Image - Mid Right Right */}
                                    <div className="col-span-1 md:col-span-1 md:row-span-1 relative h-40 md:h-auto overflow-hidden group rounded-xl shadow-inner">
                                        <Image
                                            src={project.images[3]}
                                            alt={`${project.title} detail`}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Wide Bottom Image */}
                                    <div className="col-span-2 md:col-span-3 md:row-span-1 relative h-40 md:h-auto overflow-hidden group rounded-xl">
                                        <Image
                                            src={project.images[4]}
                                            alt={`${project.title} detail`}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Extra detail */}
                                    <div className="col-span-2 md:col-span-3 md:row-span-1 border border-slate-100 flex items-center justify-center p-8 bg-[#F9F9F7] rounded-xl">
                                        <div className="text-center">
                                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 block mb-2">Project Focus</span>
                                            <div className="text-brand-dark font-black text-xs uppercase tracking-widest">{project.title.split(' ')[0]}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Footer CTA */}
            <section className="py-24 border-t border-slate-100 text-center">
                <ScrollReveal>
                    <h3 className="text-4xl font-black text-brand-dark uppercase tracking-tighter mb-12">HAVE A VISION FOR YOUR SPACE?</h3>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-6 px-16 py-8 bg-brand-dark text-white rounded-full font-black text-sm tracking-[0.4em] uppercase hover:bg-brand-accent transition-colors duration-500 shadow-2xl"
                    >
                        Start A Conversation
                    </Link>
                </ScrollReveal>
            </section>
        </main>
    );
}
