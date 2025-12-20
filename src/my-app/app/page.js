'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/services/api';

export default function AuthPage() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  
  // MODIFICATION : On utilise 'username' au lieu de 'email'
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setMsg('');

    try {
      if (isRegistering) {
        // --- MODE INSCRIPTION ---
        // On envoie { username, password } au lieu de { email, password }
        // Assurez-vous que votre Backend (UserCreate schema) accepte bien "username"
        await api.post('/register', { username, password });
        
        setMsg('Compte créé avec succès ! Connectez-vous.');
        setIsRegistering(false); 
      } else {
        // --- MODE CONNEXION ---
        const formData = new FormData();
        // FastAPI attend toujours une clé 'username' pour le login, c'est parfait ici.
        formData.append('username', username);
        formData.append('password', password);

        const res = await api.post('/login', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        localStorage.setItem('token', res.data.access_token);
        router.push('/dashboard');
      }
    } catch (err) {
      console.error(err);
      setError(isRegistering 
        ? "Erreur inscription (Ce nom d'utilisateur est peut-être déjà pris ?)" 
        : "Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-2">RetentionAI</h1>
        <p className="text-center text-gray-500 mb-6">
            {isRegistering ? "Créer un compte" : "Accès RH"}
        </p>

        {error && <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm border-l-4 border-red-500">{error}</div>}
        {msg && <div className="bg-green-100 text-green-600 p-3 rounded mb-4 text-sm border-l-4 border-green-500">{msg}</div>}
        
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom d'utilisateur</label>
            {/* CHANGEMENT ICI : type text et variable username */}
            <input 
                type="text" 
                value={username} onChange={e => setUsername(e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-black" 
                placeholder="Ex: rh_manager"
                required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input 
                type="password" 
                value={password} onChange={e => setPassword(e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-black" 
                required 
            />
          </div>
          
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">
            {isRegistering ? "S'inscrire" : "Se connecter"}
          </button>
        </form>

        <div className="mt-6 text-center border-t pt-4">
          <p className="text-sm text-gray-600">
            {isRegistering ? "Déjà un compte ?" : "Pas encore de compte ?"}
          </p>
          <button 
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-blue-600 font-semibold hover:underline mt-1"
          >
            {isRegistering ? "Se connecter ici" : "Créer un compte"}
          </button>
        </div>
      </div>
    </div>
  );
}