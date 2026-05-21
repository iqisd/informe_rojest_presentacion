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

## Conclusiones

1. **IA como asistente, no como fuente primaria:** GitHub Copilot fue útil para estructura y iteración, pero no para validación legal.

2. **Especificidad importa:** Prompts específicos sobre GTD, Ley 21.459 y Chile generaron mejores resultados.

3. **Combinación efectiva:** Copilot + investigación manual = análisis legal robusto y defandible.

4. **Lecciones aprendidas:** Para próximos casos, usaré IA para:
   - Brainstorming de estructura
   - Identificación de normas relevantes
   - Generación de tablas y esquemas
   
   ...Pero validaré siempre con fuentes oficiales.
