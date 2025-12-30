import { Link, useLocation, useNavigate } from 'react-router-dom';
import { surveyConfig } from '@/config/survey';
import { isAuthenticated, logout } from '@/utils/auth';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const authenticated = isAuthenticated();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getBreadcrumb = () => {
    const path = location.pathname;
    if (path === '/home') return null;
    if (path.includes('/introduccion')) return 'Introducción';
    if (path.includes('/metodologia')) return 'Metodología';
    if (path.includes('/cuestionario')) return 'Cuestionario';
    if (path.includes('/informes')) return 'Informes';
    if (path.includes('/tablero')) return 'Tablero';
    return null;
  };

  const breadcrumb = getBreadcrumb();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-primary/20 bg-gradient-to-r from-primary-deep-blue via-primary-blue to-primary-blue backdrop-blur-sm shadow-lg">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center justify-between">
          <Link 
            to={authenticated ? '/home' : '/'} 
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">{surveyConfig.surveyName}</span>
              <Badge 
                variant="outline" 
                className="bg-accent-gold/90 text-white border-0 font-semibold"
              >
                {surveyConfig.year}
              </Badge>
            </div>
          </Link>

          {breadcrumb && authenticated && (
            <div className="hidden md:flex items-center gap-2 text-sm text-white/80">
              <Link to="/home" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">{breadcrumb}</span>
            </div>
          )}

          {authenticated && (
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              Cerrar Sesión
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
