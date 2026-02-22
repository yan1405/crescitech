'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { LayoutDashboard, PenSquare, BookOpen, BarChart2, Star, LogOut, Home } from 'lucide-react';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { CreateArticle } from '@/components/admin/CreateArticle';
import { ManageArticles } from '@/components/admin/ManageArticles';
import { AnalyticsDashboard } from '@/components/admin/AnalyticsDashboard';
import { RatingsDashboard } from '@/components/admin/RatingsDashboard';

const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'criar', label: 'Criar Artigo', icon: PenSquare },
    { id: 'artigos', label: 'Gerenciar Artigos', icon: BookOpen },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'avaliacoes', label: 'Avaliações', icon: Star },
];

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [loggingOut, setLoggingOut] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        setLoggingOut(true);
        try {
            await fetch('/api/admin/auth', { method: 'DELETE' });
        } catch {
            // Mesmo se falhar, redireciona para login
        }
        router.push('/admin-crescitech/login');
    };

    return (
        <div className="flex min-h-screen">

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-100 shadow-sm flex flex-col fixed h-full">
                <div className="p-6 border-b border-slate-100">
                    <Image src="/assets/logocrescitech.PNG" alt="Crescitech" width={140} height={40} className="object-contain" />
                    <p className="text-xs text-slate-400 mt-2">Painel Administrativo</p>
                </div>

                <nav className="flex-1 p-4 flex flex-col gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === item.id
                                ? 'bg-primary text-white'
                                : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-100 space-y-1">
                    <a
                        href="/"
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                        <Home className="w-4 h-4" />
                        Voltar ao Site
                    </a>
                    <button
                        onClick={handleLogout}
                        disabled={loggingOut}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
                    >
                        <LogOut className="w-4 h-4" />
                        {loggingOut ? 'Saindo...' : 'Sair'}
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <main className="ml-64 flex-1 p-8">
                {activeTab === 'dashboard' && <AdminDashboard />}
                {activeTab === 'criar' && <CreateArticle />}
                {activeTab === 'artigos' && <ManageArticles />}
                {activeTab === 'analytics' && <AnalyticsDashboard />}
                {activeTab === 'avaliacoes' && <RatingsDashboard />}
            </main>

        </div>
    );
}
