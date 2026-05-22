# 06. Tratamiento de Datos Personales: Ley 19.628 y Derechos ARCO

## Introducción

El ataque a GTD 2023 comprometió datos personales de funcionarios públicos y ciudadanos. Este análisis examina bajo la **Ley 19.628** (Protección de Datos Personales en Chile) qué datos fueron expuestos, cómo se clasifican, y qué derechos pueden ejercer los afectados.

---

## 1. Marco Legal: Ley 19.628

**Referencia:** Ley de Protección de Datos Personales (Chile, 1999, modificada en 2018 y 2021)

**Principios Fundamentales:**

| Principio | Descripción | Aplicación a GTD |
|---|---|---|
| **Consentimiento** | Datos solo se pueden procesar con autorización previa | GTD recopiló datos de ciudadanos ¿con consentimiento? |
| **Seguridad** | Responsable debe garantizar medidas razonables de seguridad | GTD incumplió (ataque exitoso) |
| **Finalidad** | Datos solo se usan para el propósito declarado | GTD usaba datos para gestión territorial (lícito) |
| **Calidad** | Datos deben ser exactos, completos y actualizados | GTD debe mantener calidad |
| **Información** | Titular debe saber qué datos tiene el responsable | GTD debería haber informado del incidente |

---

## 2. Clasificación de Datos Comprometidos en GTD

### 2.1 Datos Personales (No Sensibles)

**Definición (Ley 19.628, Art. 2):**
> "Información que permite identificar o hacer identificable a una persona"

**Datos Potencialmente Filtrados de GTD:**
- Nombre completo
- RUT (Rol Único Tributario)
- Correo electrónico
- Número de teléfono
- Dirección
- Cargo/rol (para funcionarios)
- Historial de acciones en la plataforma
- Información de contatos de gobiernos locales

**Riesgo de Daño:** Moderado
- Posible uso para phishing dirigido
- Potencial identidad falsa
- Venta en mercados negros ($0.50-5 USD por registro)

**Confidencialidad Esperada:** Mínima (información parcialmente pública)

---

### 2.2 Datos Sensibles (Categoría Especial)

**Definición (Ley 19.628, Art. 16):**
> "Datos referentes a convicciones religiosas, políticas, membresía en organizaciones, vida sexual, antecedentes penales"

**¿Estaban en GTD?**
- **Potencialmente:** Datos de filiación política de gobiernos locales por tendencia
- **No directamente:** GTD no es una base de datos política
- **Indirectamente:** Si gobiernos locales cargaban información de afiliación

**Riesgo de Daño:** Alto
- Discriminación política/religiosa
- Estigmatización
- Violación grave de privacidad

**Protección Legal:** Art. 16, Ley 19.628 prohíbe recopilación de datos sensibles sin consentimiento explícito

---

### 2.3 Datos de Categoría "Cuasisenible"

**Clasificación No Oficial (Jurisprudencia Chilena):**

Datos que no son "sensibles" formalmente, pero requieren protección especial:

- **Información de ubicación/geolocalización** de gobiernos locales
- **Información de proyectos estatales** (sensibilidad política)
- **Datos de contacto de funcionarios públicos** (seguridad física potencial)

**Aplicación a GTD:** Probable que haya datos de esta categoría

---

## 3. Violación de la Ley 19.628 en el Caso GTD

### 3.1 Incumplimiento del Principio de Seguridad

**Artículo 5, Ley 19.628:**
> "El responsable del tratamiento de datos debe implementar medidas técnicas y organizacionales para garantizar la seguridad de los datos personales"

**Incumplimiento en GTD:**
- Controles de acceso insuficientes (permaneció compromiso 3+ días)
- Falta de cifrado de datos en reposo (ransomware cifró fácilmente)
- Falta de monitoreo 24/7 (detección lenta)
- Falta de plan de respuesta a incidentes (recuperación lenta)

**Consecuencia Legal:**
- GTD es **responsable por negligencia grave** en seguridad
- Afectados pueden demandar por incumplimiento de Art. 5
- No hay límite de daño y perjuicio en la ley

---

### 3.2 Violación del Derecho a la Información

**Artículo 13, Ley 19.628:**
> "Titular tiene derecho a saber si sus datos están siendo tratados y acceder al contenido de los registros"

**Incumplimiento en GTD:**
- Ciudadanos y funcionarios NO fueron informados oportunamente del incidente
- Demora en comunicación pública creó incertidumbre
- Muchos nunca supieron si sus datos específicos fueron filtrados

