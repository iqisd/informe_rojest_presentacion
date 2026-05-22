import { BookOpen, Scale, Lock } from 'lucide-react';
import marcoContent from '../../docs_rojest/02_marco_rojest.md?raw';
import ReactMarkdown from 'react-markdown';

export default function Marco() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <Scale className="text-slate-700" size={32} />
          <h1 className="text-3xl font-bold text-slate-900">Marco Normativo Aplicable</h1>
        </div>

        {/* Contenido del Markdown */}
        <div className="bg-white rounded-lg shadow-md p-8 prose prose-slate max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold text-slate-900 mb-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold text-slate-800 mt-6 mb-3">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-semibold text-slate-700 mt-4 mb-2">{children}</h3>,
              p: ({ children }) => <p className="text-slate-700 mb-3 leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-3 text-slate-700">{children}</ul>,
              li: ({ children }) => <li className="mb-1">{children}</li>,
              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-slate-300">
                    {children}
                  </table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-slate-300 bg-slate-100 px-3 py-2 text-left font-semibold">{children}</th>
              ),
              td: ({ children }) => (
                <td className="border border-slate-300 px-3 py-2">{children}</td>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600 my-3">{children}</blockquote>
              ),
            }}
          >
            {marcoContent}
          </ReactMarkdown>
        </div>

        {/* Footer con navegación */}
        <div className="mt-8 flex justify-between gap-4">
          <a href="/" className="px-6 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition">
            ← Atrás
          </a>
          <a href="/delitos" className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Siguiente: Delitos →
          </a>
        </div>
      </div>
    </div>
  );
}
