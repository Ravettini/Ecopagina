import { useState } from 'react';
import { PageShell } from '@/components/Layout/PageShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FileDown, FileText } from 'lucide-react';

interface Informe {
  id: string;
  titulo: string;
  fecha: string;
  area: string;
}

const informesDummy: Informe[] = [
  {
    id: '1',
    titulo: 'Informe General ECO 2025',
    fecha: '2025-03-15',
    area: 'Todas las áreas',
  },
  {
    id: '2',
    titulo: 'Análisis por Área - Recursos Humanos',
    fecha: '2025-03-20',
    area: 'Recursos Humanos',
  },
  {
    id: '3',
    titulo: 'Análisis por Área - Tecnología',
    fecha: '2025-03-22',
    area: 'Tecnología',
  },
  {
    id: '4',
    titulo: 'Análisis Comparativo 2024-2025',
    fecha: '2025-03-25',
    area: 'Todas las áreas',
  },
];

const areasDummy = ['Todas las áreas', 'Recursos Humanos', 'Tecnología', 'Administración', 'Comunicación'];

export const Informes = () => {
  const [areaFiltro, setAreaFiltro] = useState<string>('Todas las áreas');
  
  const informesFiltrados = areaFiltro === 'Todas las áreas'
    ? informesDummy
    : informesDummy.filter((inf) => inf.area === areaFiltro);

  const handleVerInforme = (id: string) => {
    alert(`Abriendo informe ${id} (funcionalidad en desarrollo)`);
  };

  return (
    <PageShell title="Informes" breadcrumb="Informes">
      <div className="h-full overflow-hidden bg-background flex flex-col">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex flex-col">
          <Card className="flex-1 flex flex-col overflow-hidden">
            <div className="p-6 border-b">
              <Label htmlFor="area-filtro" className="mb-2 block">
                Filtrar por Área
              </Label>
              <select
                id="area-filtro"
                value={areaFiltro}
                onChange={(e) => setAreaFiltro(e.target.value)}
                className="flex h-10 w-full max-w-xs rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {areasDummy.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {informesFiltrados.map((informe) => (
                  <Card key={informe.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{informe.titulo}</CardTitle>
                          <CardDescription className="mt-2">
                            <span className="font-medium">Área:</span> {informe.area}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-medium">Fecha:</span>{' '}
                        {new Date(informe.fecha).toLocaleDateString('es-AR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <Button
                        onClick={() => handleVerInforme(informe.id)}
                        className="w-full gap-2"
                      >
                        <FileDown className="h-4 w-4" />
                        Ver / Descargar
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {informesFiltrados.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  No se encontraron informes para el área seleccionada.
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
};
