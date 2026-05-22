import { Users, AlertTriangle } from 'lucide-react';

export default function Responsabilidades() {
  const actores = [
    {
      nombre: "Atacantes (Grupo Ransomware)",
      penal: "Ley 21.459 (Arts. 1-6) - Presidio mayor 8-15 años",
      civil: "Demanda por daños (difícil ejecutar en extranjero)",
      administrativa: "N/A",
      sancion: "Presidio; Convención Budapest"
    },
    {
      nombre: "GTD / Ministerio del Interior",
      penal: "Art. 295 CP (negligencia, baja probabilidad)",
      civil: "Ley 19.628 + Código Civil, $30-100 millones",
      administrativa: "Ley 21.595 (auditoría, recomendaciones)",
      sancion: "Multa + Auditoría + Cambio autoridades"
    },
    {
      nombre: "Proveedores de Servicios",
      penal: "Posible complicidad (baja probabilidad)",
      civil: "Incumplimiento SLA + responsabilidad extracontractual",
      administrativa: "N/A",
      sancion: "Rescisión contrato + Indemnización"
    },
    {
      nombre: "ASET / CNI",
      penal: "N/A",
      civil: "N/A",
      administrativa: "Revisión de políticas",
      sancion: "Interpelación política"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <Users className="text-purple-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-900">Responsabilidades Legales</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Actores y Sus Responsabilidades</h2>
            
            <div className="space-y-4">
              {actores.map((actor, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg p-5">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">{actor.nombre}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="font-semibold text-slate-900">Responsabilidad Penal</p>
                      <p className="text-slate-700">{actor.penal}</p>
                    </div>
                    
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="font-semibold text-slate-900">Responsabilidad Civil</p>
                      <p className="text-slate-700">{actor.civil}</p>
                    </div>

                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold text-slate-900">Responsabilidad Administrativa</p>
                      <p className="text-slate-700">{actor.administrativa}</p>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded">
                      <p className="font-semibold text-slate-900">Sanción Probable</p>
                      <p className="text-slate-700 font-semibold">{actor.sancion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Orden de Responsabilidad</h2>
            <ol className="space-y-2 text-slate-700">
              <li><strong>1. Atacantes:</strong> Responsabilidad penal máxima (Ley 21.459) - Pena máxima</li>
              <li><strong>2. GTD/Ministerio:</strong> Responsabilidad administrativa y civil - Mayor vulnerabilidad legal</li>
              <li><strong>3. Proveedores:</strong> Responsabilidad contractual y potencialmente civil</li>
              <li><strong>4. ASET/CNI:</strong> Responsabilidad política (no legal formal)</li>
              <li><strong>5. Afectados:</strong> Posición de demandantes (ejercer acciones legales)</li>
            </ol>
          </section>

          <section className="bg-red-50 border border-red-200 rounded p-4">
            <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <AlertTriangle size={20} className="text-red-600" />
              Montos de Riesgo Estimados para GTD
            </h2>
            <ul className="text-slate-700 space-y-1">
              <li>• Penalizaciones administrativas: <strong>$5-20 millones</strong></li>
              <li>• Indemnizaciones civiles (demandas): <strong>$50-300 millones</strong></li>
              <li>• Costos de remediación: <strong>$10-50 millones</strong></li>
              <li><strong>TOTAL ESTIMADO: $65-370 millones</strong></li>
            </ul>
          </section>
        </div>

        <div className="mt-8 flex justify-between gap-4">
          <a href="/comparacion" className="px-6 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition">
            ← Comparación
          </a>
          <a href="/datos" className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
            Datos Personales →
          </a>
        </div>
      </div>
    </div>
  );
}
