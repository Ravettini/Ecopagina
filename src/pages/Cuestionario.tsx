import { PageShell } from '@/components/Layout/PageShell';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

export const Cuestionario = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cuestionario-eco-2025.pdf';
    link.download = 'cuestionario-eco-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageShell title="Cuestionario" breadcrumb="Cuestionario">
      <div className="h-full overflow-y-auto bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-foreground leading-relaxed mb-4">
                  El cuestionario utilizado en ECO 2025 está diseñado para recopilar información 
                  sobre diversas dimensiones del ambiente laboral y la cultura organizacional 
                  en el GCBA.
                </p>
                
                <p className="text-foreground leading-relaxed mb-4">
                  El instrumento incluye preguntas estructuradas que permiten evaluar aspectos 
                  como las relaciones interpersonales, el liderazgo, la comunicación interna, 
                  las condiciones de trabajo, los procesos organizacionales y el bienestar laboral.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  Podés descargar el cuestionario completo en formato PDF para conocer en detalle 
                  las preguntas y escalas utilizadas en la encuesta.
                </p>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="gap-2"
                >
                  <FileDown className="h-5 w-5" />
                  Descargar cuestionario (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
};
