"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Generate JSON-LD Schema for the FAQ
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <section className="py-20 md:py-28 bg-surface-light border-y border-white/[0.04]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-6 md:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">
                        Common Questions
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        Expert Answers
                    </h2>
                </div>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="border border-white/[0.06] rounded-sm overflow-hidden bg-surface"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                            >
                                <span className="text-lg font-serif text-white group-hover:text-primary-gold transition-colors">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`text-primary-gold/70 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    size={20}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/[0.04] pt-4">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
