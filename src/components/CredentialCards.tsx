"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function CredentialCards() {
    const { t } = useLanguage();
    const creds = t.about.credentials;
    const [expanded, setExpanded] = useState<"abria" | "claude" | null>(null);

    function toggle(key: "abria" | "claude") {
        setExpanded((prev) => (prev === key ? null : key));
    }

    return (
        <div className="my-8 text-left">
            <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: "#00B5C5" }}
            >
                {creds.sectionTitle}
            </p>
            <p className="text-xs mb-4" style={{ color: "#333333" }}>
                {expanded ? creds.hint.collapse : creds.hint.expand}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(["abria", "claude"] as const).map((key) => {
                    const card = key === "abria" ? creds.abria : creds.claude;
                    const isExpanded = expanded === key;
                    const isAbria = key === "abria";
                    const accentColor = isAbria ? "#1D3557" : "#00B5C5";
                    const linkUrl = isAbria
                        ? "https://abria.org.br/associados/crescitech"
                        : "https://claude.com/partners";

                    return (
                        <div
                            key={key}
                            role="button"
                            tabIndex={0}
                            aria-expanded={isExpanded}
                            onClick={() => toggle(key)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    toggle(key);
                                }
                            }}
                            className="cursor-pointer rounded-xl p-4 transition-all duration-300"
                            style={{
                                border: isExpanded
                                    ? `1.5px solid ${accentColor}`
                                    : "1px solid #F2F2F2",
                                backgroundColor: isExpanded
                                    ? `${accentColor}0D`
                                    : "transparent",
                            }}
                        >
                            <div className="flex items-center gap-3">
                                {isAbria ? (
                                    <div
                                        className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: "#1D3557" }}
                                    >
                                        <span className="text-white text-[9px] font-bold">
                                            ABRIA
                                        </span>
                                    </div>
                                ) : (
                                    <Image
                                        src="/assets/Claude_Partner_Network_Crescitech.png"
                                        alt="Logo Claude Partner Network - Anthropic"
                                        width={44}
                                        height={44}
                                        className="rounded-lg object-contain flex-shrink-0"
                                    />
                                )}
                                <div>
                                    <p
                                        className="text-sm font-bold"
                                        style={{ color: "#1D3557" }}
                                    >
                                        {card.title}
                                    </p>
                                    <p className="text-xs" style={{ color: "#333333" }}>
                                        {card.subtitle}
                                    </p>
                                </div>
                            </div>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className="mt-3 pt-3"
                                            style={{ borderTop: "1px solid #F2F2F2" }}
                                        >
                                            <p
                                                className="text-xs leading-relaxed mb-3"
                                                style={{ color: "#333333" }}
                                            >
                                                {card.description}
                                            </p>
                                            <a
                                                href={linkUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-xs font-bold"
                                                style={{ color: accentColor }}
                                            >
                                                {card.link}
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}