**Consecuencia Legal:**
- GTD es responsable por falta de comunicación
- Demanda por daño moral por ansiedad/incertidumbre

---

### 3.3 Incumplimiento de Medidas de Retención

**Artículo 12, Ley 19.628:**
> "Datos personales no se conservarán por más tiempo del necesario para la finalidad"

**Incidencia en GTD:**
- GTD debería haber tenido políticas de borrado de datos antiguos
- Posible retención innecesaria de datos históricos
- Mayor volumen de datos en riesgo por negligencia

---

## 4. Derechos ARCO: Ejercicio por Afectados

### 4.1 Derecho de ACCESO (A)

**Definición (Art. 13, Ley 19.628):**
Titular puede solicitar acceso a todos sus datos personales tratados

**Cómo Ejercerlo en GTD:**
1. Enviar solicitud formal a GTD (correo, presencialmente, o mediante portal digital)
2. Especificar: nombre, RUT, teléfono de contacto
3. GTD debe responder en **máximo 15 días** (Art. 13, párrafo 2)

**Qué Puede Preguntar:**
- ¿Qué datos míos tiene GTD?
- ¿Cuándo fueron recopilados?
- ¿Para qué se usan?
- ¿Fueron afectados por el ataque de 2023?

**Sanción por No Responder:**
- Recurso de Protección ante Corte (Art. 20, Ley 19.628)
- Multa administrativa: $100-2.000 UF (Ley 21.096, 2018)
- Condenación civil por daño moral

---

### 4.2 Derecho de RECTIFICACIÓN (R)

**Definición (Art. 14, Ley 19.628):**
Titular puede corregir datos inexactos o incompletos

**Cómo Ejercerlo en GTD:**
1. Solicitar que GTD verifique exactitud de datos
2. Indicar específicamente qué datos son incorrectos
3. Proporcionar datos correctos con evidencia (cédula, documento oficial)
4. GTD debe corregir en **máximo 30 días**

**Ejemplos:**
- "Mi nombre está escrito incorrecto en GTD"
- "Mi cargo en el gobierno local cambió, actualicen"
- "Mi teléfono es X, no Y"

**Sanción por No Rectificar:**
- Recurso de Protección
- Multa + daño moral

---

### 4.3 Derecho de CANCELACIÓN (C)

**Definición (Art. 15, Ley 19.628):**
Titular puede solicitar que sus datos sean **eliminados permanentemente**

**Limitaciones Importantes:**
- GTD puede RETENER datos si:
  - Datos son requeridos por ley (impuestos, antecedentes)
  - Datos se necesitan para cumplir contrato
  - Existe demanda/investigación judicial en curso
  - Datos agregados y anonimizados (estadísticas)

**Cómo Ejercerlo en GTD:**
1. Solicitar cancelación especificando datos
2. Justificar por qué no desea que se almacenen
3. GTD debe responder indicando si puede cancelar o justificar retención
4. Si GTD rechaza, puede recurrir a corte

**Ejemplos Válidos para Cancelación:**
- "Soy funcionario que renuncié, borren mis datos"
- "Accedí a GTD una sola vez hace 5 años, ya no necesitan mis datos"

**Ejemplos NO Válidos:**
- "No quiero que GTD tenga mis datos" (si son requeridos por ley)
- "Borren mi RUT" (dato legal, imposible cancelar)

---

### 4.4 Derecho de OPOSICIÓN (O)

**Definición (Art. 20.a, Ley 19.628, modificada 2021):**
Titular puede oponerse al procesamiento de sus datos para ciertos usos

**Cómo Ejercerlo en GTD:**
1. Solicitar oposición especificando USO específico (no general)
2. Indicar razón legítima para oposición
3. GTD debe evaluar si el procesamiento es legítimo

**Ejemplos:**
- "Me opongo a que GTD use mis datos para análisis demográficos"
- "Me opongo a que mis datos se compartan con otros ministerios"

**No Aplica Para:**
- Usos legales obligatorios
- Cumplimiento de contrato
- Obligaciones legales

---

## 5. Procedimientos de Ejercicio de Derechos ARCO

### 5.1 Procedimiento Administrativo (Interno GTD)

**Paso 1: Presentación de Solicitud**
- Formato: Escrito, email, o formulario electrónico
- Destinatario: Encargado de Privacidad de GTD / Ministerio del Interior
- Información requerida: Nombre, RUT, teléfono, derecho solicitado, datos específicos

