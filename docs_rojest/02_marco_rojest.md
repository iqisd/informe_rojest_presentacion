# 02. Marco Normativo Aplicable: Ataque GTD 2023

## Introducción

El ataque a la Gobernación Territorial Digital (GTD) en 2023 invoca un conjunto complejo de normas chilenas e internacionales que regulan la ciberseguridad, protección de datos y delitos informáticos. Este análisis cubre el marco normativo nacional e internacional relevante.

---

## 1. Marco Normativo Nacional Chileno

### 1.1 Ley 21.459 - Delitos Informáticos (2022)

**Referencia:** Ley que tipifica delitos informáticos en Chile (vigente desde 2023)

**Artículos Relevantes:**
- **Art. 1:** Acceso no autorizado a sistemas de información
- **Art. 2:** Interferencia con datos o sistemas
- **Art. 3:** Interceptación no autorizada
- **Art. 4:** Sabotaje y daño a sistemas
- **Art. 5:** Extorsión digital (incluyendo ransomware)
- **Art. 6:** Acceso para obtener datos personales

**Aplicabilidad al caso GTD:**
- Acceso no autorizado a servidores de GTD
- Interferencia con funcionamiento de la plataforma
- Potencial extorsión digital (demanda de rescate)
- Obtención y/o filtración de datos personales

---

### 1.2 Ley 19.628 - Protección de Datos Personales (1999, modificada)

**Referencia:** Regula el tratamiento de datos personales en Chile

**Principios Clave:**
- **Consentimiento:** Datos solo pueden procesarse con consentimiento previo
- **Seguridad:** Responsable debe garantizar medidas de seguridad adecuadas
- **Finalidad:** Datos solo pueden usarse para la finalidad indicada
- **Acceso:** Titular tiene derecho a acceder a sus datos (Derecho ARCO)

**Derechos ARCO:**
- **A** (Acceso): Solicitar acceso a datos personales
- **R** (Rectificación): Corregir datos inexactos
- **C** (Cancelación): Eliminar datos
- **O** (Oposición): Oponerse al procesamiento

**Aplicabilidad al caso GTD:**
- Violación de seguridad expone datos personales de funcionarios y ciudadanos
- GTD como responsable debe garantizar seguridad (Art. 5)
- Afectados pueden ejercer derechos ARCO tras la violación
- Potencial responsabilidad civil por daño causado por filtración

---

### 1.3 Ley 20.285 - Acceso a la Información Pública (2008)

**Referencia:** Regula transparencia y acceso a información del Estado

**Relevancia Indirecta:**
- Información de GTD puede estar sujeta a esta ley
- Trasparencia en la comunicación del incidente es requerida
- Obligación de informar al público sobre violaciones de seguridad

---

### 1.4 Ley 18.314 - Terrorismo y Seguridad de la República (1984)

**Artículos Relevantes (si procede):**
- **Art. 4:** Define sabotaje a infraestructura crítica
- Podría aplicarse si el ataque se clasifica como terrorismo cibernético
- Agravante si el incidente fue motivado por fines políticos o de coerción estatal

**Aplicabilidad:** Depende de la intención del atacante y si se considera que GTD es infraestructura crítica.

---

### 1.5 Ley 21.595 - Seguridad de la Información del Estado (2023)

**Referencia:** Reciente ley que establece estándares de seguridad para el Estado

**Disposiciones:**
- Agencias estatales deben implementar programas de seguridad de la información
- Reporte obligatorio de incidentes
- Coordinación con autoridades de ciberseguridad (CNI o equivalente)
- Evaluación periódica de vulnerabilidades

**Aplicabilidad al caso GTD:**
- GTD, al ser un sistema estatal, debe cumplir con esta ley
- Potencial incumplimiento de deberes de seguridad
- Responsabilidad administrativa por falta de implementación de controles

---

### 1.6 Código Penal Chileno (Delitos contra el Patrimonio)

**Artículos Relevantes:**
- **Art. 432-436:** Hurto de información y datos electrónicos
- **Art. 440-448:** Fraude y estafa (si hay extorsión)
- **Art. 494 a 498:** Daño a propiedad ajena (infraestructura informática)

---

## 2. Marco Normativo Internacional Aplicable

### 2.1 Convención de Budapest sobre Ciberdelitos (2001)

**Convención adoptada por múltiples países, incluyendo referencias en legislación chilena**

**Delitos Tipificados:**
- Acceso ilícito a sistemas (Art. 2)
- Interferencia con datos (Art. 3)
- Interferencia con sistemas (Art. 4)
- Abuso de dispositivos (Art. 5)
- Fraude y falsificación informática (Art. 7-8)

**Aplicabilidad:** Establece estándares internacionales que Chile ha adoptado parcialmente en Ley 21.459.

---

### 2.2 ISO 27001 - Norma de Seguridad de la Información

**Referencia:** Estándar internacional para sistemas de gestión de seguridad de la información

**Requisitos Clave:**
- Evaluación de riesgos
- Controles de acceso
- Cifrado de datos
- Plan de contingencia
- Auditoría y monitoreo

**Aplicabilidad:** GTD debería cumplir con ISO 27001 como sistema crítico estatal. El ataque sugiere incumplimiento.

---

### 2.3 NIST Cybersecurity Framework (EE.UU.)

**Funciones Principales:**
- **Identificar:** Evaluar activos y riesgos
- **Proteger:** Implementar salvaguardas
- **Detectar:** Identificar anomalías
- **Responder:** Contener y erradicar
- **Recuperar:** Restaurar operaciones

**Aplicabilidad:** Marco de referencia internacional usado para evaluar madurez de seguridad.

---

### 2.4 GDPR (Reglamento General de Protección de Datos - UE)

**Referencia:** Aunque GTD es chilena, si datos de ciudadanos europeos fueron afectados, GDPR aplica.

**Disposiciones Clave:**
- Notificación de brechas en 72 horas
- Derecho al olvido
- Evaluación de impacto de privacidad (DPIA)
- Multas de hasta 4% del ingresos globales

**Aplicabilidad:** Solo si hay conexión con EU; menos probable en este caso.

---

## 3. Síntesis de Normas Aplicables por Aspecto

| Aspecto Jurídico | Norma Chilena | Norma Internacional |
|---|---|---|
| **Acceso no autorizado** | Ley 21.459 (Art. 1) | Convención Budapest (Art. 2) |
| **Interferencia de sistemas** | Ley 21.459 (Art. 2, 4) | ISO 27001, NIST |
| **Extorsión (rescate)** | Ley 21.459 (Art. 5), CP 440-448 | Convención Budapest |
| **Datos personales** | Ley 19.628 | GDPR (si aplica) |
| **Seguridad estatal** | Ley 21.595 | NIST, ISO 27001 |
| **Infraestructura crítica** | Ley 18.314 (potencial) | Convenciones internacionales |

---

## 4. Conclusiones del Marco Normativo

- **Ley 21.459** es la normativa **principal** para tipificación de delitos en el caso GTD.
- **Ley 19.628** y derechos ARCO son clave para **protección de datos** de afectados.
- **Ley 21.595** define responsabilidades de seguridad que GTD potencialmente incumplió.
- Estándares internacionales (ISO 27001, NIST, Convención Budapest) proporcionan contexto regulatorio más amplio.
- Responsabilidades son **multidimensionales:** penales, civiles y administrativas.