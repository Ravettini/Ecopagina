import { Link } from 'react-router-dom';
import { surveyConfig } from '@/config/survey';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Portada = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-primary-deep-blue via-primary-blue to-primary-mid-blue">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                {surveyConfig.surveyName}
              </h1>
              <Badge 
                variant="outline" 
                className="bg-accent-gold/90 text-white border-0 font-semibold text-lg px-3 py-1"
              >
                {surveyConfig.year}
              </Badge>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-white/90">
              {surveyConfig.tagline}
            </h2>
          </div>

          <p className="text-lg sm:text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            {surveyConfig.introText}
          </p>

          <Button
            asChild
            size="lg"
            className="bg-accent-gold hover:bg-accent-gold/90 text-white text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            <Link to="/login">
              Ingresar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
