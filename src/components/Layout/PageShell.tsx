import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';

interface PageShellProps {
  title: string;
  description?: string;
  breadcrumb?: string;
  children: React.ReactNode;
}

export const PageShell = ({ title, description, breadcrumb, children }: PageShellProps) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <Header />
      <div className="flex-1 overflow-hidden flex flex-col mt-16">
        <div className="bg-card border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {breadcrumb && (
              <nav className="text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
                <Link to="/home" className="hover:text-foreground transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">{breadcrumb}</span>
              </nav>
            )}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">{title}</h1>
                {description && (
                  <p className="text-muted-foreground mt-2">{description}</p>
                )}
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
              >
                <Link to="/home">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
