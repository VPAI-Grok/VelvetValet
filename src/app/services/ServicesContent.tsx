"use client";

import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import { Car, Shield, Users, Sparkles, Clock, Star, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesContent() {
    const services = [
        {
            title: "Valet Parking",
            description: "Professional valet parking for hotels, restaurants, private clubs, and residential buildings. Our uniformed attendants provide a premium first impression.",
            icon: Car,
        },
        {
            title: "Event Parking",
            description: "Complete parking management for weddings, corporate galas, holiday parties, and private celebrations of any size.",
            icon: Users,
        },
        {
            title: "Traffic Management",
            description: "Expert traffic flow coordination — from guest arrival sequencing to lot management — ensuring zero congestion at your venue.",
            icon: Shield,
        },
        {
            title: "Concierge Services",
            description: "Elevated guest services including vehicle detailing coordination, personal greetings, umbrella service, and custom requests.",
            icon: Sparkles,
        },
        {
            title: "24/7 Operations",
            description: "Round-the-clock valet coverage for hotels, hospitals, and venues that never close. Reliable service, any hour.",
            icon: Clock,
        },
        {
            title: "Corporate Solutions",
            description: "Tailored valet programs for office towers, corporate campuses, and recurring business events with dedicated account management.",
            icon: Star,
        },
    ];

    const process = [
        { step: "01", title: "Consultation", description: "We assess your venue, traffic flow, and guest capacity to develop a custom plan." },
        { step: "02", title: "Planning", description: "Detailed logistics — staffing levels, equipment placement, arrival/departure timing." },
        { step: "03", title: "Execution", description: "Our trained team arrives early, sets up, and delivers flawless service throughout." },
        { step: "04", title: "Follow-Up", description: "Post-event debrief and reporting to continuously improve future engagements." },
    ];

    return (
        <div className="pt-24 min-h-screen">
            {/* Header */}
            <section className="relative py-20 md:py-32 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/services-detail.png"
                        alt="Luxury hotel entrance with valet service"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#0b0b0f]/75" />
                </div>
                <div className="relative z-10">
                    <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">What We Do</p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Our Services</h1>
                    <p className="text-gray-400 max-w-md mx-auto">Comprehensive valet and parking solutions for every occasion.</p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-8"
                    >
                        <ArrowDown size={20} className="text-primary-gold/50 mx-auto animate-bounce" />
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} {...service} index={index} />
                    ))}
                </div>
            </SectionWrapper>

            {/* Our Process */}
            <section className="bg-surface py-16 md:py-28">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="text-center mb-10 md:mb-14">
                        <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">How It Works</p>
                        <h2 className="text-3xl md:text-4xl font-serif text-white">Our Process</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative"
                            >
                                <p className="text-primary-gold/20 text-5xl font-serif mb-4">{item.step}</p>
                                <h3 className="text-lg font-serif text-white mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
