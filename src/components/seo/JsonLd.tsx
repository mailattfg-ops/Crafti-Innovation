import { config } from "@/data/config";

export function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": config.companyName,
        "description": "Bespoke interiors, unique handmade products, and artisanal gift collections. Crafi Innovations combines traditional artistry with modern design.",
        "url": "https://www.crafiinnovations.com",
        "telephone": config.whatsappNumber,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Nandikkara, Thrissur",
            "name": "Crafi Innovations",
            "url": "https://crafi.in",
            "logo": "https://crafi.in/logo.png",
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
