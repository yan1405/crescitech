"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    const phoneNumber = "5511965650546";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a consultoria em IA da Crescitech.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 hover:shadow-[0_6px_20px_0_rgba(37,211,102,0.5)] active:scale-90 transition-all duration-200 animate-whatsapp-enter"
            aria-label="Falar no WhatsApp"
        >
            {/* Pulse Animation Layer */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] -z-10 animate-whatsapp-pulse" />

            <MessageCircle className="w-8 h-8 fill-current" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-neutral-800 text-sm font-bold px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
                Fale conosco
            </span>
        </a>
    );
}
