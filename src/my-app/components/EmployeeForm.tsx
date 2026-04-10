'use client';

import { useState } from 'react';

// Define constants used in the form
const DEPARTMENTS = ["Sales", "Research & Development", "Human Resources"];
const JOB_ROLES = ["Sales Executive", "Research Scientist", "Laboratory Technician", "Manufacturing Director", "Healthcare Representative", "Manager", "Sales Representative", "Research Director", "Human Resources"];
const BUSINESS_TRAVEL = ["Travel_Rarely", "Travel_Frequently", "Non-Travel"];
const EDUCATION_FIELDS = ["Life Sciences", "Medical", "Marketing", "Technical Degree", "Other", "Human Resources"];

interface EmployeeFormProps {
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export default function EmployeeForm({ onSubmit, isLoading }: EmployeeFormProps) {
  const [formData, setFormData] = useState({
    Age: 30,
    MonthlyIncome: 5000,
    Department: 'Sales',
    JobRole: 'Sales Executive',
    BusinessTravel: 'Travel_Rarely',
    OverTime: 'No',
    Gender: 'Male',
    MaritalStatus: 'Single',
    EducationField: 'Life Sciences',
    EnvironmentSatisfaction: 3,
    JobSatisfaction: 3,
    WorkLifeBalance: 3,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const labelClass = "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2";
  const inputClass = "w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all";

  return (
    <div className="bg-brand-slate-800 border border-slate-700 rounded-3xl p-8 shadow-xl">
      <h2 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
        <span className="w-1.5 h-6 bg-brand-blue rounded-full" />
        Analyze Employee Risk
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Age</label>
            <input type="number" name="Age" value={formData.Age} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Monthly Income ($)</label>
            <input type="number" name="MonthlyIncome" value={formData.MonthlyIncome} onChange={handleChange} className={inputClass} />
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>Department</label>
            <select name="Department" value={formData.Department} onChange={handleChange} className={inputClass}>
              {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>Job Role</label>
            <select name="JobRole" value={formData.JobRole} onChange={handleChange} className={inputClass}>
              {JOB_ROLES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClass}>Business Travel</label>
            <select name="BusinessTravel" value={formData.BusinessTravel} onChange={handleChange} className={inputClass}>
              {BUSINESS_TRAVEL.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClass}>Overtime</label>
            <select name="OverTime" value={formData.OverTime} onChange={handleChange} className={inputClass}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Job Satisfaction (1-4)</label>
            <input type="number" min="1" max="4" name="JobSatisfaction" value={formData.JobSatisfaction} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Work Life Balance (1-4)</label>
            <input type="number" min="1" max="4" name="WorkLifeBalance" value={formData.WorkLifeBalance} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        <button 
            type="submit" 
            disabled={isLoading} 
            className="w-full mt-8 bg-brand-blue text-white font-bold h-14 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50 flex items-center justify-center gap-3"
        >
          {isLoading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
              <>📊 Run Risk Prediction</>
          )}
        </button>
      </form>
    </div>
  );
}