import { Shield, BookOpen, Scale, AlertCircle, BarChart3, Users, Lock, CheckCircle, Code, ExternalLink, Zap, Eye, Layers } from 'lucide-react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logoGtd from './assets/logo-gtd.svg'
import logoRansomware from './assets/logo-ransomware.svg'
import logoDatos from './assets/logo-datos.svg'
import logoLegal from './assets/logo-legal.svg'
import logoAnalytics from './assets/logo-analytics.svg'

import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'

function Home() {
  const secciones = [
    { titulo: "Marco Normativo Aplicable", icono: Scale, logo: logoLegal, ruta: "/marco", color: "blue", description: "Análisis de leyes chilenas" },
    { titulo: "Tipificación de Delitos", icono: AlertCircle, logo: logoRansomware, ruta: "/delitos", color: "red", description: "Clasificación de ciberdelitos" },
    { titulo: "Comparación de Marcos", icono: BarChart3, logo: logoAnalytics, ruta: "/comparacion", color: "purple", description: "Comparativa legal" },
    { titulo: "Responsabilidades Legales", icono: Users, logo: null, ruta: "/responsabilidades", color: "green", description: "Obligaciones legales" },
    { titulo: "Datos Personales (ARCO)", icono: Lock, logo: logoDatos, ruta: "/datos", color: "cyan", description: "Protección de datos" },
    { titulo: "Conclusiones", icono: CheckCircle, logo: null, ruta: "/conclusiones", color: "teal", description: "Síntesis del análisis" },
    { titulo: "Bitácora de IA", icono: Code, logo: null, ruta: "/prompts", color: "indigo", description: "Prompts utilizados" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-16 px-6">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-2 shadow-lg">
                  <img src={logoGtd} alt="GTD" className="w-full h-full" />
                </div>
                <span className="inline-block bg-red-500/20 border border-red-400 text-red-300 text-xs font-bold px-4 py-2 rounded-full">ANÁLISIS CASO REAL</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                Análisis Legal: Ataque GTD 2023
              </h1>
              <p className="text-xl text-slate-300 mb-4">
                Ransomware a infraestructura crítica estatal
              </p>
              <p className="text-slate-400 mb-6">
                Análisis integral del ataque a la Gobernación Territorial Digital, sus implicaciones legales bajo leyes chilenas y recomendaciones de seguridad.
              </p>
              
              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-300">21.459</div>
                  <div className="text-xs text-blue-200">Ley de Ciberdelitos</div>
                </div>
                <div className="bg-red-500/20 border border-red-400 rounded-lg p-3">
                  <div className="text-2xl font-bold text-red-300">19.628</div>
                  <div className="text-xs text-red-200">Protección de Datos</div>
                </div>
                <div className="bg-purple-500/20 border border-purple-400 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-300">7+</div>
                  <div className="text-xs text-purple-200">Secciones Análisis</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#sections" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105 shadow-lg">
                  Explorar Análisis
                </a>
                <a
                  href="https://github.com/iqisd"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-600 bg-slate-800/60 text-white font-bold transition hover:border-slate-400 hover:bg-slate-700"
                >
                  <ExternalLink size={18} />
                  GitHub
                </a>
              </div>
              
              <p className="text-slate-400 text-sm mt-6">
                📚 TI3034 – Fundamentos de Seguridad de la Información | INACAP Valparaíso
              </p>
            </div>
            
            {/* Right side - Visual */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Animated background cards */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/20 to-transparent rounded-lg transform rotate-12"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg transform -rotate-12"></div>
                
                {/* Main security icon */}
                <div className="relative z-10">
                  <div className="w-64 h-64 mx-auto rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600/50 flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-8 shadow-2xl flex items-center justify-center">
                      <Shield size={120} className="text-white drop-shadow-lg" />
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-8 right-8 w-20 h-20 bg-blue-500/30 rounded-full border border-blue-400/50 flex items-center justify-center animate-pulse">
                    <Lock size={32} className="text-blue-300" />
                  </div>
                  <div className="absolute bottom-8 left-8 w-20 h-20 bg-purple-500/30 rounded-full border border-purple-400/50 flex items-center justify-center animate-pulse" style={{animationDelay: "1s"}}>
                    <Eye size={32} className="text-purple-300" />
                  </div>
                  <div className="absolute top-1/2 right-0 w-20 h-20 bg-cyan-500/30 rounded-full border border-cyan-400/50 flex items-center justify-center animate-pulse" style={{animationDelay: "2s"}}>
                    <Zap size={32} className="text-cyan-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full relative z-10">
        {/* Case Analysis Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">📋 Caso de Análisis</h2>
          <div className="bg-gradient-to-r from-red-500/20 to-red-600/10 backdrop-blur-sm rounded-lg shadow-xl p-8 border-l-4 border-red-500 border-r border-t border-b border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-bold text-red-300 mb-2">⚠️ Gobernación Territorial Digital (GTD) - 2023</h3>
                <p className="text-slate-300 mb-3">
                  Ataque ransomware a infraestructura crítica estatal que comprometió sistemas de gestión territorial, afectó múltiples gobiernos locales e involucró filtración de datos personales.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">🎯 Tipo de Ataque</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-red-400">●</span> Ransomware</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">●</span> Extorsión Digital</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">●</span> Exfiltración Datos</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">●</span> Interrupción Servicios</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">⚖️ Marco Legal</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>✓ Ley 21.459 (Ciberdelitos)</li>
                  <li>✓ Ley 19.628 (Protección Datos)</li>
                  <li>✓ Ley 21.595 (Seguridad Estatal)</li>
                  <li>✓ Código Penal Chileno</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sections Grid */}
        <section id="sections">
          <h2 className="text-3xl font-bold text-white mb-8">📚 Secciones del Análisis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secciones.map((seccion, idx) => {
              const Icon = seccion.icono;
              const colorMap = {
                blue: "from-blue-500 to-blue-700 hover:shadow-blue-500/50",
                red: "from-red-500 to-red-700 hover:shadow-red-500/50",
                purple: "from-purple-500 to-purple-700 hover:shadow-purple-500/50",
                green: "from-green-500 to-green-700 hover:shadow-green-500/50",
                cyan: "from-cyan-500 to-cyan-700 hover:shadow-cyan-500/50",
                teal: "from-teal-500 to-teal-700 hover:shadow-teal-500/50",
                indigo: "from-indigo-500 to-indigo-700 hover:shadow-indigo-500/50",
              };
              
              const borderColorMap = {
                blue: "border-blue-400/30",
                red: "border-red-400/30",
                purple: "border-purple-400/30",
                green: "border-green-400/30",
                cyan: "border-cyan-400/30",
                teal: "border-teal-400/30",
                indigo: "border-indigo-400/30",
              };

              return (
                <Link
                  key={idx}
                  to={seccion.ruta}
                  className={`group bg-gradient-to-br ${colorMap[seccion.color]} text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border ${borderColorMap[seccion.color]} hover:border-white/50 relative overflow-hidden`}
                >
                  {/* Background effect */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {seccion.logo ? (
                      <div className="w-14 h-14 mb-4 bg-white/20 rounded-lg p-2 group-hover:bg-white/30 transition-colors">
                        <img src={seccion.logo} alt={seccion.titulo} className="w-full h-full" />
                      </div>
                    ) : (
                      <Icon size={40} className="mb-4 group-hover:scale-110 transition-transform" />
                    )}
                    <h3 className="text-lg font-bold mb-2 group-hover:translate-x-1 transition-transform">{seccion.titulo}</h3>
                    <p className="text-sm text-white/80 group-hover:text-white transition-colors">{seccion.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-300 text-sm py-6 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p><strong>Estudiante:</strong> Esteban Gonzalo Rojas Leiva</p>
              <p><strong>Email:</strong> esteban2002.rojas.l@gmail.com</p>
            </div>
            <div>
              <p><strong>Docente:</strong> Rubén Schnettler Lucero</p>
              <p><strong>Institución:</strong> INACAP Valparaíso | 2026</p>
            </div>
          </div>
          <p className="text-center text-xs border-t border-slate-700 pt-4">
            Análisis Legal de Caso Real | Evaluación Sumativa N°2 | TI3034 Fundamentos de Seguridad de la Información
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/marco" element={<Marco />} />
        <Route path="/delitos" element={<Delitos />} />
        <Route path="/comparacion" element={<Comparacion />} />
        <Route path="/responsabilidades" element={<Responsabilidades />} />
        <Route path="/datos" element={<Datos />} />
        <Route path="/conclusiones" element={<Conclusiones />} />
        <Route path="/prompts" element={<Prompts />} />
      </Routes>
    </Router>
  )
}

export default App
