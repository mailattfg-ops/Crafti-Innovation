import { ContactClient } from "@/components/contact/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Start a conversation with Crafti Innovations. Inquire about our bespoke interiors, handmade products, and international trade expertise.",
};

export default function Page() {
    return <ContactClient />;
}
