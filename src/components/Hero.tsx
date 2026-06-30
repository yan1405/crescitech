"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { openBookingModal } = useBooking();
    const { t } = useLanguage();

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-light/50 via-white to-white" />

            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left z-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6 leading-[1.1] animate-fade-in-up">
                            {t.hero.headline1}{" "}
                            <span className="text-primary">{t.hero.headline2}</span>{" "}
                            {t.hero.headline3}
                        </h1>

                        <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up-d1">
                            {t.hero.subheadline}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-20 animate-fade-in-up-d2">
                            <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300" onClick={openBookingModal}>
                                {t.hero.cta1}
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" href="#solutions">
                                {t.hero.cta2}
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full max-w-[800px] aspect-video animate-fade-in-scale">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-primary-light border border-neutral-100">
                            <video
                                className="w-full h-full object-cover rounded-2xl"
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="/assets/logocrescitech.PNG"
                            >
                                <source src="/hero-video.mp4" type="video/mp4" />
                                {t.hero.videoFallback}
                            </video>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
