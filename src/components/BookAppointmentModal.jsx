"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { services } from "@/data/services";
import { useToast } from "@/hooks/use-toast";


const BookAppointmentModal = ({ open, onClose }) => {
    const { toast } = useToast();
    const [submitted, setSubmitted] = useState(false);

    if (!open) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        toast({ title: "Thank you!", description: "We'll call you back within 24 hours!" });
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-secondary/50 backdrop-blur-sm p-4">
            <div className="bg-card rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto relative">
                <button onClick={() => { onClose(); setSubmitted(false); }} className="absolute top-4 right-4 text-foreground/50 hover:text-foreground">
                    <X size={20} />
                </button>

                <div className="p-6 md:p-8">
                    <h2 className="font-heading text-2xl mb-1">Book Appointment</h2>
                    <p className="text-muted-foreground text-sm mb-6">Fill in your details and we&apos;ll get back to you.</p>

                    {submitted ? (
                        <div className="text-center py-8">
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="font-heading text-xl mb-2">Thank You!</h3>
                            <p className="text-muted-foreground text-sm">We&apos;ll call you back within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input required placeholder="Your Name" className="w-full px-4 py-3 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                            <input required type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                            <select required className="w-full px-4 py-3 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground">
                                <option value="">Select Service</option>
                                {services.map((s) => (
                                    <option key={s.id} value={s.name}>{s.name}</option>
                                ))}
                            </select>
                            <input type="date" className="w-full px-4 py-3 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                            <textarea placeholder="Message (optional)" rows={3} className="w-full px-4 py-3 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                            <button type="submit" className="btn-primary w-full justify-center">Submit</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookAppointmentModal;
