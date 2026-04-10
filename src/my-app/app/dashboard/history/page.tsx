'use client';

import { useEffect, useState } from 'react';
import api from '@/services/api';
import { Formatter } from '@/utils/formatters';

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await api.get('/history');
        setHistory(res.data);
      } catch (err) {
        console.error("Error fetching history:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Prediction History</h2>
        <p className="text-slate-500 text-sm">Review previous attrition risk assessments and generated plans.</p>
      </div>

      <div className="bg-brand-slate-800 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-900/50">
                <th className="px-8 py-5 text-slate-400 font-bold uppercase tracking-wider text-[10px]">Date</th>
                <th className="px-8 py-5 text-slate-400 font-bold uppercase tracking-wider text-[10px]">Department</th>
                <th className="px-8 py-5 text-slate-400 font-bold uppercase tracking-wider text-[10px]">Role</th>
                <th className="px-8 py-5 text-slate-400 font-bold uppercase tracking-wider text-[10px]">Risk Score</th>
                <th className="px-8 py-5 text-slate-400 font-bold uppercase tracking-wider text-[10px]">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {loading ? (
                <tr>
                   <td colSpan={5} className="px-8 py-20 text-center">
                        <div className="flex flex-col items-center gap-4">
                            <span className="w-8 h-8 border-2 border-brand-blue/30 border-t-brand-blue rounded-full animate-spin" />
                            <span className="text-slate-500 text-sm">Loading history...</span>
                        </div>
                   </td>
                </tr>
              ) : history.length === 0 ? (
                <tr>
                   <td colSpan={5} className="px-8 py-20 text-center text-slate-600 italic">No prediction history found.</td>
                </tr>
              ) : (
                history.map((record, index) => {
                  const score = record.churn_probability;
                  const riskColor = score > 0.75 ? 'text-red-500' : score > 0.50 ? 'text-amber-500' : 'text-emerald-500';
                  const bgRiskColor = score > 0.75 ? 'bg-red-500/10' : score > 0.50 ? 'bg-amber-500/10' : 'bg-emerald-500/10';
                  
                  return (
                    <tr key={index} className="hover:bg-slate-700/30 transition-colors group cursor-pointer">
                      <td className="px-8 py-6 text-sm text-slate-300 font-medium">
                        {new Date(record.timestamp || Date.now()).toLocaleDateString()}
                      </td>
                      <td className="px-8 py-6 text-sm text-slate-400">
                        {record.employee_data?.Department || "---"}
                      </td>
                      <td className="px-8 py-6 text-sm text-slate-400 italic">
                        {record.employee_data?.JobRole || "---"}
                      </td>
                      <td className={`px-8 py-6 text-sm font-bold ${riskColor}`}>
                        {Formatter.percent(score)}
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${riskColor} ${bgRiskColor}`}>
                          {score > 0.66 ? 'Critical' : score > 0.33 ? 'Medium' : 'Stable'}
                        </span>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
