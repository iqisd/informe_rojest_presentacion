import { AlertCircle, Scale } from 'lucide-react';

export default function Delitos() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <AlertCircle className="text-red-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-900">Tipificación de Delitos - Ley 21.459</h1>
        </div>

        {/* Content Summary */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Delitos Identificados</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-semibold text-slate-900">Art. 1 - Acceso No Autorizado</h3>
                <p className="text-slate-700 text-sm">Acceso sin autorización a sistemas GTD</p>
                <p className="text-red-600 font-semibold text-sm">Presidio menor máx. a presidio mayor mín.</p>
              </div>
              
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-semibold text-slate-900">Art. 2 - Interferencia con Datos</h3>
                <p className="text-slate-700 text-sm">Cifrado mediante ransomware</p>
                <p className="text-red-600 font-semibold text-sm">Presidio menor máx. a presidio mayor mín.</p>
              </div>

              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-semibold text-slate-900">Art. 3 - Interferencia con Sistemas</h3>
                <p className="text-slate-700 text-sm">Paralización de servicios GTD</p>
                <p className="text-red-600 font-semibold text-sm">Presidio menor máx. a presidio mayor máx.</p>
              </div>

              <div className="border-l-4 border-red-700 pl-4 bg-red-50 p-3 rounded">
                <h3 className="font-semibold text-slate-900">Art. 4 - Sabotaje Informático ⚠️ MÁS GRAVE</h3>
                <p className="text-slate-700 text-sm">Daño grave a infraestructura crítica estatal</p>
                <p className="text-red-700 font-bold text-sm">Presidio mayor mín. a presidio mayor máx.</p>
              </div>

              <div className="border-l-4 border-red-700 pl-4 bg-red-50 p-3 rounded">
                <h3 className="font-semibold text-slate-900">Art. 5 - Extorsión Digital ⚠️ MÁS GRAVE</h3>
                <p className="text-slate-700 text-sm">Demanda de rescate bajo amenaza</p>
                <p className="text-red-700 font-bold text-sm">Presidio mayor mín. a presidio mayor máx.</p>
              </div>

              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-semibold text-slate-900">Art. 6 - Acceso para Datos Personales</h3>
                <p className="text-slate-700 text-sm">Exfiltración de información personal</p>
                <p className="text-red-600 font-semibold text-sm">Presidio menor máx. a presidio mayor mín.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Conclusión</h2>
            <p className="text-slate-700">
              El ataque a GTD constituye un <strong>concurso de delitos</strong>, siendo los más graves:
            </p>
            <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
              <li><strong>Art. 4 (Sabotaje informático):</strong> Por daño a infraestructura crítica estatal</li>
              <li><strong>Art. 5 (Extorsión digital):</strong> Por demanda de rescate bajo amenaza</li>
            </ul>
            <p className="text-slate-700 mt-4">
              Ambos delitos son susceptibles de penas de <strong>presidio mayor (8-15 años)</strong>.
            </p>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between gap-4">
          <a href="/marco" className="px-6 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition">
            ← Marco Normativo
          </a>
          <a href="/comparacion" className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Comparación →
          </a>
        </div>
      </div>
    </div>
  );
}
