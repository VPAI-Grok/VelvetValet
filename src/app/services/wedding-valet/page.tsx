import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Heart, Users, MapPin, Calendar, Star } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Luxury Wedding Valet Toronto | Premium Guest Arrival Services",
    description: "The Velvet Valet specializes in luxury wedding valet for South Asian, Jewish, and Western weddings in Toronto, Brampton, and Mississauga.",
    keywords: [
        "Wedding Valet Toronto",
        "Luxury Wedding Parking GTA",
        "South Asian Wedding Valet Brampton",
        "Jewish Wedding Valet Toronto",
        "Wedding Guest Transport",
        "Valet for Private Estate Wedding",
    ],
};

export default function WeddingValetPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Luxury Wedding Valet Services",
        provider: {
            "@type": "LocalBusiness",
            name: "The Velvet Valet",
        },
        areaServed: ["Toronto", "Mississauga", "Brampton", "Vaughan", "Oakville"],
        description: "Premium valet parking and guest arrival architecture for luxury weddings in the Greater Toronto Area.",
        serviceType: "Valet Parking",
        offers: {
            "@type": "Offer",
            priceCurrency: "CAD",
            price: "Variable",
            availability: "https://schema.org/InStock",
        },
    };

    const faqs = [
        {
            question: "How many valet attendants do I need for a 250-guest wedding?",
            answer: "For a seamless luxury experience, we recommend a ratio of 1 attendant per 10-15 cars. For 250 guests (approx. 100-120 cars), 8-10 attendants ensures zero wait times during the peak arrival rush.",
        },
        {
            question: "Can your team handle South Asian weddings with a Baraat?",
            answer: "Absolutely. We specialize in South Asian weddings in Brampton and Mississauga. We coordinate ensuring the Baraat procession has a clear route while simultaneously managing guest arrivals and parking, often using separate teams for efficiency.",
        },
        {
            question: "Do you service private estate weddings in Oakville or King City?",
            answer: "Yes, private estate weddings are a core specialty. We conduct site visits to plan off-site parking, shuttle coordination, and on-street permit management to ensure neighbours are not disturbed.",
        },
        {
            question: "What happens if a guest leaves something in their car?",
            answer: "Our 'runners' are stationed to retrieve items immediately. We treat this as a concierge service—whether it's a forgotten lipstick or a comfortable pair of shoes, we retrieve it quickly and discreetly.",
        },
    ];

    return (
        <div className="pt-24 min-h-screen">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/wedding-valet.png"
                        alt="Luxury wedding valet setup"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f]/80 to-[#0b0b0f]" />
                </div>
                <div className="relative z-10 container mx-auto px-6">
                    <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">
                        Guest Arrival Architecture
                    </p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                        Luxury Wedding Valet<br />in Toronto & GTA
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                        Ensure your special day begins with a flawless first impression. From 500-guest luxury galas to intimate estate weddings, we design the perfect arrival experience.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="lg">
                            Request a Wedding Quote
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Philosophy / BLUF */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-6">More Than Just Parking</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            We believe the "red carpet" experience starts the moment your guests hand over their keys. A disorganized arrival can set the wrong tone for the entire evening.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            The Velvet Valet doesn't just park cars; we execute a choreographed <strong>arrival architecture</strong>. Whether it's managing a <em>Baraat</em> procession in Brampton or a black-tie drop-off in Yorkville, our uniformed staff are trained in white-glove hospitality.
                        </p>
                        <ul className="space-y-3 mt-8">
                            {[
                                "Uniformed, bilingual staff available",
                                "Coordination with wedding planners & venue security",
                                "Umbrella service for rainy days",
                                "Gift & floral retrieval assistance"
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
                            src="/images/wedding-valet.png"
                            alt="Luxury wedding valet service"
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
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Tailored for Every Tradition</h2>
                        <p className="text-gray-400">We specialize in the unique logistics of Toronto's diverse luxury weddings.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <Star className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">South Asian Weddings</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Expert management of high-volume guest counts (500-1000+). We coordinate parking around the Baraat, manage flow during tight timelines, and handle multi-day events (Sangeet, Reception).
                            </p>
                        </div>
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <Heart className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Western Luxury</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Seamless white-glove service for black-tie affairs at venues like The Ritz-Carlton or Shangri-La. Emphasis on door service, coat check coordination, and VIP vehicle display.
                            </p>
                        </div>
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <MapPin className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Private Estates</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Discreet operations for tented weddings in King City or Oakville. We manage off-site shuttles, coordinate with neighbours, and ensure supreme privacy and security.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection items={faqs} />

            {/* CTA */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Secure Your Date</h2>
                    <p className="text-gray-400 mb-8">2026 dates are booking fast. Reserve Toronto's premier wedding valet team today.</p>
                    <Link href="/contact">
                        <Button variant="primary" size="lg">Check Availability</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
