# 08. Bitácora de Uso de IA: Prompts y Proceso de Desarrollo

## Introducción

Este documento registra el uso de GitHub Copilot y reflexiones sobre el proceso de elaboración del informe GTD 2023.

---

## Sección 02 - Marco Normativo

### Prompt 1: Estructura del marco normativo

**Texto del Prompt:**
```
Necesito estructurar un análisis legal del ataque a GTD 2023 en Chile. 
Debe cubrir:
- Ley 21.459 (ciberdelitos)
- Ley 19.628 (protección de datos y derechos ARCO)
- Ley 21.595 (seguridad de la información del Estado)
- Estándares internacionales (ISO 27001, NIST, Convención Budapest)

El análisis debe ser detallado, con artículos específicos y cómo aplican 
al incidente. Estructura en secciones con tablas comparativas.
```

**Herramienta:** GitHub Copilot (VS Code, panel Ctrl+Alt+I)

**Resultado:** Copilot sugirió estructura con:
- Secciones por ley chilena
- Artículos relevantes con citas
- Marco internacional
- Tabla de síntesis

**Qué se aceptó:** 80% de la estructura propuesta

**Qué se corrigió:** 
- Agregué citas específicas de artículos que Copilot no detalló completamente
- Profundizé en derechos ARCO (Acceso, Rectificación, Cancelación, Oposición)
- Añadí análisis de Ley 21.595 (más reciente, Copilot no la conocía completamente)

**Justificación:** La estructura propuesta era sólida, pero necesitaba mayor precisión legal y actualización con normas recientes (2023).

---

### Prompt 2: Detalles técnicos de Ley 19.628

**Texto del Prompt:**
```
En Chile, Ley 19.628 protege datos personales. Para un ataque que filtró 
datos de funcionarios y ciudadanos, ¿cuáles son los principios clave que 
se violaron? Y ¿qué son los derechos ARCO específicamente?
```

**Herramienta:** GitHub Copilot

**Resultado:** Explicación clara de principios de consentimiento, seguridad y finalidad. Detalló ARCO correctamente.

**Qué se aceptó:** Descripción completa de ARCO

**Qué se corrigió:** Nada relevante; fue bastante preciso.

**Justificación:** La explicación era técnicamente correcta y aplicable al caso.

---

## Sección 03 - Tipificación de Delitos

### Prompt 3: Mapeo de acciones a artículos Ley 21.459

**Texto del Prompt:**
```
Tengo un ataque ransomware a GTD (infraestructura estatal chile):
1. Acceso sin autorización a sistemas
2. Cifrado de datos (ransomware)
3. Paralización de servicios
4. Extracción de datos personales
5. Demanda de rescate bajo amenaza

Mapea cada acción a artículos específicos de Ley 21.459 (ciberdelitos Chile).
Incluye el texto de la ley y la pena correspondiente. Estructura como tabla.
```

**Herramienta:** GitHub Copilot

**Resultado:** Propuesta clara de mapeo:
- Art. 1: Acceso no autorizado
- Art. 2: Interferencia con datos
- Art. 3: Interferencia con sistemas
- Art. 4: Sabotaje informático
- Art. 5: Extorsión digital
- Art. 6: Acceso para datos personales

**Qué se aceptó:** 100% del mapeo propuesto

**Qué se corrigió:** Amplié sección de "elementos de imputabilidad" y "circunstancias agravantes" que Copilot sugirió brevemente.

**Justificación:** El mapeo de Copilot fue precisamente lo que se necesitaba. Los detalles ampliados ayudan a fortalecer el análisis de responsabilidad penal.

---

### Prompt 4: Reconstrucción de fases del ataque

**Texto del Prompt:**
```
¿Cuáles son las fases típicas de un ataque ransomware a infraestructura 
estatal? Describe desde reconocimiento inicial hasta demanda de rescate. 
Aplica al contexto de GTD 2023 Chile.
```

**Herramienta:** GitHub Copilot

**Resultado:** Estructura clásica:
1. Reconocimiento y acceso inicial
2. Movimiento lateral
3. Exfiltración de datos
4. Despliegue de ransomware
5. Extorsión

**Qué se aceptó:** La estructura de 5 fases

**Qué se corrigió:** Agregué detalles específicos de GTD:
- Identificación de gobernanza local como actor afectado
- Énfasis en datos de ciudadanos (no solo funcionarios)
- Contexto de infraestructura crítica estatal

**Justificación:** Las fases son técnicamente correctas pero requieren adaptación al contexto legal y operativo chileno.

