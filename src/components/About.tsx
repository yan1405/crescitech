"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function About() {
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
                        Quem Somos
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                            A Crescitech é uma consultoria estratégica especializada em transformação digital para Pequenas e Médias Empresas. Nossa missão é democratizar o acesso à Inteligência Artificial, tornando-a uma ferramenta real de crescimento sustentável.
                        </p>
                        <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                            Diferente de cursos genéricos ou consultorias distantes, somos parceiros estratégicos que mergulham na realidade de cada cliente.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Button variant="outline" href="/modelo-6c">
                            Conheça Nossa Metodologia
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
