import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Our Services | Valet Parking, Traffic Management & Concierge",
    description: "Explore The Velvet Valet's full range of premium services: valet parking, event parking management, traffic coordination, concierge services, and 24/7 operations across Toronto and the GTA.",
    keywords: [
        "Valet Services Toronto",
        "Event Parking Management GTA",
        "Traffic Management Ontario",
        "Concierge Services Toronto",
        "Corporate Valet Solutions",
        "24/7 Valet Parking",
    ],
    alternates: {
        canonical: "https://thevelvetvalet.com/services",
    },
};

export default function ServicesPage() {
    return <ServicesContent />;
}
