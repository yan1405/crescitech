"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useBooking } from "@/context/BookingContext";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/lib/translations";

const LANG_OPTIONS: { code: Lang; label: string }[] = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();
    const { openBookingModal } = useBooking();
    const { lang, setLang, t } = useLanguage();

    const navigation = [
        { name: t.header.nav.home, href: "/" },
        { name: t.header.nav.solutions, href: "/solucoes" },
        { name: t.header.nav.pillars, href: "/pilares" },
        { name: t.header.nav.model6c, href: "/modelo-6c" },
        { name: t.header.nav.blog, href: "/blog" },
        { name: t.header.nav.resources, href: "/recursos" },
    ];

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setLastScrollY(latest);
    });

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
                <div className="flex items-center justify-between h-20 lg:h-28">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 relative w-[180px] h-[45px] lg:w-[280px] lg:h-[70px]">
                        <Image
                            src="/assets/logocrescitech.PNG"
                            alt="Crescitech"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                                    pathname === item.href ? "text-primary" : "text-neutral-600"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side: Language Switcher + CTA + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        {/* Language Switcher */}
                        <div className="flex items-center gap-1 border border-neutral-200 rounded-lg p-1 bg-white/60">
                            {LANG_OPTIONS.map((opt) => (
                                <button
                                    key={opt.code}
                                    onClick={() => setLang(opt.code)}
                                    className={cn(
                                        "text-xs font-semibold px-2 py-1 rounded-md transition-all duration-200",
                                        lang === opt.code
                                            ? "bg-primary text-white shadow-sm"
                                            : "text-neutral-500 hover:text-primary hover:bg-primary/5"
                                    )}
                                    aria-label={`Switch to ${opt.label}`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>

                        <Button className="hidden lg:inline-flex" size="sm" onClick={openBookingModal}>
                            {t.header.cta}
                        </Button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-neutral-600 hover:text-primary"
                            aria-label="Toggle menu"
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
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block font-medium text-neutral-900 hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-neutral-100">
                                <Button className="w-full" onClick={() => { setIsOpen(false); openBookingModal(); }}>
                                    {t.header.cta}
                                </Button>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
