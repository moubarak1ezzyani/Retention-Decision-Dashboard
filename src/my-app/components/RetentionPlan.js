export default function RetentionPlan({ plan }) {
  if (!plan) return null;

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-purple-200">
      <h3 className="text-lg font-bold text-purple-800 mb-3 flex items-center gap-2">
        🤖 Stratégie recommandée par Gemini
      </h3>
      <div className="prose prose-purple max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed text-sm">
        {plan}
      </div>
    </div>
  );
}