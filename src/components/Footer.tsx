import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#08080c] text-gray-400 border-t border-white/[0.04] pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-14">
                    {/* Brand */}
                    <div className="space-y-5">
                        <Link href="/" className="text-3xl text-primary-gold" style={{ fontFamily: 'var(--font-script)' }}>
                            The Velvet Valet
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-500">
                            Elevating every arrival with white-glove service. The premier choice for luxury valet solutions in Toronto and beyond.
                        </p>
                        <div className="flex gap-4 pt-1">
                            <a href="#" className="text-gray-500 hover:text-primary-gold transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/thevelvetvalet" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-gold transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary-gold transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-sans text-gray-300 mb-6 uppercase tracking-[0.15em] font-semibold">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Careers", href: "/careers" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-white transition-colors text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xs font-sans text-gray-300 mb-6 uppercase tracking-[0.15em] font-semibold">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Wedding Valet", href: "/services/wedding-valet" },
                                { name: "Corporate Events", href: "/services/corporate-events" },
                                { name: "Private Estates", href: "/services/private-estates" },
                                { name: "Traffic Management", href: "/services/traffic-management" },
                                { name: "Hospitality Partnerships", href: "/services/hospitality" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-white transition-colors text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs font-sans text-gray-300 mb-6 uppercase tracking-[0.15em] font-semibold">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary-gold/60 shrink-0 mt-0.5" size={16} />
                                <span className="text-sm">Toronto & Greater Toronto Area<br />Ontario, Canada</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary-gold/60 shrink-0" size={16} />
                                <a href="tel:6478864280" className="text-sm hover:text-white transition-colors">(647) 886-4280</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary-gold/60 shrink-0" size={16} />
                                <a href="mailto:thevelvetvalet@gmail.com" className="text-sm hover:text-white transition-colors">thevelvetvalet@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
                    <p>&copy; {new Date().getFullYear()} The Velvet Valet. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
