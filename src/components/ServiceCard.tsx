"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index?: number;
}

export default function ServiceCard({ title, description, icon: Icon, index = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative p-8 bg-surface border border-white/[0.04] hover:border-primary-gold/20 transition-all duration-500 rounded-sm overflow-hidden"
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="mb-6 inline-flex p-3 rounded-sm bg-primary-gold/[0.06] text-primary-gold group-hover:bg-primary-gold/10 transition-all duration-500 relative z-10">
                <Icon size={28} strokeWidth={1.5} />
            </div>

            <h3 className="text-lg font-serif text-white mb-3 tracking-wide group-hover:text-primary-gold transition-colors duration-300 relative z-10">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300 relative z-10">
                {description}
            </p>
        </motion.div>
    );
}
