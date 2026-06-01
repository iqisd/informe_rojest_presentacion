import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Play, ShieldCheck, Scale, AlertCircle, BarChart3, Users, Lock, Sparkles, KeyRound, FileText, CheckCircle } from 'lucide-react'

const slides = [
  {
    title: 'Presentación: Ataque GTD 2023',
    subtitle: 'Análisis legal y de seguridad de un incidente real',
    icon: ShieldCheck,
    bullets: [
      'Ransomware a la Gobernación Territorial Digital (GTD)',
      'Compromiso de servicios públicos críticos y datos personales',
      'Análisis desde las leyes chilenas vigentes',
    ],
  },
  {
    title: 'Marco Normativo Aplicable',
    subtitle: 'Leyes clave para el caso',
    icon: Scale,
    bullets: [
      'Ley 21.459 de Ciberdelitos',
      'Ley 19.628 de Protección de Datos Personales',
      'Ley 21.595 de Seguridad del Estado',
    ],
  },
  {
    title: 'Tipificación de Delitos',
    subtitle: 'Delitos potenciales imputables al ataque',
    icon: AlertCircle,
    bullets: [
      'Acceso no autorizado a sistemas',
      'Interferencia con datos y sistemas',
      'Extorsión digital y sabotaje informático',
    ],
  },
  {
    title: 'Comparación Regulatoria',
    subtitle: 'Niveles de seguridad en diferentes sectores',
    icon: BarChart3,
    bullets: [
      'Sector público: normas moderadas y recomendaciones',
      'Sector financiero: controles más estrictos',
      'Infraestructura crítica: estándares internacionales rigurosos',
    ],
  },
  {
    title: 'Responsabilidades Legales',
    subtitle: 'Actores y sanciones esperadas',
    icon: Users,
    bullets: [
      'Atacantes: responsabilidad penal máxima (Ley 21.459)',
      'GTD y proveedores: responsabilidad civil y administrativa',
      'Autoridades: revisión de políticas y sanciones internas',
    ],
  },
  {
    title: 'Protección de Datos Personales',
    subtitle: 'Impacto en información sensible',
    icon: Lock,
    bullets: [
      'Exfiltración de datos de ciudadanos y funcionarios',
      'ARCO y obligaciones de tratamiento bajo Ley 19.628',
      'Necesidad de controles técnicos y jurídicos reforzados',
    ],
  },
  {
    title: 'Conclusiones Principales',
    subtitle: 'Lecciones del caso GTD',
    icon: Sparkles,
    bullets: [
      'Incidente revela brechas regulatorias del sector público',
      'Importancia de medidas preventivas y respuesta rápida',
      'Necesidad de alineación entre seguridad e cumplimiento legal',
    ],
  },
  {
    title: 'Recomendaciones',
    subtitle: 'Qué debe mejorar GTD y el sector público',
    icon: KeyRound,
    bullets: [
      'Auditorías periódicas y monitoreo continuo',
      'Protección de datos personales y control de accesos',
      'Protocolos de respuesta ante incidentes y entrenamiento',
    ],
  },
  {
    title: 'Cierre',
    subtitle: 'Gracias por la atención',
    icon: FileText,
    bullets: [
      'Resumen del análisis legal del ataque GTD 2023',
      'Consulta el informe completo para más detalles',
      'Continúa con las secciones del proyecto desde el menú',
    ],
  },
]

export default function Presentacion() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1))
      }
      if (event.key === 'ArrowLeft') {
        setCurrentIndex((prev) => Math.max(prev - 1, 0))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const slide = slides[currentIndex]
  const Icon = slide.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-10">
          <div>
            <p className="text-blue-300 uppercase tracking-[0.3em] font-semibold text-sm mb-2">Presentación interactiva</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Diapositivas del trabajo GTD 2023</h1>
            <p className="text-slate-400 mt-3 max-w-2xl">Navega con las flechas del teclado o usando los controles. Cada diapositiva resume una parte clave del análisis legal y de seguridad.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg">
            <Play size={16} /> Diapositiva {currentIndex + 1} / {slides.length}
          </div>
        </div>

        <section className="relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-950/90 p-10 shadow-2xl shadow-slate-900/40">
          <div className="pointer-events-none absolute -right-16 top-12 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="pointer-events-none absolute left-0 top-24 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="pointer-events-none absolute right-8 bottom-8 h-24 w-24 rounded-full bg-emerald-500/10 blur-3xl"></div>

          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-blue-500/15 px-4 py-2 text-blue-300 text-xs uppercase tracking-[0.2em] font-semibold">Diapositiva {currentIndex + 1}</span>
              <div className="mt-5 inline-flex items-center gap-3 rounded-3xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 shadow-inner shadow-slate-950/50">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-800/90 text-blue-300">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-[0.2em]">Tema</p>
                  <p className="text-white text-lg font-semibold">{slide.title}</p>
                </div>
              </div>
            </div>

            <div className="inline-flex max-w-xl items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm text-slate-200">
              <span className="rounded-full bg-blue-500/20 px-3 py-1 font-semibold text-blue-200">Idea central</span>
              <span className="text-slate-400">{slide.subtitle}</span>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {slide.bullets.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-[1.75rem] border border-slate-800/80 bg-slate-900/85 p-6 shadow-xl shadow-slate-900/40 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
                <div className="pointer-events-none absolute -right-8 top-0 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl"></div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300 transition group-hover:bg-blue-500/20">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <p className="text-slate-200 text-sm leading-7">{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-slate-400 text-sm">
              Usa <span className="text-white font-semibold">←</span> y <span className="text-white font-semibold">→</span> para avanzar.
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={currentIndex === 0}
              >
                <ArrowLeft size={18} /> Anterior
              </button>
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1))}
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={currentIndex === slides.length - 1}
              >
                Siguiente <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