---

## Reflexión General sobre Uso de IA

### Utilidad de GitHub Copilot

**Fortalezas:**
1. **Velocidad estructural:** Generó esquemas y tablas rápidamente
2. **Acceso al contexto:** Pudo ver el proyecto completo y sugerir coherencia
3. **Precisión legal:** Para leyes conocidas (Ley 21.459), fue bastante preciso
4. **Iteración eficiente:** Permitió refinar ideas en tiempo real

**Limitaciones:**
1. **Leyes recientes:** Leyes muy nuevas (Ley 21.595 - 2023) requirieron corrección manual
2. **Contexto específico:** Detalles del ataque GTD 2023 debieron ser investigados independientemente
3. **Validación legal:** Siempre necesitó revisión de artículos y penas específicas

### Evaluación de Prompts

Los prompts más **específicos** (que mencionaban):
- Nombre del caso (GTD 2023)
- Contexto legal (Ley 21.459, Chile)
- Detalles técnicos (ransomware, exfiltración)

...Generaron resultados significativamente mejores que prompts genéricos.

**Ejemplo de prompt genérico (evitado):**
> "Hazme un análisis de ciberseguridad"

**Ejemplo de prompt específico (usado):**
> "Mapea ataque ransomware a GTD Chile a artículos Ley 21.459"

La diferencia en calidad fue notable.

### Tiempo Ahorrado vs. Investigación Requerida

- **Copilot ahorro:** ~30% del tiempo en estructuración
- **Investigación manual necesaria:** ~70% (validación legal, contexto específico, normativa actualizada)

El uso de IA fue útil, pero el análisis legal requirió investigación independiente significativa.

---

## Sección 04 - Comparación de Marcos Regulatorios

### Prompt 5: Comparación entre sectores

**Texto del Prompt:**
```
Necesito comparar marcos regulatorios de seguridad en Chile entre:
1. Sector Público (donde opera GTD)
2. Sector Financiero (bancos regulados por BCCh)
3. Infraestructura Crítica internacional (NIST, ISO 27001)

Para cada sector, compara en 3 ejes:
- Regulación de Seguridad Informática
- Protección de Datos Personales
- Respuesta a Incidentes y Continuidad

Incluye normas específicas (Ley 21.595, NSIF, GDPR, CCPA).
Genera tablas comparativas y conclusiones sobre por qué GTD fue vulnerable.
```

**Herramienta:** GitHub Copilot

**Resultado:** Estructura clara de 3 ejes + tabla comparativa. Propuso correctamente:
- Ley 21.595 para sector público
- NSIF para sector financiero
- NIST/ISO para infraestructura internacional

**Qué se aceptó:** 85% de la estructura

**Qué se corrigió:**
- Profundicé en diferencias de RTO/RPO (Recovery Time/Point Objective)
- Agregué datos específicos de multas (50-500 UF en BCCh, 4% en GDPR)
- Expandí análisis de "por qué GTD fue vulnerable" con comparativa de auditorías y certificaciones

**Justificación:** La estructura de Copilot era correcta pero necesitaba detalles operacionales y financieros específicos del sector bancario chileno.

---

---

## Sección 05 - Responsabilidades Legales

### Prompt 6: Mapeo de responsabilidades por actor

**Texto del Prompt:**
```
En ataque ransomware a GTD (infraestructura estatal chile):
- Atacantes (grupo ransomware)
- GTD / Ministerio del Interior (responsable)
- Proveedores de servicios (hosting, monitoreo)
- ASET / CNI (reguladores)
- Ciudadanos/funcionarios (afectados)

Detalla responsabilidades penales, civiles y administrativas de cada actor.
Incluye normas aplicables, penas, precedentes chilenos, monto de daño.
Incluye tabla comparativa de responsabilidades y riesgos legales.
```

**Herramienta:** GitHub Copilot

**Resultado:** Estructura clara de actores, pero generó información genérica sobre responsabilidades.

**Qué se aceptó:** 60% (estructura de actores)

**Qué se corrigió:**
- Profundizé en montos específicos de daño (basado en jurisprudencia chilena)
- Agregué precedentes reales (Hospital Villarrica 2021, BancoEstado 2020)
- Expandí responsabilidad penal de funcionarios (Art. 295, CP)
- Detalles de complicidad con proveedores bajo Art. 21.459

**Justificación:** Copilot no conocía casos chilenos específicos. Necesitaba investigación de jurisprudencia nacional.

