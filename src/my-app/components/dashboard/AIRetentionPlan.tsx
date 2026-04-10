'use client';

import Button from '@/components/ui/Button';

interface AIRetentionPlanProps {
  plan?: string[];
  employeeName: string;
  isHighRisk: boolean;
  score: number;
}

export default function AIRetentionPlan({ plan, employeeName, isHighRisk, score }: AIRetentionPlanProps) {
  const backgroundUrl = "bg-[url(https://assets.codepen.io/416221/customer-call.png)]";

  return (
    <div className={`relative overflow-hidden ${isHighRisk ? 'bg-red-600/10' : 'bg-brand-slate-800'} border border-slate-700 bg-right-bottom rtl:bg-left bg-contain bg-no-repeat rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 min-h-[320px] shadow-xl`}>
      {/* Background decoration inspired by the layout */}
      <div className={`absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none ${backgroundUrl} bg-contain bg-no-repeat`} />

      <div className="relative z-10 mb-8">
        <div className="flex items-center gap-2 mb-2">
            <div className="p-1 px-2 rounded bg-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest">AI Generated</div>
            <h2 className="text-white font-medium text-lg">Retention Strategy</h2>
        </div>
        <div className="text-slate-400 text-xs">Customized action plan for {employeeName}</div>
      </div>

      <div className="relative z-10 bg-brand-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl p-5 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <Button color="blue" icon="checkmark" shape="wide" className="!rounded-lg text-sm h-10">Implement Plan</Button>
          <Button title="Save for Later" color="gray" icon="calendar" shape="square" outline={true} className="!rounded-lg h-10 w-10 p-0" />
        </div>
        
        <div className="bg-brand-slate-800 text-white rounded-xl p-4 transition-all duration-300">
          <div className="mb-3 font-medium text-sm flex items-center gap-2 text-violet-400">
            <span className="text-lg">✨</span> Recommended Actions
          </div>
          
          <ul className="space-y-3">
            {plan && plan.length > 0 ? (
                plan.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-300 items-start leading-relaxed">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-[10px] font-bold">
                            {i + 1}
                        </span>
                        {step}
                    </li>
                ))
            ) : (
                <li className="text-sm text-slate-500 italic">
                    {isHighRisk ? "Generating critical intervention steps..." : "Monitoring for early signs of dissatisfaction."}
                </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
