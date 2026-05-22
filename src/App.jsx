import { Shield, BookOpen, Scale, AlertCircle, BarChart3, Users, Lock, CheckCircle, Code } from 'lucide-react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

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
    { titulo: "Marco Normativo Aplicable", icono: Scale, ruta: "/marco", color: "blue" },
    { titulo: "Tipificación de Delitos", icono: AlertCircle, ruta: "/delitos", color: "red" },
    { titulo: "Comparación de Marcos", icono: BarChart3, ruta: "/comparacion", color: "purple" },
    { titulo: "Responsabilidades Legales", icono: Users, ruta: "/responsabilidades", color: "green" },
    { titulo: "Datos Personales (ARCO)", icono: Lock, ruta: "/datos", color: "cyan" },
    { titulo: "Conclusiones", icono: CheckCircle, ruta: "/conclusiones", color: "teal" },
    { titulo: "Bitácora de IA", icono: Code, ruta: "/prompts", color: "indigo" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Shield size={48} className="text-red-400" />
            <div>
              <h1 className="text-4xl font-bold">Análisis Legal: Ataque GTD 2023</h1>
              <p className="text-slate-300 mt-2">
                TI3034 – Fundamentos de Seguridad de la Información | Evaluación Sumativa N°2
              </p>
            </div>
          </div>
          <p className="text-slate-200 text-sm">INACAP Valparaíso | Docente: Rubén Schnettler L. | Estudiante: Esteban Rojas</p>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Caso de Análisis</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Gobernación Territorial Digital (GTD) - 2023</h3>
            <p className="text-slate-700 mb-4">
              Ataque ransomware a infraestructura crítica estatal chilena que comprometió sistemas de gestión territorial, 
              afectó múltiples gobiernos locales, e involucró filtración de datos personales de funcionarios y ciudadanos.
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li><strong>Tipo:</strong> Ransomware + Extorsión Digital</li>
              <li><strong>Impacto:</strong> Caída de servicios, filtración de datos, demanda de rescate</li>
              <li><strong>Leyes Relevantes:</strong> Ley 21.459 (ciberdelitos), Ley 19.628 (protección datos), Ley 21.595 (seguridad estatal)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Secciones del Análisis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {secciones.map((seccion, idx) => {
              const Icon = seccion.icono;
              const colorMap = {
                blue: "from-blue-400 to-blue-600 hover:shadow-blue-200",
                red: "from-red-400 to-red-600 hover:shadow-red-200",
                purple: "from-purple-400 to-purple-600 hover:shadow-purple-200",
                green: "from-green-400 to-green-600 hover:shadow-green-200",
                cyan: "from-cyan-400 to-cyan-600 hover:shadow-cyan-200",
                teal: "from-teal-400 to-teal-600 hover:shadow-teal-200",
                indigo: "from-indigo-400 to-indigo-600 hover:shadow-indigo-200",
              };

              return (
                <Link
                  key={idx}
                  to={seccion.ruta}
                  className={`bg-gradient-to-br ${colorMap[seccion.color]} text-white rounded-lg p-6 shadow-md hover:shadow-xl transition transform hover:scale-105`}
                >
                  <Icon size={32} className="mb-3" />
                  <h3 className="text-lg font-bold">{seccion.titulo}</h3>
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
