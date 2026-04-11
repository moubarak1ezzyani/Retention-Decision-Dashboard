'use client';

import Link from 'next/link';
import Icon from '@/components/Icon';
import { useEffect } from 'react';

export default function LandingPage() {
  // Setup scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of the card is visible
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="dark min-h-screen bg-[#0B1120] text-brand-slate-50 font-inter overflow-hidden">
      
      {/* --- Custom CSS for Animations --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUpZoom {
          from { opacity: 0; transform: translateY(40px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(0.9); }
        }
        .animate-hero {
          opacity: 0;
          animation: fadeInUpZoom 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        html {
          scroll-behavior: smooth;
        }
      `}} />

      {/* Navbar - Redesigned to match new layout */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo (Left) */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center font-bold text-white">R</div>
            <span className="text-xl font-bold tracking-tight italic text-white">Retention<span className="text-brand-blue">AI</span></span>
          </div>

          {/* Links (Center) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white absolute left-1/2 -translate-x-1/2">
            <a href="#features" className="hover:text-brand-blue transition">Features</a>
            <a href="#security" className="hover:text-brand-blue transition">Security</a>
            <a href="#about" className="hover:text-brand-blue transition">Pricing</a>
          </div>

          {/* Actions (Right) */}
          <div className="flex items-center gap-6">
            {/* UPDATED: Points to /auth */}
            <Link href="/auth" className="text-sm font-bold text-white hover:text-slate-300 transition">Log In</Link>
            {/* UPDATED: Points to /auth */}
            <Link href="/auth" className="bg-brand-blue text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition">Get Started</Link>
            {/* Theme Toggle Icon (Visual only) */}
            <button className="text-slate-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section (1st Page) */}
      <section className="relative pt-20 pb-32 px-6 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none z-0 mt-10">
          <img
            src="/shape.svg"
            alt="Background Shape"
            className="w-full max-w-none opacity-40 scale-[1] md:scale-[2.5] origin-top"
          />
        </div>

        {/* .animate-hero applies the fade-up and the 10% zoom out (scale 0.9) */}
        <div className="relative z-10 max-w-5xl mx-auto text-center mt-4 animate-hero">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 text-[10px] font-bold uppercase tracking-widest mb-8 bg-brand-slate-900/50 backdrop-blur-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
            V2.0 is now live
          </div>

          <h1 className="text-6xl md:text-8xl font-bold font-plus-jakarta tracking-tight mb-10 leading-[1.1] text-white">
            Stop Employee Turnover <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-violet-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              Before It Happens.
            </span>
          </h1>

          <p className="text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            Predict attrition risk with Machine Learning and generate actionable HR retention plans instantly using AI.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* UPDATED: Points to /auth */}
            <Link href="/auth" className="w-full sm:w-auto bg-brand-blue text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all hover:scale-105">
              Start Free Trial
            </Link>
            <a href="#features" className="w-full sm:w-auto bg-transparent text-white px-8 py-4 rounded-xl font-bold border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Features Section (2nd Page) */}
      <section id="features" className="relative z-10 py-32 bg-[#0B1120] border-t border-slate-800/50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Predictive Analytics", desc: "Our ML models analyze 50+ variables to calculate precise churn probability.", icon: "crown" },
              { title: "AI Retention Plans", desc: "Llama-3 generates custom steps to retain high-risk talent based on their profile.", icon: "plus" },
              { title: "Secure HR Data", desc: "Enterprise-grade encryption and SSO integration for your sensitive employee records.", icon: "checkmark" }
            ].map((f, i) => (
              <div 
                key={i} 
                className="scroll-reveal group p-8 rounded-3xl bg-brand-slate-800/30 border border-slate-800 hover:border-brand-blue hover:bg-brand-slate-800/80 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
                style={{ transitionDelay: `${i * 150}ms` }} // Staggers the animation slightly for each card
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0B1120] border border-slate-800 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors duration-500 relative z-10">
                  <Icon id={f.icon} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white relative z-10">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed relative z-10">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}