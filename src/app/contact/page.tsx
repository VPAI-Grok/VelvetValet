import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Us | Request a Valet Quote in Toronto & GTA",
    description: "Get in touch with The Velvet Valet for premium valet parking, traffic management, and concierge services. Request a custom quote for your event in Toronto and the Greater Toronto Area.",
    keywords: [
        "Contact Velvet Valet",
        "Valet Quote Toronto",
        "Event Parking Quote GTA",
        "Valet Services Inquiry",
        "Toronto Valet Contact",
    ],
    alternates: {
        canonical: "https://thevelvetvalet.com/contact",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
