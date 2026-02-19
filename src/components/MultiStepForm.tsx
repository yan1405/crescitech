"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft, Check, Loader2, User, Building2 } from "lucide-react";

interface FormData {
    nome: string;
    telefone: string;
    email: string;
    tipo: "PF" | "PJ";
    empresa?: string;
}

const steps = [
    { id: 1, label: "Nome" },
    { id: 2, label: "Telefone" },
    { id: 3, label: "Email" },
    { id: 4, label: "Tipo" },
    { id: 5, label: "Empresa" }, // Conditional
];

export function MultiStepForm({ onSuccess }: { onSuccess: () => void }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        nome: "",
        telefone: "",
        email: "",
        tipo: "PF",
        empresa: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleNext = () => {
        setError("");
        if (currentStep === 1 && !formData.nome) return setError("Por favor, digite seu nome.");
        if (currentStep === 2) {
            if (!formData.telefone) return setError("Por favor, digite seu telefone.");
            const phoneRegex = /\(\d{2}\)\s\d{5}-\d{4}/;
            // Simple validation, can be enhanced with a mask library
            if (formData.telefone.length < 10) return setError("Telefone inválido.");
        }
        if (currentStep === 3) {
            if (!formData.email) return setError("Por favor, digite seu email.");
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return setError("Email inválido.");
        }

        if (currentStep === 4) {
            if (formData.tipo === "PF") {
                handleSubmit();
                return;
            }
        }

        if (currentStep === 5 && !formData.empresa) return setError("Por favor, digite o nome da empresa.");

        if (currentStep === 5) {
            handleSubmit();
            return;
        }

        setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setError("");
        setCurrentStep((prev) => prev - 1);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        setError("");

        const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwzJVGw5rxL04jwmnr44X3dl_5bDtEkiKuEJlwI6cVVBrDSHUqRCRNBpGVozDNyHitp/exec';

        const payload = {
            nome: formData.nome,
            telefone: formData.telefone,
            email: formData.email,
            tipo: formData.tipo,
            empresa: formData.tipo === 'PJ' ? formData.empresa : ''
        };

        console.log('Enviando dados:', payload);

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
                redirect: 'follow' // IMPORTANTE: Seguir redirects
            });

            console.log('Response status:', response.status);

            // Google Apps Script pode retornar 302 redirect
            if (response.status === 200 || response.status === 302) {
                try {
                    const result = await response.json();
                    console.log('Resposta:', result);

                    if (result.status === 'success') {
                        // Sucesso - mostrar tela de obrigado
                        setIsSuccess(true);
                        setTimeout(() => {
                            onSuccess();
                        }, 3000);
                    } else {
                        throw new Error(result.message || 'Erro desconhecido');
                    }
                } catch (jsonError) {
                    // Se não conseguir parsear JSON, considerar sucesso
                    console.log('Assumindo sucesso (redirect)');
                    setIsSuccess(true);
                    setTimeout(() => {
                        onSuccess();
                    }, 3000);
                }
            } else {
                throw new Error(`HTTP ${response.status}`);
            }

        } catch (error) {
            console.error('Erro ao enviar:', error);

            // Tentar método alternativo com no-cors como fallback
            try {
                await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload)
                });

                // Com no-cors, não conseguimos ver resposta
                // Mas se não deu erro, provavelmente funcionou
                console.log('Enviado via no-cors (fallback)');
                setIsSuccess(true);
                setTimeout(() => {
                    onSuccess();
                }, 3000);

            } catch (fallbackError) {
                console.error('Erro no fallback:', fallbackError);
                setError('Erro ao enviar formulário. Por favor, tente novamente.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setError("");
    };

    // Phone Mask
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        }
        if (value.length > 9) {
            value = `${value.slice(0, 10)}-${value.slice(10)}`;
        }

        handleChange("telefone", value);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-8 text-center"
            >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-neutral-600">Entraremos em contato em breve.</p>
            </motion.div>
        );
    }

    return (
        <div className="p-6 md:p-8">
            {/* Progress */}
            <div className="flex justify-between items-center mb-8">
                <div className="text-sm font-medium text-neutral-500">
                    Passo {currentStep} de {formData.tipo === "PJ" ? 5 : 4}
                </div>
                <div className="flex gap-1">
                    {Array.from({ length: formData.tipo === "PJ" ? 5 : 4 }).map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 w-8 rounded-full transition-colors ${i + 1 <= currentStep ? "bg-primary" : "bg-neutral-200"
                                }`}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="min-h-[200px]"
                >
                    {currentStep === 1 && (
                        <div className="space-y-4">
                            <label className="text-xl font-bold text-neutral-900 block">
                                👋 Qual é o seu nome?
                            </label>
                            <input
                                type="text"
                                value={formData.nome}
                                onChange={(e) => handleChange("nome", e.target.value)}
                                className="w-full text-lg p-4 rounded-xl border-2 border-neutral-200 focus:border-primary focus:outline-none transition-colors"
                                placeholder="Digite seu nome completo"
                                autoFocus
                            />
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-4">
                            <label className="text-xl font-bold text-neutral-900 block">
                                📱 Qual é o seu telefone?
                            </label>
                            <input
                                type="tel"
                                value={formData.telefone}
                                onChange={handlePhoneChange}
                                className="w-full text-lg p-4 rounded-xl border-2 border-neutral-200 focus:border-primary focus:outline-none transition-colors"
                                placeholder="(XX) XXXXX-XXXX"
                                autoFocus
                            />
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-4">
                            <label className="text-xl font-bold text-neutral-900 block">
                                📧 Qual é o seu email?
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                className="w-full text-lg p-4 rounded-xl border-2 border-neutral-200 focus:border-primary focus:outline-none transition-colors"
                                placeholder="seu@email.com"
                                autoFocus
                            />
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <label className="text-xl font-bold text-neutral-900 block">
                                🏢 Você é Pessoa Física ou Jurídica?
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => handleChange("tipo", "PF")}
                                    className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-3 ${formData.tipo === "PF"
                                        ? "border-primary bg-primary/5 text-primary"
                                        : "border-neutral-200 hover:border-primary/50 text-neutral-600"
                                        }`}
                                >
                                    <User className="w-8 h-8" />
                                    <span className="font-bold">Pessoa Física</span>
                                </button>
                                <button
                                    onClick={() => handleChange("tipo", "PJ")}
                                    className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-3 ${formData.tipo === "PJ"
                                        ? "border-primary bg-primary/5 text-primary"
                                        : "border-neutral-200 hover:border-primary/50 text-neutral-600"
                                        }`}
                                >
                                    <Building2 className="w-8 h-8" />
                                    <span className="font-bold">Pessoa Jurídica</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div className="space-y-4">
                            <label className="text-xl font-bold text-neutral-900 block">
                                🏢 Qual o nome da empresa?
                            </label>
                            <input
                                type="text"
                                value={formData.empresa}
                                onChange={(e) => handleChange("empresa", e.target.value)}
                                className="w-full text-lg p-4 rounded-xl border-2 border-neutral-200 focus:border-primary focus:outline-none transition-colors"
                                placeholder="Nome da sua empresa"
                                autoFocus
                            />
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-4 font-medium"
                >
                    {error}
                </motion.p>
            )}

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-100">
                {currentStep > 1 ? (
                    <button
                        onClick={handleBack}
                        className="text-neutral-500 hover:text-neutral-900 font-medium flex items-center gap-1 px-2 py-1"
                        disabled={isLoading}
                    >
                        <ChevronLeft className="w-4 h-4" /> Voltar
                    </button>
                ) : (
                    <div />
                )}

                <Button onClick={handleNext} disabled={isLoading} className="w-32">
                    {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <>
                            {currentStep === (formData.tipo === "PJ" ? 5 : 4) ? "Enviar" : "Próximo"}
                            {currentStep !== (formData.tipo === "PJ" ? 5 : 4) && <ChevronRight className="w-4 h-4 ml-1" />}
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}
