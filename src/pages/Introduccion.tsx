import { PageShell } from '@/components/Layout/PageShell';
import { Card, CardContent } from '@/components/ui/card';

export const Introduccion = () => {
  return (
    <PageShell title="Introducción" breadcrumb="Introducción">
      <div className="h-full overflow-y-auto bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed mb-4">
                  La Encuesta de Cultura Organizacional y Bienestar Laboral (ECO) es una iniciativa 
                  estratégica del Gobierno de la Ciudad de Buenos Aires orientada a comprender y 
                  mejorar el clima laboral y las dinámicas organizacionales en la administración pública.
                </p>
                
                <p className="text-foreground leading-relaxed mb-4">
                  Esta herramienta permite obtener información valiosa sobre las percepciones, 
                  experiencias y necesidades de los trabajadores y trabajadoras del GCBA, facilitando 
                  la identificación de áreas de oportunidad y el diseño de políticas orientadas a 
                  fortalecer el bienestar laboral.
                </p>
                
                <p className="text-foreground leading-relaxed mb-4">
                  A través de un enfoque sistemático y metodológicamente riguroso, ECO 2025 busca 
                  generar evidencia que contribuya a la toma de decisiones informadas y al desarrollo 
                  de entornos laborales más saludables, inclusivos y propicios para el crecimiento 
                  profesional y personal.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  Los resultados presentados en este portal reflejan el compromiso del GCBA con la 
                  transparencia y la mejora continua de sus procesos organizacionales, promoviendo 
                  una cultura de diálogo y participación activa de todos los integrantes de la 
                  administración pública.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
};
