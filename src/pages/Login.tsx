import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '@/utils/auth';
import { surveyConfig } from '@/config/survey';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Building2, 
  MessageSquare, 
  Briefcase, 
  Heart,
  Shield,
  Target,
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PatternBackground } from '@/components/ui/pattern-background';

const dimensionIcons = [
  Users,
  Shield,
  MessageSquare,
  Briefcase,
  BarChart3,
  Heart,
];

const purposeIcons = [
  Target,
  TrendingUp,
  Building2,
  BarChart3,
];

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const success = await login({ username, password });
      if (success) {
        toast.success('Sesión iniciada correctamente');
        setTimeout(() => navigate('/home'), 300);
      } else {
        toast.error('Usuario o contraseña incorrectos');
      }
    } catch (err) {
      toast.error('Error al iniciar sesión. Por favor, intentá nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.2 }
    },
  };

  return (
    <div className="h-screen overflow-hidden relative bg-gradient-to-br from-[#003080] via-[#1050A0] to-[#2060B0]">
      {/* Pattern overlay */}
      <PatternBackground />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="pt-8 pb-6 px-4 sm:px-6 lg:px-8 text-center"
        >
          <Badge 
            variant="outline" 
            className="bg-[#C09010] text-white border-0 font-semibold mb-3 text-xs px-3 py-1"
          >
            ECO {surveyConfig.year}
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Acceso a Resultados Privados
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            Ingresá con tus credenciales institucionales para acceder a los resultados de {surveyConfig.surveyName} {surveyConfig.year}.
          </p>
        </motion.div>

        {/* Main Content - Cards */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-8">
          <div className="w-full max-w-[1100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card Izquierda - Info */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <Card className="h-full bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs px-2 py-0.5">
                        ENCUESTA
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold">¿Qué es {surveyConfig.surveyName}?</CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {surveyConfig.surveyName} significa {surveyConfig.tagline}.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {/* Dimensiones */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-3 text-base">
                        Dimensiones evaluadas:
                      </h3>
                      <ul className="space-y-2.5">
                        {surveyConfig.dimensions.map((dimension, index) => {
                          const Icon = dimensionIcons[index] || CheckCircle2;
                          return (
                            <li key={index} className="flex items-start gap-2.5">
                              <div className="mt-0.5 p-1.5 rounded-md bg-primary/10">
                                <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                              </div>
                              <span className="text-foreground leading-relaxed text-sm">{dimension}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Para qué sirve */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-3 text-base">
                        ¿Para qué sirve?
                      </h3>
                      <ul className="space-y-2.5">
                        {surveyConfig.purposes.map((purpose, index) => {
                          const Icon = purposeIcons[index] || ArrowRight;
                          return (
                            <li key={index} className="flex items-start gap-2.5">
                              <div className="mt-0.5 p-1.5 rounded-md bg-[#C09010]/10">
                                <Icon className="h-4 w-4 text-[#C09010] flex-shrink-0" />
                              </div>
                              <span className="text-foreground leading-relaxed text-sm">{purpose}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card Derecha - Login */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ ...cardVariants, visible: { ...cardVariants.visible, transition: { ...cardVariants.visible.transition, delay: 0.3 } } }}
              >
                <Card className="h-full bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-1">
                  <CardHeader className="space-y-2 pb-4">
                    <CardTitle className="text-xl font-bold text-center">Ingresar</CardTitle>
                    <CardDescription className="text-center text-sm">
                      Ingresá tus credenciales para acceder
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="username" className="text-foreground font-medium">
                          Usuario
                        </Label>
                        <Input
                          id="username"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          placeholder="Ingresá tu usuario"
                          disabled={loading}
                          className="h-11 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-foreground font-medium">
                          Contraseña
                        </Label>
                        <Input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          placeholder="Ingresá tu contraseña"
                          disabled={loading}
                          className="h-11 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-11 text-base font-semibold bg-primary hover:bg-primary/90 transition-colors"
                        disabled={loading}
                      >
                        {loading ? 'Iniciando sesión...' : 'Ingresar'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
