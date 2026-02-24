"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0f]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-new.png"
                    alt="Luxury hotel entrance with professional valet service"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Multi-layer cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f]/70 via-[#0b0b0f]/30 to-[#0b0b0f]/80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0f]/50 via-transparent to-[#0b0b0f]/50 z-10" />
            </div>

            <div className="container mx-auto px-6 text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "60px" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-[1px] bg-primary-gold mb-8"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-primary-gold/80 uppercase text-[11px] md:text-xs font-sans font-medium tracking-[0.3em] mb-6"
                    >
                        Toronto&apos;s Premier Valet Service
                    </motion.p>

                    <h1
                        className="text-7xl md:text-9xl lg:text-[10rem] text-primary-gold mb-8 leading-none"
                        style={{ fontFamily: 'var(--font-script)' }}
                    >
                        The Velvet Valet
                    </h1>

                    <p className="text-primary-gold/70 text-base md:text-lg max-w-lg mx-auto mb-12 font-light leading-relaxed">
                        The art of arrival. Seamless, white-glove valet experiences for the world&apos;s most exclusive venues and events.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button variant="primary" size="lg">
                                Book Services
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg">
                                Explore
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0b0b0f] to-transparent z-10 pointer-events-none" />
        </div>
    );
}
