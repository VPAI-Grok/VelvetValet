"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { Heart, Shield, Star, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutContent() {
    const values = [
        { icon: Shield, title: "Trust", description: "Every vehicle is treated as our own — fully insured and handled with the utmost care." },
        { icon: Star, title: "Excellence", description: "We recruit and train the top 5% of applicants to maintain the highest service standards." },
        { icon: Heart, title: "Passion", description: "Hospitality is our craft. We genuinely care about creating memorable first impressions." },
        { icon: Target, title: "Precision", description: "From guest count planning to real-time traffic flow — every detail is meticulously managed." },
        { icon: Users, title: "Teamwork", description: "Our crew operates as a synchronized unit, adapting fluidly to any event\u2019s needs." },
    ];

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="relative py-16 md:py-28 overflow-hidden">
                <div className="container mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2"
                    >
                        <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">About Us</p>
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                            The Standard in<br />Luxury Valet
                        </h1>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Founded with a vision to redefine valet parking, The Velvet Valet has become the trusted partner for Toronto&apos;s most prestigious hotels, restaurants, and event venues.
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            We combine hospitality excellence with operational precision — ensuring every guest&apos;s arrival and departure is seamless, secure, and memorable.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative h-[300px] md:h-[480px] rounded-sm overflow-hidden">
                            <Image
                                src="/images/philosophy-team.jpg"
                                alt="Professional team collaborating at a modern office"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/30 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-surface py-16 md:py-28">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="text-center mb-14">
                        <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">Our Values</p>
                        <h2 className="text-3xl md:text-4xl font-serif text-white">What Drives Us</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="bg-surface-light border border-white/[0.04] p-8 rounded-sm"
                            >
                                <value.icon size={24} className="text-primary-gold mb-5" strokeWidth={1.5} />
                                <h3 className="text-lg font-serif text-white mb-3">{value.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commitment */}
            <SectionWrapper>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">Our Promise</p>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Committed to Excellence</h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        Every member of The Velvet Valet team undergoes rigorous training in hospitality, luxury vehicle handling, and professional etiquette.
                    </p>
                    <p className="text-gray-500 leading-relaxed">
                        We don&apos;t just park cars — we create experiences. From the warm welcome to the seamless departure, every touchpoint is designed to reflect the luxury and attention to detail that your guests deserve.
                    </p>
                </div>
            </SectionWrapper>

            {/* ── BLOG: The Gold Standard of Arrival ── */}
            <section className="bg-surface border-t border-white/[0.04] py-20 md:py-32">
                <div className="container mx-auto px-6 md:px-8 max-w-4xl">

                    {/* Blog header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">Our Story</p>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                            The Gold Standard of Arrival
                        </h2>
                        <div className="w-16 h-px bg-primary-gold/40 mx-auto mb-8" />
                        <p className="text-gray-400 leading-relaxed text-lg max-w-2xl mx-auto">
                            In a world where time is the ultimate luxury, the way your guests arrive says everything about your brand. At The Velvet Valet, we understand that we are the first and last point of contact for your guests. We don&apos;t just park cars; we provide a seamless bridge between the commute and the experience.
                        </p>
                    </motion.div>

                    {/* Hero image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative h-[320px] md:h-[480px] rounded-sm overflow-hidden mb-20 border border-white/[0.04]"
                    >
                        <Image
                            src="/images/hero-valet.jpg"
                            alt="Velvet Valet attendant greeting a guest at a luxury venue entrance"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 896px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/60 via-transparent to-transparent" />
                    </motion.div>

                    {/* Section: Why the Velvet Experience Matters */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
                            Why the &ldquo;Velvet&rdquo; Experience Matters
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-10">
                            First impressions are formed in seconds. When a guest pulls up to your entrance, they shouldn&apos;t be met with the stress of navigation — they should be met with a smile, a door held open, and the immediate sense that they&apos;ve arrived somewhere special.
                        </p>

                        {/* Three feature cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Users,
                                    title: "Elite Professionalism",
                                    body: "Our team is trained not just in precision driving, but in the art of hospitality. We act as an extension of your staff, mirroring your values and tone.",
                                },
                                {
                                    icon: Target,
                                    title: "Operational Excellence",
                                    body: "Using the latest in logistics technology, we ensure quick retrieval times and organized site management, even for high-volume events.",
                                },
                                {
                                    icon: Shield,
                                    title: "Safety First",
                                    body: "We treat every vehicle with the utmost care. With comprehensive insurance coverage and rigorous driver screening, your guests' peace of mind is our priority.",
                                },
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-[#0b0b0f] border border-white/[0.04] p-7 rounded-sm"
                                >
                                    <card.icon size={22} className="text-primary-gold mb-4" strokeWidth={1.5} />
                                    <h4 className="text-base font-serif text-white mb-3">{card.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Section: Versatile Solutions — with side image */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
                                    Versatile Solutions for Every Venue
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Every location has a different pulse. We tailor our operations to fit the specific flow of your business.
                                </p>

                                {/* Service area table */}
                                <div className="border border-white/[0.06] rounded-sm overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                                                <th className="text-left px-5 py-3 text-primary-gold/80 font-sans font-medium text-[11px] uppercase tracking-wider">Service Area</th>
                                                <th className="text-left px-5 py-3 text-primary-gold/80 font-sans font-medium text-[11px] uppercase tracking-wider">Our Focus</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { area: "Fine Dining & Hotels", focus: "Sophistication and white-glove service that complements your 5-star rating." },
                                                { area: "Private & Luxury Events", focus: "Discreet, efficient handling for weddings, galas, and high-profile gatherings." },
                                                { area: "Healthcare Facilities", focus: "Compassionate, quick assistance for patients and visitors who need it most." },
                                                { area: "Corporate Offices", focus: "Streamlined arrivals that respect the busy schedules of your executives and clients." },
                                            ].map((row, i) => (
                                                <tr key={i} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors">
                                                    <td className="px-5 py-4 text-white font-medium whitespace-nowrap">{row.area}</td>
                                                    <td className="px-5 py-4 text-gray-500 leading-relaxed">{row.focus}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="relative h-[360px] lg:h-full min-h-[320px] rounded-sm overflow-hidden border border-white/[0.04]">
                                <Image
                                    src="/images/hospitality.png"
                                    alt="Velvet Valet team providing white-glove service at a luxury hotel entrance"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 448px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/40 to-transparent" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Pull quote */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative my-16 px-8 md:px-12 py-10 border-l-2 border-primary-gold/50 bg-white/[0.02] rounded-r-sm"
                    >
                        <span className="absolute top-4 left-6 text-5xl text-primary-gold/20 font-serif leading-none select-none">&ldquo;</span>
                        <p className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed italic">
                            The difference between a good event and a great one is the details. We handle the heavy lifting so you can focus on your guests.
                        </p>
                    </motion.blockquote>

                    {/* Section: Redefining the Curb — with image */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
                    >
                        <div className="relative h-[300px] rounded-sm overflow-hidden border border-white/[0.04] order-2 lg:order-1">
                            <Image
                                src="/images/corporate-events.png"
                                alt="Professional valet team managing arrivals at a corporate event"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 448px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/40 to-transparent" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
                                Redefining the Curb
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                At The Velvet Valet, we believe the curb is your front door. By removing the friction of parking, we allow your guests to start their experience on a high note and end it with the convenience they deserve.
                            </p>
                            <p className="text-gray-500 leading-relaxed">
                                Every detail — from the way we greet a guest to how we return a vehicle — is an opportunity to reinforce the quality of your brand. That&apos;s a responsibility we take seriously.
                            </p>
                        </div>
                    </motion.div>

                    {/* Blog CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center pt-8 border-t border-white/[0.06]"
                    >
                        <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">Ready to Elevate?</p>
                        <p className="text-2xl md:text-3xl font-serif text-white mb-8">Let us elevate your entrance.</p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-primary-gold text-[#0b0b0f] px-8 py-3.5 text-[13px] font-sans font-semibold uppercase tracking-[0.15em] hover:bg-primary-gold/90 transition-colors rounded-sm"
                        >
                            Request a Quote
                        </a>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
