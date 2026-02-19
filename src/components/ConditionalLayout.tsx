'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname.startsWith('/admin-crescitech');

    return (
        <>
            {!isAdmin && <Header />}
            <main className={!isAdmin ? 'flex-grow' : undefined}>
                {children}
            </main>
            {!isAdmin && <Footer />}
            {!isAdmin && <WhatsAppButton />}
        </>
    );
}
