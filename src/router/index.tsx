import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Portada } from '@/pages/Portada';
import { Login } from '@/pages/Login';
import { Home } from '@/pages/Home';
import { Introduccion } from '@/pages/Introduccion';
import { Metodologia } from '@/pages/Metodologia';
import { Cuestionario } from '@/pages/Cuestionario';
import { Informes } from '@/pages/Informes';
import { Tablero } from '@/pages/Tablero';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Portada />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/introduccion',
    element: (
      <ProtectedRoute>
        <Introduccion />
      </ProtectedRoute>
    ),
  },
  {
    path: '/metodologia',
    element: (
      <ProtectedRoute>
        <Metodologia />
      </ProtectedRoute>
    ),
  },
  {
    path: '/cuestionario',
    element: (
      <ProtectedRoute>
        <Cuestionario />
      </ProtectedRoute>
    ),
  },
  {
    path: '/informes',
    element: (
      <ProtectedRoute>
        <Informes />
      </ProtectedRoute>
    ),
  },
  {
    path: '/tablero',
    element: (
      <ProtectedRoute>
        <Tablero />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);


