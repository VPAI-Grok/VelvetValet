import { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
    title: "Careers | Join Toronto's Premier Valet Team",
    description: "Join The Velvet Valet — Toronto's luxury valet company. We're hiring valet attendants, shift leads, and traffic directors across the GTA. Competitive pay, flexible hours, and growth opportunities.",
    keywords: [
        "Valet Jobs Toronto",
        "Valet Attendant Jobs GTA",
        "Parking Jobs Toronto",
        "Velvet Valet Careers",
        "Traffic Director Jobs Ontario",
    ],
    alternates: {
        canonical: "https://thevelvetvalet.com/careers",
    },
};

export default function CareersPage() {
    return <CareersContent />;
}
