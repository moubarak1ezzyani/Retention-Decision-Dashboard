'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';

const MENU_ITEMS = [
  { id: 'overview', label: 'Overview', icon: 'crown', href: '/dashboard' },
  { id: 'history', label: 'History', icon: 'calendar', href: '/dashboard/history' },
  { id: 'reports', label: 'Risk Reports', icon: 'checkmark', href: '#' },
  { id: 'settings', label: 'Settings', icon: 'plus', href: '#' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-brand-slate-900 border-r border-slate-800 flex flex-col h-screen fixed left-0 top-0 z-20">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center font-bold text-white">R</div>
            <h1 className="text-xl font-bold text-white tracking-tight italic">Retention<span className="text-brand-blue">AI</span></h1>
        </div>

        <nav className="space-y-2">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
                <Link 
                    key={item.id} 
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                        isActive 
                        ? 'bg-brand-blue text-white shadow-lg shadow-blue-500/20' 
                        : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                    }`}
                >
                    <Icon id={item.icon} size={20} className={isActive ? 'text-white' : 'group-hover:text-brand-blue'} />
                    <span className="font-medium text-sm">{item.label}</span>
                </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-8 border-t border-slate-800">
        <button 
            onClick={() => { localStorage.removeItem('token'); window.location.href = '/'; }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500/70 hover:text-red-500 hover:bg-red-500/10 transition-all duration-300 w-full"
        >
            <Icon id="close" size={20} />
            <span className="font-medium text-sm">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
