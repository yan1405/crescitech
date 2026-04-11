"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useBooking } from "@/context/BookingContext";

export function FinalCTA() {
    const { openBookingModal } = useBooking();
    return (
        <section className="py-24 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Pronto para transformar seu negócio com Inteligência Artificial?
                    </h2>
                    <p className="text-lg md:text-xl text-primary-light/90 mb-10 max-w-2xl mx-auto">
                        Agende uma conversa estratégica sem compromisso e descubra como podemos ajudar sua empresa a crescer.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="white" onClick={openBookingModal} className="text-primary hover:bg-neutral-100">
                            Agendar Conversa Agora
                        </Button>
                        <Button size="lg" variant="outline" href="https://wa.me/5511965650546?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20em%20IA%20da%20Crescitech." className="border-white text-white hover:bg-white/10">
                            Falar no WhatsApp
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
