// Mock data for Nefila Defense

export const serviciosConocer = [
  {
    id: 1,
    titulo: "Pentesting Interno y Externo",
    descripcion: "Simulación de ataques reales para identificar vulnerabilidades en tu infraestructura."
  },
  {
    id: 2,
    titulo: "Test de Ingeniería Social",
    descripcion: "Evaluación de la resistencia humana ante ataques de phishing y manipulación."
  },
  {
    id: 3,
    titulo: "Auditoría de Seguridad Web",
    descripcion: "Análisis exhaustivo de aplicaciones web para detectar fallos de seguridad."
  },
  {
    id: 4,
    titulo: "Auditoría de Aplicaciones Móviles",
    descripcion: "Evaluación de seguridad en apps iOS y Android."
  },
  {
    id: 5,
    titulo: "Auditoría de Infraestructura Cloud",
    descripcion: "Revisión de seguridad en AWS, Azure y GCP."
  },
  {
    id: 6,
    titulo: "Auditoría de Seguridad IoT",
    descripcion: "Análisis de dispositivos conectados y redes IoT."
  },
  {
    id: 7,
    titulo: "Auditoría de Código Fuente",
    descripcion: "Revisión de código para detectar vulnerabilidades de seguridad."
  }
];

export const serviciosFortalecer = [
  {
    id: 1,
    titulo: "EDR / XDR Management",
    descripcion: "Gestión avanzada de detección y respuesta en endpoints."
  },
  {
    id: 2,
    titulo: "NDR Management",
    descripcion: "Monitoreo continuo de tráfico de red para detectar amenazas."
  },
  {
    id: 3,
    titulo: "Identity & Access Management",
    descripcion: "Control de accesos y gestión de identidades empresariales."
  },
  {
    id: 4,
    titulo: "Threat Intelligence",
    descripcion: "Inteligencia de amenazas actualizada para prevenir ataques."
  },
  {
    id: 5,
    titulo: "Brand Protection",
    descripcion: "Vigilancia digital y protección de marca en internet."
  },
  {
    id: 6,
    titulo: "Vulnerability Management",
    descripcion: "Gestión continua de vulnerabilidades y superficie de ataque."
  }
];

export const serviciosResistir = [
  {
    id: 1,
    titulo: "Detección con IA y Machine Learning",
    descripcion: "Identificación automática de amenazas avanzadas mediante algoritmos inteligentes."
  },
  {
    id: 2,
    titulo: "Threat Hunting Proactivo",
    descripcion: "Búsqueda activa de amenazas ocultas en tu infraestructura."
  },
  {
    id: 3,
    titulo: "Triaje y Análisis de Incidentes",
    descripcion: "Evaluación inicial rápida para priorizar y contener incidentes."
  },
  {
    id: 4,
    titulo: "Respuesta con Playbooks Personalizados",
    descripcion: "Procedimientos automatizados basados en comportamiento de usuarios."
  }
];

export const metodologia = [
  {
    paso: 1,
    titulo: "Evaluación Inicial",
    descripcion: "Análisis del estado actual de seguridad y definición de objetivos."
  },
  {
    paso: 2,
    titulo: "Análisis Técnico Profundo",
    descripcion: "Ejecución de auditorías y pruebas de penetración detalladas."
  },
  {
    paso: 3,
    titulo: "Identificación y Priorización",
    descripcion: "Clasificación de riesgos según impacto y probabilidad."
  },
  {
    paso: 4,
    titulo: "Recomendaciones y Mitigación",
    descripcion: "Plan de acción concreto para resolver vulnerabilidades."
  },
  {
    paso: 5,
    titulo: "Seguimiento Continuo",
    descripcion: "Monitoreo constante y mejora de la postura de seguridad."
  }
];

export const tiposServicio = [
  "Pentesting",
  "Auditoría de Seguridad",
  "Respuesta a Incidentes",
  "Gestión de Vulnerabilidades",
  "Threat Intelligence",
  "Consultoría de Seguridad",
  "Otro"
];

// Mock para envío de formularios
export const enviarFormularioContacto = async (datos) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Formulario enviado (MOCK):', datos);
      resolve({ success: true, message: 'Mensaje enviado correctamente' });
    }, 1000);
  });
};

export const enviarCotizacion = async (datos) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Cotización enviada (MOCK):', datos);
      resolve({ success: true, message: 'Solicitud de cotización recibida', cotizacionId: 'COT-' + Math.random().toString(36).substr(2, 9).toUpperCase() });
    }, 1000);
  });
};