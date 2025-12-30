import { PageShell } from '@/components/Layout/PageShell';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

interface TabItem {
  id: string;
  label: string;
  content: string;
}

const tabs: TabItem[] = [
  {
    id: 'universo',
    label: 'Universo',
    content: 'El universo de estudio comprende a todos los trabajadores y trabajadoras de la administración pública del Gobierno de la Ciudad de Buenos Aires, incluyendo dependencias centrales y descentralizadas, empresas estatales y organismos autónomos. La encuesta está dirigida a personal en relación de dependencia, abarcando diferentes niveles jerárquicos, áreas funcionales y modalidades de trabajo.',
  },
  {
    id: 'muestra',
    label: 'Muestra',
    content: 'La muestra se diseñó mediante un muestreo estratificado probabilístico, considerando variables como área, nivel jerárquico y antigüedad. Se aplicó un tamaño muestral que garantiza un nivel de confianza del 95% y un margen de error máximo del 3%. La selección de participantes se realizó de manera aleatoria dentro de cada estrato, asegurando representatividad estadística de la población total.',
  },
  {
    id: 'instrumento',
    label: 'Instrumento',
    content: 'El instrumento de recolección de datos es un cuestionario estructurado que evalúa seis dimensiones principales: Relaciones interpersonales, Liderazgo, Comunicación, Condiciones de trabajo, Procesos y dinámicas laborales, y Motivación y Bienestar. El cuestionario incluye preguntas cerradas (escalas tipo Likert) y algunas preguntas abiertas para capturar percepciones cualitativas. El instrumento fue validado mediante pruebas piloto y análisis de consistencia interna.',
  },
  {
    id: 'recoleccion',
    label: 'Recolección',
    content: 'La recolección de datos se realizó mediante plataforma digital durante un período de 8 semanas. Se implementó un sistema de recordatorios y seguimiento personalizado para maximizar la tasa de respuesta. Se garantizó la confidencialidad y anonimato de los participantes, cumpliendo con los protocolos de protección de datos personales. La participación fue voluntaria y se comunicó ampliamente a través de canales oficiales.',
  },
  {
    id: 'procesamiento',
    label: 'Procesamiento',
    content: 'Los datos fueron procesados mediante técnicas estadísticas descriptivas e inferenciales. Se realizaron análisis de frecuencias, medidas de tendencia central y dispersión, análisis de correlaciones y comparaciones entre grupos. Los resultados se validaron mediante controles de calidad y revisión de outliers. El procesamiento contempló el uso de software estadístico especializado y se aplicaron técnicas de imputación para el manejo de datos faltantes, cuando correspondía.',
  },
  {
    id: 'limitaciones',
    label: 'Limitaciones',
    content: 'Entre las limitaciones del estudio se destaca que los resultados reflejan percepciones subjetivas en un momento específico, por lo que pueden estar influenciados por factores contextuales temporales. La tasa de respuesta, aunque significativa, implica que los resultados deben interpretarse considerando posibles sesgos de autoselección. Además, ciertas áreas o subpoblaciones pueden tener representación limitada en la muestra, lo que requiere cautela en la generalización de conclusiones específicas.',
  },
];

export const Metodologia = () => {
  return (
    <PageShell title="Metodología" breadcrumb="Metodología">
      <div className="h-full overflow-hidden bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full flex flex-col">
          <Card className="flex-1 flex flex-col overflow-hidden">
            <Tabs defaultValue={tabs[0].id} className="flex-1 flex flex-col overflow-hidden">
              <div className="px-6 pt-6 border-b">
                <TabsList className="w-full justify-start h-auto bg-transparent p-0">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <div className="flex-1 overflow-y-auto">
                {tabs.map((tab) => (
                  <TabsContent key={tab.id} value={tab.id} className="p-8 mt-0">
                    <p className="text-foreground leading-relaxed">
                      {tab.content}
                    </p>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </Card>
        </div>
      </div>
    </PageShell>
  );
};
