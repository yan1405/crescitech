"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
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
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6 leading-[1.1]"
                        >
                            Transforme seu negócio com <span className="text-primary">Inteligência Artificial</span> estratégica
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Consultoria especializada em IA para PMEs que querem crescer com inteligência, eficiência e propósito.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-20"
                        >
                            <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300" onClick={openBookingModal}>
                                Agendar Conversa
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" href="#solutions">
                                Veja Nossas Soluções
                            </Button>
                        </motion.div>
                    </div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 relative w-full max-w-[800px] aspect-video"
                    >
                        {/* Abstract Tech Illustration Placeholder */}
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
                                Seu navegador não suporta vídeos.
                            </video>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
