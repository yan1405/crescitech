"use client";

import React from "react";
import { BookingProvider } from "@/context/BookingContext";
import { BookingModal } from "@/components/BookingModal";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <BookingProvider>
            {children}
            <BookingModal />
        </BookingProvider>
    );
}
