# 03. Tipificación de Delitos: Ataque GTD 2023 según Ley 21.459

## Introducción

La Ley 21.459 tipifica delitos informáticos en Chile. A continuación se mapean las acciones del atacante en el incidente GTD 2023 a los artículos específicos de esta ley, asumiendo que los hechos ocurrieron bajo jurisdicción chilena.

---

## 1. Reconstrucción de Acciones del Atacante

### Fase 1: Reconocimiento y Acceso Inicial
- Identificación de vulnerabilidades en GTD
- Obtención de credenciales (phishing, explotación, fuerza bruta)
- Acceso inicial a sistemas periféricos

### Fase 2: Movimiento Lateral
- Escalada de privilegios
- Acceso a sistemas core de GTD
- Acceso a bases de datos con información personal

### Fase 3: Exfiltración de Datos
- Descarga de datos sensibles (funcionarios, ciudadanos)
- Preparación de evidencia para demanda de rescate

### Fase 4: Despliegue de Ransomware
- Instalación de malware de cifrado
- Cifrado de datos y sistemas críticos
- Comunicación de demanda de rescate

### Fase 5: Extorsión
- Envío de demanda de rescate
- Amenaza de publicación de datos filtrados
- Negociación (posiblemente)

---

## 2. Tipificación según Ley 21.459

### 2.1 Artículo 1 - Acceso No Autorizado a Sistemas de Información

**Texto de la Ley:**
> "El que sin autorización acceda a un sistema de información o a parte del mismo, será castigado con pena de presidio menor en su grado máximo a presidio mayor en su grado mínimo."

**Hechos que Califican:**
1. **Acceso inicial a sistemas GTD** sin autorización
2. **Movimiento lateral** dentro de la infraestructura
3. **Acceso a bases de datos** que contienen información personal

**Aplicación al caso GTD:**
- Los atacantes accedieron sin autorización a servidores GTD
- Pasaron de sistemas periféricos a sistemas core
- Accedieron a bases de datos de funcionarios y ciudadanos
- **Pena aplicable:** Presidio menor en grado máximo a presidio mayor en grado mínimo (Art. 1, Ley 21.459)

**Número de actos:** Múltiples (acceso a diferentes sistemas = múltiples delitos)

---

### 2.2 Artículo 2 - Interferencia con Datos

**Texto de la Ley:**
> "El que, sin autorización, altere, dañe, destruya, suprima o modifique datos o información contenida en un sistema de información, será castigado con pena de presidio menor en su grado máximo a presidio mayor en su grado mínimo."

**Hechos que Califican:**
1. **Cifrado de datos** mediante ransomware (modificación que impide acceso)
2. **Alteración de integridad** de sistemas
3. **Destrucción funcional** de disponibilidad de datos

**Aplicación al caso GTD:**
- El ransomware cifró datos, haciéndolos inaccesibles (modificación)
- Esto constituye interferencia con datos bajo Art. 2
- El atacante no autorizado alteró la disponibilidad de información
- **Pena aplicable:** Misma que Art. 1 (presidio menor a presidio mayor)

---

### 2.3 Artículo 3 - Interferencia con Sistemas

**Texto de la Ley:**
> "El que, sin autorización, interfiera, cause daño, interrumpa o impida el funcionamiento de un sistema de información o de telecomunicaciones, será castigado con pena de presidio menor en su grado máximo a presidio mayor en su grado máximo."

**Hechos que Califican:**
1. **Interrupción de servicios** de GTD
2. **Daño a funcionamiento** de plataforma
3. **Impedir acceso** a usuarios legítimos (gobiernos locales, ciudadanos)

**Aplicación al caso GTD:**
- El ataque paralizó GTD, interrumpiendo servicios críticos
- Gobiernos locales no pudieron acceder a la plataforma
- El ransomware impidió el funcionamiento normal
- **Pena aplicable:** Presidio menor en grado máximo a presidio mayor en grado máximo (pena más severa que Art. 1-2)

---

### 2.4 Artículo 4 - Sabotaje Informático

**Texto de la Ley:**
> "El que, sin autorización, cause daño grave a un sistema de información o telecomunicaciones, particularmente a infraestructura crítica, será castigado con pena de presidio mayor en su grado mínimo a presidio mayor en su grado máximo."

**Hechos que Califican:**
1. **Daño grave** a infraestructura estatal
2. **Afectación a servicios esenciales** (gestión territorial)
3. **Compromiso de infraestructura crítica** del Estado

