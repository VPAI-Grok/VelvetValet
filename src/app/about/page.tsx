import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About Us | Luxury Valet Services in Toronto & GTA",
    description: "Learn about The Velvet Valet — Toronto's premier luxury valet company. Trusted by top hotels, restaurants, and event venues across the GTA for white-glove parking services.",
    keywords: [
        "About Velvet Valet",
        "Luxury Valet Company Toronto",
        "Valet Parking GTA",
        "Premium Valet Services Ontario",
        "Toronto Event Valet Company",
    ],
    alternates: {
        canonical: "https://thevelvetvalet.com/about",
    },
};

export default function AboutPage() {
    return <AboutContent />;
}
