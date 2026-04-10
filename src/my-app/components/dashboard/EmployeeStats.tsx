'use client';

interface StatItemProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

function StatItem({ label, value, highlight = false }: StatItemProps) {
  return (
    <div className="flex flex-col gap-1 p-4 rounded-xl border border-slate-700/50 bg-slate-800/30">
      <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{label}</div>
      <div className={`text-lg font-bold ${highlight ? 'text-brand-blue' : 'text-slate-200'}`}>{value}</div>
    </div>
  );
}

interface EmployeeStatsProps {
  data: any;
}

export default function EmployeeStats({ data }: EmployeeStatsProps) {
  if (!data) return null;

  return (
    <div className="bg-brand-slate-800 border border-slate-700 rounded-3xl p-6 shadow-xl flex flex-col h-full">
      <h3 className="text-white font-medium mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-brand-blue" />
        Employee Parameters
      </h3>
      
      <div className="grid grid-cols-2 gap-4 flex-grow">
        <StatItem label="Department" value={data.Department} highlight />
        <StatItem label="Job Role" value={data.JobRole} highlight />
        <StatItem label="Age" value={`${data.Age} yrs`} />
        <StatItem label="Monthly Income" value={`$${data.MonthlyIncome?.toLocaleString() || '---'}`} />
        <StatItem label="Overtime" value={data.OverTime} />
        <StatItem label="Environment Sat." value={`${data.EnvironmentSatisfaction}/4`} />
        <StatItem label="Job Satisfaction" value={`${data.JobSatisfaction}/4`} />
        <StatItem label="Work-Life Balance" value={`${data.WorkLifeBalance}/4`} />
      </div>
    </div>
  );
}
