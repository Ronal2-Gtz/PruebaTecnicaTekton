import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { authService } from '../services/authService';
import { onChecking, onLogin, onLogout, type User } from '../store';

interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: User;
  errorMessage?: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(
    (state: { auth: AuthState }) => state.auth
  );
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }: LoginCredentials) => {
    dispatch(onChecking());
    try {
      const data = await authService({ email, password });

      localStorage.setItem('token', data.token);
      dispatch(onLogin({ name: data.name, id: data.id, token: data.token }));
    } catch (error) {
      toast.error('Credenciales incorrectas!', {
        role: 'alert',
      });
      dispatch(onLogout('Credenciales incorrectas'));
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  const checkAuthToken = () => {
    dispatch(onChecking());

    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(onLogout());
      return;
    }

    dispatch(
      onLogin({
        name: 'Ronaldo Gutierrez',
        id: '112sad3',
        token: import.meta.env.VITE_API_TOKEN,
      })
    );
  };

  return {
    errorMessage,
    status,
    user,
    startLogin,
    checkAuthToken,
    startLogout,
  };
};
