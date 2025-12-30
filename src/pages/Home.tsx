import { Header } from '@/components/Layout/Header';
import { surveyConfig } from '@/config/survey';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, FlaskConical, FileQuestion, BarChart3, LayoutDashboard, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const icons = {
  introduccion: FileText,
  metodologia: FlaskConical,
  cuestionario: FileQuestion,
  informes: BarChart3,
  tablero: LayoutDashboard,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export const Home = () => {
  const buttons = [
    {
      to: surveyConfig.routes.introduccion,
      icon: icons.introduccion,
      title: 'Introducción',
      description: 'Información general sobre la encuesta',
    },
    {
      to: surveyConfig.routes.metodologia,
      icon: icons.metodologia,
      title: 'Metodología',
      description: 'Cómo se realizó la encuesta',
    },
    {
      to: surveyConfig.routes.cuestionario,
      icon: icons.cuestionario,
      title: 'Cuestionario',
      description: 'Descargar el cuestionario utilizado',
    },
    {
      to: surveyConfig.routes.informes,
      icon: icons.informes,
      title: 'Informes',
      description: 'Documentos y análisis disponibles',
    },
    {
      to: surveyConfig.routes.tablero,
      icon: icons.tablero,
      title: 'Tablero',
      description: 'Visualización interactiva de resultados',
    },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <Header />
      <div className="flex-1 overflow-hidden mt-16">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="h-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 flex-shrink-0"
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {surveyConfig.surveyName} {surveyConfig.year} – Resultados
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground">Seleccioná una sección</p>
            </motion.div>

            <div className="flex-1 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {buttons.map((button, index) => {
                  const Icon = button.icon;
                  return (
                    <motion.div
                      key={button.to}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                    >
                      <Link to={button.to}>
                        <Card className="h-full min-h-[220px] cursor-pointer group transition-all duration-200 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
                          <CardHeader className="p-8">
                            <div className="flex items-start justify-between">
                              <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                <Icon className="h-7 w-7 text-primary" />
                              </div>
                              <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </div>
                            <CardTitle className="mt-6 text-xl">{button.title}</CardTitle>
                            <CardDescription className="text-base mt-2">{button.description}</CardDescription>
                          </CardHeader>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
