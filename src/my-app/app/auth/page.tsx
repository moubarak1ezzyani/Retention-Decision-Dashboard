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
    <div className="light min-h-screen bg-brand-slate-50 flex flex-col items-center justify-center p-6 font-inter">
      <Link href="/" className="flex items-center gap-2 mb-12">
        <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center font-bold text-white">R</div>
        <span className="text-2xl font-bold tracking-tight italic text-brand-slate-900">Retention<span className="text-brand-blue">AI</span></span>
      </Link>

      <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 w-full max-w-md">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-brand-slate-900 mb-2">
            {isRegistering ? "Create Workspace" : "Welcome Back"}
          </h2>
          <p className="text-slate-500">Continue to your HR Command Center</p>
        </div>

        {error && (
            <div className={`p-4 rounded-xl text-sm mb-6 flex items-center gap-3 ${error.includes('created') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                <Icon id={error.includes('created') ? 'checkmark' : 'close'} size={18} />
                {error}
            </div>
        )}

        <form onSubmit={handleAuth} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Work Username</label>
            <input 
              type="text" 
              required
              className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-blue transition text-brand-slate-900" 
              placeholder="e.g. hr_manager"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              required
              className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-blue transition text-brand-slate-900" 
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

        <div className="mt-8 pt-8 border-t border-slate-100">
            <button 
                className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition mb-6"
            >
                <Icon id="microphone" size={20} className="text-slate-400" />
                Sign in with SSO
            </button>
            <p className="text-center text-sm text-slate-500">
                {isRegistering ? "Already have an account?" : "Don't have an account?"}{' '}
                <button 
                    onClick={() => setIsRegistering(!isRegistering)}
                    className="text-brand-blue font-bold hover:underline"
                >
                    {isRegistering ? "Log In" : "Register Now"}
                </button>
            </p>
        </div>
      </div>
    </div>
  );
}
