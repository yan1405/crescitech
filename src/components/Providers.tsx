"use client";

import React from "react";
import { BookingProvider } from "@/context/BookingContext";
import { BookingModal } from "@/components/BookingModal";
import { LanguageProvider } from "@/context/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <BookingProvider>
                {children}
                <BookingModal />
            </BookingProvider>
        </LanguageProvider>
    );
}
