"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { DollarSign, Clock, Heart, TrendingUp, Sun, ChevronRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function CareersContent() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Collect availability checkboxes
        const availabilityCheckboxes = form.querySelectorAll<HTMLInputElement>('input[name="availability"]:checked');
        const availability = Array.from(availabilityCheckboxes).map((cb) => cb.value);

        const body = {
            fullName: formData.get("fullName") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            address: formData.get("address") as string,
            position: formData.get("position") as string,
            preferredLocation: formData.get("preferredLocation") as string,
            availability,
            driversLicense: formData.get("driversLicense") as string,
            drivingExperience: formData.get("drivingExperience") as string,
        };

        try {
            const res = await fetch("/api/careers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus("success");
            form.reset();
        } catch (err) {
            setStatus("error");
            setErrorMessage(
                err instanceof Error ? err.message : "Failed to send. Please try again."
            );
        }
    };

    const benefits = [
        { icon: DollarSign, title: "Competitive Pay & Tips", description: "Earn top wages in the industry with significant tip potential." },
        { icon: Clock, title: "Flexible Scheduling", description: "Shifts that work around your life, education, and other commitments." },
        { icon: Heart, title: "Health Benefits", description: "Comprehensive coverage for full-time team members." },
        { icon: TrendingUp, title: "Professional Growth", description: "Clear pathways for advancement into management roles." },
        { icon: Sun, title: "Paid Time Off", description: "Earned leave to recharge and enjoy life." },
    ];

    const inputStyles = "w-full bg-[#0b0b0f] border border-white/[0.06] p-3 text-white text-sm focus:outline-none focus:border-primary-gold/40 transition-all rounded-sm placeholder:text-gray-600";
    const labelStyles = "text-[11px] text-gray-500 uppercase tracking-[0.1em] font-sans";

    return (
        <div className="pt-24 min-h-screen">
            {/* Header */}
            <section className="relative py-24 md:py-28 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero-new.png"
                        alt="Luxury hotel lobby"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#0b0b0f]/80" />
                </div>
                <div className="relative z-10">
                    <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">Careers</p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Join Our Team</h1>
                    <p className="text-gray-400 max-w-md mx-auto">Be the face of luxury. A career with The Velvet Valet is more than just parking cars.</p>
                </div>
            </section>

            {/* Benefits */}
            <SectionWrapper>
                <div className="text-center mb-14">
                    <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">Perks</p>
                    <h2 className="text-3xl md:text-4xl font-serif text-white">Why Work With Us</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="bg-surface border border-white/[0.04] p-7 rounded-sm"
                        >
                            <benefit.icon size={22} className="text-primary-gold mb-4" strokeWidth={1.5} />
                            <h3 className="text-base font-serif text-white mb-2">{benefit.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Application Form */}
            <section className="bg-surface py-20 md:py-28">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-serif text-white mb-8">Apply Now</h2>

                            {/* Success Message */}
                            {status === "success" && (
                                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-sm flex items-start gap-3">
                                    <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-emerald-300 text-sm font-medium">Application Submitted</p>
                                        <p className="text-emerald-400/70 text-xs mt-1">Thank you for applying. We will review your qualifications and contact you soon.</p>
                                    </div>
                                </div>
                            )}

                            {/* Error Message */}
                            {status === "error" && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-sm flex items-start gap-3">
                                    <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-red-300 text-sm font-medium">Failed to Submit</p>
                                        <p className="text-red-400/70 text-xs mt-1">{errorMessage}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Personal Info */}
                                <div>
                                    <h3 className="text-[11px] text-primary-gold/70 uppercase tracking-[0.12em] font-sans font-medium mb-4 border-b border-white/[0.04] pb-2">Personal Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className={labelStyles}>Full Name *</label>
                                            <input name="fullName" required className={inputStyles} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className={labelStyles}>Email *</label>
                                            <input name="email" required type="email" className={inputStyles} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className={labelStyles}>Phone *</label>
                                            <input name="phone" required type="tel" className={inputStyles} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className={labelStyles}>Address</label>
                                            <input name="address" className={inputStyles} />
                                        </div>
                                    </div>
                                </div>

                                {/* Job Details */}
                                <div>
                                    <h3 className="text-[11px] text-primary-gold/70 uppercase tracking-[0.12em] font-sans font-medium mb-4 border-b border-white/[0.04] pb-2">Employment Details</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className={labelStyles}>Position Applied For *</label>
                                            <select name="position" className={`${inputStyles} appearance-none`}>
                                                <option className="bg-[#0b0b0f]">Valet Attendant</option>
                                                <option className="bg-[#0b0b0f]">Traffic Director</option>
                                                <option className="bg-[#0b0b0f]">Shift Lead</option>
                                                <option className="bg-[#0b0b0f]">Operations Manager</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className={labelStyles}>Preferred Location *</label>
                                            <input name="preferredLocation" required className={inputStyles} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className={`${labelStyles} mb-3 block`}>Availability</label>
                                            <div className="flex flex-wrap gap-4">
                                                {["Weekdays", "Weekends", "Evenings", "Holidays", "Flexible"].map((opt) => (
                                                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                        <input name="availability" value={opt} type="checkbox" className="accent-primary-gold w-3.5 h-3.5" />
                                                        <span className="text-gray-400 text-sm">{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Requirements */}
                                <div>
                                    <h3 className="text-[11px] text-primary-gold/70 uppercase tracking-[0.12em] font-sans font-medium mb-4 border-b border-white/[0.04] pb-2">Requirements</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className={labelStyles}>Valid Driver&apos;s License? *</label>
                                            <select name="driversLicense" className={`${inputStyles} appearance-none`}>
                                                <option className="bg-[#0b0b0f]">Yes</option>
                                                <option className="bg-[#0b0b0f]">No</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className={labelStyles}>Years of Driving Experience</label>
                                            <input name="drivingExperience" type="number" className={inputStyles} />
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input required type="checkbox" className="accent-primary-gold w-3.5 h-3.5" />
                                            <span className="text-gray-400 text-sm">I consent to a background check as part of the hiring process. *</span>
                                        </label>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    disabled={status === "loading"}
                                >
                                    {status === "loading" ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Loader2 className="animate-spin" size={16} />
                                            Submitting...
                                        </span>
                                    ) : (
                                        "Submit Application"
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-primary-gold/[0.04] border border-primary-gold/10 p-8 rounded-sm">
                                <h3 className="text-lg font-serif text-white mb-5">Current Openings</h3>
                                <ul className="space-y-5">
                                    <li className="pb-5 border-b border-white/[0.04]">
                                        <h4 className="text-primary-gold font-semibold text-sm">Valet Attendant</h4>
                                        <p className="text-gray-500 text-xs mt-1">Part-time / Full-time • Multiple Locations</p>
                                        <button className="text-white text-xs uppercase hover:text-primary-gold mt-2 flex items-center gap-1 tracking-wider transition-colors">
                                            Apply <ChevronRight size={12} />
                                        </button>
                                    </li>
                                    <li>
                                        <h4 className="text-primary-gold font-semibold text-sm">Shift Lead</h4>
                                        <p className="text-gray-500 text-xs mt-1">Full-time • Experience Required</p>
                                        <button className="text-white text-xs uppercase hover:text-primary-gold mt-2 flex items-center gap-1 tracking-wider transition-colors">
                                            Apply <ChevronRight size={12} />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
