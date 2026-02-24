"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const DotLottiePlayer = dynamic(
    () => import("@dotlottie/react-player").then(mod => mod.DotLottiePlayer),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 animate-pulse rounded-xl" />
        ),
    }
);

interface SolutionCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    delay?: number;
    imageUrl?: string;
    imageAlt?: string;
    lottieUrl?: string;
}

export function SolutionCard({ icon, title, description, href, delay = 0, imageUrl, imageAlt, lottieUrl }: SolutionCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -8 }}
            className="group relative h-full bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
        >
            {lottieUrl ? (
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <DotLottiePlayer
                        src={lottieUrl}
                        autoplay
                        loop
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            ) : imageUrl ? (
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                    {imageUrl.endsWith('.gif') ? (
                        <img
                            src={imageUrl}
                            alt={imageAlt || title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <Image
                            src={imageUrl}
                            alt={imageAlt || title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    )}
                </div>
            ) : null}

            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {icon}
            </div>

            <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {title}
            </h3>

            <p className="text-neutral-600 mb-6 leading-relaxed">
                {description}
            </p>

            {href.startsWith("http") ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                >
                    Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                </a>
            ) : (
                <Link
                    href={href}
                    className="inline-flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                >
                    Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            )}
        </motion.div>
    );
}
