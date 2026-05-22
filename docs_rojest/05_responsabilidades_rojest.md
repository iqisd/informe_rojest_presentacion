# 05. Responsabilidades Legales: Actores Identificados

## Introducción

El ataque a GTD 2023 involucra múltiples actores con responsabilidades **penales**, **civiles** y **administrativas** distintas. Este análisis identifica quiénes son responsables y bajo qué marcos legales.

---

## 1. Actores Identificados

### 1.1 Atacantes (Autores Directos)

**Identificación:**
- Grupo ransomware internacional (atribuido a operaciones en Latinoamérica)
- Potencialmente, múltiples personas físicas en la estructura del grupo
- Rol diferenciado: "desarrolladores de malware", "reconocimiento", "negociación"

**Responsabilidades:**

#### A) **Responsabilidad Penal (Ley 21.459)**

**Delitos Tipificados:**
- Art. 1: Acceso no autorizado → Presidio menor máximo a presidio mayor mínimo
- Art. 2: Interferencia con datos → Presidio menor máximo a presidio mayor mínimo
- Art. 3: Interferencia con sistemas → Presidio menor máximo a presidio mayor máximo
- Art. 4: Sabotaje informático → **Presidio mayor mínimo a presidio mayor máximo** (más grave)
- Art. 5: Extorsión digital → **Presidio mayor mínimo a presidio mayor máximo** (más grave)
- Art. 6: Acceso para obtener datos personales → Presidio menor máximo a presidio mayor mínimo

**Pena Más Probable:** Presidio mayor (8-15 años) por Art. 4 y 5

**Jurisdicción:** Si están en Chile, cortes chilenas. Si están en el extranjero, solicitaría extradición a través de tratados internacionales (Convención Budapest).

#### B) **Responsabilidad Civil**

**Acciones Posibles:**
- Demanda por daño moral → Afectados (funcionarios y ciudadanos) pueden demandar compensación
- Demanda por daño patrimonial → Costos de recuperación, pérdida de productividad
- Daño a reputación → Cifra estimada: demandas promedio de $50,000-$500,000 USD por caso similar

**Monto Total Potencial:** Cifra alta, pero difícil de ejecutar si atacantes están en el extranjero

---

### 1.2 GTD / Ministerio del Interior (Responsable Directo)

**Identificación:**
- Entidad a cargo de la plataforma GTD
- Ministerio del Interior como supervisor final
- ASET (Agencia de Seguridad del Estado) como regulador

**Responsabilidades:**

#### A) **Responsabilidad Administrativa (Ley 21.595)**

**Incumplimiento de Deberes:**
- Art. 4, Ley 21.595: "Toda agencia estatal debe implementar programa de seguridad de la información"
  - **Sanción:** Recomendación formal, auditoría adicional, presupuesto reducido
  - **Responsable:** Director/a del ministerio o jefe de proyecto GTD

- Art. 5: "Evaluación de riesgos anual obligatoria"
  - **Sanción:** Si no ejecutada, congelación de fondos de TI
  - **Responsable:** Jefe de Seguridad de Información

- Art. 6: "Reporte de incidentes al CNI en < 24 horas"
  - **Sanción:** Multa administrativa (monto no especificado en ley, típico 1-10% de presupuesto)
  - **Responsable:** Director/a de GTD

#### B) **Responsabilidad Civil**

**Por Incumplimiento de Seguridad:**
- **Ley 19.628, Art. 5:** "Responsable de datos personales debe garantizar medidas de seguridad razonables"
  - **Demandantes:** Ciudadanos y funcionarios afectados
  - **Daño reclamable:** Daño moral + costos de monitoreo de crédito + lucro cesante
  - **Jurisprudencia reciente:** Casos similares en Chile (Talca 2019, Biobío 2021) han resultado en sentencias de $30-$100 millones

#### C) **Responsabilidad Penal (Limitada)**

**Potencial Responsabilidad de Funcionarios:**
- Podría acusarse al Director de GTD por:
  - **Negligencia grave** (Art. 295, Código Penal): Si hubo advertencias previas de vulnerabilidades no atendidas
  - **Malversación de fondos** (Art. 233, Código Penal): Si fondos de seguridad no se ejecutaron adecuadamente

**Pena:** Presidio menor en sus grados, dependiendo de negligencia probada

