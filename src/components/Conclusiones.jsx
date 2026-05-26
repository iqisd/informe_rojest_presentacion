import { CheckCircle, AlertTriangle, Lightbulb, Home, ArrowRight, Zap } from 'lucide-react';

export default function Conclusiones() {
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
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg p-3 shadow-lg flex items-center justify-center">
              <CheckCircle className="text-white w-full h-full" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Conclusiones y Recomendaciones</h1>
              <p className="text-slate-300">Síntesis y planes de acción</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Síntesis de Hallazgos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">📊 Síntesis de Hallazgos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "⚠️ Delitos Tipificados", items: ["Ley 21.459 (6 artículos)", "Art. 4 y 5 más graves", "Pena: 8-15 años presidio mayor"], color: "from-red-500/20 to-red-600/10" },
                { title: "👥 Responsabilidades", items: ["GTD: Admin + civil", "Atacantes: Penal máxima", "Riesgo: $65-370M"], color: "from-orange-500/20 to-orange-600/10" },
                { title: "🛡️ Violaciones Derechos", items: ["Derechos ARCO (Art. 13-20)", "Seguridad datos (Art. 5)", "Info incidente (Art. 13)"], color: "from-blue-500/20 to-blue-600/10" },
                { title: "📈 Comparativa Sectores", items: ["GTD > vulnerable que bancos", "Regulación incompleta", "Falta ISO 27001"], color: "from-green-500/20 to-green-600/10" }
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/10 rounded-lg p-6`}>
                  <h3 className="font-bold text-white mb-3">{item.title}</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {item.items.map((i, idy) => (
                      <li key={idy} className="flex items-center gap-2">
                        <span className="text-green-400">✓</span> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Recomendaciones */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Lightbulb size={24} className="text-yellow-400" />
              Recomendaciones por Plazo
            </h2>

            <div className="space-y-4">
              {[
                { 
                  plazo: "Corto Plazo (0-6 meses)", 
                  color: "from-red-600 to-red-700",
                  items: [
                    "Comunicado público completo con detalles del incidente",
                    "Línea de atención 24/7 para afectados",
                    "Auditoría forense independiente",
                    "Implementar cifrado AES-256",
                    "Cambiar credenciales administrativas"
                  ]
                },
                { 
                  plazo: "Mediano Plazo (6-12 meses)", 
                  color: "from-orange-600 to-orange-700",
                  items: [
                    "Implementar ISO 27001 (certificación obligatoria)",
                    "Adoptar NIST Cybersecurity Framework",
                    "Establecer SOC 24/7 (Security Operations Center)",
                    "Pruebas de penetración semestrales",
                    "Actualizar plan de continuidad (RTO: 4 horas)"
                  ]
                },
                { 
                  plazo: "Largo Plazo (12+ meses)", 
                  color: "from-blue-600 to-blue-700",
                  items: [
                    "Crear CSIRT estatal (Computer Security Incident Response Team)",
                    "Centro de Excelencia en Ciberseguridad",
                    "Reformar Ley 21.595 con estándares ISO 27001",
                    "Fondo nacional de respuesta a ciberataques",
                    "Programa de conciencia en ciberseguridad"
                  ]
                }
              ].map((section, idx) => (
                <div key={idx} className={`bg-gradient-to-r ${section.color} backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden shadow-lg`}>
                  <div className="px-6 py-3 bg-white/10 border-b border-white/20">
                    <h3 className="font-bold text-white text-lg">{section.plazo}</h3>
                  </div>
                  <div className="p-6 space-y-3">
                    {section.items.map((item, idy) => (
                      <p key={idy} className="text-white/90 flex items-start gap-3">
                        <span className="text-yellow-300 flex-shrink-0 mt-1">•</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lecciones Aprendidas */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">📖 Lecciones Aprendidas</h2>
            <div className="space-y-3">
              {[
                { title: "Regulación incompleta", desc: "Ley 21.595 es reciente sin implementación total" },
                { title: "Inversión insuficiente", desc: "Presupuesto de TI sin prioridad a seguridad" },
                { title: "Detección lenta", desc: "Falta de SOC 24/7, demora 3+ días" },
                { title: "Comparativa clara", desc: "GTD significativamente menos rigurosa que sector financiero" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4">
                  <p className="text-white"><strong className="text-yellow-300">{idx + 1}. {item.title}:</strong> <span className="text-slate-300">{item.desc}</span></p>
                </div>
              ))}
            </div>
          </section>

          {/* Reflexión Final */}
          <section className="bg-gradient-to-r from-red-700/40 to-red-600/30 backdrop-blur-sm border border-red-600/50 rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-bold text-red-200 mb-3 flex items-center gap-2">
              <AlertTriangle size={24} className="text-red-400" />
              Reflexión Final
            </h2>
            <p className="text-slate-200 mb-3">
              El ataque a GTD 2023 fue <strong>EVITABLE</strong>. Las vulnerabilidades explotadas fueron técnicamente básicas. La implementación de estándares internacionales (ISO 27001, RTO 4 horas, auditorías semestrales) habría prevenido o limitado significativamente el impacto.
            </p>
            <p className="text-red-300 font-bold text-lg">
              ⚖️ La seguridad de infraestructura crítica estatal no es opcional; es obligación del Estado con sus ciudadanos.
            </p>
          </section>

          {/* Preguntas Clave */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">❓ Preguntas Clave para Responsables</h2>
            <div className="space-y-2">
              {[
                "¿Por qué GTD no estaba certificado ISO 27001 antes del ataque?",
                "¿Por qué el tiempo de detección fue > 3 días sin SOC 24/7?",
                "¿Cuándo se implementarán estándares del sector financiero?",
                "¿Se perseguirá activamente la extradición de atacantes?",
                "¿Cuándo se reformará Ley 21.595 con estándares ISO 27001?"
              ].map((q, idx) => (
                <div key={idx} className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4">
                  <p className="text-white"><span className="font-bold text-cyan-300">{idx + 1}.</span> {q}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between gap-4">
          <a href="/datos" className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg hover:from-slate-600 hover:to-slate-700 transition transform hover:scale-105 font-semibold shadow-lg">
            ← Atrás: Datos
          </a>
          <a href="/prompts" className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-500 hover:to-indigo-600 transition transform hover:scale-105 font-semibold flex items-center gap-2 shadow-lg">
            Siguiente: Bitácora IA
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
