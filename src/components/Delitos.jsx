import { AlertCircle, Home, ArrowRight, Zap, Shield } from 'lucide-react';
import logoRansomware from '../assets/logo-ransomware.svg';

export default function Delitos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-4">
            <Home size={18} />
            Volver al inicio
          </a>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-lg p-3 shadow-lg">
              <img src={logoRansomware} alt="Ransomware" className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Tipificación de Delitos</h1>
              <p className="text-slate-300">Ley 21.459 - Ciberdelitos</p>
            </div>
          </div>
        </div>

        {/* Content Summary */}
        <div className="space-y-6">
          {/* Overview card */}
          <div className="bg-gradient-to-r from-red-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-red-400/30">
            <h2 className="text-2xl font-bold text-red-300 mb-3 flex items-center gap-2">
              <Zap size={24} />
              Delitos Identificados - Ley 21.459
            </h2>
            <p className="text-slate-300">El ataque GTD 2023 tipifica múltiples ciberdelitos bajo la normativa chilena vigente.</p>
          </div>

          {/* Crimes Grid */}
          <div className="space-y-4">
            {/* Art 1 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-lg border-l-4 border-red-500 p-6 border border-slate-600/50 hover:border-red-400/50 transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-red-300 mb-2">Art. 1 - Acceso No Autorizado</h3>
                  <p className="text-slate-300 mb-2">Acceso sin autorización a sistemas GTD y bases de datos protegidas</p>
                  <div className="inline-block bg-red-500/20 border border-red-400 text-red-300 px-3 py-1 rounded text-sm font-semibold">
                    Presidio menor máx. a presidio mayor mín.
                  </div>
                </div>
                <Shield size={24} className="text-red-400 flex-shrink-0" />
              </div>
            </div>

            {/* Art 2 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-lg border-l-4 border-red-500 p-6 border border-slate-600/50 hover:border-red-400/50 transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-red-300 mb-2">Art. 2 - Interferencia con Datos</h3>
                  <p className="text-slate-300 mb-2">Cifrado mediante ransomware y modificación de datos sin autorización</p>
                  <div className="inline-block bg-red-500/20 border border-red-400 text-red-300 px-3 py-1 rounded text-sm font-semibold">
                    Presidio menor máx. a presidio mayor mín.
                  </div>
                </div>
                <Zap size={24} className="text-red-400 flex-shrink-0" />
              </div>
            </div>

            {/* Art 3 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-lg border-l-4 border-red-500 p-6 border border-slate-600/50 hover:border-red-400/50 transition">
              <h3 className="text-lg font-bold text-red-300 mb-2">Art. 3 - Interferencia con Sistemas</h3>
              <p className="text-slate-300 mb-2">Paralización de servicios críticos y caída de infraestructura GTD</p>
              <div className="inline-block bg-red-500/20 border border-red-400 text-red-300 px-3 py-1 rounded text-sm font-semibold">
                Presidio menor máx. a presidio mayor máx.
              </div>
            </div>

            {/* Art 4 - CRITICAL */}
            <div className="bg-gradient-to-r from-red-700/40 to-red-600/30 backdrop-blur-sm rounded-lg border-l-4 border-red-700 p-6 border border-red-600/50 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-red-200 mb-1 flex items-center gap-2">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">⚠️ MÁS GRAVE</span>
                    Art. 4 - Sabotaje Informático
                  </h3>
                  <p className="text-slate-200 mb-2 font-semibold">Daño grave a infraestructura crítica estatal</p>
                  <p className="text-slate-300 mb-3 text-sm">Incluye: cifrado de datos críticos, interrupción de servicios esenciales, impacto en seguridad nacional</p>
                  <div className="inline-block bg-red-700/40 border-2 border-red-400 text-red-200 px-3 py-2 rounded text-sm font-bold">
                    Presidio mayor mín. a presidio mayor máx.
                  </div>
                </div>
                <AlertCircle size={32} className="text-red-300 flex-shrink-0" />
              </div>
            </div>

            {/* Art 5 - CRITICAL */}
            <div className="bg-gradient-to-r from-red-700/40 to-red-600/30 backdrop-blur-sm rounded-lg border-l-4 border-red-700 p-6 border border-red-600/50 shadow-lg hover:shadow-xl transition">
              <h3 className="text-lg font-bold text-red-200 mb-1 flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">⚠️ MÁS GRAVE</span>
                Art. 5 - Extorsión Digital
              </h3>
              <p className="text-slate-200 mb-2 font-semibold">Demanda de rescate bajo amenaza de publicación de datos</p>
              <p className="text-slate-300 mb-3 text-sm">Incluye: cifrado de datos, amenazas de publicación, demanda monetaria</p>
              <div className="inline-block bg-red-700/40 border-2 border-red-400 text-red-200 px-3 py-2 rounded text-sm font-bold">
                Presidio mayor mín. a presidio mayor máx. + multas
              </div>
            </div>

            {/* Art 6 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-lg border-l-4 border-cyan-500 p-6 border border-slate-600/50 hover:border-cyan-400/50 transition">
              <h3 className="text-lg font-bold text-cyan-300 mb-2">Art. 6 - Acceso para Obtener Datos Personales</h3>
              <p className="text-slate-300 mb-2">Exfiltración de información personal de funcionarios y ciudadanos (RUT, emails, teléfonos)</p>
              <div className="inline-block bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-3 py-1 rounded text-sm font-semibold">
                Aplicable bajo Ley 19.628 (Protección de Datos Personales)
              </div>
            </div>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-400/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-300">6+</div>
              <p className="text-slate-300 text-sm">Delitos Tipificados</p>
            </div>
            <div className="bg-gradient-to-br from-red-700/20 to-red-800/10 border border-red-600/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-300">2</div>
              <p className="text-slate-300 text-sm">Delitos Graves</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-400/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-300">10 años</div>
              <p className="text-slate-300 text-sm">Presidio máximo</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-400/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-300">∞</div>
              <p className="text-slate-300 text-sm">Multas posibles</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between gap-4">
          <a href="/marco" className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg hover:from-slate-600 hover:to-slate-700 transition transform hover:scale-105 font-semibold shadow-lg">
            ← Atrás: Marco
          </a>
          <a href="/comparacion" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-500 hover:to-purple-600 transition transform hover:scale-105 font-semibold flex items-center gap-2 shadow-lg">
            Siguiente: Comparación
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
