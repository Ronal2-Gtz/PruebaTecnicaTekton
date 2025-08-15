import { Navigate } from 'react-router-dom';

import type { ReactNode } from 'react';
import { useAuthStore } from '../hooks/useAuthStore';

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { status } = useAuthStore();

  return status === 'authenticated' ? children : <Navigate to="/login" />;
};
