'use client';

import Link from 'next/link';
import Icon from '@/components/Icon';

export default function LandingPage() {
  return (
    <div className="light min-h-screen bg-brand-slate-50 text-brand-slate-900 font-inter">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center font-bold text-white">R</div>
            <span className="text-xl font-bold tracking-tight italic">Retention<span className="text-brand-blue">AI</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-brand-blue transition">Features</a>
            <a href="#security" className="hover:text-brand-blue transition">Security</a>
            <a href="#about" className="hover:text-brand-blue transition">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition">Log In</Link>
            <Link href="/auth" className="bg-brand-blue text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue border border-blue-100 text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
            V2.0 is now live
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-plus-jakarta tracking-tight mb-8 leading-[1.1]">
            Stop Employee Turnover <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-violet-500">Before It Happens.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Predict attrition risk with Machine Learning and generate actionable HR retention plans instantly using AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <input 
                type="email" 
                placeholder="Enter your work email" 
                className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-blue transition shadow-sm"
            />
            <button className="w-full sm:w-auto bg-brand-blue text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Predictive Analytics", desc: "Our ML models analyze 50+ variables to calculate precise churn probability.", icon: "crown" },
              { title: "AI Retention Plans", desc: "Llama-3 generates custom steps to retain high-risk talent based on their profile.", icon: "plus" },
              { title: "Secure HR Data", desc: "Enterprise-grade encryption and SSO integration for your sensitive employee records.", icon: "checkmark" }
            ].map((f, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-slate-100 hover:border-brand-blue transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                    <Icon id={f.icon} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}