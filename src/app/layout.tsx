import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import ConditionalLayout from "@/components/ConditionalLayout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crescitech | Consultoria Estratégica em IA para PMEs",
  description: "Transforme seu negócio com Inteligência Artificial. Consultoria especializada, treinamento e desenvolvimento de soluções de IA para pequenas e médias empresas.",
  keywords: ["Consultoria IA", "Inteligência Artificial PME", "Transformação Digital", "Business Intelligence", "Automação", "Crescitech"],
  authors: [{ name: "Crescitech" }],
  creator: "Crescitech",
  publisher: "Crescitech",
  openGraph: {
    title: "Crescitech | Consultoria Estratégica em IA",
    description: "Leve sua empresa para o próximo nível com Inteligência Artificial aplicada de forma estratégica e prática.",
    url: "https://crescitech.com.br",
    siteName: "Crescitech",
    images: [
      {
        url: "/assets/logocrescitech.PNG",
        width: 1200,
        height: 630,
        alt: "Crescitech - Consultoria em IA",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crescitech | Consultoria em IA",
    description: "Transformação digital com propósito para PMEs.",
    images: ["/assets/logocrescitech.PNG"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased font-sans text-neutral-900 bg-white flex flex-col min-h-screen">
        <Providers>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </Providers>
      </body>
    </html>
  );
}
