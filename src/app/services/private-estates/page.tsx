import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, EyeOff, Map, VolumeX, Shield, Home } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Private Estate Valet Toronto | Bridle Path & Oakville Luxury Parking",
    description: "Discreet, white-glove valet for private residences in Toronto, Oakville, King City, and the GTA. Handling exotic cars and high-profile guest lists with total privacy.",
    keywords: [
        "Private Estate Valet Toronto",
        "Residential Valet Services Oakville",
        "Bridle Path Party Valet",
        "Luxury Home Parking Management",
        "Private Event Valet King City",
        "Discreet Valet Service GTA",
    ],
};

export default function PrivateEstateValetPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Private Estate Valet Services",
        provider: {
            "@type": "LocalBusiness",
            name: "The Velvet Valet",
        },
        areaServed: ["Toronto", "Oakville", "King City", "Vaughan", "Forest Hill"],
        description: "Discreet and secure valet parking services for private residences and luxury estates.",
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
            question: "How do you handle parking on narrow residential streets?",
            answer: "We conduct a site visit beforehand to map out a parking plan. We often utilize one side of the street, coordinate with neighbours, or arrange off-site parking at nearby lots with a discreet shuttle for your valet team.",
        },
        {
            question: "Do you sign Non-Disclosure Agreements (NDAs)?",
            answer: "Yes. Privacy is paramount. For high-profile events, our staff sign NDAs, and we can enforce 'no phone' policies for our team to ensure the complete privacy of your guests.",
        },
        {
            question: "Can you park exotic or vintage cars safely?",
            answer: "Our team includes senior valets specifically trained on supercars (Ferrari, Lamborghini, Rolls-Royce) and vintage vehicles. We know the quirks of high-end machinery and treat them with extreme care.",
        },
        {
            question: "Will you manage guest flow at the front door?",
            answer: "Absolutely. We act as gatekeepers. We can check guest lists, manage coat check, and ensure that only invited guests enter your private residence.",
        },
    ];

    return (
        <div className="pt-24 min-h-screen">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/private-estates.png"
                        alt="Private estate valet entrance"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f]/80 to-[#0b0b0f]" />
                </div>
                <div className="relative z-10 container mx-auto px-6">
                    <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">
                        Discretion & Elegance
                    </p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                        Private Estate Valet<br />Services
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                        Serving Toronto's most exclusive addresses in Bridle Path, Forest Hill, King City, and Oakville.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="lg">
                            Consult for Private Event
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Philosophy / BLUF */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-6">Your Home, Respectfully Served</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Hosting at home is intimate and personal. The last thing you want is a chaotic driveway or upset neighbours. We bring the polish of a five-star hotel arrival to your doorstep, with a focus on <strong>invisibility and grace</strong>.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Whether it's a backyard wedding in King City or a private dinner in Forest Hill, our team manages the logistics so you can be the host.
                        </p>
                        <ul className="space-y-3 mt-8">
                            {[
                                "Strictly confidential service (NDAs available)",
                                "Neighbourhood traffic mitigation",
                                "Supercar & luxury fleet specialists",
                                "Late-night departure management"
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
                            src="/images/private-estates.png"
                            alt="Private estate valet service"
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
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">The Art of Discretion</h2>
                        <p className="text-gray-400">Logistics designed for privacy and peace of mind.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <EyeOff className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Total Privacy</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                For high-profile hosts, privacy is non-negotiable. We offer unmarked uniforms if requested, sign confidentiality agreements, and ensure no unauthorized photography.
                            </p>
                        </div>
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <VolumeX className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Quiet Operations</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We respect your neighbours. Our teams use earpieces for communication to avoid shouting, and we manage vehicle staging to minimize engine noise and disruption.
                            </p>
                        </div>
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <Shield className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Asset Protection</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Your guests drive investments. We are fully insured and our senior staff are trained to handle everything from low-clearance sports cars to vintage classics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection items={faqs} />

            {/* CTA */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Planning a Private Event?</h2>
                    <p className="text-gray-400 mb-8">Schedule a complimentary site visit and logistics plan.</p>
                    <Link href="/contact">
                        <Button variant="primary" size="lg">Book a Site Visit</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
