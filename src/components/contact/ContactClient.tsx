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
        const text = `*New Inquiry - Crafi Innovations*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
        window.open(`https://wa.me/${config.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`, "_blank");
    };

    return (
        <main className="bg-white">
            {/* Contact Hero (Split Editorial) */}
            <section className="hero-viewport bg-brand-light">
                <div className="absolute inset-0 lg:relative lg:flex lg:flex-row items-stretch h-full">
                    {/* Image Layer */}
                    <div className="absolute inset-0 lg:relative lg:flex-1 lg:order-2 overflow-hidden">
                        <Image
                            src="/images/contact.png"
                            alt="Contact Crafi Innovations"
                            fill
                            className="object-cover lg:object-center"
                            priority
                        />
                        <div className="absolute inset-0 hero-image-overlay z-10" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-20 h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:flex-1 lg:order-1 p-6 md:p-16 lg:p-24 pt-32 lg:pt-32">
                        <ScrollReveal direction="down">
                            <h1 className="editorial-heading mb-6 lg:mb-6 mx-auto lg:mx-0">
                                START A<br />
                                <span className="text-white lg:text-brand-dark opacity-60 lg:opacity-40">CONVERSATION.</span>
                            </h1>
                            <p className="section-desc text-white lg:text-slate-700 max-w-lg mb-8 mx-auto lg:mx-0">
                                "Inquire with our studio and let us translate your unique vision into a tangible legacy of handcrafted excellence."
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Main Contact Content */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
                        {/* Info Column */}
                        <div className="lg:w-1/3 space-y-12 md:space-y-16">
                            <ScrollReveal direction="right">
                                <div className="space-y-12 md:space-y-16">
                                    {/* Office Info */}
                                    <div className="space-y-6 md:space-y-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-light flex items-center justify-center rounded-xl border border-brand-accent/10">
                                                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-dark" />
                                            </div>
                                            <h3 className="section-title text-xl md:text-2xl">OUR STUDIO.</h3>
                                        </div>
                                        <div className="space-y-2 md:space-y-3">
                                            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-serif italic">
                                                "Nestled in the heart of artistry, where vision transforms into reality."
                                            </p>
                                            <address className="not-italic text-brand-dark font-black uppercase text-[10px] md:text-xs tracking-[0.2em] leading-loose">
                                                Crafi Innovations Private Limited<br />
                                                Old #99, New #19, Thandavaraya Mudali Street,<br />
                                                Royapettah, Chennai-600014
                                            </address>
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="space-y-6 md:space-y-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-light flex items-center justify-center rounded-xl border border-brand-accent/10">
                                                <Mail className="w-5 h-5 md:w-6 md:h-6 text-brand-dark" />
                                            </div>
                                            <h3 className="section-title text-xl md:text-2xl">GET IN TOUCH.</h3>
                                        </div>
                                        <div className="space-y-4 md:space-y-6">
                                            <div className="group cursor-pointer">
                                                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 block mb-1">Direct Email</span>
                                                <a href={`mailto:${config.email}`} className="text-lg md:text-2xl font-black text-brand-dark hover:text-brand-accent transition-colors break-all">
                                                    {config.email}
                                                </a>
                                            </div>
                                            <div className="group cursor-pointer">
                                                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 block mb-1">Call Us</span>
                                                <div className="flex flex-col gap-1">
                                                    <a href={`tel:${config.whatsappNumber}`} className="text-lg md:text-2xl font-black text-brand-dark hover:text-brand-accent transition-colors">
                                                        {config.whatsappNumber}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Map Container */}
                            <ScrollReveal delay={0.2} direction="up">
                                <div className="h-64 md:h-80 w-full rounded-2xl overflow-hidden grayscale contrast-125 border border-slate-100 shadow-xl group">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.851458!2d80.258757!3d13.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526615!2sRoyapettah%2C%20Chennai!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="group-hover:grayscale-0 transition-all duration-1000"
                                    ></iframe>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Form Column */}
                        <div className="lg:w-2/3">
                            <ScrollReveal delay={0.1}>
                                <div className="bg-brand-light p-8 md:p-12 lg:p-16 rounded-3xl border border-brand-accent/5">
                                    <h2 className="section-title mb-8 md:mb-12">ENQUIRY FORM.</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500">01 / Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full bg-transparent border-b-2 border-slate-200 py-3 md:py-4 focus:border-brand-accent outline-hidden transition-colors font-serif italic text-lg md:text-xl text-brand-dark"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500">02 / Email Address</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full bg-transparent border-b-2 border-slate-200 py-3 md:py-4 focus:border-brand-accent outline-hidden transition-colors font-serif italic text-lg md:text-xl text-brand-dark"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500">03 / Subject</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-transparent border-b-2 border-slate-200 py-3 md:py-4 focus:border-brand-accent outline-hidden transition-colors font-serif italic text-lg md:text-xl text-brand-dark"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                placeholder="How can we help?"
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500">04 / Your Message</label>
                                            <textarea
                                                required
                                                rows={5}
                                                className="w-full bg-transparent border-b-2 border-slate-200 focus:border-brand-accent py-4 outline-none transition-all font-serif italic text-lg md:text-xl text-slate-600 resize-none placeholder:text-slate-300"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Tell us about your project..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-6 md:py-8 bg-brand-dark text-white rounded-full font-black text-[10px] md:text-sm tracking-[0.4em] uppercase hover:bg-brand-accent transition-all duration-500 flex items-center justify-center gap-4 group shadow-2xl"
                                        >
                                            Dispatch Enquiry <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </form>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Outreach Content (Editorial) */}
            <section className="section-padding editorial-bg-ivory border-t border-slate-200 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-center">
                        <div className="lg:w-1/2 relative md:h-[600px] h-[400px] w-full overflow-hidden rounded-[3rem] border border-slate-200 shadow-2xl">
                            <div className="absolute inset-0 bg-brand-dark/20 z-10" />
                            <Image
                                src="/images/projects_hero_final_v3_1772620310379.png"
                                alt="Global Reach"
                                fill
                                className="object-cover grayscale"
                            />
                            {/* Aesthetic Markers */}
                            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-brand-accent shadow-[0_0_20px_rgba(var(--brand-accent),0.5)] z-20 animate-pulse" />
                            <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-brand-accent z-20" />
                        </div>
                        <div className="lg:w-1/2 space-y-8 md:space-y-12">
                            <ScrollReveal>
                                <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] block mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 border border-brand-accent/20 rounded-full w-fit">International Presence</span>
                                <h2 className="editorial-heading mb-6 md:mb-10 lg:mb-12">
                                    GLOBAL<br />
                                    <span className="text-brand-dark opacity-60">OUTREACH.</span>
                                </h2>
                                <p className="section-desc text-slate-600">
                                    "Specializing in export and import with a strong customer-oriented approach, we bridge traditional craftsmanship with global trade standards."
                                </p>

                                <div className="grid grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12 border-t border-slate-200 mt-8 md:mt-12">
                                    <div className="space-y-2 md:space-y-4">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-dark text-white flex items-center justify-center">
                                            <Globe className="w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 block">Expertise</span>
                                        <p className="text-xs md:text-sm font-bold text-brand-dark uppercase">International Trade</p>
                                    </div>
                                    <div className="space-y-2 md:space-y-4">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-dark text-white flex items-center justify-center">
                                            <Send className="w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 block">Reach</span>
                                        <p className="text-xs md:text-sm font-bold text-brand-dark uppercase">Worldwide Export</p>
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
