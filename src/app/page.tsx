"use client";

import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Car, Shield, Users, Clock, Star, Award, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Velvet Valet",
    image: "https://thevelvetvalet.com/images/philosophy-team.jpg",
    "@id": "https://thevelvetvalet.com",
    url: "https://thevelvetvalet.com",
    telephone: "(647) 886-4280",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6532,
      longitude: -79.3832,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Toronto",
      },
      {
        "@type": "City",
        name: "Mississauga",
      },
      {
        "@type": "City",
        name: "Brampton",
      },
      {
        "@type": "City",
        name: "Vaughan",
      },
      {
        "@type": "City",
        name: "Oakville",
      },
      {
        "@type": "AdministrativeArea",
        name: "Greater Toronto Area",
      },
      {
        "@type": "AdministrativeArea",
        name: "Ontario",
      },
    ],
    priceRange: "$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.instagram.com/thevelvetvalet",
      "https://www.facebook.com/thevelvetvalet",
    ],
  };
  const services = [
    {
      title: "Valet Parking",
      description: "Professional, white-glove valet parking for luxury hotels, restaurants, and private residences.",
      icon: Car,
    },
    {
      title: "Event Parking",
      description: "Seamless parking management for weddings, galas, corporate events, and private functions.",
      icon: Users,
    },
    {
      title: "Traffic Management",
      description: "Expert traffic flow control ensuring smooth arrivals and departures at any venue.",
      icon: Shield,
    },
    {
      title: "Concierge Services",
      description: "Beyond parking — personalized guest assistance, vehicle detailing coordination, and more.",
      icon: Star,
    },
  ];

  const stats = [
    { number: "500+", label: "Events Served" },
    { number: "50K+", label: "Vehicles Parked" },
    { number: "99.9%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Operations" },
  ];

  const differentiators = [
    "Uniformed, professionally trained attendants",
    "Comprehensive insurance coverage",
    "GPS vehicle tracking systems",
    "Luxury vehicle specialists",
    "Custom-branded equipment available",
    "Bilingual staff upon request",
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />

      {/* Philosophy Section */}
      <SectionWrapper className="!pb-0 md:!pb-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
              Luxury Is in<br />the Details
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We believe that true luxury lies in invisible and seamless experiences. From the moment your guests arrive, our dedicated team ensures every vehicle is handled with the utmost care, professionalism, and attention to detail.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Every attendant is trained in hospitality etiquette, luxury vehicle handling, and guest interaction — ensuring your event&apos;s first and last impression is impeccable.
            </p>
            <Link href="/about" aria-label="Learn more about The Velvet Valet">
              <Button variant="outline" size="sm">
                About Us <ArrowRight size={14} className="ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative h-[300px] md:h-[480px] rounded-sm overflow-hidden">
              <Image
                src="/images/philosophy-team.jpg"
                alt="Luxury hotel lobby with professional concierge service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <section className="relative py-6 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/stats-bg-new.jpg"
            alt="Luxury hotel facade"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0b0b0f]/85" />
        </div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-serif text-primary-gold mb-2">{stat.number}</p>
                <p className="text-gray-400 text-xs uppercase tracking-[0.15em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper>
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </SectionWrapper>

      {/* Differentiators */}
      <section className="bg-surface py-16 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 leading-tight">
                The Velvet<br />Difference
              </h2>
              <ul className="space-y-5">
                {differentiators.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <CheckCircle size={16} className="text-primary-gold shrink-0" />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 grid grid-cols-2 gap-5"
            >
              <div className="bg-surface-light border border-white/[0.04] p-8 text-center rounded-sm">
                <Award size={28} className="text-primary-gold mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-white font-serif text-lg mb-1">Award-Winning</p>
                <p className="text-gray-500 text-xs">Service Excellence</p>
              </div>
              <div className="bg-surface-light border border-white/[0.04] p-8 text-center rounded-sm">
                <Shield size={28} className="text-primary-gold mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-white font-serif text-lg mb-1">Fully Insured</p>
                <p className="text-gray-500 text-xs">Complete Coverage</p>
              </div>
              <div className="bg-surface-light border border-white/[0.04] p-8 text-center rounded-sm">
                <Clock size={28} className="text-primary-gold mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-white font-serif text-lg mb-1">24/7 Ready</p>
                <p className="text-gray-500 text-xs">Always Available</p>
              </div>
              <div className="bg-surface-light border border-white/[0.04] p-8 text-center rounded-sm">
                <Star size={28} className="text-primary-gold mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-white font-serif text-lg mb-1">5-Star Rated</p>
                <p className="text-gray-500 text-xs">By Our Clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg-new.png"
            alt="Elegant event venue entrance at night"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0b0b0f]/80" />
        </div>
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">Get Started</p>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Ready to Elevate<br />Your Guest Experience?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
              Let us handle the first and last impression of your event. Request a custom quote today.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
