import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Building2, Car, Users, Timer, ShieldCheck, Briefcase } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Corporate Event Valet Toronto | Traffic Management & VIP Parking",
    description: "Premier corporate valet and traffic management for Toronto galas, conferences, and product launches. Serving Bay Street, King West, and the GTA.",
    keywords: [
        "Corporate Valet Toronto",
        "Event Parking Management GTA",
        "Traffic Control for Events Toronto",
        "VIP Valet Service Bay Street",
        "Gala Valet Parking",
        "Conference Parking Logistics",
    ],
};

export default function CorporateEventValetPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Corporate Event Valet & Traffic Management",
        provider: {
            "@type": "LocalBusiness",
            name: "The Velvet Valet",
        },
        areaServed: ["Toronto", "Mississauga", "Brampton", "Vaughan", "Markham"],
        description: "Professional traffic management and valet parking solutions for large-scale corporate events and high-profile galas.",
        serviceType: "Event Parking",
        audience: {
            "@type": "BusinessAudience",
            audienceType: "Event Planners, Corporate Directors",
        },
    };

    const faqs = [
        {
            question: "Can you handle high-volume arrivals for a 1,000+ guest gala?",
            answer: "Yes. We design custom traffic flow plans to manage rapid arrivals. By using multiple intake lanes, digital ticketing, and a large team of runners, we minimize wait times even during peak entry.",
        },
        {
            question: "Do you carry adequate insurance for corporate liability?",
            answer: "We carry comprehensive liability insurance specifically for valet operations. We can also name your company or venue as an additional insured on our certificate for the duration of the event.",
        },
        {
            question: "Are your attendants uniformed and professional?",
            answer: "Our 'brand ambassador' valet team is trained to reflect your corporate image. They wear crisp, professional uniforms and can even wear branded accessories to match your event theme if requested.",
        },
        {
            question: "Do you service venues with limited parking?",
            answer: "We specialize in challenging logistics. We can arrange off-site parking lots and coordinate shuttle services to seamlessly transport your guests to the front door.",
        },
    ];

    return (
        <div className="pt-24 min-h-screen">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/corporate-events.png"
                        alt="Corporate event valet setup"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f]/80 to-[#0b0b0f]" />
                </div>
                <div className="relative z-10 container mx-auto px-6">
                    <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">
                        Seamless Logistics
                    </p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                        Corporate Event Valet<br />& Traffic Solutions
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                        From Bay Street galas to large-scale conferences, we provide the logistical precision your brand demands.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="lg">
                            Request Corporate Proposal
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Philosophy / BLUF */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-6">Execution is Everything</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            In the corporate world, delays are unacceptable. Your guests include executives, investors, and key stakeholders. The arrival experience must be efficient, secure, and impressive.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            The Velvet Valet acts as your logistical partner. We don't just park cars; we design <strong>arrival waves</strong>, manage municipal permits for street usage, and coordinate with security teams to ensure a flawless execution.
                        </p>
                        <ul className="space-y-3 mt-8">
                            {[
                                "Volume traffic management plans",
                                "VIP & Executive priority lanes",
                                "Shuttle coordination for off-site parking",
                                "Full insurance & liability coverage"
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
                            src="/images/corporate-events.png"
                            alt="Corporate event valet logistics"
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
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Built for Business</h2>
                        <p className="text-gray-400">Tailored solutions for every corporate event scale.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <Building2 className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Charity Galas</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Maximize donations by starting the night right. We handle fundraising events with hundreds of guests, ensuring donors feel like VIPs from the moment they arrive.
                            </p>
                        </div>
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <ShieldCheck className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">VIP Roadshows</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Discreet, high-security valet for investor meetings and executive roadshows. We integrate with your security detail for seamless principal protection.
                            </p>
                        </div>
                        <div className="bg-[#0b0b0f] p-8 border border-white/[0.04] rounded-sm">
                            <Timer className="text-primary-gold mb-6" size={32} />
                            <h3 className="text-xl font-serif text-white mb-3">Product Launches</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                High-impact arrivals for media and influencers. We can position halo cars, manage red carpet drop-offs, and ensure the valet area is part of the brand experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection items={faqs} />

            {/* CTA */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Get a Custom Logistics Plan</h2>
                    <p className="text-gray-400 mb-8">Let us handle the traffic so you can focus on the business.</p>
                    <Link href="/contact">
                        <Button variant="primary" size="lg">Contact Our Events Team</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
