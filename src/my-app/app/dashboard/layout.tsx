'use client';

import Sidebar from '@/components/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth');
    } else {
      setIsReady(true);
    }
  }, [router]);

  if (!isReady) return null;

  return (
    <div className="dark min-h-screen bg-brand-slate-900 text-brand-slate-50 font-inter">
      <Sidebar />
      <main className="pl-64 min-h-screen">
        <header className="h-20 border-b border-slate-800 flex items-center justify-between px-10 bg-brand-slate-900/50 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>Directory</span>
            <span className="opacity-30">/</span>
            <span className="text-slate-300">Employee Profile</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-xs font-bold text-slate-400 border border-slate-700 px-4 py-2 rounded-lg hover:bg-slate-800 transition">
                Export Report
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-violet-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-brand-slate-900 flex items-center justify-center text-[10px] font-bold">HR</div>
            </div>
          </div>
        </header>

        <div className="p-10 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
