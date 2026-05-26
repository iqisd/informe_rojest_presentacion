import { BookOpen, ArrowRight, Home } from 'lucide-react';

export default function Resumen() {
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
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg p-3 shadow-lg">
              <BookOpen className="w-full h-full text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Resumen Ejecutivo</h1>
              <p className="text-slate-300">Análisis completo del caso GTD 2023</p>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl shadow-xl p-10 border border-slate-600/50">
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-full mb-6">
              <BookOpen className="text-yellow-400" size={40} />
            </div>
            <p className="text-slate-300 text-lg font-semibold mb-3">
              Resumen en construcción
            </p>
            <p className="text-slate-400 text-base max-w-md mx-auto">
              El resumen ejecutivo se generará automáticamente después de completar todas las secciones del análisis legal.
            </p>
            <div className="mt-8 p-4 bg-blue-500/20 border border-blue-400/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                📊 Incluirá: caso de análisis, tipificación de delitos, responsabilidades legales, protección de datos y recomendaciones.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/" className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg hover:from-slate-600 hover:to-slate-700 transition transform hover:scale-105 font-semibold flex items-center justify-center gap-2 shadow-lg">
            ← Volver al Inicio
          </a>
          <a href="/marco" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-500 hover:to-blue-600 transition transform hover:scale-105 font-semibold flex items-center justify-center gap-2 shadow-lg">
            Ir a Marco Normativo
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Info cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 rounded-lg p-6">
            <h3 className="text-cyan-300 font-bold mb-2">📋 Marco Legal</h3>
            <p className="text-slate-300 text-sm">Análisis de leyes chilenas aplicables al caso</p>
          </div>
          <div className="bg-gradient-to-br from-red-500/20 to-orange-600/20 border border-red-400/30 rounded-lg p-6">
            <h3 className="text-red-300 font-bold mb-2">⚠️ Ciberdelitos</h3>
            <p className="text-slate-300 text-sm">Clasificación y tipificación de delitos</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-teal-600/20 border border-green-400/30 rounded-lg p-6">
            <h3 className="text-green-300 font-bold mb-2">✓ Responsabilidades</h3>
            <p className="text-slate-300 text-sm">Obligaciones legales y sanciones</p>
          </div>
        </div>
      </div>
    </div>
  );
}
