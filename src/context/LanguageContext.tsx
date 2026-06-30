"use client";

import React, { createContext, useContext, useState } from "react";
import type { Lang } from "@/lib/translations";
import translations from "@/lib/translations";

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: typeof translations["pt"];
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "pt",
    setLang: () => {},
    t: translations["pt"],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("pt");

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
