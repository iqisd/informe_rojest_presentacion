import { useEffect, useState } from 'react'
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  Layers,
  ShieldCheck,
  Sparkles,
  Star,
  Lightbulb,
} from 'lucide-react'

const pages = [
  {
    title: 'Presentación del Informe',
    subtitle: 'Caso GTD 2023',
    accent: 'from-cyan-500 to-blue-500',
    description:
      'Bienvenido a la presentación tipo diapositivas sobre el ataque ransomware a la Gobernación Territorial Digital.',
    points: [
      'Contexto del incidente',
      'Normativa chilena aplicable',
      'Impacto y recomendaciones',
    ],
    extras: [
      { icon: Award, title: 'Profesional', description: 'Diseño similar a una presentación ejecutiva.' },
      { icon: Lightbulb, title: 'Intuitiva', description: 'Navegación simple con botones y teclado.' },
    ],
  },
  {
    title: 'Contexto y Origen',
    subtitle: 'Qué sucedió',
    accent: 'from-purple-500 to-fuchsia-500',
    description:
      'El ataque comprometió sistemas críticos de gestión territorial, afectando la continuidad operativa y la seguridad de datos personales.',
    points: [
      'Ransomware y extorsión digital',
      'Interrupción de servicios públicos',
      'Posible exfiltración de datos',
    ],
    extras: [
      { icon: Activity, title: 'Impacto real', description: 'Ataque a infraestructura crítica y servicios públicos.' },
      { icon: Sparkles, title: 'Visión clara', description: 'Contexto presentado con claridad visual.' },
    ],
  },
  {
    title: 'Marco Legal',
    subtitle: 'Leyes aplicables',
    accent: 'from-emerald-500 to-teal-500',
    description:
      'El análisis se apoya en la normativa chilena de ciberdelitos, protección de datos y seguridad estatal.',
    points: [
      'Ley 21.459 de Ciberdelitos',
      'Ley 19.628 de Protección de Datos',
      'Código Penal y seguridad pública',
    ],
    extras: [
      { icon: ShieldCheck, title: 'Fundamento legal', description: 'Normativa central para el informe.' },
      { icon: Layers, title: 'Capas de cumplimiento', description: 'Seguridad técnica y legal combinadas.' },
    ],
  },
  {
    title: 'Impacto y Responsabilidad',
    subtitle: 'Riesgos legales',
    accent: 'from-orange-500 to-red-500',
    description:
      'El incidente genera responsabilidades legales directas sobre la institución afectada y sus controles de seguridad.',
    points: [
      'Responsabilidad civil y sanciones',
      'Obligaciones de notificación',
      'Gestión de incidentes y evidencia',
    ],
    extras: [
      { icon: CheckCircle, title: 'Claridad', description: 'Los riesgos se presentan con foco legal.' },
      { icon: Star, title: 'Prioridad', description: 'Gestión de incidentes como prioridad estratégica.' },
    ],
  },
  {
    title: 'Recomendaciones',
    subtitle: 'Medidas clave',
    accent: 'from-sky-500 to-cyan-500',
    description:
      'Propuestas concretas para fortalecer la preparación, respuesta y cumplimiento en entornos críticos.',
    points: [
      'Monitoreo continuo y detección temprana',
      'Protección y cifrado de datos sensibles',
      'Capacitación y cultura de seguridad',
    ],
    extras: [
      { icon: Lightbulb, title: 'Acción', description: 'Recomendaciones claras y accionables.' },
      { icon: Award, title: 'Resultados', description: 'Mejoras tangibles en seguridad y cumplimiento.' },
    ],
  },
  {
    title: 'Conclusión',
    subtitle: 'Lecciones aprendidas',
    accent: 'from-violet-500 to-indigo-500',
    description:
      'Una respuesta efectiva a incidentes combina seguridad técnica, claridad legal y una cultura de prevención.',
    points: [
      'Seguridad y ley deben ir juntas',
      'Preparación reduce impactos',
      'La transparencia fortalece la respuesta',
    ],
    extras: [
      { icon: Star, title: 'Aprendizaje', description: 'Lecciones clave para próximas defensas.' },
      { icon: ShieldCheck, title: 'Resiliencia', description: 'Fortalecer controles y respuesta.' },
    ],
  },
]

