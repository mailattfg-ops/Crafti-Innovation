import { config } from "@/data/config";
import { companyProfile } from "@/data/homeData";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark text-slate-400 pt-32 pb-16 relative overflow-hidden">
            {/* Background Texture / Branding */}
            <div className="absolute top-10 right-10 text-[20vw] font-black text-white/2 select-none pointer-events-none leading-none uppercase">
                {config.companyName.split(' ')[0]}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Statement - 5 Columns */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-5xl font-black text-white tracking-tighter uppercase leading-tight">
                                CRAFTING<br />
                                <span className="text-brand-accent">INNOVATION.</span>
                            </h3>
                            <p className="text-lg leading-relaxed text-slate-400 max-w-md font-serif italic">
                                "{companyProfile.narrative[0].content.substring(0, 150)}..."
                            </p>
                        </div>

                        <div className="flex gap-6">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="h-14 w-14 flex items-center justify-center rounded-full border border-white/10 hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all duration-500 group"
                                >
                                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid - 7 Columns divided into sub-cols */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
                        {/* Directory */}
                        <div className="space-y-6 md:space-y-8">
                            <h4 className="text-[8px] md:text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Directory</h4>
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
                        <div className="space-y-6 md:space-y-8">
                            <h4 className="text-[8px] md:text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Expertise</h4>
                            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-bold text-slate-300">
                                <li className="hover:text-white transition-colors cursor-default">Bespoke Furnishings</li>
                                <li className="hover:text-white transition-colors cursor-default">Artistic Awards</li>
                                <li className="hover:text-white transition-colors cursor-default">Luxury Households</li>
                                <li className="hover:text-white transition-colors cursor-default">Interior Design</li>
                                <li className="hover:text-white transition-colors cursor-default">Global Logistics</li>
                            </ul>
                        </div>

                        {/* Connection */}
                        <div className="col-span-2 md:col-span-1 space-y-6 md:space-y-8 mt-12 md:mt-0">
                            <h4 className="text-[8px] md:text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Connection</h4>
                            <ul className="space-y-4 md:space-y-6 text-xs md:text-sm">
                                <li className="flex flex-col gap-1 md:gap-2">
                                    <span className="text-white font-bold">Studio HQ</span>
                                    <span className="text-slate-400">Royapettah, Chennai, India</span>
                                </li>
                                <li className="flex flex-col gap-1 md:gap-2">
                                    <span className="text-white font-bold">Inquiries</span>
                                    <a href={`mailto:${config.email}`} className="text-brand-accent hover:text-white transition-colors underline underline-offset-4 break-all">
                                        {config.email}
                                    </a>
                                </li>
                                <li className="flex flex-col gap-1 md:gap-2">
                                    <span className="text-white font-bold">WhatsApp</span>
                                    <a href={`tel:${config.whatsappNumber.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                                        {config.whatsappNumber}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    <p>© {currentYear} {config.companyName}. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Trade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
