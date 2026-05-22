import { Shield, Lock } from 'lucide-react';

export default function Datos() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <Shield className="text-green-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-900">Datos Personales y Derechos ARCO</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Ley 19.628: Principios Fundamentales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold text-slate-900">Consentimiento</h3>
                <p className="text-sm text-slate-700">Datos solo con autorización previa</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold text-slate-900">Seguridad</h3>
                <p className="text-sm text-slate-700">Responsable garantiza medidas razonables</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold text-slate-900">Finalidad</h3>
                <p className="text-sm text-slate-700">Datos solo para propósito declarado</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold text-slate-900">Calidad</h3>
                <p className="text-sm text-slate-700">Datos exactos, completos y actualizados</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Datos Comprometidos en GTD</h2>
            
            <div className="space-y-4">
              <div className="border border-slate-200 rounded p-4 bg-blue-50">
                <h3 className="font-bold text-slate-900 mb-2">Datos Personales (No Sensibles)</h3>
                <p className="text-sm text-slate-700 mb-2">Riesgo: Moderado</p>
                <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
                  <li>Nombre, RUT, email, teléfono</li>
                  <li>Dirección, cargo (funcionarios)</li>
                  <li>Historial de acciones en plataforma</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded p-4 bg-red-50">
                <h3 className="font-bold text-slate-900 mb-2">Datos Sensibles (Categoría Especial)</h3>
                <p className="text-sm text-slate-700 mb-2">Riesgo: Alto</p>
                <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
                  <li>Filiación política (potencial)</li>
                  <li>Información religiosa o de membresía</li>
                  <li>Antecedentes penales (si existen)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Derechos ARCO de Afectados</h2>
            
            <div className="space-y-3">
              <div className="bg-slate-100 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-1">A - ACCESO</h3>
                <p className="text-sm text-slate-700">Solicitar qué datos tiene GTD sobre usted</p>
                <p className="text-xs text-slate-600 mt-1"><strong>Plazo:</strong> 15 días para responder</p>
              </div>

              <div className="bg-slate-100 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-1">R - RECTIFICACIÓN</h3>
                <p className="text-sm text-slate-700">Corregir datos inexactos o incompletos</p>
                <p className="text-xs text-slate-600 mt-1"><strong>Plazo:</strong> 30 días para corregir</p>
              </div>

              <div className="bg-slate-100 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-1">C - CANCELACIÓN</h3>
                <p className="text-sm text-slate-700">Solicitar eliminación permanente de datos</p>
                <p className="text-xs text-slate-600 mt-1"><strong>Limitación:</strong> Si datos no son requeridos por ley</p>
              </div>

              <div className="bg-slate-100 p-4 rounded">
                <h3 className="font-bold text-slate-900 mb-1">O - OPOSICIÓN</h3>
                <p className="text-sm text-slate-700">Oponerse al procesamiento para ciertos usos</p>
                <p className="text-xs text-slate-600 mt-1"><strong>Aplicación:</strong> A usos específicos, no generales</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Procedimiento de Ejercicio</h2>
            <ol className="space-y-3 text-slate-700">
              <li><strong>1. Presentar solicitud</strong> - Por correo, presencial o portal digital de GTD</li>
              <li><strong>2. GTD responde</strong> - Dentro de plazo legal (15-30 días según derecho)</li>
              <li><strong>3. Acuerdo o desacuerdo</strong> - Si GTD rechaza, puede recurrir a juzgado</li>
              <li><strong>4. Recurso de Protección</strong> - Ante Corte de Apelaciones (si GTD incumple)</li>
            </ol>
          </section>

          <section className="bg-orange-50 border border-orange-200 rounded p-4">
            <h2 className="text-lg font-bold text-slate-900 mb-2">Indemnización Estimada</h2>
            <p className="text-sm text-slate-700 mb-2">Por violación de Ley 19.628 en GTD:</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Funcionarios: $20-50 millones por persona</li>
              <li>• Ciudadanos: $5-10 millones por persona</li>
              <li>• <strong>Estimación total: $5-50 mil millones</strong> (demandas colectivas probables)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Obligaciones de GTD (Remediación)</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>✓ Comunicar públicamente el incidente</li>
              <li>✓ Ofrecer monitoreo de crédito gratuito (2-3 años)</li>
              <li>✓ Auditoría forense por tercero independiente</li>
              <li>✓ Implementar ISO 27001 (12 meses)</li>
              <li>✓ Establecer fondo de indemnización para afectados</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 flex justify-between gap-4">
          <a href="/responsabilidades" className="px-6 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition">
            ← Responsabilidades
          </a>
          <a href="/conclusiones" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Conclusiones →
          </a>
        </div>
      </div>
    </div>
  );
}
