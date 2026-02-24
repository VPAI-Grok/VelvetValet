"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactContent() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const body = {
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            serviceInterest: formData.get("serviceInterest") as string,
            company: formData.get("company") as string,
            eventLocation: formData.get("eventLocation") as string,
            locationType: formData.get("locationType") as string,
            eventDate: formData.get("eventDate") as string,
            guestCount: formData.get("guestCount") as string,
            startTime: formData.get("startTime") as string,
            endTime: formData.get("endTime") as string,
            howFound: formData.get("howFound") as string,
            details: formData.get("details") as string,
        };

        try {
            const res = await fetch("/api/contact", {
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

    const inputStyles = "w-full bg-surface border border-white/[0.06] p-3 text-white text-sm focus:outline-none focus:border-primary-gold/40 transition-all rounded-sm placeholder:text-gray-600";
    const labelStyles = "text-[11px] text-primary-gold/70 uppercase tracking-[0.12em] font-sans font-medium";

    return (
        <div className="pt-24 min-h-screen">
            {/* Header */}
            <section className="relative py-20 md:py-28 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/cta-bg-new.png"
                        alt="Elegant event venue"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#0b0b0f]/80" />
                </div>
                <div className="relative z-10">
                    <p className="text-primary-gold/70 text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-4">Get in Touch</p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Contact Us</h1>
                    <p className="text-gray-400 max-w-md mx-auto">Start the conversation about elevating your guest experience.</p>
                </div>
            </section>

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Form */}
                    <div>
                        <h2 className="text-2xl font-serif text-white mb-8">Request a Consultation</h2>

                        {/* Success Message */}
                        {status === "success" && (
                            <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-sm flex items-start gap-3">
                                <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                                <div>
                                    <p className="text-emerald-300 text-sm font-medium">Message Sent Successfully</p>
                                    <p className="text-emerald-400/70 text-xs mt-1">Thank you for your inquiry. A representative from The Velvet Valet will contact you shortly.</p>
                                </div>
                            </div>
                        )}

                        {/* Error Message */}
                        {status === "error" && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-sm flex items-start gap-3">
                                <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
                                <div>
                                    <p className="text-red-300 text-sm font-medium">Failed to Send</p>
                                    <p className="text-red-400/70 text-xs mt-1">{errorMessage}</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className={labelStyles}>First Name *</label>
                                    <input name="firstName" required className={inputStyles} />
                                </div>
                                <div className="space-y-2">
                                    <label className={labelStyles}>Last Name *</label>
                                    <input name="lastName" required className={inputStyles} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className={labelStyles}>Email *</label>
                                    <input name="email" required type="email" className={inputStyles} />
                                </div>
                                <div className="space-y-2">
                                    <label className={labelStyles}>Phone *</label>
                                    <input name="phone" required type="tel" className={inputStyles} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className={labelStyles}>Service Interest</label>
                                <select name="serviceInterest" className={`${inputStyles} appearance-none`}>
                                    <option className="bg-surface">Valet Parking</option>
                                    <option className="bg-surface">Traffic Management</option>
                                    <option className="bg-surface">Concierge Services</option>
                                    <option className="bg-surface">Event Parking</option>
                                    <option className="bg-surface">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className={labelStyles}>Company / Organization</label>
                                <input name="company" className={inputStyles} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className={labelStyles}>Event Location / Address</label>
                                    <input name="eventLocation" className={inputStyles} placeholder="e.g. 20 Missinihe Way, Mississauga" />
                                </div>
                                <div className="space-y-2">
                                    <label className={labelStyles}>Type of Location</label>
                                    <input name="locationType" className={inputStyles} placeholder="e.g. Restaurant, Hotel, Private Residence" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className={labelStyles}>Date of Event</label>
                                    <input name="eventDate" type="date" className={`${inputStyles} [color-scheme:dark]`} />
                                </div>
                                <div className="space-y-2">
                                    <label className={labelStyles}>Guest Count</label>
                                    <input name="guestCount" type="number" className={inputStyles} placeholder="Approximate number" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className={labelStyles}>Start Time</label>
                                    <input name="startTime" type="time" className={`${inputStyles} [color-scheme:dark]`} />
                                </div>
                                <div className="space-y-2">
                                    <label className={labelStyles}>End Time</label>
                                    <input name="endTime" type="time" className={`${inputStyles} [color-scheme:dark]`} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className={labelStyles}>How Did You Find Us?</label>
                                <select name="howFound" className={`${inputStyles} appearance-none`}>
                                    <option className="bg-surface">Select an option...</option>
                                    <option className="bg-surface">Internet Search (Google, Bing)</option>
                                    <option className="bg-surface">Social Media</option>
                                    <option className="bg-surface">Referral</option>
                                    <option className="bg-surface">Event / Venue</option>
                                    <option className="bg-surface">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className={labelStyles}>Additional Details / Comments</label>
                                <textarea name="details" rows={4} className={inputStyles} placeholder="Tell us about your event or venue requirements..." />
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full md:w-auto"
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="animate-spin" size={16} />
                                        Sending...
                                    </span>
                                ) : (
                                    "Submit Request"
                                )}
                            </Button>
                        </form>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-surface border border-white/[0.04] p-8 rounded-sm">
                            <h3 className="text-lg font-serif text-white mb-6">Contact Information</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <MapPin className="text-primary-gold/60 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-[11px] text-primary-gold/70 uppercase tracking-wider font-medium mb-1">Service Area</p>
                                        <p className="text-gray-400 text-sm">Toronto & Greater Toronto Area<br />Ontario, Canada</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Phone className="text-primary-gold/60 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-[11px] text-primary-gold/70 uppercase tracking-wider font-medium mb-1">Phone</p>
                                        <p className="text-gray-400 text-sm">(647) 886-4280</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Mail className="text-primary-gold/60 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-[11px] text-primary-gold/70 uppercase tracking-wider font-medium mb-1">Email</p>
                                        <p className="text-gray-400 text-sm">thevelvetvalet@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Clock className="text-primary-gold/60 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-[11px] text-primary-gold/70 uppercase tracking-wider font-medium mb-1">Hours</p>
                                        <p className="text-gray-400 text-sm">24/7 Operations<br />Office: Mon-Fri 9am - 6pm</p>
                                    </div>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
