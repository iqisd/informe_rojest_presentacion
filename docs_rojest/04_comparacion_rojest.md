# 04. Comparación de Marcos Regulatorios por Industria

## Introducción

El ataque a GTD 2023 afectó un sector de **gobernanza digital estatal**. Este análisis compara los marcos regulatorios de seguridad y protección de datos en tres industrias relevantes: **Sector Público (Chile)**, **Sector Financiero (Chile)**, e **Infraestructura Crítica (Internacional)**.

La comparación se realiza en tres ejes: **Regulación de Seguridad**, **Protección de Datos** y **Respuesta a Incidentes**.

---

## Tabla Comparativa: Marcos Regulatorios por Industria

| **Dimensión** | **Sector Público (GTD)** | **Sector Financiero (Bancos)** | **Infraestructura Crítica (Internacional)** |
|---|---|---|---|
| **Regulador Principal** | SEGPRES / CNI | Banco Central de Chile (BCCh) | Variado (NIST, ISO, gobiernos nacionales) |
| **Norma de Seguridad Primaria** | Ley 21.595 (Seguridad Información Estado) | Norma de Seguridad de Información Financiera (NSIF) del BCCh | ISO 27001, NIST Cybersecurity Framework |
| **Tipificación de Delitos** | Ley 21.459 (Ciberdelitos Chile) | Ley 21.459 + Ley 20.009 (fraude financiero) | Convención Budapest + leyes nacionales |
| **Protección de Datos Personales** | Ley 19.628 (derechos ARCO) | Ley 19.628 + regulaciones BCCh específicas | GDPR (UE), CCPA (USA), leyes nacionales |
| **Responsable de Validación** | Ministerio del Interior, ASET | Superintendencia Financiera | Autoridades nacionales de ciberseguridad |

---

## Eje 1: Regulación de Seguridad Informática

### Sector Público (GTD - Chile)

**Marco Legal:**
- **Ley 21.595 (2023):** Especifica requisitos de seguridad para agencias estatales
  - Evaluación de riesgos obligatoria
  - Plan de continuidad del negocio
  - Programa de seguridad de la información
  - Reporte de incidentes al CNI

**Características:**
- Enfoque normativo general (reciente, en implementación)
- Responsabilidad compartida entre ministerios
- Coordinación nacional a través de CNI
- Menos riguroso que sector financiero

**Vulnerabilidades observadas en GTD:**
- Cumplimiento incompleto de Ley 21.595
- Controles insuficientes de acceso
- Falta de detección temprana de anomalías
- Plan de respuesta a incidentes débil

---

### Sector Financiero (Bancos - Chile)

**Marco Legal:**
- **Norma de Seguridad de Información Financiera (NSIF):** BCCh
  - Requiere certificación ISO 27001 (obligatoria para bancos grandes)
  - Auditorías semestrales de seguridad
  - Evaluación anual de riesgos críticos
  - Reporte mensual de anomalías

**Características:**
- Regulación **más rigurosa** que sector público
- Supervisión activa del Banco Central
- Cifrado obligatorio de datos sensibles
- Pruebas de penetración semestrales obligatorias
- Requisitos de segregación de redes

**Comparativa:** Los bancos tienen **controles más fuertes** que GTD en 2023.

---

### Infraestructura Crítica (Internacional)

**Marco Legal:**
- **NIST Cybersecurity Framework (USA):** Estándar de facto
- **ISO 27001:** Certificación internacional de seguridad
- **Directiva NIS (UE):** Operadores de servicios esenciales
- **Regulaciones nacionales:** Variadas por país

**Características:**
- Enfoque **anticipatorio** (threat intelligence)
- Requerimientos de redundancia y failover
- Coordinación internacional entre gobiernos
- Respuesta a incidentes en < 4 horas (algunos países)
- Cifrado military-grade para datos críticos

---

## Eje 2: Protección de Datos Personales

### Sector Público (GTD - Chile)

**Marco Legal:**
- **Ley 19.628 (1999, modificada):**
  - Consentimiento previo requerido
  - Derechos ARCO (Acceso, Rectificación, Cancelación, Oposición)
  - Responsabilidad civil por violación
  - Sin máximo de multa definido (depende de corte)

**Características:**
- Protección **pasiva** (derechos reactivos)
- Responsabilidad de GTD por incumplimiento de seguridad
- Afectados pueden demandar daño y perjuicio
- Lentitud en resoluciones judiciales

**Aplicación al caso:** Datos de ciudadanos y funcionarios fueron filtrados → violación clara de Ley 19.628

---

### Sector Financiero (Bancos - Chile)

**Marco Legal:**
- **Ley 19.628** + regulaciones BCCh específicas:
  - Encriptación de datos en tránsito y reposo (AES-256 mínimo)
  - Retención limitada (máximo 5 años después de relación)
  - Consentimiento requerido para usar datos
  - Penalidades: multas de 50-500 UF por violación

**Características:**
- Protección **más estricta** que sector público
- Multas predefinidas por BCCh
- Auditorías externas de privacidad
- Reportes mensuales de derechos ARCO ejercidos

---

### Infraestructura Crítica (Internacional)

**Marco Legal:**
- **GDPR (UE):** Multas de hasta 4% de ingresos globales
- **CCPA (California, USA):** Multas de $100-$750 por consumidor
- **Leyes nacionales:** Variadas

