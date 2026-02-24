import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Map, PhoneCall, Bus, Cone, HardHat, FileText } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Event Traffic Management Toronto | Parking Logistics & Control",
    description: "Expert traffic control and parking management for large-scale events in Toronto and the GTA. We coordinate permits, shuttles, and security for seamless venue operations.",
    keywords: [
        "Event Traffic Control Toronto",
        "Parking Management Services GTA",
        "Festival Parking Logistics",
        "Road Closure Permits Toronto",
        "Event Shuttle Coordination",
        "Traffic Marshals for Events",
    ],
};

export default function TrafficManagementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Event Traffic Management & Logistics",
        provider: {
            "@type": "LocalBusiness",
            name: "The Velvet Valet",
        },
        areaServed: ["Toronto", "Mississauga", "Vaughan", "Markham", "Brampton"],
        description: "Comprehensive traffic planning and parking management for festivals, concerts, and large-scale public events.",
        serviceType: "Traffic Control",
    };

    const faqs = [
        {
            question: "Who handles the necessary road occupancy permits?",
            answer: "We do. Our operations team works directly with the City of Toronto and GTA municipalities to secure all required Right-of-Way and Road Occupancy permits for your event.",
        },
        {
            question: "How do you coordinate with local police or paid duty officers?",
            answer: "For large events affecting major intersections, we coordinate directly with Toronto Police Service Paid Duty office to ensure officers are booked and briefed on our traffic plan.",
        },
        {
            question: "Can you design a shuttle loop for remote parking?",
            answer: "Yes. We design efficient shuttle routes to maximize frequency. We can also source and manage the shuttle bus vendors as part of a turnkey transportation package.",
        },
        {
            question: "Do you provide traffic marshals and signage?",
            answer: "We provide fully equipped traffic marshals with high-visibility gear, wands, and radios. We also design and deploy custom directional signage to guide guests from the highway to the parking lot.",
        },
    ];

    return (
        <div className="pt-24 min-h-screen">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/traffic-management.png"
                        alt="Event traffic control operations"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f]/80 to-[#0b0b0f]" />
                </div>
                <div className="relative z-10 container mx-auto px-6">
                    <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">
                        Master Planning
                    </p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                        Special Event<br />Traffic Management
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                        Complex logistics simplified. We design and execute traffic plans for festivals, concerts, and major venue events across the GTA.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="lg">
                            Get a Traffic Plan
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Philosophy / BLUF */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-6">Flow is Fundamental</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            A bottleneck at the entrance can ruin an event before it starts. We use data-driven planning to calculate arrival rates, stack lengths, and processing times to ensure continuous flow.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            From securing municipal road permits to deploying trained traffic marshals, The Velvet Valet takes full ownership of the exterior footprint of your event.
                        </p>
                        <ul className="space-y-3 mt-8">
                            {[
                                "CAD-drawn traffic flow plans",
                                "Municipal permit acquisition",
                                "Shuttle bus route coordination",
                                "Radio-coordinated traffic teams"
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
                            src="/images/traffic-management.png"
                            alt="Event traffic control center"
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
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Complete Logistical Support</h2>
                        <p className="text-gray-400">End-to-end transportation management services.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <FileText className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Permits & Planning</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We handle the bureaucracy. From lane closure applications to noise exemptions, our team ensures your event is fully compliant with local bylaws.
                            </p>
                        </div>
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <Bus className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Shuttle Operations</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Seamlessly connect remote parking lots to your venue. We manage bus schedules, driver communications, and passenger loading zones for maximum efficiency.
                            </p>
                        </div>
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <HardHat className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Site Safety</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Safety first. Our marshals separate pedestrian and vehicle traffic, manage emergency access lanes, and ensure a safe environment for all guests and staff.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection items={faqs} />

            {/* CTA */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Discuss Your Traffic Plan</h2>
                    <p className="text-gray-400 mb-8">Schedule a consultation with our operations director.</p>
                    <Link href="/contact">
                        <Button variant="primary" size="lg">Contact Operations</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
