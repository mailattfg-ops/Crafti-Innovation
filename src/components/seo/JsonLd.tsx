import { config } from "@/data/config";

export function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": config.companyName,
        "description": "Bespoke interiors, unique handmade products, and artisanal gift collections. Crafti Innovations combines traditional artistry with modern design.",
        "url": "https://www.craftiinnovations.com",
        "telephone": config.whatsappNumber,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Nandikkara, Thrissur",
            "addressLocality": "Thrissur",
            "addressRegion": "Kerala",
            "postalCode": "680301",
            "addressCountry": "IN"
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