**Características:**
- Protección **muy estricta** con sanciones severas
- Derecho al olvido (eliminación de datos)
- Evaluación de impacto de privacidad (DPIA) obligatoria
- Notificación de brechas en 72 horas

---

## Eje 3: Respuesta a Incidentes y Continuidad

### Sector Público (GTD - Chile)

**Marco Legal:**
- **Ley 21.595 (Cap. IV):** Plan de continuidad del negocio
- **Protocolos internos:** ASET/SEGPRES

**Requisitos:**
- RTO (Recovery Time Objective): No especificado (típico 48-72 horas)
- RPO (Recovery Point Objective): Diario
- Comunicación al CNI: Obligatoria (plazo variable)
- Comunicación al público: Discrecional

**Respuesta en GTD 2023:**
- ⚠️ Demora en detección (varios días)
- ⚠️ Comunicación lenta al público
- ⚠️ Falta de plan de respuesta coordinado
- ⚠️ Recuperación lenta (varios días de inactividad)

---

### Sector Financiero (Bancos - Chile)

**Marco Legal:**
- **Norma de Contingencia BCCh:**
  - RTO: Máximo 4 horas para sistemas críticos
  - RPO: Máximo 1 hora
  - Plan de crisis obligatorio
  - Simulacros semestrales

**Requisitos:**
- Comunicación al BCCh: Inmediata (< 1 hora)
- Comunicación a clientes: Dentro de 24 horas
- Sitio espejo en otra región geográfica
- Equipo de respuesta 24/7

**Respuesta esperada:** Los bancos responden en 4 horas → **significativamente mejor que GTD**

---

### Infraestructura Crítica (Internacional)

**Marco Legal:**
- **NIST Incident Response:**
  - RTO: < 1 hora para servicios críticos
  - RPO: Real-time o < 15 minutos
  - Comunicación inmediata a autoridades
  - Respuesta federal/nacional activada

**Requisitos:**
- Equipo de respuesta en 30 minutos (FBI, DHS en USA)
- Análisis forense en paralelo
- Inteligencia de amenazas compartida internacionalmente
- Opciones de atribución de atacantes

**Respuesta esperada:** Movilización en < 2 horas → **Óptimo nivel de respuesta**

---

## Tabla Síntesis: Comparativa de Rigurosidad

| **Aspecto** | **Sector Público (GTD)** | **Sector Financiero** | **Infraestructura Crítica (Intl)** |
|---|---|---|---|
| **Rigurosidad de Seguridad** | Moderada | Alta | Muy Alta |
| **Cumplimiento de Normativa** | Incompleto | Estricto | Muy Estricto |
| **Tiempo de Respuesta Esperado** | 48-72h | 4h | <1h |
| **Protección de Datos** | Básica (ARCO) | Avanzada (encriptación obligatoria) | Máxima (GDPR, múltiples leyes) |
| **Auditoría Externa** | Anual (opcional) | Semestral (obligatoria) | Continua (automatizada) |
| **Multas por Violación** | Limitadas | Definidas (50-500 UF) | Severas (% ingresos) |
| **Certificación Requerida** | Ley 21.595 (reciente) | ISO 27001 (obligatoria) | ISO 27001 + NIST (estándar) |

---

## Análisis: Por Qué GTD fue Vulnerable

Comparando con otros sectores:

1. **Regulación más nueva (2023):** Ley 21.595 es reciente, implementación incompleta
2. **Menos auditoría externa:** A diferencia de bancos (semestral), sector público tiene auditoría anual
3. **RTO/RPO flexibles:** Sin límites definidos, a diferencia de 4 horas en sector financiero
4. **Menos exigencia de ISO 27001:** Bancos deben tener certificación, GTD no (hasta reciente)
5. **Respuesta lenta:** No hay protocolo de respuesta en < 24 horas como en sector financiero
6. **Financiamiento de seguridad:** Históricamnete menor que sector financiero

---

## Lecciones Aplicables a GTD

Si GTD adoptara prácticas de sector financiero:

| **Medida del Sector Financiero** | **Aplicación a GTD** | **Beneficio Esperado** |
|---|---|---|
| Certificación ISO 27001 obligatoria | Auditorías semestrales | Detección temprana de vulnerabilidades |
| Encriptación AES-256 | Cifrado de toda información sensible | Pérdidas irreversibles en caso de ransomware |
| RTO 4 horas | Plan de continuidad riguroso | Reducción de downtime de 48h a 4h |
| Comunicación al regulador < 1 hora | Notificación inmediata al CNI | Activación de respuesta federal rápida |
| Equipo de respuesta 24/7 | CIRT estatal dedicado | Contención más rápida del incidente |
| Pruebas de penetración semestrales | Red team interno | Identificación de vulnerabilidades antes del ataque |

---

## Conclusión

El ataque a GTD 2023 reveló que el **sector público chileno tiene marcos regulatorios menos rigurosos** que el sector financiero, a pesar de manejar infraestructura crítica. 

La adopción de estándares del sector financiero (ISO 27001, RTO 4 horas, auditorías semestrales) fortalecería significativamente la seguridad de plataformas estatales críticas como GTD.

**Comparación final:** 
- Sector público (GTD): Regulación **emergente**
- Sector financiero: Regulación **consolidada**
- Infraestructura crítica internacional: Regulación **avanzada**
