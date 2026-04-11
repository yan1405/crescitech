"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        id: 1,
        content: "A Crescitech transformou completamente nossa visão sobre IA. Não foi apenas uma consultoria técnica, mas uma verdadeira mudança de mindset em toda a liderança.",
        author: "Ricardo Mendes",
        role: "CEO, Nexus Network",
    },
    {
        id: 2,
        content: "O diagnóstico estratégico foi preciso. Identificaram gargalos que nem sabíamos que existiam e implementaram soluções que economizaram 30% do tempo da nossa equipe.",
        author: "Tamy Tanzilli",
        role: "Founder, GT Lawyers",
    },
    {
        id: 3,
        content: "A metodologia 6C nos deu segurança para avançar. Antes estávamos paralisados com tantas opções, agora temos um roadmap claro e resultados consistentes.",
        author: "Andrés Berridi",
        role: "Advogado Senior, GT Lawyers",
    },
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-neutral-50 overflow-hidden">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                        O que nossos clientes dizem
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto min-h-[300px] flex items-center justify-center">
                    {/* Arrows */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 z-20 p-2 rounded-full bg-white shadow-md text-neutral-400 hover:text-primary transition-colors hidden md:block"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 z-20 p-2 rounded-full bg-white shadow-md text-neutral-400 hover:text-primary transition-colors hidden md:block"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full px-4 md:px-16"
                        >
                            <div className="flex flex-col items-center text-center">
                                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                                <p className="text-xl md:text-2xl text-neutral-700 italic mb-8 leading-relaxed">
                                    "{testimonials[current].content}"
                                </p>
                                <div>
                                    <h4 className="font-bold text-neutral-900">{testimonials[current].author}</h4>
                                    <p className="text-sm text-neutral-500">{testimonials[current].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > current ? 1 : -1);
                                setCurrent(index);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === current ? "bg-primary w-8" : "bg-neutral-300 hover:bg-primary/50"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
}
