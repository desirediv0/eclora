"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";


const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Facials", path: "/facials" },
    { label: "About", path: "/about" },
    { label: "FAQ", path: "/#faq" },
    { label: "Contact", path: "/#contact" },
];

const Navbar = ({ onBookOpen }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-card/95 backdrop-blur-md shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="container-wide flex items-center justify-between h-16 md:h-20 px-4 md:px-8">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={"/logo.png"}
                        alt="Eclora"
                        className="h-10 md:h-12 w-auto rounded"
                    />
                    <span className="font-heading text-xl md:text-2xl font-semibold text-secondary">
                        Éclora
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive =
                            link.path === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.path.replace(/#.*$/, ""));

                        return (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground/70"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    <button onClick={onBookOpen} className="btn-primary text-sm">
                        Book Appointment
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-card border-t border-border px-4 py-4 space-y-3 animate-fade-up">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className="block py-2 text-sm font-medium text-foreground/70 hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <button
                        onClick={onBookOpen}
                        className="btn-primary text-sm w-full justify-center mt-2"
                    >
                        Book Appointment
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;