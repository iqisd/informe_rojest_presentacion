import { BarChart3, Home, ArrowRight, TrendingUp } from 'lucide-react';
import logoAnalytics from '../assets/logo-analytics.svg';

export default function Comparacion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-4">
            <Home size={18} />
            Volver al inicio
          </a>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-3 shadow-lg">
              <img src={logoAnalytics} alt="Análisis" className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Comparación de Marcos Regulatorios</h1>
              <p className="text-slate-300">Análisis comparativo de regulaciones por sector</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Eje 1: Regulación de Seguridad */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp size={24} className="text-purple-400" />
              Eje 1: Regulación de Seguridad
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-6 hover:border-yellow-400/50 transition">
                <h3 className="font-bold text-yellow-300 mb-3 text-lg">🏛️ Sector Público (GTD)</h3>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p><strong className="text-yellow-300">Norma:</strong> Ley 21.595 (reciente)</p>
                  <p><strong className="text-yellow-300">Rigurosidad:</strong> <span className="inline-block bg-yellow-500/30 px-2 py-1 rounded">Moderada</span></p>
                  <p><strong className="text-yellow-300">Auditoría:</strong> Anual (opcional)</p>
                  <p className="text-xs text-slate-400 mt-2">Cumplimiento: Recomendaciones, no obligatorio</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm border border-orange-400/30 rounded-lg p-6 hover:border-orange-400/50 transition">
                <h3 className="font-bold text-orange-300 mb-3 text-lg">🏦 Sector Financiero (Bancos)</h3>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p><strong className="text-orange-300">Norma:</strong> NSIF (Banco Central)</p>
                  <p><strong className="text-orange-300">Rigurosidad:</strong> <span className="inline-block bg-orange-500/30 px-2 py-1 rounded">Alta</span></p>
                  <p><strong className="text-orange-300">Auditoría:</strong> Semestral (obligatoria)</p>
                  <p className="text-xs text-slate-400 mt-2">Cumplimiento: Mandatorio con sanciones</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-500/20 to-red-700/20 backdrop-blur-sm border border-red-400/30 rounded-lg p-6 hover:border-red-400/50 transition">
                <h3 className="font-bold text-red-300 mb-3 text-lg">🛡️ Infraestructura Crítica (Intl)</h3>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p><strong className="text-red-300">Norma:</strong> NIST, ISO 27001</p>
                  <p><strong className="text-red-300">Rigurosidad:</strong> <span className="inline-block bg-red-500/30 px-2 py-1 rounded">Muy Alta</span></p>
                  <p><strong className="text-red-300">Auditoría:</strong> Continua (automatizada)</p>
                  <p className="text-xs text-slate-400 mt-2">Cumplimiento: Crítico, tiempo real</p>
                </div>
              </div>
            </div>
          </section>

          {/* Eje 2: Tiempos de Respuesta */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <BarChart3 size={24} className="text-cyan-400" />
              Eje 2: Tiempos de Respuesta ante Incidente
            </h2>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-semibold text-slate-200 mb-2">Sector Público</div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full" style={{ width: '120px' }}></div>
                      <span className="text-slate-300 font-bold">48-72 horas</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-semibold text-slate-200 mb-2">Sector Financiero</div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" style={{ width: '60px' }}></div>
                      <span className="text-slate-300 font-bold">4 horas</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-semibold text-slate-200 mb-2">Infraestructura Crítica</div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 bg-gradient-to-r from-red-400 to-red-500 rounded-full" style={{ width: '25px' }}></div>
                      <span className="text-slate-300 font-bold">&lt;1 hora</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Eje 3: Protección de Datos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Eje 3: Protección de Datos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-6">
                <h3 className="font-bold text-yellow-300 mb-3">Sector Público</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Ley 19.628 (ARCO)</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Cifrado parcial</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Multas indefinidas</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border border-orange-400/30 rounded-lg p-6">
                <h3 className="font-bold text-orange-300 mb-3">Sector Financiero</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Ley 19.628 + BCCh</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Cifrado AES-256 obligatorio</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Multas 50-500 UF</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 backdrop-blur-sm border border-red-400/30 rounded-lg p-6">
                <h3 className="font-bold text-red-300 mb-3">Infraestructura Crítica</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><span className="text-green-400">✓</span> NIST + ISO 27001</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Cifrado + Redundancia</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Sanciones federales</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusión */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-300 mb-2">📊 Conclusión Comparativa</h3>
            <p className="text-slate-300">GTD operaba bajo regulaciones moderadas (Ley 21.595) con auditorías opcionales, mientras que infraestructura crítica internacional opera bajo estándares mucho más rigurosos con monitoreo continuo. El incidente GTD 2023 evidencia la brecha regulatoria que existe en sectores públicos críticos.</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between gap-4">
          <a href="/delitos" className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg hover:from-slate-600 hover:to-slate-700 transition transform hover:scale-105 font-semibold shadow-lg">
            ← Atrás: Delitos
          </a>
          <a href="/responsabilidades" className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-500 hover:to-green-600 transition transform hover:scale-105 font-semibold flex items-center gap-2 shadow-lg">
            Siguiente: Responsabilidades
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
