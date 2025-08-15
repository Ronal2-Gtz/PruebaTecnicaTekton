import { Navigate } from 'react-router-dom';

import type { ReactNode } from 'react';
import { useAuthStore } from '../hooks/useAuthStore';

interface PublicRouteProps {
  children: ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { status } = useAuthStore();

  return status === 'not-authenticated' ? children : <Navigate to="/" />;
};
