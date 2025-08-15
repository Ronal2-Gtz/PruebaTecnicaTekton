import { useAuthStore } from '../../hooks/useAuthStore';
import './navbar.css';

export const Navbar: React.FC = () => {
  const { startLogout, user } = useAuthStore();
  const firstLetter = user?.name?.charAt(0).toUpperCase() || '?';

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <h1 className="navbar__title">Prueba Técnica</h1>
        <div className="navbar__right">
          <button
            className="navbar__logout"
            onClick={startLogout}
            aria-label="Cerrar sesión"
          >
            Cerrar sesión
          </button>
          <div className="navbar__avatar" aria-hidden="true">
            <span className="navbar__avatar--letter">{firstLetter}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
