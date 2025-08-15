import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuthStore } from './hooks/useAuthStore';
import { Login, Movies } from './pages';
import { PrivateRoute, PublicRoute } from './routes';
import { Loading } from './components';

function App() {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === 'checking') {
    return <Loading />;
  }

  return (
    <Routes>
      <Route
        path="login/*"
        element={
          <PublicRoute>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
          </PublicRoute>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
