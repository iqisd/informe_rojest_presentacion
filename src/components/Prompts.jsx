import { Code, MessageCircle, Home, BookOpen, TrendingUp } from 'lucide-react';

export default function Prompts() {
  const prompts = [
    {
      numero: 1,
      seccion: "Marco Normativo",
      prompt: "Estructura del marco normativo Ley 21.459, 19.628, 21.595",
      herramienta: "GitHub Copilot",
      aceptado: "80%",
      corregido: "Citas específicas de artículos, detalles Ley 21.595"
    },
    {
      numero: 2,
      seccion: "Marco Normativo",
      prompt: "Detalles técnicos de Ley 19.628 y derechos ARCO",
      herramienta: "GitHub Copilot",
      aceptado: "100%",
      corregido: "Nada relevante; fue preciso"
    },
    {
      numero: 3,
      seccion: "Delitos",
      prompt: "Mapeo de acciones del atacante a artículos Ley 21.459",
      herramienta: "GitHub Copilot",
      aceptado: "100%",
      corregido: "Ampliación de imputabilidad y circunstancias agravantes"
    },
    {
      numero: 4,
      seccion: "Delitos",
      prompt: "Fases típicas de ataque ransomware a infraestructura estatal",
      herramienta: "GitHub Copilot",
      aceptado: "85%",
      corregido: "Detalles específicos de GTD y contexto legal chileno"
    },
    {
      numero: 5,
      seccion: "Comparación",
      prompt: "Comparación frameworks regulatorios por sector (público/financiero/crítica)",
      herramienta: "GitHub Copilot",
      aceptado: "85%",
      corregido: "Montos de multas, RTO/RPO, datos específicos sector financiero"
    },
    {
      numero: 6,
      seccion: "Responsabilidades",
      prompt: "Mapeo de responsabilidades penales, civiles, administrativas por actor",
      herramienta: "GitHub Copilot",
      aceptado: "60%",
      corregido: "Montos específicos de jurisprudencia, precedentes chilenos, Art. 295 CP"
    },
    {
      numero: 7,
      seccion: "Datos Personales",
      prompt: "Análisis Ley 19.628, derechos ARCO, procedimientos legales",
      herramienta: "GitHub Copilot",
      aceptado: "80%",
      corregido: "Montos de indemnización, Recurso de Protección, plazos legales"
    },
    {
      numero: 8,
      seccion: "Conclusiones",
      prompt: "Recomendaciones sector público por plazo, precedentes internacionales",
      herramienta: "GitHub Copilot",
      aceptado: "85%",
      corregido: "CSIRT, plazos ISO 27001, preguntas para responsables"
    }
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
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg p-3 shadow-lg flex items-center justify-center">
              <Code className="text-white w-full h-full" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Bitácora: Uso de GitHub Copilot</h1>
              <p className="text-slate-300">Prompts utilizados y evaluación de resultados</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Prompts Utilizados */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <MessageCircle size={24} className="text-blue-400" />
              Prompts Utilizados
            </h2>
            
            <div className="space-y-4">
              {prompts.map((p) => (
                <div key={p.numero} className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-6 hover:border-indigo-400/50 transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      {p.numero}
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <h3 className="font-bold text-white text-lg">{p.seccion}</h3>
                        <span className="text-xs bg-indigo-500/30 border border-indigo-400 text-indigo-300 px-3 py-1 rounded-full font-semibold\">{p.herramienta}</span>
                      </div>
                      
                      <p className="text-slate-300 mb-3 italic border-l-2 border-indigo-400 pl-3\">"{p.prompt}"</p>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-400/30 rounded-lg p-3">
                          <p className="font-semibold text-green-300">✓ Se aceptó</p>
                          <p className="text-white font-bold text-lg">{p.aceptado}</p>
                        </div>
                        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-400/30 rounded-lg p-3">
                          <p className="font-semibold text-orange-300">⚙️ Se corrigió</p>
                          <p className="text-slate-300 text-xs">{p.corregido}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Evaluación de Copilot */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp size={24} className="text-green-400" />
              Evaluación de GitHub Copilot
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-sm border border-green-400/30 rounded-lg p-6">
                <h3 className="font-bold text-green-300 mb-4 text-lg">✓ Fortalezas</h3>
                <ul className="space-y-3 text-slate-300">
                  {[
                    "Generación rápida de estructuras",
                    "Tablas multidimensionales precisas",
                    "Identificación de normas relevantes",
                    "Generación de recomendaciones coherentes"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-green-400 text-lg">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 backdrop-blur-sm border border-red-400/30 rounded-lg p-6">
                <h3 className="font-bold text-red-300 mb-4 text-lg">✗ Limitaciones</h3>
                <ul className="space-y-3 text-slate-300">
                  {[
                    "Leyes muy recientes desconocidas",
                    "Montos y cifras sin validación",
                    "Jurisprudencia reciente (2020+) limitada",
                    "Contexto local chileno insuficiente"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-red-400 text-lg">−</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Especificidad de Prompts */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">📝 Especificidad de Prompts</h2>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-700/40 to-red-600/30 backdrop-blur-sm border border-red-600/50 rounded-lg p-6">
                <p className="text-sm font-bold text-red-200 mb-2">❌ Prompt Genérico (Evitado)</p>
                <p className="text-slate-300 italic text-sm">"Hazme un análisis de ciberseguridad"</p>
                <p className="text-xs text-red-400 mt-2 font-semibold">Resultado: Genérico, bajo valor</p>
              </div>

              <div className="bg-gradient-to-r from-green-700/40 to-green-600/30 backdrop-blur-sm border border-green-600/50 rounded-lg p-6">
                <p className="text-sm font-bold text-green-200 mb-2">✓ Prompt Específico (Usado)</p>
                <p className="text-slate-300 italic text-sm">"Mapea ataque ransomware a GTD 2023 (Chile) a artículos Ley 21.459, detalla penas y jurisprudencia"</p>
                <p className="text-xs text-green-400 mt-2 font-semibold">Resultado: Preciso, 85-100% útil</p>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4">
                <p className="text-white font-semibold">💡 Conclusión:</p>
                <p className="text-slate-300 text-sm">Prompts específicos (mencionando caso, normas, país) generaron resultados <strong className="text-blue-300">3x mejores</strong></p>
              </div>
            </div>
          </section>

          {/* Costo/Beneficio */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">💰 Análisis Costo/Beneficio</h2>
            
            <div className="space-y-3">
              {[
                { label: "Tiempo ahorrado", value: "~40% en estructura y esquematización", color: "green" },
                { label: "Investigación manual requerida", value: "~60% (validación, datos, casos chilenos)", color: "orange" },
                { label: "Calidad final", value: "Robusta y defendible ante corte", color: "blue" },
                { label: "Veredicto", value: "IA acelera producción pero NO reemplaza investigación legal seria", color: "purple" }
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/10 backdrop-blur-sm border border-${item.color}-400/30 rounded-lg p-4`}>
                  <p className={`text-${item.color}-300 font-bold mb-1`}>{item.label}</p>
                  <p className="text-slate-300">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Reflexión Final */}
          <section className="bg-gradient-to-r from-indigo-700/40 to-indigo-600/30 backdrop-blur-sm border border-indigo-600/50 rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-bold text-indigo-200 mb-3 flex items-center gap-2">
              <Code size={24} className="text-indigo-400" />
              Reflexión Final
            </h2>
            <p className="text-slate-200">
              GitHub Copilot fue excelente como asistente estructural, pero cada afirmación legal requirió verificación independiente con fuentes oficiales. El uso efectivo de IA en análisis legal requiere:
            </p>
            <p className="text-indigo-300 font-bold mt-3 text-lg">
              IA (estructura) + Investigación manual (validación) + Jurisprudencia (defensa)
            </p>
          </section>

          {/* Recomendaciones */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">✅ Recomendaciones para Casos Futuros</h2>
            <div className="space-y-2">
              {[
                { icon: "✓", text: "Usar IA para brainstorming y estructura inicial", color: "green" },
                { icon: "✓", text: "Usar IA para tablas comparativas multidimensionales", color: "green" },
                { icon: "✓", text: "Usar IA para generación de recomendaciones", color: "green" },
                { icon: "✗", text: "NO usar IA como fuente primaria de normas", color: "red" },
                { icon: "✗", text: "NO confiar en montos sin validación de casos reales", color: "red" },
                { icon: "✗", text: "NO usar para jurisprudencia actual sin verificación", color: "red" }
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/10 backdrop-blur-sm border border-${item.color}-400/30 rounded-lg p-4 flex items-center gap-3`}>
                  <span className={`text-${item.color}-400 font-bold text-lg`}>{item.icon}</span>
                  <span className="text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-center">
          <a href="/conclusiones" className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg hover:from-slate-600 hover:to-slate-700 transition transform hover:scale-105 font-semibold shadow-lg">
            ← Atrás: Conclusiones
          </a>
        </div>
      </div>
    </div>
  );
}