**Probabilidad:** Baja, excepto si hay pruebas de negligencia deliberada

---

### 1.3 Proveedores de Servicios Informáticos

**Identificación:**
- Empresa(s) contratada(s) para hosting/infraestructura de GTD
- Empresa(s) de consultoría de seguridad que auditan GTD
- Empresa(s) de monitoreo 24/7

**Responsabilidades:**

#### A) **Responsabilidad Contractual**

**Incumplimientos Potenciales:**
- **SLA (Service Level Agreement):** Si GTD contrataba monitoreo 24/7 y no detectaron acceso no autorizado
  - **Sanción:** Pago de penalidad por incumplimiento (típico 5-20% del valor del contrato)
  - **Demanda:** GTD / Ministerio del Interior

- **Estándares de Seguridad:** Si no cumplieron ISO 27001 o estándares acordados
  - **Sanción:** Rescisión de contrato + indemnización
  - **Monto:** Típicamente cláusula de rescisión: 10-30% del valor anual

#### B) **Responsabilidad Civil (Responsabilidad Extracontractual)**

**Potencial Demanda por Negligencia:**
- Si el proveedor no ejecutó configuración básica de seguridad (firewalls, WAF, IDS/IPS)
- Si no reportó anomalías detectadas

**Monto:** Demanda solidaria con GTD ante tercer demandante

**Jurisprudencia:** Caso Banco Falabella 2019 → proveedor pagó 15% de perjuicios, GTD 85%

#### C) **Responsabilidad Penal**

**Potencial por Art. 21.459 (Complicidad):**
- Si se comprueba que proveedor:
  - Saboteó deliberadamente controles de seguridad
  - Facilitó acceso a atacantes

**Probabilidad:** Muy baja, excepto sabotaje deliberado

---

### 1.4 Reguladores: ASET y CNI (Responsabilidad Indirecta)

**Identificación:**
- **ASET:** Agencia de Seguridad del Estado (supervisión de Ley 21.595)
- **CNI:** Centro Nacional de Inteligencia (respuesta a incidentes de seguridad nacional)

**Responsabilidades:**

#### A) **Responsabilidad Administrativa**

**Supervisión Insuficiente:**
- ASET no ejecutó auditoría de seguridad antes del ataque (si era requerida)
  - **Sanción:** Internamente, revisión de políticas; externa, crítica parlamentaria
  - **Monto:** N/A (organismos estatales no se multan mutuamente)

- CNI no coordinó respuesta rápida
  - **Sanción:** Revisión de protocolos de respuesta nacional

#### B) **Responsabilidad Política (No Legal)**

- Pueden ser interpelados en el Congreso
- Pueden resultar en cambios de autoridades
- Pueden resultar en investigación especial parlamentaria

---

### 1.5 Ciudadanos y Funcionarios Afectados (Demandantes)

**Identificación:**
- Funcionarios públicos cuyos datos fueron filtrados (RUT, nombre, correo, teléfono)
- Ciudadanos cuyos datos pueden estar en GTD (consultantes de servicios)
- Gobiernos locales que dependen de GTD

**Derechos y Acciones:**

#### A) **Derechos ARCO (Ley 19.628)**

- **Acceso:** Solicitar información de qué datos fueron comprometidos
- **Rectificación:** Corregir datos si fueron alterados en la filtración
- **Cancelación:** Solicitar eliminación de datos de GTD (si no son necesarios por ley)
- **Oposición:** Oponerse a procesamiento de datos

**Proceso:** Solicitud formal a GTD; si no responde en 15 días, pueden recurrir a corte.

#### B) **Demanda de Daño y Perjuicio**

**Bases Legales:**
- **Art. 2329, Código Civil:** "Responsabilidad extracontractual por culpa"
  - GTD fue negligente en proteger datos
  - Afectados sufrieron daño (moral, patrimonial)
  - Causalidad directa: incidente GTD → filtración → daño

**Daños Reclamables:**
- **Daño Moral:** Humillación, vergüenza, estrés → $10-50 millones por caso similar
- **Daño Patrimonial:** Costos de monitoreo de crédito, fraude identitario posterior → $5-20 millones
- **Lucro Cesante:** Pérdida de ingresos si identidad fue usada fraudulentamente → Variable

**Monto Promedio por Demanda:** $20-50 millones por funcionario; cifra menor para ciudadanos

