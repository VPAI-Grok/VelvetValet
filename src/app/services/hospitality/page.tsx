import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, TrendingUp, Gem, UserCheck, Utensils, Building } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Luxury Hotel & Restaurant Valet Toronto | Hospitality Partnerships",
    description: "White-label valet solutions for Toronto's finest hotels and restaurants. Elevate guest experience, increase RevPAR, and ensure 5-star service standards.",
    keywords: [
        "Hotel Valet Outsourcing Toronto",
        "Restaurant Valet Services Yorkville",
        "Luxury Hospitality Parking GTA",
        "Valet Staffing for Hotels",
        "Fine Dining Valet Toronto",
    ],
};

export default function HospitalityPartnershipsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Hospitality Valet Partnerships",
        provider: {
            "@type": "LocalBusiness",
            name: "The Velvet Valet",
        },
        areaServed: ["Toronto", "Yorkville", "King West", "Financial District"],
        description: "Premium white-label valet staffing and management for luxury hotels and fine dining establishments.",
        serviceType: "Valet Parking",
        audience: {
            "@type": "BusinessAudience",
            audienceType: "Hotel Managers, Restaurant Owners",
        },
    };

    const faqs = [
        {
            question: "Do you offer revenue-sharing models?",
            answer: "Yes. We offer flexible partnership models including revenue-share, flat management fee, or hybrid structures designed to turn your parking assets into a profitable revenue stream.",
        },
        {
            question: "How do you ensure your staff matches our brand?",
            answer: "We conduct brand immersion training for every site. Our valets learn your specific greeting standards, door protocols, and uniform requirements to act as a seamless extension of your own team.",
        },
        {
            question: "Can you provide 24/7 staffing for hotels?",
            answer: "Absolutely. We provide round-the-clock coverage for hotel operations, including overnight shifts, bellhop assistance, and front-door security presence.",
        },
        {
            question: "What technology do you use for ticketless valet?",
            answer: "We utilize SMS-based digital ticketing systems. Guests request their vehicle via text, pay on their phone, and receive real-time updates, reducing lobby congestion and enhancing the modern guest experience.",
        },
    ];

    return (
        <div className="pt-24 min-h-screen">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hospitality.png"
                        alt="Hotel valet entrance"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f]/80 to-[#0b0b0f]" />
                </div>
                <div className="relative z-10 container mx-auto px-6">
                    <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">
                        Strategic Partnerships
                    </p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                        Hotel & Restaurant<br />Valet Solutions
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                        We don't just park cars; we elevate your RevPAR and guest satisfaction scores. The preferred partner for Toronto's luxury hospitality sector.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="lg">
                            Partner With Us
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Philosophy / BLUF */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-6">The First & Last Impression</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            In luxury hospitality, the arrival and departure are the most critical touchpoints. A fumble at the front door can negate a flawless dining or stay experience.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            The Velvet Valet integrates deeply with your operations. We align with your doormen, concierge, and front desk to create a unified <strong>guest journey</strong>. We treat your driveway as your lobby's extension.
                        </p>
                        <ul className="space-y-3 mt-8">
                            {[
                                "Seamless brand integration",
                                "Revenue-generating parking strategies",
                                "Digital vehicle retrieval technology",
                                "Comprehensive liability protection"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                    <CheckCircle size={16} className="text-primary-gold shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-[400px] rounded-sm overflow-hidden border border-white/[0.04]">
                        <Image
                            src="/images/hospitality.png"
                            alt="Hospitality valet service"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </SectionWrapper>

            {/* Scenarios */}
            <section className="bg-surface py-20 border-y border-white/[0.04]">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Sector Expertise</h2>
                        <p className="text-gray-400">Tailored operations for high-demand environments.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <Building className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Luxury Hotels</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                24/7 operations, bell services, and luggage assistance. We manage long-term guests, VIP arrivals, and transient parking with hotel-grade professionalism.
                            </p>
                        </div>
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <Utensils className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Fine Dining</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Maximize table turnover by eliminating parking friction. We manage rapid ingress/egress during peak dinner rushes in tight urban footprints like Yorkville.
                            </p>
                        </div>
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <TrendingUp className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Revenue Optimization</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We analyze your parking inventory to maximize yield. From dynamic pricing to maximizing space utilization, we turn your lot into a profit center.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection items={faqs} />

            {/* CTA */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Elevate Your Guest Experience</h2>
                    <p className="text-gray-400 mb-8">Proposal requests responded to within 24 hours.</p>
                    <Link href="/contact">
                        <Button variant="primary" size="lg">Request Partnership Proposal</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
