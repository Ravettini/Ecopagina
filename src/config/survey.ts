export interface SurveyConfig {
  surveyName: string;
  year: string;
  tagline: string;
  introText: string;
  dimensions: string[];
  purposes: string[];
  lookerUrl: string;
  routes: {
    introduccion: string;
    metodologia: string;
    cuestionario: string;
    informes: string;
    tablero: string;
  };
}

export const surveyConfig: SurveyConfig = {
  surveyName: 'ECO',
  year: '2025',
  tagline: 'Encuesta de Cultura Organizacional y Bienestar Laboral',
  introText: 'Releva valores y clima laboral en el GCBA. Permite identificar oportunidades de mejora, fortalecer el bienestar de los equipos y orientar la toma de decisiones.',
  dimensions: [
    'Relaciones interpersonales',
    'Liderazgo',
    'Comunicación',
    'Condiciones de trabajo',
    'Procesos y dinámicas laborales',
    'Motivación y Bienestar',
  ],
  purposes: [
    'Identificar oportunidades de mejora',
    'Fortalecer el bienestar de los equipos',
    'Promover entornos laborales que impulsen el desarrollo de capacidades',
    'Orientar decisiones de gestión organizacional',
  ],
  lookerUrl: 'https://lookerstudio.google.com/embed/reporting/ecaaed0c-90e2-4b02-b181-d630309c1b39/page/p_ng86ogdbzd',
  routes: {
    introduccion: '/introduccion',
    metodologia: '/metodologia',
    cuestionario: '/cuestionario',
    informes: '/informes',
    tablero: '/tablero',
  },
};


