'use client';

import { Formatter } from '@/utils/formatters';

interface RiskGaugeProps {
  percent: number;
  label?: string;
}

export default function RiskGauge({ percent, label = "Churn Probability" }: RiskGaugeProps) {
  const circumference = 34.56;
  const offset = 34.56 * (1 - percent);
  const dots = 16;
  const dotAngle = +(360 / dots).toFixed(2);
  const angles = [];

  for (let d = 0; d < dots; ++d) {
    angles.push(dotAngle * d);
  }

  // Risk Color Logic
  const getRiskColor = (p: number) => {
    if (p > 0.75) return 'text-red-500 stroke-red-500';
    if (p > 0.50) return 'text-amber-500 stroke-amber-500';
    return 'text-emerald-500 stroke-emerald-500';
  };

  const riskClass = getRiskColor(percent);

  return (
    <div className="bg-brand-slate-800 border border-slate-700 aspect-square rounded-3xl p-6 flex flex-col items-center justify-center relative transition-all duration-300 hover:border-slate-600 shadow-2xl">
      <div className="relative w-full max-w-[200px] aspect-square">
        <svg 
          className="m-auto w-full h-auto rtl:-scale-x-100" 
          viewBox="0 0 16 16" 
          role="img" 
          aria-label={`Ring chart showing a ${Formatter.percent(percent)} churn risk`}
        >
          <g fill="currentcolor" transform="translate(8,8)">
            {angles.map((angle, i) => (
              <circle 
                key={i} 
                r="0.4" 
                className="opacity-20 fill-white"
                transform={`rotate(${angle}) translate(0,-5.5)`} 
              />
            ))}
            <circle 
              className={`${riskClass} transition-all duration-1000 ease-out`}
              r="5.5" 
              fill="none" 
              strokeLinecap="round" 
              strokeWidth="1.2" 
              strokeDasharray={`${circumference} ${circumference}`} 
              strokeDashoffset={offset} 
              transform="rotate(-90)" 
            />
          </g>
        </svg>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div className={`text-4xl font-bold mb-1 ${riskClass.split(' ')[0]}`}>
            {Formatter.percent(percent)}
          </div>
          <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}
