import { BookOpen } from 'lucide-react';

export default function Resumen() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <BookOpen className="text-slate-700" size={32} />
          <h1 className="text-3xl font-bold text-slate-900">Resumen Ejecutivo</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">
              El resumen ejecutivo se genera automáticamente después de completar todas las secciones del análisis.
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Incluye: caso, delitos, responsabilidades, datos personales y recomendaciones.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a href="/" className="px-6 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition">
            ← Volver al Inicio
          </a>
          <a href="/marco" className="px-6 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition">
            Ir a Marco Normativo →
          </a>
        </div>
      </div>
    </div>
  );
}
