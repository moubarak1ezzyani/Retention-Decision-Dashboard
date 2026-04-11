'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/services/api';
import Icon from '@/components/Icon';

export default function AuthPage() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegistering) {
        await api.post('/register', { username, password });
        setIsRegistering(false);
        setError('Account created! Please sign in.');
      } else {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        const res = await api.post('/login', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        localStorage.setItem('token', res.data.access_token);
        router.push('/dashboard');
      }
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dark min-h-screen bg-brand-slate-900 text-brand-slate-50 flex flex-col items-center justify-center p-6 font-inter relative overflow-hidden">
      
      {/* Background Shape */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none z-0">
        <img 
          src="/shape.svg" 
          alt="Background Shape" 
          className="w-full max-w-none opacity-30 scale-[2] md:scale-[2.5]" 
        />
      </div>

      {/* Main Content safely above the background */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <Link href="/" className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">R</div>
          <span className="text-2xl font-bold tracking-tight italic text-white">Retention<span className="text-brand-blue">AI</span></span>
        </Link>

        {/* Glassmorphism Card */}
        <div className="bg-brand-slate-800/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl shadow-black/50 border border-slate-700/50 w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              {isRegistering ? "Create Workspace" : "Welcome Back"}
            </h2>
            <p className="text-slate-400">Continue to your HR Command Center</p>
          </div>

          {/* Adjusted Error/Success alerts for dark mode */}
          {error && (
              <div className={`p-4 rounded-xl text-sm mb-6 flex items-center gap-3 border ${error.includes('created') ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                  <Icon id={error.includes('created') ? 'checkmark' : 'close'} size={18} />
                  {error}
              </div>
          )}

          <form onSubmit={handleAuth} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Work Username</label>
              <input 
                type="text" 
                required
                className="w-full px-5 py-4 rounded-xl bg-brand-slate-900/50 border border-slate-700 outline-none focus:ring-2 focus:ring-brand-blue transition text-white placeholder-slate-500" 
                placeholder="e.g. hr_manager"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Password</label>
              <input 
                type="password" 
                required
                className="w-full px-5 py-4 rounded-xl bg-brand-slate-900/50 border border-slate-700 outline-none focus:ring-2 focus:ring-brand-blue transition text-white placeholder-slate-500" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition disabled:opacity-50 flex justify-center items-center"
            >
              {loading ? <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : (isRegistering ? "Sign Up" : "Sign In")}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-700/50">
              <p className="text-center text-sm text-slate-400">
                  {isRegistering ? "Already have an account?" : "Don't have an account?"}{' '}
                  <button 
                      onClick={() => setIsRegistering(!isRegistering)}
                      className="text-brand-blue font-bold hover:text-blue-400 hover:underline transition-colors"
                  >
                      {isRegistering ? "Log In" : "Register Now"}
                  </button>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}