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
            <section className="section-padding bg-brand-light">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
                        {/* Column 1: Enquiry Form */}
                        <div className="mb-6 lg:mb-0">
                            <ScrollReveal delay={0.1}>
                                <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-2xl relative z-10 h-full">
                                    <h2 className="font-black text-xl md:text-2xl tracking-widest text-brand-dark uppercase mb-8 md:mb-10">ENQUIRY FORM.</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">01 / Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full bg-transparent border-b-2 border-slate-100 py-2 focus:border-brand-accent outline-hidden transition-colors font-serif italic text-base text-brand-dark"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">02 / Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full bg-transparent border-b-2 border-slate-100 py-2 focus:border-brand-accent outline-hidden transition-colors font-serif italic text-base text-brand-dark"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">03 / Subject</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-transparent border-b-2 border-slate-100 py-2 focus:border-brand-accent outline-hidden transition-colors font-serif italic text-base text-brand-dark"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                placeholder="How can we help?"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">04 / Your Message</label>
                                            <textarea
                                                required
                                                rows={4}
                                                className="w-full bg-transparent border-b-2 border-slate-100 focus:border-brand-accent py-2 outline-none transition-all font-serif italic text-base text-slate-600 resize-none placeholder:text-slate-300"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Tell us about your project..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-5 bg-brand-dark text-white rounded-full font-black text-[10px] tracking-[0.3em] uppercase hover:bg-brand-accent transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl"
                                        >
                                            Dispatch Enquiry <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </form>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Column 2: Map */}
                        <div className="h-full min-h-[400px]">
                            <ScrollReveal delay={0.2} direction="up" className="h-full">
                                <div className="h-full w-full rounded-3xl overflow-hidden grayscale contrast-125 border border-slate-200 shadow-2xl group relative antialiased z-10">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.851458!2d80.258757!3d13.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526615!2sRoyapettah%2C%20Chennai!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, minHeight: '400px' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="group-hover:grayscale-0 transition-all duration-1000 ease-in-out block h-full w-full"
                                    ></iframe>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Outreach Content (Editorial Redesign) */}
            <section className="section-padding bg-brand-light overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-12 md:space-y-16">
                        <ScrollReveal>
                            <div className="flex flex-col items-center space-y-6">
                                <h2 className="editorial-heading text-4xl md:text-5xl lg:text-7xl">
                                    GLOBAL<br />
                                    <span className="text-brand-dark opacity-60">OUTREACH.</span>
                                </h2>
                                <p className="section-desc text-slate-600 max-w-2xl mx-auto">
                                    "Specializing in boutique export and import with a localized touch. We bridge traditional craftsmanship with global trade standards, ensuring your vision reaches every corner of the world."
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 border-t border-slate-100 ">
                                <div className="space-y-4 p-8 rounded-3xl bg-brand-accent border border-brand-dark/5 transition-all duration-500 hover:shadow-xl group">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-dark text-white flex items-center justify-center group-hover:bg-brand-accent transition-colors shadow-lg mx-auto">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div className="text-center">
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-brand-dark block mb-2">Expertise</span>
                                        <p className="text-sm font-bold text-white uppercase tracking-widest">International Trade</p>
                                    </div>
                                </div>

                                <div className="space-y-4 p-8 rounded-3xl bg-brand-accent border border-brand-dark/5 transition-all duration-500 hover:shadow-xl group">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-dark text-white flex items-center justify-center group-hover:bg-brand-accent transition-colors shadow-lg mx-auto">
                                        <Send className="w-6 h-6" />
                                    </div>
                                    <div className="text-center">
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-brand-dark block mb-2">Reach</span>
                                        <p className="text-sm font-bold text-white uppercase tracking-widest">Worldwide Export</p>
                                    </div>
                                </div>

                                <div className="space-y-4 p-8 rounded-3xl bg-brand-accent border border-brand-dark/5 transition-all duration-500 hover:shadow-xl group md:col-span-2 lg:col-span-1">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-dark text-white flex items-center justify-center group-hover:bg-brand-accent transition-colors shadow-lg mx-auto">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <div className="text-center">
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-brand-dark block mb-2">Philosophy</span>
                                        <p className="text-sm font-bold text-white uppercase tracking-widest">Customer Centric</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </main>
    );
}
