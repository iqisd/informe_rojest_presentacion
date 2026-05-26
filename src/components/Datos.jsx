import { Shield, Lock, Home, ArrowRight, Key, AlertTriangle } from 'lucide-react';
import logoDatos from '../assets/logo-datos.svg';

export default function Datos() {
  const derechosArco = [
    { letra: "A", nombre: "ACCESO", desc: "Solicitar qué datos tiene GTD sobre usted", plazo: "15 días para responder", icon: Key },
    { letra: "R", nombre: "RECTIFICACIÓN", desc: "Corregir datos inexactos o incompletos", plazo: "30 días para corregir", icon: Shield },
    { letra: "C", nombre: "CANCELACIÓN", desc: "Solicitar eliminación permanente de datos", plazo: "Limitación: si no son requeridos por ley", icon: Lock },
    { letra: "O", nombre: "OPOSICIÓN", desc: "Oponerse al procesamiento para ciertos usos", plazo: "A usos específicos, no generales", icon: AlertTriangle }
  ];

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
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg p-3 shadow-lg">
              <img src={logoDatos} alt="Datos Personales" className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Datos Personales y Derechos ARCO</h1>
              <p className="text-slate-300">Protección de datos bajo Ley 19.628</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Principios Fundamentales */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">📋 Ley 19.628: Principios Fundamentales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "👤 Consentimiento", desc: "Datos solo con autorización previa" },
                { title: "🔒 Seguridad", desc: "Responsable garantiza medidas razonables" },
                { title: "🎯 Finalidad", desc: "Datos solo para propósito declarado" },
                { title: "✓ Calidad", desc: "Datos exactos, completos y actualizados" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg border-l-4 border-l-cyan-400 p-4 hover:border-l-cyan-300 transition">
                  <h3 className="font-bold text-cyan-300 mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Datos Comprometidos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">⚠️ Datos Comprometidos en GTD</h2>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/30 rounded-lg p-6">
                <h3 className="font-bold text-blue-300 mb-2 text-lg">📊 Datos Personales (No Sensibles)</h3>
                <p className="text-slate-300 mb-3 flex items-center gap-2"><span className="inline-block bg-blue-500/30 px-2 py-1 rounded text-sm">Riesgo: Moderado</span></p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Nombre, RUT, email, teléfono</li>
                  <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Dirección, cargo (funcionarios)</li>
                  <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Historial de acciones en plataforma</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-500/20 to-red-600/10 backdrop-blur-sm border border-red-400/30 rounded-lg p-6">
                <h3 className="font-bold text-red-300 mb-2 text-lg">🔴 Datos Sensibles (Categoría Especial)</h3>
                <p className="text-slate-300 mb-3 flex items-center gap-2"><span className="inline-block bg-red-500/30 px-2 py-1 rounded text-sm font-bold\">Riesgo: ALTO</span></p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-red-400">•</span> Filiación política (potencial)</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">•</span> Información religiosa o de membresía</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">•</span> Antecedentes penales (si existen)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Derechos ARCO */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">⚖️ Derechos ARCO de Afectados</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {derechosArco.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-6 hover:border-white/20 transition">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-cyan-300">{item.letra}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-cyan-300 text-lg">{item.nombre}</h3>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm">{item.desc}</p>
                    <div className="bg-slate-700/50 rounded px-3 py-2">
                      <p className="text-slate-300 text-xs"><strong className="text-cyan-300">Plazo:</strong> {item.plazo}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Procedimiento */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">📍 Procedimiento de Ejercicio</h2>
            <div className="space-y-3">
              {[
                { num: 1, title: "Presentar solicitud", desc: "Por correo, presencial o portal digital de GTD" },
                { num: 2, title: "GTD responde", desc: "Dentro de plazo legal (15-30 días según derecho)" },
                { num: 3, title: "Acuerdo o desacuerdo", desc: "Si GTD rechaza, puede recurrir a juzgado" },
                { num: 4, title: "Recurso de Protección", desc: "Ante Corte de Apelaciones (si GTD incumple)" }
              ].map((item) => (
                <div key={item.num} className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/30 flex items-center justify-center flex-shrink-0 font-bold text-cyan-300">{item.num}</div>
                  <div className="flex-1">
                    <p className="font-bold text-white">{item.title}</p>
                    <p className="text-slate-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Indemnización */}
          <section className="bg-gradient-to-r from-orange-500/20 to-orange-600/10 backdrop-blur-sm border border-orange-400/30 rounded-lg p-6">
            <h2 className="text-lg font-bold text-orange-300 mb-3 flex items-center gap-2">
              💰 Indemnización Estimada
            </h2>
            <p className="text-slate-300 mb-4">Por violación de Ley 19.628 en GTD:</p>
            <div className="space-y-2 text-slate-300">
              <p className="flex justify-between"><span>👤 Funcionarios:</span> <strong className="text-orange-300">$20-50 millones por persona</strong></p>
              <p className="flex justify-between"><span>👥 Ciudadanos:</span> <strong className="text-orange-300">$5-10 millones por persona</strong></p>
              <div className="border-t border-orange-400/30 pt-3 mt-3">
                <p className="flex justify-between font-bold text-lg"><span>📊 Estimación Total:</span> <span className="text-orange-400">$5-50 mil millones</span></p>
                <p className="text-xs text-slate-400 mt-1">(demandas colectivas probables)</p>
              </div>
            </div>
          </section>

          {/* Obligaciones GTD */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">✅ Obligaciones de GTD (Remediación)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Comunicar públicamente el incidente",
                "Ofrecer monitoreo de crédito gratuito (2-3 años)",
                "Auditoría forense por tercero independiente",
                "Implementar ISO 27001 (12 meses)",
                "Establecer fondo de indemnización para afectados",
                "Capacitación en ciberseguridad (personal GTD)"
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 flex items-center gap-3">
                  <div className="text-2xl">✓</div>
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between gap-4">
          <a href="/responsabilidades" className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg hover:from-slate-600 hover:to-slate-700 transition transform hover:scale-105 font-semibold shadow-lg">
            ← Atrás: Responsabilidades
          </a>
          <a href="/conclusiones" className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-500 hover:to-green-600 transition transform hover:scale-105 font-semibold flex items-center gap-2 shadow-lg">
            Siguiente: Conclusiones
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
