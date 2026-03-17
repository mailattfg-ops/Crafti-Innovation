import { config } from "@/data/config";
import { companyProfile } from "@/data/homeData";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark text-slate-400 py-4 md:py-6 lg:py-8 relative overflow-hidden">
            {/* Background Texture / Branding */}
            <div className="absolute top-10 right-10 text-[30vw] md:text-[25vw] lg:text-[20vw] font-black text-white/2 select-none pointer-events-none leading-none uppercase">
                {config.companyName.split(' ')[0]}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12">
                    {/* Brand Statement - 5 Columns */}
                    <div className="lg:col-span-5 space-y-5 md:space-y-6">
                        <div className="space-y-2 md:space-y-4 lg:space-y-6">
                            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight">
                                CRAFTING<br />
                                <span className="text-brand-accent">INNOVATION.</span>
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed text-slate-400 max-w-md font-serif italic">
                                "{companyProfile.narrative[0].content}"
                            </p>
                        </div>

                        <div className="flex gap-4 md:gap-6">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="h-12 w-12 md:h-14 md:w-14 flex items-center justify-center rounded-full border border-white/10 hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all duration-500 group"
                                >
                                    <Icon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid - 7 Columns divided into sub-cols */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {/* Directory */}
                        <div className="space-y-2 md:space-y-4 lg:space-y-8">
                            <h4 className="text-[10px] md:text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Directory</h4>
                            <ul className="space-y-3 md:space-y-4">
                                {["Home", "About Us", "Services", "Contact"].map((link) => (
                                    <li key={link}>
                                        <Link
                                            href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`}
                                            className="text-white text-base md:text-lg font-bold hover:text-brand-accent transition-colors flex items-center gap-2 group"
                                        >
                                            {link}
                                            <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Expertise */}
                        <div className="space-y-2 md:space-y-4 lg:space-y-8">
                            <h4 className="text-[10px] md:text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Expertise</h4>
                            <ul className="space-y-3 md:space-y-4 text-sm md:text-sm font-bold text-slate-300">
                                <li className="hover:text-white transition-colors cursor-default">Bespoke Furnishings</li>
                                <li className="hover:text-white transition-colors cursor-default">Artistic Awards</li>
                                <li className="hover:text-white transition-colors cursor-default">Luxury Households</li>
                                <li className="hover:text-white transition-colors cursor-default">Interior Design</li>
                                <li className="hover:text-white transition-colors cursor-default">Global Logistics</li>
                            </ul>
                        </div>

                        {/* Connections */}
                        <div className="col-span-2 md:col-span-1 space-y-2 md:space-y-4 lg:space-y-8">
                            <h4 className="text-[10px] md:text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Connections</h4>
                            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
                                <li className="flex flex-col">
                                    <span className="text-white font-bold">Studio HQ</span>
                                    <span className="text-slate-400">Royapettah, Chennai, India</span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-white font-bold">Inquiries</span>
                                    <a href={`mailto:${config.email}`} className="text-brand-accent hover:text-white transition-colors break-all">
                                        {config.email}
                                    </a>
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-white font-bold">WhatsApp</span>
                                    <a href={`tel:${config.whatsappNumber.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                                        {config.whatsappNumber}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 md:pt-10 lg:pt-12 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-[8px] md:text-[7px] lg:text-[9px] xl:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.1em] lg:tracking-[0.15em] xl:tracking-[0.2em] text-slate-500 relative">
                    {/* Copyright - Left on MD+ */}
                    <p className="order-2 md:order-1">
                        © {currentYear} {config.companyName}. All Rights Reserved.
                    </p>

                    {/* Powered By - Center on MD+ */}
                    <p className="order-1 md:order-2 text-brand-accent/80 font-bold md:absolute md:left-1/2 md:-translate-x-1/2 whitespace-nowrap">
                        Powered by <a href="https://thinkforgeglobal.com/" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-white transition-colors decoration-brand-accent/30 underline underline-offset-4">Think Forge Global</a>
                    </p>

                    {/* Legal - Right on MD+ */}
                    <div className="order-3 flex gap-4 md:gap-4 lg:gap-8 xl:gap-12">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Trade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
