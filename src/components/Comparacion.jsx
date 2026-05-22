import { BarChart3 } from 'lucide-react';

export default function Comparacion() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <BarChart3 className="text-blue-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-900">Comparación de Marcos Regulatorios</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Eje 1: Regulación de Seguridad</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-slate-200 rounded p-4">
                <h3 className="font-bold text-slate-900 mb-2">Sector Público (GTD)</h3>
                <p className="text-sm text-slate-700"><strong>Norma:</strong> Ley 21.595 (reciente)</p>
                <p className="text-sm text-slate-700"><strong>Rigurosidad:</strong> Moderada</p>
                <p className="text-sm text-slate-700"><strong>Auditoría:</strong> Anual (opcional)</p>
              </div>

              <div className="border border-slate-200 rounded p-4">
                <h3 className="font-bold text-slate-900 mb-2">Sector Financiero (Bancos)</h3>
                <p className="text-sm text-slate-700"><strong>Norma:</strong> NSIF (BCCh)</p>
                <p className="text-sm text-slate-700"><strong>Rigurosidad:</strong> Alta</p>
                <p className="text-sm text-slate-700"><strong>Auditoría:</strong> Semestral (obligatoria)</p>
              </div>

              <div className="border border-slate-200 rounded p-4 bg-blue-50">
                <h3 className="font-bold text-slate-900 mb-2">Infraestructura Crítica (Intl)</h3>
                <p className="text-sm text-slate-700"><strong>Norma:</strong> NIST, ISO 27001</p>
                <p className="text-sm text-slate-700"><strong>Rigurosidad:</strong> Muy Alta</p>
                <p className="text-sm text-slate-700"><strong>Auditoría:</strong> Continua (automatizada)</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Eje 2: Tiempos de Respuesta</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-32 font-semibold text-slate-700">Sector Público:</div>
                <div className="h-6 bg-yellow-200 rounded" style={{ width: '100px' }}></div>
                <span className="text-sm text-slate-700">48-72 horas</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 font-semibold text-slate-700">Sector Financiero:</div>
                <div className="h-6 bg-orange-300 rounded" style={{ width: '50px' }}></div>
                <span className="text-sm text-slate-700">4 horas</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 font-semibold text-slate-700">Infraestructura Crítica:</div>
                <div className="h-6 bg-red-400 rounded" style={{ width: '20px' }}></div>
                <span className="text-sm text-slate-700">&lt;1 hora</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Eje 3: Protección de Datos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-slate-200 rounded p-4">
                <h3 className="font-bold text-slate-900 mb-2">Sector Público</h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>✓ Ley 19.628 (ARCO)</li>
                  <li>✗ Cifrado parcial</li>
                  <li>✗ Multas indefinidas</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded p-4">
                <h3 className="font-bold text-slate-900 mb-2">Sector Financiero</h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>✓ Ley 19.628 + regulaciones BCCh</li>
                  <li>✓ Cifrado AES-256 obligatorio</li>
                  <li>✓ Multas 50-500 UF</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded p-4 bg-blue-50">
                <h3 className="font-bold text-slate-900 mb-2">Infraestructura Crítica</h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>✓ GDPR/CCPA</li>
                  <li>✓ Cifrado military-grade</li>
                  <li>✓ Multas hasta 4% ingresos</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-yellow-50 border border-yellow-200 rounded p-4">
            <h2 className="text-lg font-bold text-slate-900 mb-2">Conclusión: Por Qué GTD fue Vulnerable</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Regulación más nueva (2023) con implementación incompleta</li>
              <li>Auditorías anuales vs. semestrales (sector financiero)</li>
              <li>RTO/RPO sin límites definidos vs. 4 horas en sector financiero</li>
              <li>Menos exigencia de ISO 27001 vs. obligatorio en bancos</li>
              <li>Financiamiento de seguridad históricamente menor</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 flex justify-between gap-4">
          <a href="/delitos" className="px-6 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition">
            ← Delitos
          </a>
          <a href="/responsabilidades" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Responsabilidades →
          </a>
        </div>
      </div>
    </div>
  );
}
