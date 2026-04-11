"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { MultiStepForm } from "@/components/MultiStepForm";

export function BookingModal() {
    const { isOpen, closeBookingModal } = useBooking();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeBookingModal}
                        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden m-4"
                    >
                        <div className="relative">
                            <button
                                onClick={closeBookingModal}
                                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <MultiStepForm onSuccess={closeBookingModal} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
