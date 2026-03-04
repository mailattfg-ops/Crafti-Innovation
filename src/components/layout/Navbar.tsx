"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-100 transition-all duration-700",
                "bg-white/95 backdrop-blur-md border-b border-slate-100 py-4"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between relative">
                {/* Logo - Typography Focused */}
                <Link href="/" className="flex items-center gap-4 group z-110">
                    <div className="flex flex-col">
                        <span className="text-3xl font-black tracking-tighter uppercase leading-none text-brand-dark group-hover:text-brand-accent transition-colors duration-500">
                            {config.companyName.split(' ')[0]}<span className="text-brand-accent">.</span>
                        </span>
                        <div className="flex items-center gap-2">
                            <div className="h-px w-8 bg-brand-accent group-hover:w-12 transition-all duration-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Innovations</span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation - Centered */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 relative group/link",
                                pathname === link.href ? "text-brand-accent" : "text-brand-dark opacity-60 hover:opacity-100"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-2 left-0 h-px bg-brand-accent transition-all duration-500",
                                pathname === link.href ? "w-full" : "w-0 group-hover/link:w-full"
                            )} />
                        </Link>
                    ))}
                </div>

                {/* Right Action */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="group relative px-10 py-5 bg-brand-dark text-white rounded-full font-black text-[10px] tracking-[0.3em] overflow-hidden transition-all duration-500 shadow-xl hover:shadow-brand-accent/20 active:scale-95 uppercase block"
                    >
                        <div className="relative z-10 flex flex-col items-center h-[12px] overflow-hidden">
                            <span className="transition-transform duration-500 group-hover:-translate-y-full">Direct Inquiry</span>
                            <span className="transition-transform duration-500 group-hover:-translate-y-full flex items-center gap-2 text-brand-accent">
                                Start Now <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-110 p-4 text-brand-dark hover:text-brand-accent transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu - Full Screen Editorial Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-white z-105 flex flex-col md:hidden transition-all duration-500 ease-in-out",
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
                )}
            >
                {/* Header Background */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light opacity-30 select-none z-0 pointer-events-none" />

                <div className="flex-1 flex flex-col justify-center px-12 relative z-10 font-black">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-brand-accent mb-12 block">Navigation</span>

                    <div className="flex flex-col gap-8">
                        {navLinks.map((link, idx) => (
                            <div
                                key={link.name}
                                className={cn(
                                    "transition-all duration-700",
                                    isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                )}
                                style={{ transitionDelay: `${200 + idx * 100}ms` }}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-5xl uppercase tracking-tighter transition-all duration-300 inline-block",
                                        pathname === link.href ? "text-brand-accent" : "text-brand-dark hover:text-brand-accent"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div
                        className={cn(
                            "mt-20 pt-12 border-t border-slate-100 transition-all duration-700 delay-700",
                            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        <Link
                            href="/contact"
                            className="text-2xl text-brand-dark hover:text-brand-accent transition-colors flex items-center gap-4 uppercase italic tracking-tight"
                            onClick={() => setIsOpen(false)}
                        >
                            Start a Project
                            <div className="h-px flex-1 bg-slate-200" />
                        </Link>
                    </div>
                </div>

                {/* Social / Info Footer */}
                <div className="p-12 text-slate-400 text-[10px] uppercase tracking-widest flex justify-between relative z-10">
                    <span>© {new Date().getFullYear()} Crafti Innovations</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-brand-accent">IG</a>
                        <a href="#" className="hover:text-brand-accent">TW</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
