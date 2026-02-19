"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog/posts";

// Get the 3 most recent posts for preview
const previewPosts = blogPosts.slice(0, 3);

export function BlogPreview() {
    return (
        <section className="py-20 lg:py-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                            Insights e Tendências
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Conteúdo atualizado para manter você à frente no mercado.
                        </p>
                    </div>
                    <Button variant="outline" href="/blog" className="hidden md:inline-flex">
                        Ver todos os artigos
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {previewPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className="relative h-48 w-full bg-neutral-200 overflow-hidden">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="flex flex-col flex-grow p-6">
                                <div className="flex items-center gap-3 text-xs font-semibold text-primary mb-3">
                                    <span className="bg-primary-light px-2 py-1 rounded-full uppercase tracking-wide">
                                        {post.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-neutral-600 text-sm mb-4 line-clamp-3 flex-grow">
                                    {post.summary}
                                </p>

                                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                                        <Calendar className="w-4 h-4" />
                                        <span>{post.publishedAtFormatted}</span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Ler mais <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="text-center md:hidden">
                    <Button variant="outline" href="/blog">
                        Ver todos os artigos
                    </Button>
                </div>
            </Container>
        </section>
    );
}
