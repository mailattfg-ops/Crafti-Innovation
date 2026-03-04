"use client";

import { config } from "@/data/config";
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ContactClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `*New Inquiry - Crafti Innovations*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
        window.open(`https://wa.me/${config.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`, "_blank");
    };

    return (
        <main className="bg-white pt-24 min-h-screen">
            {/* Split Screen Editorial Hero */}
            <section className="editorial-section editorial-bg-ivory border-b border-slate-200">
                <div className="editorial-grid w-full">
                    <div className="p-12 md:p-24 flex flex-col justify-center">
                        <ScrollReveal direction="down">
                            <span className="editorial-quote">“</span>
                            <h1 className="editorial-heading mb-8">
                                GET IN<br />
                                <span className="text-brand-dark opacity-60">TOUCH.</span>
                            </h1>
                            <p className="text-2xl text-slate-700 max-w-xl leading-relaxed font-serif italic mb-12">
                                "We are ready to bring your artistic vision to life. Our team is attentive to every detail of your unique requirements."
                            </p>

                            {/* Contact Quick Links */}
                            <div className="space-y-6 pt-12 border-t border-slate-200">
                                <div className="flex items-center gap-6 group cursor-default">
                                    <div className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-xl font-bold text-brand-dark uppercase tracking-tighter">{config.whatsappNumber}</span>
                                </div>
                                <div className="flex items-center gap-6 group cursor-default">
                                    <div className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="text-xl font-bold text-brand-dark uppercase tracking-tighter break-all">{config.email}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden">
                        <Image
                            src="/images/contact_hero_editorial_final_1772621012275.png"
                            alt="Crafti Innovations Studio"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-brand-dark/10" />

                        {/* Location Badge */}
                        <div className="absolute bottom-12 right-12 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl space-y-2 border border-brand-accent/10">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent block">Headquarters</span>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-brand-dark" />
                                <span className="text-brand-dark font-black uppercase text-sm">Kodakara, Kerala</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Redesigned Inquiry Section */}
            <section className="py-24 lg:py-40 bg-white" id="inquiry-form">
                <div className="container mx-auto px-6">
                    <div className="editorial-grid gap-24 lg:gap-40 items-start">
                        {/* Side Narrative */}
                        <div className="lg:sticky lg:top-40 h-fit space-y-12">
                            <ScrollReveal>
                                <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Collaboration</span>
                                <h2 className="text-6xl font-black text-brand-dark uppercase tracking-tighter leading-none mb-8">
                                    START A<br />
                                    <span className="text-brand-accent italic">DIALOGUE.</span>
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed font-serif italic max-w-md">
                                    "Whether it's a bespoke interior project or an international trade inquiry, we are here to provide the highest standards of artistry and service."
                                </p>

                                <div className="pt-12 flex gap-1">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="w-8 h-1 bg-slate-100" />
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Integrated Form */}
                        <div className="bg-[#F9F9F7] p-12 lg:p-20 rounded-[3rem] border border-slate-100 shadow-sm">
                            <ScrollReveal delay={0.2}>
                                <form onSubmit={handleSubmit} className="space-y-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">01 / Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-transparent border-b-2 border-slate-200 focus:border-brand-accent py-4 outline-none transition-all font-bold text-brand-dark text-lg md:text-xl placeholder:text-slate-300"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">02 / Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full bg-transparent border-b-2 border-slate-200 focus:border-brand-accent py-4 outline-none transition-all font-bold text-brand-dark text-lg md:text-xl placeholder:text-slate-300"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">03 / Subject</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-transparent border-b-2 border-slate-200 focus:border-brand-accent py-4 outline-none transition-all font-bold text-brand-dark text-lg md:text-xl placeholder:text-slate-300"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            placeholder="What can we help you with?"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">04 / Your Vision</label>
                                        <textarea
                                            required
                                            rows={5}
                                            className="w-full bg-transparent border-b-2 border-slate-200 focus:border-brand-accent py-4 outline-none transition-all font-serif italic text-lg md:text-xl text-slate-600 resize-none placeholder:text-slate-300"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell us about your project or inquiry..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="group relative inline-flex items-center gap-6 px-16 py-8 bg-brand-dark text-white rounded-full font-black text-sm tracking-[0.4em] uppercase hover:bg-brand-accent transition-all duration-500 overflow-hidden shadow-2xl hover:translate-y-[-4px]"
                                    >
                                        <span className="relative z-10 flex items-center gap-4">Initialize Request <ArrowRight className="w-5 h-5" /></span>
                                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>
                                </form>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Section: Global Outreach */}
            <section className="py-24 lg:py-40 editorial-bg-ivory border-t border-slate-200 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="editorial-grid gap-12 lg:gap-24 items-center">
                        <div className="relative md:h-[600px] h-[400px] overflow-hidden rounded-[3rem] border border-slate-200 shadow-2xl order-2 lg:order-1">
                            <div className="absolute inset-0 bg-brand-dark/20 z-10" />
                            <Image
                                src="/images/projects_hero_final.png" // Reusing a high-quality asset or could generate a new one
                                alt="Global Reach Map"
                                fill
                                className="object-cover grayscale"
                            />
                            {/* Floating Aesthetic Dots */}
                            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-brand-accent shadow-[0_0_20px_rgba(var(--brand-accent),0.5)] z-20 animate-pulse" />
                            <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-brand-accent z-20" />
                        </div>
                        <div className="space-y-12 order-1 lg:order-2">
                            <ScrollReveal>
                                <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] block mb-6 px-4 py-2 border border-brand-accent/20 rounded-full w-fit">International Presence</span>
                                <h2 className="text-6xl font-black text-brand-dark uppercase tracking-tighter leading-none mb-8">
                                    GLOBAL<br />
                                    <span className="text-brand-dark opacity-60">OUTREACH.</span>
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed font-serif italic mb-8">
                                    "Specializing in export and import with a strong customer-oriented approach, we bridge traditional craftsmanship with global trade standards."
                                </p>

                                <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-200">
                                    <div className="space-y-4">
                                        <div className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 block">Expertise</span>
                                        <p className="text-sm font-bold text-brand-dark uppercase">International Trade</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center">
                                            <Send className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 block">Reach</span>
                                        <p className="text-sm font-bold text-brand-dark uppercase">Worldwide Export</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
