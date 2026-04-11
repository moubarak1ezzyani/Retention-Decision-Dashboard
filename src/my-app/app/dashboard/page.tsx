'use client';

import { useState } from 'react';
import api from '@/services/api';
import EmployeeForm from '@/components/EmployeeForm';
import RiskGauge from '@/components/dashboard/RiskGauge';
import EmployeeStats from '@/components/dashboard/EmployeeStats';
import AIRetentionPlan from '@/components/dashboard/AIRetentionPlan';

export default function Dashboard() {
  const [prediction, setPrediction] = useState<any>(null);
  const [retentionPlan, setRetentionPlan] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [employeeData, setEmployeeData] = useState<any>(null);

  const handlePredict = async (data: any) => {
    setLoading(true);
    setPrediction(null);
    setRetentionPlan([]);
    setEmployeeData(data);

    try {
      // 1. Get Prediction
      const res = await api.post('/predict', data);
      setPrediction(res.data);

      // 2. Generate Plan
      // Since your backend now checks if risk <= 0.50 and returns a default plan,
      // we can just make the call directly without an 'if' statement!
      const planRes = await api.post('/generate-retention-plan', data);
      setRetentionPlan(planRes.data.retention_plan);

    } catch (err: any) {
      console.error("Full backend error:", err);
      
      // Better error handling for FastAPI validation arrays
      let errorMessage = "Error communicating with the predictive API.";
      if (err.response?.data?.detail) {
        const detail = err.response.data.detail;
        if (Array.isArray(detail)) {
          errorMessage = detail.map((errItem: any) => 
            `Field '${errItem.loc[errItem.loc.length - 1]}': ${errItem.msg}`
          ).join('\n');
        } else {
          errorMessage = typeof detail === 'string' ? detail : JSON.stringify(detail, null, 2);
        }
      }
      
      alert(`Backend Error:\n\n${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Input Form */}
        <div className="lg:col-span-4 xl:col-span-5">
          <EmployeeForm onSubmit={handlePredict} isLoading={loading} />
        </div>

        {/* Right: Results Dashboard */}
        <div className="lg:col-span-8 xl:col-span-7 flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[400px]">
            {/* Risk Gauge */}
            <RiskGauge percent={prediction?.churn_probability || 0} />
            
            {/* Employee Metrics Display */}
            <EmployeeStats data={employeeData} />
          </div>

          <div className="w-full">
            <AIRetentionPlan 
                plan={retentionPlan} 
                employeeName={employeeData ? "the employee" : "---"}
                isHighRisk={(prediction?.churn_probability || 0) > 0.50}
                score={prediction?.churn_probability || 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}