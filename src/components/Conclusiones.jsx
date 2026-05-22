import { CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

export default function Conclusiones() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <CheckCircle className="text-teal-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-900">Conclusiones y Recomendaciones</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Síntesis de Hallazgos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <h3 className="font-bold text-slate-900 mb-2">Delitos Tipificados</h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>✓ Ley 21.459 (6 artículos identificados)</li>
                  <li>✓ Más graves: Art. 4 y 5</li>
                  <li>✓ Pena: 8-15 años presidio mayor</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded p-4">
                <h3 className="font-bold text-slate-900 mb-2">Responsabilidades</h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>✓ GTD: Administrativa + civil</li>
                  <li>✓ Atacantes: Penal máxima</li>
                  <li>✓ Riesgo: $65-370 millones</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <h3 className="font-bold text-slate-900 mb-2">Violaciones de Derechos</h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>✓ Derechos ARCO (Art. 13-20)</li>
                  <li>✓ Seguridad de datos (Art. 5)</li>
                  <li>✓ Información incidente (Art. 13)</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4">
                <h3 className="font-bold text-slate-900 mb-2">Comparativa Sectores</h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>✓ GTD más vulnerable que bancos</li>
                  <li>✓ Regulación incompleta (Ley 21.595)</li>
                  <li>✓ Falta ISO 27001 obligatoria</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Lightbulb className="text-yellow-600" size={24} />
              Recomendaciones por Plazo
            </h2>

            <div className="space-y-4">
              <div className="border border-red-300 rounded-lg overflow-hidden">
                <div className="bg-red-100 px-4 py-2 font-bold text-slate-900">Corto Plazo (0-6 meses)</div>
                <div className="p-4 text-slate-700 space-y-2">
                  <p>• Comunicado público completo con detalles del incidente</p>
                  <p>• Línea de atención 24/7 para afectados</p>
                  <p>• Auditoría forense independiente</p>
                  <p>• Implementar cifrado AES-256</p>
                  <p>• Cambiar credenciales administrativas</p>
                </div>
              </div>

              <div className="border border-orange-300 rounded-lg overflow-hidden">
                <div className="bg-orange-100 px-4 py-2 font-bold text-slate-900">Mediano Plazo (6-12 meses)</div>
                <div className="p-4 text-slate-700 space-y-2">
                  <p>• Implementar ISO 27001 (certificación obligatoria)</p>
                  <p>• Adoptar NIST Cybersecurity Framework</p>
                  <p>• Establecer SOC 24/7 (Security Operations Center)</p>
                  <p>• Pruebas de penetración semestrales</p>
                  <p>• Actualizar plan de continuidad (RTO: 4 horas)</p>
                </div>
              </div>

              <div className="border border-blue-300 rounded-lg overflow-hidden">
                <div className="bg-blue-100 px-4 py-2 font-bold text-slate-900">Largo Plazo (12+ meses)</div>
                <div className="p-4 text-slate-700 space-y-2">
                  <p>• Crear CSIRT estatal (Computer Security Incident Response Team)</p>
                  <p>• Centro de Excelencia en Ciberseguridad</p>
                  <p>• Reformar Ley 21.595 con estándares ISO 27001</p>
                  <p>• Fondo nacional de respuesta a ciberataques</p>
                  <p>• Programa de conciencia en ciberseguridad</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Lecciones Aprendidas</h2>
            <div className="space-y-3 text-slate-700">
              <p><strong>1. Regulación incompleta:</strong> Ley 21.595 es reciente sin implementación total</p>
              <p><strong>2. Inversión insuficiente:</strong> Presupuesto de TI sin prioridad a seguridad</p>
              <p><strong>3. Detección lenta:</strong> Falta de SOC 24/7, demora 3+ días</p>
              <p><strong>4. Comparativa clara:</strong> GTD significativamente menos rigurosa que sector financiero</p>
            </div>
          </section>

          <section className="bg-slate-100 border border-slate-300 rounded p-4">
            <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="text-red-600" size={20} />
              Reflexión Final
            </h2>
            <p className="text-slate-700">
              El ataque a GTD 2023 fue <strong>evitable</strong>. Las vulnerabilidades explotadas fueron técnicamente básicas. La implementación de estándares internacionales (ISO 27001, RTO 4 horas, auditorías semestrales) habría prevenido o limitado significativamente el impacto.
            </p>
            <p className="text-slate-700 mt-2 font-semibold">
              La seguridad de infraestructura crítica estatal no es opcional; es obligación del Estado con sus ciudadanos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Preguntas Clave para Responsables</h2>
            <ol className="list-decimal list-inside text-slate-700 space-y-2">
              <li>¿Por qué GTD no estaba certificado ISO 27001 antes del ataque?</li>
              <li>¿Por qué el tiempo de detección fue &gt; 3 días sin SOC 24/7?</li>
              <li>¿Cuándo se implementarán estándares del sector financiero?</li>
              <li>¿Se perseguirá activamente la extradición de atacantes?</li>
              <li>¿Cuándo se reformará Ley 21.595 con estándares ISO 27001?</li>
            </ol>
          </section>
        </div>

        <div className="mt-8 flex justify-between gap-4">
          <a href="/datos" className="px-6 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition">
            ← Datos Personales
          </a>
          <a href="/prompts" className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">
            Bitácora IA →
          </a>
        </div>
      </div>
    </div>
  );
}
