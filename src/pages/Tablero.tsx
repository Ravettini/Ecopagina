import { PageShell } from '@/components/Layout/PageShell';
import { surveyConfig } from '@/config/survey';
import { Card } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';

export const Tablero = () => {
  const lookerUrl = surveyConfig.lookerUrl;

  return (
    <PageShell title="Tablero Interactivo" breadcrumb="Tablero">
      <div className="h-full overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full flex flex-col">
          <Card className="flex-1 flex flex-col overflow-hidden">
            {lookerUrl ? (
              <iframe
                src={lookerUrl}
                className="w-full h-full border-0 rounded-lg"
                title="Tablero Looker Studio ECO 2025"
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              />
            ) : (
              <div className="flex-1 flex items-center justify-center p-12">
                <div className="text-center max-w-md">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <BarChart3 className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Tablero Interactivo
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    El tablero de visualización interactiva de Looker Studio se mostrará aquí 
                    una vez que se configure la URL en el archivo de configuración.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Para configurar el tablero, actualizá la propiedad <code className="bg-muted px-2 py-1 rounded">lookerUrl</code> en{' '}
                    <code className="bg-muted px-2 py-1 rounded">src/config/survey.ts</code>
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </PageShell>
  );
};