function App() {
  const [activePage, setActivePage] = useState(0)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {})
    } else {
      document.exitFullscreen?.().catch(() => {})
    }
  }

  const exportPdf = () => {
    // Create a printable document containing ALL slides with page-breaks between them
    // Only copy inline <style> tags that do not contain @media print rules
    const styles = Array.from(document.querySelectorAll('style'))
      .filter((s) => !s.textContent.includes('@media print'))
      .map((n) => n.outerHTML)
      .join('\n')

    const slidesHTML = pages
      .map((p) => {
        const points = (p.points || [])
          .map((pt) => `<li style="margin-bottom:8px;font-size:18px;color:#111">${pt}</li>`)
          .join('')
        const extras = (p.extras || [])
          .map((e) => `<div style="margin-top:12px"><strong style="display:block;color:#111">${e.title}</strong><div style="color:#222">${e.description}</div></div>`)
          .join('')

        return `
          <section class="print-slide" style="box-sizing:border-box;width:100%;min-height:100vh;display:block;padding:48px;page-break-after:always;">
            <h1 style="font-size:40px;margin:0 0 12px;color:#000">${p.title}</h1>
            <h2 style="font-size:20px;margin:0 0 18px;color:#333">${p.subtitle}</h2>
            <p style="font-size:16px;max-width:900px;color:#222">${p.description}</p>
            <ul style="margin-top:18px;padding-left:18px">${points}</ul>
            <div style="margin-top:18px">${extras}</div>
          </section>`
      })
      .join('\n')

    const extraPrintStyles = `
      <style>
        @page { size: auto; margin: 12mm; }
        html,body{height:100%;margin:0;-webkit-print-color-adjust:exact}
        /* Force white backgrounds and black text for printing */
        body, html { background: white !important; color: #000 !important; }
        * { background: transparent !important; color: #000 !important; box-shadow: none !important; }
        .print-slide{background:white !important;color:black !important}
      </style>`

    const printHTML = `<!doctype html><html><head><meta charset="utf-8"><title>Exportar presentación</title>${styles}${extraPrintStyles}</head><body>${slidesHTML}</body></html>`

    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      window.print()
      return
    }

    printWindow.document.open()
    printWindow.document.write(printHTML)
    printWindow.document.close()
    printWindow.focus()

    // Give the browser a moment to render, then print and close the window.
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 700)
  }

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setActivePage((value) => Math.min(pages.length - 1, value + 1))
      }
      if (event.key === 'ArrowLeft') {
        setActivePage((value) => Math.max(0, value - 1))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_30%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-full flex-col">
        <div className="flex h-screen w-full items-center justify-center overflow-hidden px-6 py-8">
          <div className="flex h-full w-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activePage * 100}%)` }}>
            {pages.map((page, index) => (
              <section
                key={page.title}
                className={`relative flex h-full min-w-full flex-col justify-between gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 p-12 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl animate-fade-in ${
                  index === activePage ? 'slide-current' : 'slide'
                }`}
                aria-hidden={index === activePage ? 'false' : 'true'}
              >
                <div className="pointer-events-none absolute -top-10 right-6 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-14 left-10 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />
                <div className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

                <header className="relative z-10 space-y-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300 shadow-sm">
                    <Sparkles size={16} /> Diapositiva {index + 1}
                  </span>
                  <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-white/10 to-white/5 p-4 shadow-inner">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
                    <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl" />
                    <div className="relative inline-flex items-center gap-3 rounded-full bg-slate-950/95 px-4 py-2 text-sm font-semibold text-white shadow-xl ring-1 ring-white/10">
                      <ShieldCheck size={20} className="text-cyan-300" />
                      <span>{page.subtitle}</span>
                    </div>
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">{page.title}</h1>
                  <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{page.description}</p>
                </header>

                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] relative z-10">
                  <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 shadow-lg ring-1 ring-white/5 animate-pop-in">
                    <h2 className="text-xl font-semibold text-white">Puntos clave</h2>
                    <div className="mt-6 space-y-4">
                      {page.points.map((point) => (
                        <div key={point} className="flex items-start gap-4 rounded-3xl border border-white/5 bg-slate-900/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/20">
                          <div className="mt-1 rounded-2xl bg-cyan-500/15 p-3 text-cyan-300 shadow-inner">
                            <Activity size={20} />
                          </div>
                          <p className="text-slate-200">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {page.extras.map((extra) => {
                      const Icon = extra.icon
                      return (
                        <div key={extra.title} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-800/80 p-8 shadow-2xl ring-1 ring-white/5 animate-pop-in">
                          <div className="flex items-center gap-3 text-cyan-300">
                            <Icon size={22} />
                            <p className="text-lg font-semibold text-white">{extra.title}</p>
                          </div>
                          <p className="mt-4 text-slate-400">{extra.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <footer className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-slate-200 shadow-sm">
                      <Layers size={16} className="text-cyan-300" />
                      Slider estilo presentación
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-slate-200 shadow-sm">
                      <CheckCircle size={16} className="text-emerald-300" />
                      Transiciones suaves
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <button
                      onClick={() => setActivePage((value) => Math.max(0, value - 1))}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                      disabled={activePage === 0}
                    >
                      <ArrowLeft size={18} /> Anterior
                    </button>
                    <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg">
                      {activePage + 1} / {pages.length}
                    </div>
                    <button
                      onClick={() => setActivePage((value) => Math.min(pages.length - 1, value + 1))}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
                      disabled={activePage === pages.length - 1}
                    >
                      Siguiente <ArrowRight size={18} />
                    </button>
                  </div>

                  <div className="flex items-center gap-3 mt-3 sm:mt-0">
                    <button onClick={toggleFullscreen} className="ml-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-white/10">Pantalla completa</button>
                    <button onClick={exportPdf} className="ml-2 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-400">Exportar a PDF</button>
                  </div>
                </footer>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