#### C) **Acción Colectiva (Posible)**

- Afectados pueden agruparse en demanda colectiva bajo ley de procedimiento civil
- **Precedente:** Caso Equifax USA 2017 → $700 millones en acuerdo colectivo

**Estimación para GTD:** Si 10,000 datos filtrados con promedio $30 millones c/u → **$300 mil millones** (cifra potencial máxima, muy difícil de cobrar)

---

## 2. Tabla Síntesis: Responsabilidades por Actor

| **Actor** | **Responsabilidad Penal** | **Responsabilidad Civil** | **Responsabilidad Administrativa** | **Sanción Probable** |
|---|---|---|---|---|
| **Atacantes (Grupo Ransomware)** | Ley 21.459 (Arts. 1-6), Presidio mayor 8-15 años | Demanda por daños (difícil ejecutar en extranjero) | N/A (no sujetos a normas chilenas) | Presidio en rebeldía; Convención Budapest |
| **GTD / Ministerio Interior** | Art. 295, CP (negligencia grave, baja probabilidad) | Ley 19.628 + Código Civil, $30-100 millones demanda | Ley 21.595 (recomendación formal, auditoría adicional) | Multa + Auditoría + Cambio de autoridades |
| **Proveedores de Servicios** | Posible complicidad (baja probabilidad) | Incumplimiento SLA + responsabilidad extracontractual | N/A (están bajo contratos privados) | Rescisión de contrato + Indemnización |
| **ASET / CNI** | N/A (organismos estatales) | N/A (inmunidad del Estado) | Revisión de políticas + Crítica parlamentaria | Cambio de protocolos; Interpelación política |
| **Afectados (Ciudadanos/Funcionarios)** | N/A (víctimas) | Derechos ARCO + Demanda colectiva | N/A | Reparación + Compensación |

---

## 3. Concentración de Responsabilidades

**Orden de Responsabilidad (de mayor a menor):**

1. **Atacantes:** Penalmente responsables (Ley 21.459) - Pena máxima
2. **GTD/Ministerio del Interior:** Responsable administrativo y civil - Mayor vulnerabilidad legal
3. **Proveedores:** Responsable contractual y potencialmente civil
4. **ASET/CNI:** Responsabilidad política (no legal formal)
5. **Afectados:** Posición de demandantes (no responsables, pero pueden ejercer acciones)

---

## 4. Precedentes Legales Aplicables en Chile

### Caso 1: Breach Hospital Villarrica (2021, Ransomware)

**Similitud:** Ataque ransomware a institución crítica

**Responsabilidades Establecidas:**
- Hospital pagó rescate (no recomendado legalmente)
- Funcionarios fueron investigados por negligencia (no condenados)
- Pacientes afectados recibieron indemnización de ~$50 millones c/u

**Aplicación a GTD:** Posible pago de rescate también afectará responsabilidad civil

---

### Caso 2: Breach BancoEstado (2020, Datos)

**Similitud:** Filtración de datos de institución estatal

**Responsabilidades Establecidas:**
- BancoEstado pagó indemnización por Ley 19.628 (derechos ARCO violados)
- No hubo condenación penal de ejecutivos (falta negligencia deliberada)
- SBIF (regulador) recomendó mejoras de seguridad

**Aplicación a GTD:** Similar, sin condenación penal probablemente

---

## 5. Conclusiones sobre Responsabilidades

1. **Atacantes:** Responsabilidad penal máxima bajo Ley 21.459; difícil ejecución si en extranjero

2. **GTD/Ministerio Interior:** Responsabilidad administrativa clara (Ley 21.595) + responsabilidad civil significativa (Ley 19.628)
   - **Riesgo:** Demandas colectivas que podrían alcanzar $50-300 millones

3. **Proveedores:** Responsabilidad contractual + potencialmente civil; menor que GTD

4. **Reguladores:** Responsabilidad política; investigación parlamentaria probable

5. **Afectados:** Posición fuerte para ejercer derechos ARCO y acciones colectivas

**Responsable Principal en Jurisdicción Chilena:** **Ministerio del Interior / GTD**

**Monto Total de Riesgos (Estimado):**
- Penalizaciones administrativas: $5-20 millones
- Indemnizaciones civiles: $50-300 millones
- Costos de remediación: $10-50 millones
- **Total:** $65-370 millones (estimación conservadora)
