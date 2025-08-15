import { useAuthStore } from '../../hooks/useAuthStore';

import './navbar.css';

export const Navbar: React.FC = () => {
  const { startLogout, user } = useAuthStore();
  const firstLetter = user?.name.charAt(0);

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <h1 className="navbar__title">Prueba Técnica</h1>
        <div className="navbar__right">
          <button className="navbar__logout" onClick={startLogout}>
            Cerrar sesión
          </button>
          <div className="navbar__avatar">
            <span>{firstLetter}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
