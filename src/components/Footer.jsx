"use client";

import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => (
    <footer className="bg-secondary text-secondary-foreground" id="contact">
        <div className="container-wide section-padding">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="md:col-span-1">
                    <h3 className="font-heading text-2xl mb-2">Éclora</h3>
                    <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                        Aesthetics & Laser Clinic — Where science meets beauty.
                    </p>
                </div>

                <div>
                    <h4 className="font-heading text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-secondary-foreground/70">
                        {[
                            { l: "Home", p: "/" },
                            { l: "Services", p: "/services" },
                            { l: "Facials", p: "/facials" },
                        ].map((i) => (
                            <li key={i.p}>
                                <Link to={i.p} className="hover:text-primary transition-colors">{i.l}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading text-lg mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm text-secondary-foreground/70">
                        <li className="flex items-center gap-2"><Phone size={14} /> +91 98XXXXXXXX</li>
                        <li className="flex items-center gap-2"><Mail size={14} /> info@eclora.in</li>
                        <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5" /> New Delhi, India</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading text-lg mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><MessageCircle size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-secondary-foreground/10 mt-12 pt-6 text-center text-xs text-secondary-foreground/50">
                © 2025 Eclora Skin & Hair Clinic. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;
