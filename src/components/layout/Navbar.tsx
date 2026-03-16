"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
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
                    <div className="relative h-10 w-10 lg:h-16 lg:w-16 transition-all duration-500">
                        <Image
                            src="/images/logo.png"
                            alt="Crafi Innovations Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation - Centered */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4 lg:gap-10 transition-all duration-500">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-[9px] lg:text-[11px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] transition-all duration-500 relative group/link whitespace-nowrap",
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
                        className="group relative px-6 py-3 lg:px-10 lg:py-5 bg-brand-dark text-white rounded-full font-black text-[9px] lg:text-[10px] tracking-[0.2em] lg:tracking-[0.3em] overflow-hidden transition-all duration-500 shadow-xl hover:shadow-brand-accent/20 active:scale-95 uppercase block"
                    >
                        <div className="relative z-10 flex flex-col items-center h-[10px] lg:h-[12px] overflow-hidden">
                            <span className="transition-transform duration-500 group-hover:-translate-y-full">Direct Inquiry</span>
                            <span className="transition-transform duration-500 group-hover:-translate-y-full flex items-center gap-2 text-brand-accent">
                                Start Now <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                </div>

                {/* Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden relative z-110 p-4 text-brand-dark hover:text-brand-accent transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="w-8 h-8 text-white" />
                    ) : (
                        <Menu className="w-8 h-8" />
                    )}
                </button>
            </div>

            {/* Mobile Menu - Premium Editorial Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-105 flex flex-col md:hidden transition-all duration-700 ease-in-out bg-neutral-900 h-dvh",
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                )}
            >
                {/* Visual Panels - Solid Backgrounds */}
                <div className="absolute inset-0 flex">
                    <div className={cn(
                        "flex-1 bg-neutral-900 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]",
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    )} />
                    <div className={cn(
                        "w-[5vw] bg-brand-accent transition-transform duration-700 delay-100 ease-[cubic-bezier(0.77,0,0.175,1)]",
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    )} />
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-between pt-32 px-10 bg-brand-dark min-h-0 overflow-y-auto">
                    <nav className="flex flex-col gap-4 py-8">
                        {navLinks.map((link, idx) => (
                            <div
                                key={link.name}
                                className={cn(
                                    "overflow-hidden transition-all duration-700",
                                    isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                                )}
                                style={{ transitionDelay: `${400 + idx * 100}ms` }}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-3xl font-black uppercase tracking-tighter transition-all duration-300 inline-block py-2",
                                        pathname === link.href ? "text-brand-accent italic pl-4" : "text-white hover:text-brand-accent"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                    </nav>

                    <div
                        className={cn(
                            "mt-auto mb-12 transition-all duration-1000 delay-1000 mt-4",
                            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        <Link
                            href="/contact"
                            className="group flex items-center justify-between p-6 border border-white/10 hover:border-brand-accent transition-colors duration-500"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="text-white text-lg font-black uppercase tracking-tighter">Start your inquiry</span>
                            <ArrowUpRight className="w-6 h-6 text-brand-accent group-hover:rotate-45 transition-transform duration-500" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className={cn(
                    "relative z-10 p-4 border-t border-white/5 flex justify-between items-center bg-brand-dark backdrop-blur-sm transition-opacity duration-1000 delay-1200",
                    isOpen ? "opacity-100" : "opacity-0"
                )}>
                    <span className="text-[9px] uppercase tracking-widest text-white/30 font-black">
                        © 2024 Crafi Artistry
                    </span>
                    <div className="flex gap-6">
                        {['IG', 'TW', 'LI'].map((social) => (
                            <a key={social} href="#" className="text-[10px] font-black text-white hover:text-brand-accent transition-colors tracking-widest uppercase">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
