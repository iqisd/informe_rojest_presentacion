import { Scale, Home, ArrowRight } from 'lucide-react';
import marcoContent from '../../docs_rojest/02_marco_rojest.md?raw';
import ReactMarkdown from 'react-markdown';
import logoLegal from '../assets/logo-legal.svg';

export default function Marco() {
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-3 shadow-lg">
              <img src={logoLegal} alt="Marco Legal" className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Marco Normativo Aplicable</h1>
              <p className="text-slate-300">Leyes y regulaciones aplicables al caso GTD</p>
            </div>
          </div>
        </div>

        {/* Contenido del Markdown */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-slate-600/50 prose prose-slate max-w-none">
          <style>{`
            .prose h1 {
              @apply text-3xl font-bold text-white mb-4;
            }
            .prose h2 {
              @apply text-2xl font-bold text-slate-100 mt-8 mb-4 border-b border-slate-600 pb-2;
            }
            .prose h3 {
              @apply text-xl font-semibold text-slate-200 mt-6 mb-3;
            }
            .prose p {
              @apply text-slate-300 mb-3 leading-relaxed;
            }
            .prose ul {
              @apply list-disc list-inside mb-3 text-slate-300;
            }
            .prose li {
              @apply mb-2;
            }
            .prose strong {
              @apply text-blue-300 font-bold;
            }
            .prose code {
              @apply bg-slate-700/50 text-cyan-300 px-2 py-1 rounded;
            }
            .prose table {
              @apply w-full border-collapse;
            }
            .prose th {
              @apply border border-slate-600 bg-slate-700/50 px-3 py-2 text-left font-semibold text-slate-200;
            }
            .prose td {
              @apply border border-slate-600 px-3 py-2 text-slate-300;
            }
            .prose blockquote {
              @apply border-l-4 border-blue-400 pl-4 italic text-slate-400 my-4 bg-blue-500/10 py-2 pr-4 rounded;
            }
          `}</style>
          <ReactMarkdown>
            {marcoContent}
          </ReactMarkdown>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between gap-4">
          <a href="/" className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg hover:from-slate-600 hover:to-slate-700 transition transform hover:scale-105 font-semibold flex items-center gap-2 shadow-lg">
            ← Atrás
          </a>
          <a href="/delitos" className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-500 hover:to-red-600 transition transform hover:scale-105 font-semibold flex items-center gap-2 shadow-lg">
            Siguiente: Delitos
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
