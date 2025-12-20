export default function PredictionCard({ result, onGeneratePlan, loadingPlan }) {
  if (!result) return null;

  const isHighRisk = result.probability > 0.5;
  const percentage = (result.probability * 100).toFixed(1);

  return (
    <div className={`p-6 rounded-lg shadow-md border-t-4 ${isHighRisk ? 'border-red-500 bg-red-50' : 'border-green-500 bg-green-50'}`}>
      <h2 className="text-xl font-bold text-gray-800 mb-2">Résultat de l'analyse</h2>
      
      <div className="flex justify-between items-end mb-4">
        <span className="text-gray-600">Probabilité de départ</span>
        <span className={`text-4xl font-bold ${isHighRisk ? 'text-red-600' : 'text-green-600'}`}>{percentage}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div className={`h-3 rounded-full ${isHighRisk ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${percentage}%` }}></div>
      </div>

      <p className="text-gray-700 mb-6 font-medium">
        {isHighRisk ? "⚠️ Risque Critique : Action requise." : "✅ Situation Stable."}
      </p>

      {/* Le bouton n'apparaît que si le risque est significatif (ex > 20%) */}
      {result.probability > 0.2 && (
          <button 
            onClick={onGeneratePlan} 
            disabled={loadingPlan}
            className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition flex items-center justify-center gap-2 shadow"
          >
            {loadingPlan ? "Gemini réfléchit..." : "✨ Générer un Plan de Rétention (IA)"}
          </button>
      )}
    </div>
  );
}