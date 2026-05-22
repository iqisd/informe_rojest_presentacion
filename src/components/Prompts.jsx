import { Code, MessageCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <Code className="text-indigo-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-900">Bitácora: Uso de GitHub Copilot</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Prompts Utilizados</h2>
            
            <div className="space-y-4">
              {prompts.map((p) => (
                <div key={p.numero} className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 text-indigo-700 font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      {p.numero}
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-slate-900">{p.seccion}</h3>
                        <span className="text-xs bg-slate-200 px-2 py-1 rounded">{p.herramienta}</span>
                      </div>
                      
                      <p className="text-sm text-slate-700 mb-2 italic">"{p.prompt}"</p>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-green-50 px-3 py-2 rounded">
                          <p className="font-semibold text-slate-900">Se aceptó: {p.aceptado}</p>
                        </div>
                        <div className="bg-orange-50 px-3 py-2 rounded">
                          <p className="font-semibold text-slate-900">Se corrigió:</p>
                          <p className="text-slate-700 text-xs">{p.corregido}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Evaluación de Copilot</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-green-300 rounded p-4 bg-green-50">
                <h3 className="font-bold text-slate-900 mb-2 text-green-700">✓ Fortalezas</h3>
                <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                  <li>Generación rápida de estructuras</li>
                  <li>Tablas multidimensionales precisas</li>
                  <li>Identificación de normas relevantes</li>
                  <li>Generación de recomendaciones coherentes</li>
                </ul>
              </div>

              <div className="border border-red-300 rounded p-4 bg-red-50">
                <h3 className="font-bold text-slate-900 mb-2 text-red-700">✗ Limitaciones</h3>
                <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                  <li>Leyes muy recientes desconocidas</li>
                  <li>Montos y cifras sin validación</li>
                  <li>Jurisprudencia reciente (2020+) limitada</li>
                  <li>Contexto local chileno insuficiente</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Especificidad de Prompts</h2>
            
            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <p className="text-sm font-bold text-slate-900 mb-1">❌ Prompt Genérico (Evitado)</p>
                <p className="text-sm text-slate-700 italic">"Hazme un análisis de ciberseguridad"</p>
                <p className="text-xs text-slate-600 mt-1">Resultado: Genérico, bajo valor</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4">
                <p className="text-sm font-bold text-slate-900 mb-1">✓ Prompt Específico (Usado)</p>
                <p className="text-sm text-slate-700 italic">"Mapea ataque ransomware a GTD 2023 (Chile) a artículos Ley 21.459, detalla penas y jurisprudencia"</p>
                <p className="text-xs text-slate-600 mt-1">Resultado: Preciso, 85-100% útil</p>
              </div>

              <p className="text-sm text-slate-700">
                <strong>Conclusión:</strong> Prompts específicos (mencionando caso, normas, país) generaron resultados <strong>3x mejores</strong>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Costo/Beneficio</h2>
            
            <div className="space-y-2 text-slate-700">
              <p><strong>Tiempo ahorrado:</strong> ~40% en estructura y esquematización</p>
              <p><strong>Investigación manual requerida:</strong> ~60% (validación, datos, casos chilenos)</p>
              <p><strong>Calidad final:</strong> Robusta y defendible ante corte</p>
              <p><strong>Veredicto:</strong> IA acelera producción pero NO reemplaza investigación legal seria</p>
            </div>
          </section>

          <section className="bg-slate-100 border border-slate-300 rounded p-4">
            <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <MessageCircle className="text-indigo-600" size={20} />
              Reflexión Final
            </h2>
            <p className="text-slate-700 text-sm">
              GitHub Copilot fue excelente como asistente estructural, pero cada afirmación legal requirió verificación independiente con fuentes oficiales. El uso efectivo de IA en análisis legal requiere: <strong>IA (estructura) + Investigación manual (validación) + Jurisprudencia (defensa)</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Recomendaciones para Casos Futuros</h2>
            <ul className="text-slate-700 space-y-2">
              <li>✓ Usar IA para brainstorming y estructura inicial</li>
              <li>✓ Usar IA para tablas comparativas multidimensionales</li>
              <li>✓ Usar IA para generación de recomendaciones</li>
              <li>✗ NO usar IA como fuente primaria de normas</li>
              <li>✗ NO confiar en montos sin validación de casos reales</li>
              <li>✗ NO usar para jurisprudencia actual sin verificación</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 flex justify-between gap-4">
          <a href="/conclusiones" className="px-6 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition">
            ← Conclusiones
          </a>
          <a href="/" className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Ir a Inicio
          </a>
        </div>
      </div>
    </div>
  );
}
