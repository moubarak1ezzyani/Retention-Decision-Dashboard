'use client';

import Link from 'next/link';
import Icon from '@/components/Icon';

export default function LandingPage() {
  return (
    <div className="dark min-h-screen bg-brand-slate-900 text-brand-slate-50 font-inter">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-brand-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center font-bold text-white">R</div>
            <span className="text-xl font-bold tracking-tight italic text-white">Retention<span className="text-brand-blue">AI</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white hover:text-brand-blue transition">Features</a>
            <a href="#security" className="hover:text-white hover:text-brand-blue transition">Security</a>
            <a href="#about" className="hover:text-white hover:text-brand-blue transition">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-sm font-semibold text-slate-400 hover:text-white transition">Log In</Link>
            <Link href="/auth" className="bg-brand-blue text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-6 overflow-hidden">
        
        {/* ✨ FIXED: Removed max-width, added scale-[2] (200% zoom) and origin-top */}
        <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none z-0 mt-10">
          <img 
            src="/shape.svg" 
            alt="Background Shape" 
            className="w-full max-w-none opacity-40 scale-[1] md:scale-[2.5] origin-top" 
          />
        </div>

        {/* The text content sits safely on top with z-10 */}
        <div className="relative z-10 max-w-5xl mx-auto text-center mt-12">
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
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 bg-brand-slate-900 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Predictive Analytics", desc: "Our ML models analyze 50+ variables to calculate precise churn probability.", icon: "crown" },
              { title: "AI Retention Plans", desc: "Llama-3 generates custom steps to retain high-risk talent based on their profile.", icon: "plus" },
              { title: "Secure HR Data", desc: "Enterprise-grade encryption and SSO integration for your sensitive employee records.", icon: "checkmark" }
            ].map((f, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-brand-slate-800/30 border border-slate-800 hover:border-brand-blue hover:bg-brand-slate-800/80 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-brand-slate-900 border border-slate-800 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors duration-500 relative z-10">
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