"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/Button";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

const serviceLinks = [
    { name: "Weddings", href: "/services/wedding-valet" },
    { name: "Corporate", href: "/services/corporate-events" },
    { name: "Private Estates", href: "/services/private-estates" },
    { name: "Traffic Mgmt", href: "/services/traffic-management" },
    { name: "Hospitality", href: "/services/hospitality" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={clsx(
                "fixed w-full z-50 transition-all duration-500",
                scrolled
                    ? "bg-[#0b0b0f]/90 backdrop-blur-xl border-b border-white/[0.06] py-3"
                    : "bg-transparent border-b border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-3xl md:text-4xl text-primary-gold hover:text-accent-gold transition-colors" style={{ fontFamily: 'var(--font-script)' }}>
                    The Velvet Valet
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex gap-8 items-center">
                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <button className="text-[13px] uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-1 py-4">
                                Services
                            </button>

                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 bg-[#0b0b0f] border border-white/[0.1] rounded-sm p-2 w-56 shadow-xl"
                                    >
                                        <div className="flex flex-col">
                                            {serviceLinks.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    href={link.href}
                                                    className="px-4 py-3 text-sm text-gray-400 hover:text-primary-gold hover:bg-white/[0.03] transition-colors text-left uppercase tracking-wider"
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[13px] uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-5">
                        <a href="tel:6478864280" className="text-gray-400 hover:text-primary-gold transition-colors flex items-center gap-2">
                            <Phone size={14} strokeWidth={1.5} />
                            <span className="hidden lg:inline text-[13px] tracking-wider">(647) 886-4280</span>
                        </a>
                        <Link href="/contact">
                            <Button variant="primary" size="sm">
                                Request Quote
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary-gold p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-[#0b0b0f]/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
                    >
                        <div className="p-6 flex flex-col gap-5">
                            <div className="pb-4 border-b border-white/[0.04]">
                                <p className="text-xs text-primary-gold uppercase tracking-[0.2em] mb-4 font-medium">Services</p>
                                <div className="flex flex-col gap-3 pl-2">
                                    {serviceLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-gray-300 hover:text-white text-sm"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.08 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-base text-gray-300 hover:text-primary-gold block py-2 border-b border-white/[0.04] tracking-wide"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <Button variant="primary" className="w-full">
                                        Request Quote
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
