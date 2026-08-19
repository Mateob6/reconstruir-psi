export interface GlossaryEntry {
  sigla?: string
  nombre: string
  definicion: string
}

export const glossary: Record<string, GlossaryEntry> = {
  // ── Siglas institucionales ──
  'oms': {
    sigla: 'OMS',
    nombre: 'Organización Mundial de la Salud',
    definicion: 'Agencia de las Naciones Unidas responsable de la salud pública mundial.',
  },
  'ops': {
    sigla: 'OPS',
    nombre: 'Organización Panamericana de la Salud',
    definicion: 'Oficina regional de la OMS para las Américas.',
  },
  'unicef': {
    sigla: 'UNICEF',
    nombre: 'Fondo de las Naciones Unidas para la Infancia',
    definicion: 'Agencia de la ONU dedicada a la protección de los derechos de niños y adolescentes.',
  },
  'unesco': {
    sigla: 'UNESCO',
    nombre: 'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura',
    definicion: 'Agencia de la ONU que promueve la educación, la ciencia y la cultura a nivel mundial.',
  },
  'iasc': {
    sigla: 'IASC',
    nombre: 'Comité Permanente entre Organismos',
    definicion: 'Mecanismo de coordinación humanitaria de la ONU que establece directrices para la atención en emergencias.',
  },
  'inee': {
    sigla: 'INEE',
    nombre: 'Red Interinstitucional para la Educación en Situaciones de Emergencia',
    definicion: 'Red global que establece estándares mínimos para la educación en contextos de crisis.',
  },
  'acnur': {
    sigla: 'ACNUR',
    nombre: 'Agencia de la ONU para los Refugiados',
    definicion: 'Organismo de las Naciones Unidas encargado de proteger a personas desplazadas y refugiadas.',
  },
  'ungei': {
    sigla: 'UNGEI',
    nombre: 'Iniciativa de las Naciones Unidas para la Educación de las Niñas',
    definicion: 'Alianza global para promover la igualdad de género en la educación.',
  },
  'men': {
    sigla: 'MEN',
    nombre: 'Ministerio de Educación Nacional',
    definicion: 'Entidad del gobierno colombiano responsable de las políticas educativas del país.',
  },
  'minsalud': {
    sigla: 'MinSalud',
    nombre: 'Ministerio de Salud y Protección Social',
    definicion: 'Entidad del gobierno colombiano encargada de las políticas de salud pública.',
  },
  'icbf': {
    sigla: 'ICBF',
    nombre: 'Instituto Colombiano de Bienestar Familiar',
    definicion: 'Entidad que protege los derechos de niños, niñas, adolescentes y familias en Colombia.',
  },
  'ungrd': {
    sigla: 'UNGRD',
    nombre: 'Unidad Nacional para la Gestión del Riesgo de Desastres',
    definicion: 'Entidad colombiana encargada de coordinar la prevención y respuesta ante desastres.',
  },
  'aewg': {
    sigla: 'AEWG',
    nombre: 'Grupo de Trabajo de Educación Acelerada',
    definicion: 'Grupo de trabajo de ACNUR que desarrolla programas para que niños fuera del sistema escolar recuperen años de estudio.',
  },

  // ── Marcos y frameworks ──
  'cssf': {
    sigla: 'CSSF',
    nombre: 'Marco Integral de Seguridad Escolar',
    definicion: 'Directrices internacionales que integran la protección física, la gestión del riesgo y la continuidad educativa en las escuelas.',
  },
  'rapid': {
    sigla: 'RAPID',
    nombre: 'Marco RAPID del Banco Mundial',
    definicion: 'Plan de recuperación educativa en 5 pasos: alcanzar a todos los niños, evaluar niveles de aprendizaje, priorizar lo fundamental, incrementar la eficiencia de la instrucción, y desarrollar bienestar psicosocial.',
  },
  'gire': {
    sigla: 'GIRE',
    nombre: 'Gestión Integral del Riesgo Escolar',
    definicion: 'Lineamiento del Ministerio de Educación de Colombia para que cada escuela tenga un plan de prevención y respuesta ante emergencias.',
  },
  'pegr': {
    sigla: 'PEGR',
    nombre: 'Plan Escolar de Gestión del Riesgo',
    definicion: 'Documento obligatorio que cada institución educativa elabora para prepararse y responder ante emergencias.',
  },
  'pgire': {
    sigla: 'PGIRE',
    nombre: 'Plan de Gestión Integral del Riesgo Escolar',
    definicion: 'Versión ampliada del plan escolar de emergencias que incluye simulacros, rutas de evacuación y protocolos de atención.',
  },
  'piramide-iasc': {
    nombre: 'Pirámide IASC',
    definicion: 'Modelo de 4 niveles de apoyo psicosocial: desde servicios básicos para todos, hasta atención clínica especializada para quienes más lo necesitan.',
  },
  'modelo-escalonado': {
    nombre: 'Modelo escalonado de atención',
    definicion: 'Sistema que organiza el apoyo en niveles: primero se atiende a todos con actividades generales, y gradualmente se ofrecen servicios más intensivos a quienes los necesitan.',
  },
  'marco-sendai': {
    nombre: 'Marco de Sendai',
    definicion: 'Acuerdo internacional (2015-2030) que establece metas y prioridades para reducir el riesgo de desastres a nivel mundial.',
  },
  'bbb': {
    sigla: 'BBB',
    nombre: 'Build Back Better (Reconstruir Mejor)',
    definicion: 'Principio que propone que la reconstrucción tras un desastre debe mejorar las condiciones previas, no solo restaurarlas.',
  },

  // ── Términos clínicos ──
  'tept': {
    sigla: 'TEPT',
    nombre: 'Trastorno de Estrés Postraumático',
    definicion: 'Reacciones intensas de miedo, pesadillas o evitación que persisten semanas después de un evento traumático y afectan la vida cotidiana.',
  },
  'tdah': {
    sigla: 'TDAH',
    nombre: 'Trastorno por Déficit de Atención e Hiperactividad',
    definicion: 'Condición que dificulta mantener la atención, controlar impulsos y regular el nivel de actividad.',
  },
  'pap': {
    sigla: 'PAP',
    nombre: 'Primeros Auxilios Psicológicos',
    definicion: 'Conjunto de técnicas de primera respuesta emocional que buscan reducir el malestar, fortalecer la capacidad de afrontamiento y conectar con redes de apoyo.',
  },
  'debriefing': {
    sigla: 'debriefing',
    nombre: 'Debriefing psicológico',
    definicion: 'Sesión estructurada en la que se pide a las personas relatar su experiencia traumática poco después del evento. La evidencia actual desaconseja su uso obligatorio.',
  },
  'tamizaje': {
    nombre: 'Tamizaje (screening)',
    definicion: 'Evaluación rápida que permite identificar a las personas que podrían necesitar atención especializada después de un evento traumático.',
  },
  'quejas-somaticas': {
    nombre: 'Quejas somáticas',
    definicion: 'Dolores físicos (de cabeza, estómago, cuerpo) que aparecen como expresión de malestar emocional, sin una causa médica identificable.',
  },
  'regresion': {
    nombre: 'Regresión',
    definicion: 'Reaparición temporal de comportamientos de una etapa anterior del desarrollo, como mojar la cama o hablar como un niño más pequeño, frecuente tras eventos estresantes.',
  },
  're-escenificacion': {
    nombre: 'Re-escenificación',
    definicion: 'Repetición del evento traumático a través del juego, el dibujo u otras actividades, como forma natural de procesamiento en niños.',
  },
  'ideacion-suicida': {
    nombre: 'Ideación suicida',
    definicion: 'Pensamientos recurrentes sobre hacerse daño o quitarse la vida. Requiere atención profesional inmediata.',
  },
  'regulacion-emocional': {
    nombre: 'Regulación emocional',
    definicion: 'Capacidad de reconocer, manejar y expresar las emociones de manera constructiva.',
  },
  'psicoeducacion': {
    nombre: 'Psicoeducación',
    definicion: 'Enseñar a las personas qué reacciones son normales después de un evento traumático y qué pueden hacer para sentirse mejor.',
  },
  'recuerdos-intrusivos': {
    nombre: 'Recuerdos intrusivos',
    definicion: 'Imágenes, sonidos o sensaciones del evento traumático que aparecen de forma involuntaria y causan malestar.',
  },
  'activacion': {
    nombre: 'Activación fisiológica',
    definicion: 'Estado de alerta excesiva del cuerpo tras un evento traumático: corazón acelerado, tensión muscular, dificultad para dormir.',
  },
  'evitacion': {
    nombre: 'Evitación',
    definicion: 'Tendencia a alejarse de lugares, personas o situaciones que recuerdan el evento traumático.',
  },
  'trastornos-ajuste': {
    nombre: 'Trastornos de ajuste',
    definicion: 'Dificultades emocionales o de comportamiento que aparecen como respuesta a un cambio significativo o situación estresante.',
  },
  'mentalizacion': {
    nombre: 'Mentalización',
    definicion: 'Capacidad de entender que tanto uno mismo como los demás tienen pensamientos, emociones e intenciones que guían el comportamiento.',
  },
  'estimulacion-bilateral': {
    nombre: 'Estimulación bilateral',
    definicion: 'Técnica terapéutica que usa movimientos alternados (oculares, táctiles o auditivos) para ayudar al cerebro a procesar recuerdos traumáticos.',
  },
  'reestructuracion-cognitiva': {
    nombre: 'Reestructuración cognitiva',
    definicion: 'Técnica que ayuda a identificar y cuestionar pensamientos negativos o distorsionados para reemplazarlos por otros más realistas.',
  },
  'dosis-terapeutica': {
    nombre: 'Dosis terapéutica',
    definicion: 'Número mínimo de sesiones necesarias para que una intervención psicológica produzca beneficios medibles.',
  },
  'trayectorias-recuperacion': {
    nombre: 'Trayectorias de recuperación',
    definicion: 'Distintos caminos que siguen las personas tras un evento traumático: la mayoría se recupera naturalmente, algunos desarrollan síntomas persistentes, y otros mejoran inicialmente pero empeoran después.',
  },
  'adherencia': {
    nombre: 'Adherencia',
    definicion: 'Grado en que los participantes completan un programa o tratamiento según lo planeado.',
  },
  'conductas-riesgo': {
    nombre: 'Conductas de riesgo',
    definicion: 'Comportamientos que ponen en peligro la salud o la integridad, como el consumo de sustancias o la autolesión, que pueden aumentar tras un trauma.',
  },
  'nna': {
    sigla: 'NNA',
    nombre: 'Niños, Niñas y Adolescentes',
    definicion: 'Término legal y técnico que se refiere a todas las personas menores de 18 años.',
  },
  'patologia-traumatica': {
    nombre: 'Patología traumática',
    definicion: 'Enfermedad o trastorno causado directamente por una experiencia traumática.',
  },

  // ── Términos estadísticos ──
  'meta-analisis': {
    nombre: 'Meta-análisis',
    definicion: 'Método de investigación que combina los resultados de múltiples estudios para obtener una conclusión más sólida sobre si algo funciona o no.',
  },
  'tamano-efecto': {
    nombre: 'Tamaño de efecto',
    definicion: 'Medida numérica de qué tanto funciona una intervención. Valores pequeños (~0.2) indican un efecto leve, medianos (~0.5) moderado y grandes (~0.8) fuerte.',
  },
  'smd': {
    sigla: 'SMD',
    nombre: 'Diferencia de Medias Estandarizada',
    definicion: 'Forma de medir qué tan grande es la diferencia entre dos grupos (tratamiento vs. control) en una escala comparable entre estudios.',
  },
  'sucra': {
    sigla: 'SUCRA',
    nombre: 'Área Bajo la Curva de Clasificación Acumulada',
    definicion: 'Estadístico que clasifica y compara varias terapias simultáneamente. Un valor más alto indica mayor probabilidad de ser el mejor tratamiento.',
  },
  'moderador': {
    nombre: 'Moderador',
    definicion: 'Factor que influye en cuánto funciona una intervención. Por ejemplo, la edad de los participantes o el tiempo transcurrido desde el evento.',
  },
  'eca': {
    sigla: 'ECA',
    nombre: 'Ensayo Controlado Aleatorizado',
    definicion: 'Tipo de estudio experimental donde los participantes se asignan al azar a un grupo de tratamiento o de comparación, considerado el estándar de oro en investigación.',
  },
  'meta-analisis-red': {
    nombre: 'Meta-análisis en red',
    definicion: 'Técnica avanzada que permite comparar múltiples tratamientos entre sí simultáneamente, incluso cuando no se han comparado directamente en un mismo estudio.',
  },
  'revisiones-sistematicas': {
    nombre: 'Revisiones sistemáticas',
    definicion: 'Estudios que recopilan y analizan toda la investigación disponible sobre un tema, siguiendo un método riguroso y transparente.',
  },
  'longitudinal': {
    nombre: 'Estudio longitudinal',
    definicion: 'Investigación que sigue a las mismas personas durante un período prolongado para observar cómo cambian con el tiempo.',
  },
  'pre-post': {
    nombre: 'Diseño pre-post',
    definicion: 'Tipo de estudio que compara las mediciones de los participantes antes y después de una intervención.',
  },
  'heterogeneidad': {
    nombre: 'Heterogeneidad (I²)',
    definicion: 'Grado en que los resultados de distintos estudios difieren entre sí. Un I² alto indica que los estudios muestran resultados muy variados.',
  },

  // ── Programas e intervenciones ──
  'trt': {
    sigla: 'TRT',
    nombre: 'Teaching Recovery Techniques',
    definicion: 'Programa grupal de 5 sesiones para niños y adolescentes que enseña técnicas prácticas para manejar reacciones al estrés traumático.',
  },
  'cbi': {
    sigla: 'CBI',
    nombre: 'Classroom-Based Intervention',
    definicion: 'Programa de 8 sesiones grupales que se aplica dentro del aula para ayudar a los estudiantes a procesar experiencias difíciles.',
  },
  'cbits': {
    sigla: 'CBITS',
    nombre: 'Cognitive Behavioral Intervention for Trauma in Schools',
    definicion: 'Programa de 10 sesiones diseñado por UCLA/RAND para tratar síntomas de trauma en el entorno escolar.',
  },
  'erase-stress': {
    nombre: 'ERASE-Stress',
    definicion: 'Programa escolar que combina técnicas corporales, narrativas y artísticas para reducir el estrés postraumático en niños y adolescentes.',
  },
  'solar': {
    nombre: 'SOLAR',
    definicion: 'Programa breve de apoyo que combina tamizaje rápido con intervención temprana para adolescentes expuestos a eventos traumáticos.',
  },
  'emdr': {
    sigla: 'EMDR',
    nombre: 'Desensibilización y Reprocesamiento por Movimientos Oculares',
    definicion: 'Terapia que utiliza movimientos oculares guiados para ayudar al cerebro a procesar y reducir el impacto de recuerdos traumáticos.',
  },
  'tf-cbt': {
    sigla: 'TF-CBT',
    nombre: 'Terapia Cognitivo-Conductual Focalizada en Trauma',
    definicion: 'Terapia estructurada que ayuda a niños y adolescentes a procesar el trauma, manejar emociones difíciles y desarrollar habilidades de afrontamiento.',
  },
  'tcc': {
    sigla: 'TCC',
    nombre: 'Terapia Cognitivo-Conductual',
    definicion: 'Enfoque terapéutico que trabaja sobre los pensamientos y comportamientos para reducir el malestar emocional.',
  },
  'net': {
    sigla: 'NET / KIDNET',
    nombre: 'Terapia Narrativa de Exposición',
    definicion: 'Terapia breve en la que la persona reconstruye su historia de vida, integrando los eventos traumáticos en una narrativa coherente.',
  },
  'cprt': {
    sigla: 'CPRT',
    nombre: 'Terapia de Relación Padre-Hijo',
    definicion: 'Programa que entrena a padres y cuidadores en técnicas de juego terapéutico para fortalecer el vínculo y apoyar la recuperación emocional de los niños.',
  },
  'sel': {
    sigla: 'SEL',
    nombre: 'Aprendizaje Socioemocional',
    definicion: 'Conjunto de actividades educativas que desarrollan habilidades para manejar emociones, establecer relaciones positivas y tomar decisiones responsables.',
  },
  'journey-of-hope': {
    nombre: 'Journey of Hope',
    definicion: 'Programa de Save the Children que utiliza actividades lúdicas y artísticas para apoyar la recuperación emocional de niños después de desastres.',
  },
  'papsivi': {
    sigla: 'PAPSIVI',
    nombre: 'Programa de Atención Psicosocial y Salud Integral a Víctimas',
    definicion: 'Programa del gobierno colombiano que brinda atención psicosocial a víctimas del conflicto armado, adaptable a contextos de desastre.',
  },
  'tls': {
    sigla: 'TLS',
    nombre: 'Espacios Temporales de Aprendizaje',
    definicion: 'Aulas provisionales que se instalan rápidamente después de un desastre para que los niños puedan continuar sus estudios mientras se reconstruyen las escuelas.',
  },

  // ── Instrumentos de evaluación ──
  'cries': {
    sigla: 'CRIES',
    nombre: "Children's Revised Impact of Event Scale",
    definicion: 'Cuestionario breve que evalúa el impacto emocional de un evento traumático en niños y adolescentes.',
  },
  'cpss': {
    sigla: 'CPSS',
    nombre: 'Child PTSD Symptom Scale',
    definicion: 'Escala que mide los síntomas de estrés postraumático en niños, útil para identificar quiénes necesitan apoyo adicional.',
  },
  'ucla-ptsd-ri': {
    nombre: 'UCLA PTSD Reaction Index',
    definicion: 'Entrevista clínica estructurada de la Universidad de California para evaluar la severidad del trauma en niños y adolescentes.',
  },
  'dsm': {
    sigla: 'DSM',
    nombre: 'Manual Diagnóstico y Estadístico de los Trastornos Mentales',
    definicion: 'Clasificación internacional de referencia que define los criterios para diagnosticar trastornos de salud mental.',
  },

  // ── Términos pedagógicos ──
  'evaluacion-formativa': {
    nombre: 'Evaluación formativa',
    definicion: 'Evaluación continua cuyo propósito es identificar qué necesita mejorar el estudiante para orientar la enseñanza, no para calificar.',
  },
  'evaluacion-sumativa': {
    nombre: 'Evaluación sumativa',
    definicion: 'Evaluación que mide el aprendizaje alcanzado al final de un período, usualmente con una calificación.',
  },
  'instruccion-diferenciada': {
    nombre: 'Instrucción diferenciada',
    definicion: 'Enseñanza que se adapta al nivel, ritmo e intereses de cada estudiante en lugar de dar la misma lección a todos.',
  },
  'pedagogia-estructurada': {
    nombre: 'Pedagogía estructurada',
    definicion: 'Enfoque de enseñanza organizado paso a paso con materiales definidos y guías para el docente, especialmente útil cuando las condiciones son difíciles.',
  },
  'tutoria-alta-dosis': {
    nombre: 'Tutoría de alta dosis',
    definicion: 'Refuerzo académico intensivo en grupos pequeños (3-5 estudiantes), varias veces por semana, que ha mostrado ser una de las estrategias más efectivas para recuperar aprendizajes.',
  },
  'aser': {
    sigla: 'ASER',
    nombre: 'Evaluación tipo ASER',
    definicion: 'Evaluación rápida e individual de lectura y matemáticas básicas que permite conocer el nivel real de cada estudiante en pocos minutos.',
  },
  'promocion-condicional': {
    nombre: 'Promoción condicional automática',
    definicion: 'Política que permite al estudiante avanzar al siguiente grado con el compromiso de nivelar las áreas pendientes durante el año siguiente.',
  },
  'pta': {
    sigla: 'PTA',
    nombre: 'Programa Todos a Aprender',
    definicion: 'Programa del MEN que envía tutores a las escuelas para acompañar a los docentes y mejorar las prácticas de enseñanza.',
  },

  // ── Normativa ──
  'resolucion-006519': {
    nombre: 'Resolución 006519',
    definicion: 'Norma del Ministerio de Educación que establece los lineamientos para que cada escuela elabore su plan de gestión del riesgo.',
  },
  'ley-1523': {
    nombre: 'Ley 1523 de 2012',
    definicion: 'Ley colombiana que establece la política nacional de gestión del riesgo de desastres y define las responsabilidades de cada nivel de gobierno.',
  },

  // ── Otros ──
  'retrofit': {
    nombre: 'Retrofit (reforzamiento estructural)',
    definicion: 'Obras de ingeniería que refuerzan un edificio existente para hacerlo más resistente a terremotos.',
  },
  'riesgo-no-estructural': {
    nombre: 'Riesgo no estructural',
    definicion: 'Peligro generado no por el colapso del edificio, sino por la caída de objetos como estantes, equipos o elementos del techo durante un sismo.',
  },
  'wash': {
    sigla: 'WASH',
    nombre: 'Agua, Saneamiento e Higiene',
    definicion: 'Servicios esenciales de agua potable, saneamiento y condiciones higiénicas, especialmente críticos en escuelas después de un desastre.',
  },
  'cognitivo-conductuales': {
    nombre: 'Intervenciones cognitivo-conductuales',
    definicion: 'Técnicas basadas en la relación entre pensamientos, emociones y comportamientos, que enseñan a identificar y modificar patrones que generan malestar.',
  },
  'respuesta-psicosocial': {
    nombre: 'Respuesta psicosocial',
    definicion: 'Conjunto de acciones que brindan apoyo emocional, social y comunitario a las personas afectadas por una emergencia.',
  },
  'patologizar': {
    nombre: 'Patologizar',
    definicion: 'Tratar como enfermedad o trastorno lo que en realidad es una reacción normal ante una situación anormal.',
  },
  'factores-protectores': {
    nombre: 'Factores protectores',
    definicion: 'Condiciones del entorno (rutinas, vínculos, apoyo social) que favorecen la recuperación natural y reducen el riesgo de desarrollar problemas de salud mental.',
  },
  'elaboracion-trauma': {
    nombre: 'Elaboración del trauma',
    definicion: 'Proceso gradual mediante el cual una persona integra la experiencia traumática en su historia de vida, reduciéndose el malestar asociado.',
  },
  'intervencion-crisis': {
    nombre: 'Intervención en crisis',
    definicion: 'Atención psicológica de urgencia para personas en estado de descompensación emocional aguda.',
  },
  'remision': {
    nombre: 'Remisión',
    definicion: 'Derivación de una persona a un profesional o servicio especializado cuando la situación supera el alcance de la atención inicial.',
  },
  'ease': {
    sigla: 'EASE',
    nombre: 'Habilidades Emocionales para Adolescentes',
    definicion: 'Programa de la OMS diseñado para que facilitadores no especializados enseñen habilidades de manejo emocional a adolescentes afectados por adversidades.',
  },
  'significancia-estadistica': {
    nombre: 'Significancia estadística',
    definicion: 'Medida de confianza en que un resultado no se debe al azar. Si no es "significativo", no hay certeza suficiente de que la intervención realmente funcione.',
  },
  'drr': {
    sigla: 'DRR',
    nombre: 'Reducción del Riesgo de Desastres',
    definicion: 'Enfoque sistemático para identificar, evaluar y reducir los riesgos asociados a desastres, promovido por la ONU a través del Marco de Sendai.',
  },
  'amenaza-antropica': {
    nombre: 'Amenaza antrópica',
    definicion: 'Peligro causado por la actividad humana, como incendios, contaminación o conflicto armado, a diferencia de las amenazas naturales como sismos o inundaciones.',
  },
  'afrontamiento': {
    nombre: 'Mecanismos de afrontamiento',
    definicion: 'Estrategias que las personas y comunidades usan para hacer frente a situaciones difíciles, que pueden ser individuales (respiración, rutinas) o colectivas (rituales, trabajo comunitario).',
  },
  'capacidad-instalada': {
    nombre: 'Capacidad instalada',
    definicion: 'Recursos humanos, técnicos e institucionales que ya existen en un territorio y pueden activarse ante una emergencia sin necesidad de crearlos desde cero.',
  },
  'valor-p': {
    nombre: 'Valor p (p-value)',
    definicion: 'Número entre 0 y 1 que indica la probabilidad de que un resultado se deba al azar. Si p < 0.05, se considera que el efecto probablemente es real.',
  },
  'controles-activos': {
    nombre: 'Controles activos',
    definicion: 'Grupo de comparación que recibe una actividad alternativa (no la terapia evaluada) para verificar que los beneficios no se deben simplemente a recibir atención.',
  },
  'exposicion-gradual': {
    nombre: 'Exposición gradual',
    definicion: 'Técnica terapéutica en la que la persona se enfrenta progresivamente, en un entorno seguro, a los recuerdos o situaciones que le generan malestar.',
  },
}