**Paso 2: Respuesta de GTD**
- Plazo: 15 días (acceso); 30 días (rectificación)
- GTD debe responder por escrito
- Puede pedir aclaraciones si solicitud es vaga

**Paso 3: Acuerdo o Desacuerdo**
- Si GTD accede: Se efectúa el derecho
- Si GTD rechaza: Notifica por escrito con justificación legal

**Paso 4: Recurso Ante Juzgado (Si Desacuerdo)**
- Plazo de apelación: 30 días
- Tribunal competente: Juzgado de Letras del domicilio del demandante
- Procedimiento: Sumario (rápido)

---

### 5.2 Procedimiento Judicial: Recurso de Protección (Art. 20, Ley 19.628)

**Cuándo Usar:**
- GTD no responde en plazo legal
- GTD rechaza derecho sin justificación válida
- Urgencia de protección de privacidad

**Tribunal Competente:** Corte de Apelaciones

**Plazo:** Máximo 30 días después de conocer la vulneración

**Sanción:** Corte ordena a GTD cumplir + multa ($100-2.000 UF) + daño moral

---

## 6. Cifras del Daño Potencial en GTD 2023

### 6.1 Estimación de Datos Filtrados

**Supuestos:**
- Funcionarios públicos en GTD: ~5.000
- Ciudadanos accediendo GTD: ~50.000
- **Total estimado:** ~55.000 registros de personas

### 6.2 Cálculo de Indemnización

**Por Daño Moral (Jurisprudencia Chilena):**
- Funcionarios (privacidad profesional): $20-50 millones c/u
- Ciudadanos (datos básicos): $5-10 millones c/u

**Estimación Baja:**
- 5.000 funcionarios × $20 millones = $100 mil millones
- 50.000 ciudadanos × $5 millones = $250 mil millones
- **Total:** ~$350 mil millones

**Estimación Conservadora:**
- 5.000 funcionarios × $10 millones = $50 mil millones
- 50.000 ciudadanos × $1 millón = $50 mil millones
- **Total:** ~$100 mil millones

**Realidad Judicial Probable:**
- Demandas colectivas más comunes que individuales
- Promedio de sentencias en Chile para casos de privacidad: $10-30 millones por actor
- Número de demandantes potenciales: 500-5.000 (no todos demandan)
- **Cifra realista:** $5-50 mil millones (estimación media)

---

## 7. Medidas de Remediación Requeridas por Ley

**GTD debe ejecutar (Ley 19.628 + jurisprudencia):**

1. **Comunicación Urgente:**
   - Informar públicamente y a afectados en < 24 horas (estándar GDPR, adoptado en práctica chilena)
   - Detalle de datos filtrados, contexto, acciones tomadas

2. **Plan de Protección:**
   - Servicios gratuitos de monitoreo de crédito para afectados (típico: 2 años)
   - Aseguradora de identidad (típico: 3 años)
   - Línea de atención 24/7

3. **Investigación Interna:**
   - Auditoría forense por tercero independiente
   - Reporte público de hallazgos (con datos sensibles redactados)

4. **Mejora de Seguridad:**
   - Implementación de ISO 27001 (antes de 12 meses)
   - Pruebas de penetración semestrales
   - Cifrado AES-256 de todos los datos

5. **Compensación:**
   - Fondo de indemnización para afectados (típico: 1-5% del daño reclamado)

---

## 8. Conclusiones

1. **Violación Clara de Ley 19.628:**
   - GTD incumplió principio de seguridad (Art. 5)
   - GTD incumplió comunicación de incidente (Art. 13)

2. **Derechos ARCO Disponibles para Afectados:**
   - **Acceso** (obligatorio, 15 días)
   - **Rectificación** (obligatoria, 30 días si datos incorrectos)
   - **Cancelación** (con limitaciones, si datos no son legales)
   - **Oposición** (limitada a ciertos usos)

3. **Responsabilidad Civil de GTD:**
   - Potencial reclamo de $5-50 mil millones por daño moral
   - Demandas colectivas muy probables

4. **Obligaciones de Remediación:**
   - GTD debe comunicar, investigar, mejorar seguridad y compensar
   - Incumplimiento genera multas administrativas + condena judicial

5. **Marco Legal Vigente:**
   - Ley 19.628 seguirá siendo principal protección hasta posible reforma (2024-2025)
   - Jurisprudencia de cortes chilenas define estándares de "medidas razonables" de seguridad
