import { Hero } from "@/components/home/Hero";
import { Clients } from "@/components/home/Clients";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { editorialSections } from "@/data/homeData";
import { EditorialBlock } from "@/components/ui/EditorialBlock";

export const metadata: Metadata = {
    title: "Crafti Innovations | Artistry in Every Detail",
    description: "Premium handmade products, bespoke interiors, and unique gifts. Combining traditional craftsmanship with modern innovation.",
};

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-brand-accent selection:text-white bg-white">
            <Hero />

            {/* Testimonials and Clients remain as they are high-level proof points */}
            <Clients />
            <WhyChooseUs />
            <ScrollReveal><Testimonials /></ScrollReveal>
        </main>
    );
}