**Aplicación al caso GTD:**
- GTD es infraestructura crítica estatal
- El ataque causó daño grave (parálisis de servicios)
- La interrupción afectó múltiples gobiernos locales
- **Pena aplicable:** Presidio mayor en grado mínimo a presidio mayor en grado máximo (pena más severa)
- **Este es potencialmente el delito más grave del caso**

---

### 2.5 Artículo 5 - Extorsión Digital

**Texto de la Ley:**
> "El que, mediante la amenaza de causar daño informático o divulgación de información obtenida ilegalmente, coaccione a una persona para obtener beneficio económico o patrimonial, será castigado con pena de presidio mayor en su grado mínimo a presidio mayor en su grado máximo."

**Hechos que Califican:**
1. **Demanda de rescate** con cifrado de datos
2. **Amenaza de publicación** de datos filtrados
3. **Coerción económica** para obtener pago

**Aplicación al caso GTD:**
- Atacantes pidieron rescate bajo amenaza de:
  - Mantener datos cifrados
  - Publicar datos filtrados de funcionarios/ciudadanos
- Esta es extorsión digital clara bajo Art. 5
- **Pena aplicable:** Presidio mayor en grado mínimo a presidio mayor en grado máximo

---

### 2.6 Artículo 6 - Acceso para Obtener Datos Personales

**Texto de la Ley:**
> "El que, sin autorización, acceda a un sistema de información con el propósito específico de obtener datos personales, será castigado con pena de presidio menor en grado máximo a presidio mayor en grado mínimo."

**Hechos que Califican:**
1. **Acceso deliberado** a bases de datos de funcionarios
2. **Acceso deliberado** a datos de ciudadanos
3. **Intención evidente** de extraer datos personales

**Aplicación al caso GTD:**
- Atacantes accedieron específicamente a bases de datos
- Extrajeron información personal (RUTs, nombres, correos, etc.)
- La exfiltración fue selectiva y deliberada
- **Pena aplicable:** Presidio menor en grado máximo a presidio mayor en grado mínimo (Art. 6)

---

## 3. Tabla Resumen de Delitos

| Artículo | Delito | Acciones del Atacante | Pena |
|---|---|---|---|
| **Art. 1** | Acceso no autorizado | Acceso a sistemas GTD sin credenciales válidas | Presidio menor máx. a presidio mayor mín. |
| **Art. 2** | Interferencia con datos | Cifrado mediante ransomware | Presidio menor máx. a presidio mayor mín. |
| **Art. 3** | Interferencia con sistemas | Paralización de GTD, interrupción de servicios | Presidio menor máx. a presidio mayor máx. |
| **Art. 4** | Sabotaje informático | Daño grave a infraestructura crítica estatal | Presidio mayor mín. a presidio mayor máx. |
| **Art. 5** | Extorsión digital | Demanda de rescate + amenaza de publicación | Presidio mayor mín. a presidio mayor máx. |
| **Art. 6** | Acceso para datos personales | Exfiltración de información personal | Presidio menor máx. a presidio mayor mín. |

---

## 4. Concurrencia de Delitos

**Importante:** Un solo atacante cometió **múltiples delitos concurrentes** en una misma operación:

- **Delitos principales:** Art. 4 (sabotaje) y Art. 5 (extorsión)
- **Delitos conexos:** Art. 1, 2, 3, 6 (acceso, interferencia, datos personales)

Bajo la ley chilena, estos se procesarían como concurso de delitos, agravando la pena según criterios de sentencia.

---

## 5. Elementos de Imputabilidad

Para condenar bajo Ley 21.459, el fiscal debe probar:

1. **Conocimiento:** El atacante sabía que accedía sin autorización
2. **Voluntariedad:** Actúo deliberadamente (no por accidente)
3. **Dolo directo:** Tenía intención de interferi, extraer o extorsionar
4. **Nexo causal:** Sus acciones causaron el daño específico

---

## 6. Circunstancias Agravantes Potenciales

- **Infraestructura crítica:** Art. 4 menciona específicamente infraestructura crítica
- **Datos sensibles:** Información de funcionarios del Estado
- **Escala:** Afectación a múltiples gobiernos locales
- **Violación de seguridad nacional:** Potencialmente bajo Ley 18.314 (terrorismo cibernético)

---

## Conclusión

El ataque a GTD 2023 constituye un claro caso de **concurso de delitos informáticos** bajo la Ley 21.459, siendo los más graves:
- **Art. 4** (Sabotaje informático a infraestructura crítica)
- **Art. 5** (Extorsión digital)

Ambos delitos son susceptibles de penas de presidio mayor, reflejando la gravedad del incidente en la seguridad e infraestructura del Estado chileno.
