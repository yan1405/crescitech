"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    const phoneNumber = "5511965650546";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a consultoria em IA da Crescitech.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                boxShadow: "0 4px 14px 0 rgba(37, 211, 102, 0.39)"
            }}
            whileHover={{
                scale: 1.1,
                boxShadow: "0 6px 20px 0 rgba(37, 211, 102, 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            className="group fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full transition-colors"
            aria-label="Falar no WhatsApp"
        >
            {/* Pulse Animation Layer */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0, 0.3]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
            />

            <MessageCircle className="w-8 h-8 fill-current" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-neutral-800 text-sm font-bold px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
                Fale conosco
            </span>
        </motion.a>
    );
}