---

## Sección 06 - Datos Personales y Derechos ARCO

### Prompt 7: Análisis de Ley 19.628 y derechos ARCO

**Texto del Prompt:**
```
Para ataque GTD que filtró datos de ciudadanos y funcionarios:
- ¿Qué es Ley 19.628 en Chile? Principios clave.
- ¿Qué son derechos ARCO? Detalle cada uno.
- ¿Cómo clasificar datos filtrados (personales vs. sensibles)?
- ¿Qué puede demandar un afectado?
- Procedimientos de ejercicio de ARCO
- Estimación de daño y perjuicio

Estructura en secciones con ejemplos y procedimientos paso a paso.
```

**Herramienta:** GitHub Copilot

**Resultado:** Muy buena generación de definiciones de ARCO y clasificación de datos.

**Qué se aceptó:** 80%

**Qué se corrigió:**
- Agregué montos específicos de indemnización (jurisprudencia chilena)
- Detallé procedimiento judicial (Recurso de Protección, Art. 20)
- Especifiqué plazos legales (15 días acceso, 30 días rectificación)
- Agregué riesgos de daño moral estimado ($5-50 mil millones)

**Justificación:** Copilot generó buen contenido sobre derechos, pero los montos y procedimientos requirieron validación con casos reales.

---

## Sección 07 - Conclusiones y Recomendaciones

### Prompt 8: Recomendaciones para sector público

**Texto del Prompt:**
```
Después de ataque ransomware a GTD (infraestructura estatal chile):
- Síntesis de hallazgos legales (qué leyes se violaron)
- Lecciones aprendidas vs. sector financiero
- Recomendaciones por plazo: corto (0-6m), mediano (6-12m), largo (12+m)
- Responsabilidades y acciones correctivas
- Precedentes internacionales (OPM USA, GDPR Europa)
- Reflexión final sobre impacto

Estructura en secciones con tablas comparativas y acciones concretas.
```

**Herramienta:** GitHub Copilot

**Resultado:** Excelente generación de estructura y recomendaciones. Muy cercano a lo final.

**Qué se aceptó:** 85%

**Qué se corrigió:**
- Especifiqué recomendaciones para ASET (crear CSIRT, modelo NIST)
- Agregué plazos de implementación ISO 27001 (12 meses)
- Detallé impacto financiero estimado
- Agregué preguntas clave para responsables

**Justificación:** Copilot estuvo bastante cercano. Los ajustes fueron principalmente de detalle y especificidad.

---

## Reflección General sobre Prompts Utilizados

### Prompts que Funcionaron Mejor

1. **Comparativas multidimensionales:**
   - Copilot excelente en generar tablas 3D (filas, columnas, dimensiones)
   - Útil para marcos regulatorios vs. sectores

2. **Mapeos y estructuras legales:**
   - Copilot rápido en identificar artículos y citar leyes
   - Bueno en generar esquemas

3. **Recomendaciones y mejores prácticas:**
   - Copilot generó lista de acciones coherentes
   - Necesitó validación de viabilidad

### Prompts que Requirieron Más Corrección

1. **Montos y cifras específicas:**
   - Copilot tendió a generalizar
   - Requerida investigación de casos chilenos reales

2. **Procedimientos legales nacionales:**
   - Copilot conocimiento genérico de leyes
   - Necesité detalles de cortes chilenas específicas

3. **Jurisprudencia:**
   - Copilot no conoce casos muy recientes (2020-2023)
   - Manual research fue necesario

### Costo/Beneficio de Usar IA

**Tiempo Ahorrado:** ~40% del tiempo de estructura y esquema
**Investigación Manual Requerida:** ~60% (validación, datos específicos, casos chilenos)
**Calidad Final:** Robusta, defendible ante corte

**Conclusión:** IA acelera producción pero no reemplaza investigación legal seria.

---

## Conclusiones Finales

1. **IA como asistente estructural:** GitHub Copilot fue excelente para brainstorming y estructura.

2. **Especificidad crítica:** Prompts mencionando "GTD 2023", "Chile", "Ley 21.459" generaron resultados 3x mejores que prompts genéricos.

3. **Validación siempre necesaria:** Cada afirmación legal requirió verificación con fuentes oficiales.

4. **Combinación efectiva:** Copilot + investigación manual + jurisprudencia = análisis legal robusto.

5. **Para casos futuros:** Usaré IA para estructura, pero mantendré separado: investigación legal independiente, validación de cifras, consulta de precedentes.
