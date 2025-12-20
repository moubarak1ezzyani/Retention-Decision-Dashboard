'use client';
import { useState } from 'react';
import api from '@/services/api';
import EmployeeForm from '@/components/EmployeeForm';
import PredictionCard from '@/components/PredictionCard';
import RetentionPlan from '@/components/RetentionPlan';

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [plan, setPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(false);
  const [currentEmployeeData, setCurrentEmployeeData] = useState(null);

  // 1. Appeler l'API de prédiction ML
  const handlePredict = async (data) => {
    setLoading(true);
    setResult(null);
    setPlan('');
    setCurrentEmployeeData(data); // On sauvegarde les données pour l'étape suivante

    try {
      const res = await api.post('/predict', data);
      setResult(res.data);
    } catch (err) {
      alert("Erreur lors de la prédiction. Vérifiez le backend.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 2. Appeler l'API Gemini pour le plan
  const handleGeneratePlan = async () => {
    if (!result || !currentEmployeeData) return;
    setLoadingPlan(true);

    try {
      const payload = {
        employee_data: currentEmployeeData,
        churn_probability: result.probability
      };
      const res = await api.post('/generate-retention-plan', payload);
      setPlan(res.data.plan);
    } catch (err) {
      alert("Erreur IA");
    } finally {
      setLoadingPlan(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-900">Tableau de Bord RH</h1>
        <button onClick={() => { localStorage.removeItem('token'); window.location.href='/'; }} 
                className="text-sm text-red-600 hover:underline">Déconnexion</button>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Colonne Gauche : Saisie (7 colonnes sur 12) */}
        <div className="lg:col-span-7">
          <EmployeeForm onSubmit={handlePredict} isLoading={loading} />
        </div>

        {/* Colonne Droite : Résultats (5 colonnes sur 12) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Composant Résultat ML */}
          <PredictionCard 
            result={result} 
            onGeneratePlan={handleGeneratePlan} 
            loadingPlan={loadingPlan} 
          />
          
          {/* Composant Résultat IA */}
          <RetentionPlan plan={plan} />
          
          {!result && (
            <div className="h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
              En attente de données...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}