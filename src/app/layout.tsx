import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
    title: {
        default: `${config.companyName} | Artistry in Every Detail`,
        template: `%s | ${config.companyName}`
    },
    description: "Bespoke interiors, unique handmade products, and artisanal gift collections. Crafti Innovations combines traditional artistry with modern design to create lasting impressions.",
    keywords: ["Handmade Products", "Bespoke Interiors", "Artisanal Gifts", "Traditional Craftsmanship", "Kerala Artistry", "Interior Design Kerala", "Custom Handicrafts", "Export Quality Crafts"],
    authors: [{ name: "Crafti Innovations" }],
    creator: "Crafti Innovations",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://craftiinnovations.com", // Placeholder for actual domain
        siteName: config.companyName,
        title: config.companyName,
        description: "Leading the craft sector with cultural authenticity and modern innovation.",
        images: [
            {
                url: "/images/home_hero_new_1772613660238.png",
                width: 1200,
                height: 630,
                alt: config.companyName,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: config.companyName,
        description: "Traditional craftsmanship meets modern innovation.",
        images: ["/images/home_hero_new_1772613660238.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                <JsonLd />
                <Navbar />
                {children}
                <FloatingWhatsApp />
                <Footer />
            </body>
        </html>
    );
}
