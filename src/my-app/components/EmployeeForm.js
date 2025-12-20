'use client';
import { useState } from 'react';
import { DEPARTMENTS, JOB_ROLES, BUSINESS_TRAVEL, EDUCATION_FIELDS } from '@/utils/constants';

export default function EmployeeForm({ onSubmit, isLoading }) {
  // Valeurs par défaut basées sur votre CSV pour tester vite
  const [formData, setFormData] = useState({
    EmployeeNumber: 1001, Age: 30, Department: 'Sales', JobRole: 'Sales Executive',
    BusinessTravel: 'Travel_Rarely', OverTime: 'No', MaritalStatus: 'Single',
    EducationField: 'Life Sciences', JobLevel: 2, JobSatisfaction: 3,
    EnvironmentSatisfaction: 3, JobInvolvement: 3, StockOptionLevel: 0,
    YearsAtCompany: 2
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Classes utilitaires pour Tailwind
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const inputClass = "w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-black";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Profil Employé</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Champs Numériques */}
        <div><label className={labelClass}>ID Employé</label><input type="number" name="EmployeeNumber" value={formData.EmployeeNumber} onChange={handleChange} className={inputClass} /></div>
        <div><label className={labelClass}>Âge</label><input type="number" name="Age" value={formData.Age} onChange={handleChange} className={inputClass} /></div>

        {/* Sélecteurs via les constantes */}
        <div className="md:col-span-2">
            <label className={labelClass}>Département</label>
            <select name="Department" value={formData.Department} onChange={handleChange} className={inputClass}>
                {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
        </div>
        
        <div className="md:col-span-2">
            <label className={labelClass}>Rôle</label>
            <select name="JobRole" value={formData.JobRole} onChange={handleChange} className={inputClass}>
                {JOB_ROLES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
        </div>

        <div>
            <label className={labelClass}>Voyages</label>
            <select name="BusinessTravel" value={formData.BusinessTravel} onChange={handleChange} className={inputClass}>
                {BUSINESS_TRAVEL.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
        </div>

        <div>
            <label className={labelClass}>Heures Sup (OverTime)</label>
            <select name="OverTime" value={formData.OverTime} onChange={handleChange} className={inputClass}>
                <option value="No">Non</option><option value="Yes">Oui</option>
            </select>
        </div>

        {/* Sliders / Inputs chiffrés */}
        <div><label className={labelClass}>Satisfaction (1-4)</label><input type="number" min="1" max="4" name="JobSatisfaction" value={formData.JobSatisfaction} onChange={handleChange} className={inputClass} /></div>
        <div><label className={labelClass}>Ancienneté (Années)</label><input type="number" name="YearsAtCompany" value={formData.YearsAtCompany} onChange={handleChange} className={inputClass} /></div>
      </div>

      <button type="submit" disabled={isLoading} className="w-full mt-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
        {isLoading ? "Analyse en cours..." : "📊 Calculer le Risque"}
      </button>
    </form>
  );
}