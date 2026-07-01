"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CredentialCards } from "@/components/CredentialCards";

export function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 bg-neutral-50">
            <Container>
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-neutral-900 mb-6"
                    >
                        {t.about.title}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                            {t.about.p1}
                        </p>
                        <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                            {t.about.p2}
                        </p>
                    </motion.div>

                    <CredentialCards />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Button variant="outline" href="/modelo-6c">
                            {t.about.cta}
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}