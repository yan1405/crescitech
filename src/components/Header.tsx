"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useBooking } from "@/context/BookingContext";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Soluções", href: "/solucoes" },
    { name: "Pilares", href: "/pilares" },
    { name: "Modelo 6C", href: "/modelo-6c" },
    { name: "Blog", href: "/blog" },
    { name: "Recursos", href: "/recursos" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();
    const { openBookingModal } = useBooking();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setLastScrollY(latest);
    });

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100"
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 relative w-[180px] h-[45px]">
                        <Image
                            src="/assets/logocrescitech.png"
                            alt="Crescitech"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                                        pathname === item.href ? "text-primary" : "text-neutral-600"
                                    )}
                                >
                                    {item.name}
                                </Link>

                            </div>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Button className="hidden lg:inline-flex" size="sm" onClick={openBookingModal}>
                            Agendar Conversa
                        </Button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-neutral-600 hover:text-primary"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-neutral-100 bg-white overflow-hidden"
                    >
                        <Container className="py-4 space-y-4">
                            {navigation.map((item) => (
                                <div key={item.name} className="space-y-2">
                                    <Link
                                        href={item.href}
                                        className="block font-medium text-neutral-900 hover:text-primary"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                            <div className="pt-4">
                                <Button className="w-full" onClick={() => { setIsOpen(false); openBookingModal(); }}>
                                    Agendar Conversa
                                </Button>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header >
    );
}
