import { Users, AlertTriangle, Home, ArrowRight, BadgeAlert, Gavel } from 'lucide-react';

export default function Responsabilidades() {
  const actores = [
    {
      nombre: "Atacantes (Grupo Ransomware)",
      penal: "Ley 21.459 (Arts. 1-6) - Presidio mayor 8-15 años",
      civil: "Demanda por daños (difícil ejecutar en extranjero)",
      administrativa: "N/A",
      sancion: "Presidio; Convención Budapest",
      color: "from-red-700/40 to-red-600/30",
      borderColor: "border-red-600/50"
    },
    {
      nombre: "GTD / Ministerio del Interior",
      penal: "Art. 295 CP (negligencia, baja probabilidad)",
      civil: "Ley 19.628 + Código Civil, $30-100 millones",
      administrativa: "Ley 21.595 (auditoría, recomendaciones)",
      sancion: "Multa + Auditoría + Cambio autoridades",
      color: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-400/30"
    },
    {
      nombre: "Proveedores de Servicios",
      penal: "Posible complicidad (baja probabilidad)",
      civil: "Incumplimiento SLA + responsabilidad extracontractual",
      administrativa: "N/A",
      sancion: "Rescisión contrato + Indemnización",
      color: "from-yellow-500/20 to-yellow-600/20",
      borderColor: "border-yellow-400/30"
    },
    {
      nombre: "ASET / CNI",
      penal: "N/A",
      civil: "N/A",
      administrativa: "Revisión de políticas",
      sancion: "Interpelación política",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-400/30"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-4">
            <Home size={18} />
            Volver al inicio
          </a>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-3 shadow-lg flex items-center justify-center">
              <Users className="text-white w-full h-full" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Responsabilidades Legales</h1>
              <p className="text-slate-300">Análisis de actores y sus obligaciones legales</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Gavel size={24} className="text-green-400" />
              Actores y Sus Responsabilidades
            </h2>
            
            <div className="space-y-4">
              {actores.map((actor, idx) => (
                <div key={idx} className={`bg-gradient-to-r ${actor.color} backdrop-blur-sm rounded-lg border ${actor.borderColor} p-6 hover:border-white/20 transition`}>
                  <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                    <BadgeAlert size={20} className="text-amber-400" />
                    {actor.nombre}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-700/50 backdrop-blur-sm p-4 rounded border border-slate-600/50">
                      <p className="font-semibold text-red-300 mb-1">⚖️ Responsabilidad Penal</p>
                      <p className="text-slate-300">{actor.penal}</p>
                    </div>
                    
                    <div className="bg-slate-700/50 backdrop-blur-sm p-4 rounded border border-slate-600/50">
                      <p className="font-semibold text-orange-300 mb-1">💰 Responsabilidad Civil</p>
                      <p className="text-slate-300">{actor.civil}</p>
                    </div>

                    <div className="bg-slate-700/50 backdrop-blur-sm p-4 rounded border border-slate-600/50">
                      <p className="font-semibold text-blue-300 mb-1">📋 Responsabilidad Administrativa</p>
                      <p className="text-slate-300">{actor.administrativa}</p>
                    </div>

                    <div className="bg-slate-700/50 backdrop-blur-sm p-4 rounded border border-slate-600/50">
                      <p className="font-semibold text-yellow-300 mb-1">⚠️ Sanción Probable</p>
                      <p className="text-slate-300 font-semibold">{actor.sancion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Orden de Responsabilidad */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">📊 Jerarquía de Responsabilidad</h2>
            <div className="space-y-3">
              {[
                { num: 1, actor: "Atacantes", desc: "Responsabilidad penal máxima (Ley 21.459)", color: "from-red-600 to-red-700" },
                { num: 2, actor: "GTD/Ministerio", desc: "Mayor vulnerabilidad legal y administrativa", color: "from-orange-500 to-orange-600" },
                { num: 3, actor: "Proveedores", desc: "Responsabilidad contractual y civil", color: "from-yellow-500 to-yellow-600" },
                { num: 4, actor: "ASET/CNI", desc: "Responsabilidad política (no formal)", color: "from-blue-500 to-blue-600" },
                { num: 5, actor: "Afectados", desc: "Posición de demandantes ante cortes", color: "from-purple-500 to-purple-600" }
              ].map((item) => (
                <div key={item.num} className={`bg-gradient-to-r ${item.color} backdrop-blur-sm rounded-lg p-4 border border-white/10`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-white">{item.num}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg">{item.actor}</h4>
                      <p className="text-white/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Risk Estimations */}
          <section className="bg-gradient-to-r from-red-700/40 to-red-600/30 backdrop-blur-sm border border-red-600/50 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-red-200 mb-4 flex items-center gap-2">
              <AlertTriangle size={24} className="text-red-400" />
              Montos de Riesgo Estimados para GTD
            </h2>
            <div className="space-y-2 text-slate-200">
              <p className="flex justify-between"><span>💰 Penalizaciones administrativas:</span> <strong>$5-20 millones</strong></p>
              <p className="flex justify-between"><span>⚖️ Indemnizaciones civiles (demandas):</span> <strong>$50-300 millones</strong></p>
              <p className="flex justify-between"><span>🔧 Costos de remediación:</span> <strong>$10-50 millones</strong></p>
              <div className="border-t border-red-400/30 pt-2 mt-3 flex justify-between text-lg font-bold text-red-300">
                <span>TOTAL ESTIMADO:</span>
                <span>$65-370 millones</span>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between gap-4">
          <a href="/comparacion" className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg hover:from-slate-600 hover:to-slate-700 transition transform hover:scale-105 font-semibold shadow-lg">
            ← Atrás: Comparación
          </a>
          <a href="/datos" className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-lg hover:from-cyan-500 hover:to-cyan-600 transition transform hover:scale-105 font-semibold flex items-center gap-2 shadow-lg">
            Siguiente: Datos Personales
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
