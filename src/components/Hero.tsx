"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Play } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export function Hero() {
    const { openBookingModal } = useBooking();
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-light/50 via-white to-white" />

            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6 leading-[1.1] animate-fade-in-up"
                        >
                            Transforme seu negócio com <span className="text-primary">Inteligência Artificial</span> estratégica
                        </h1>

                        <p
                            className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up-d1"
                        >
                            Consultoria especializada em IA para PMEs que querem crescer com inteligência, eficiência e propósito.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-20 animate-fade-in-up-d2"
                        >
                            <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300" onClick={openBookingModal}>
                                Agendar Conversa
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" href="#solutions">
                                Veja Nossas Soluções
                            </Button>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div
                        className="flex-1 relative w-full max-w-[800px] aspect-video animate-fade-in-scale"
                    >
                        {/* Abstract Tech Illustration Placeholder */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-primary-light border border-neutral-100">
                            <video
                                className="w-full h-full object-cover rounded-2xl"
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="/assets/logocrescitech.png"
                            >
                                <source src="/hero-video.mp4" type="video/mp4" />
                                Seu navegador não suporta vídeos.
                            </video>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
