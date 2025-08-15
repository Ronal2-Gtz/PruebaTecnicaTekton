import { toast } from 'react-toastify';

import { useAuthStore } from '../../hooks/useAuthStore';
import { useForm } from '../../hooks/useForm';
import movieIcon from '../../assets/movieIcon.png';

import './login.css';

interface LoginFormFields {
  loginEmail: string;
  loginPassword: string;
}

const loginFormFields: LoginFormFields = {
  loginEmail: '',
  loginPassword: '',
};

const Login: React.FC = () => {
  const { loginEmail, loginPassword, onInputChange } = useForm(loginFormFields);
  const { startLogin } = useAuthStore();

  const onLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!loginEmail || !loginPassword) {
      toast.error('Completa todos los campos');
      return;
    }

    startLogin({ email: loginEmail, password: loginPassword });
  };

  return (
    <main className="login">
      <div className="login__glassContainer">
        <header className="login__title">
          <img src={movieIcon} alt="movieIcon" width={50} height={50} />
          <p>Inicia sesión</p>
        </header>

        <form onSubmit={onLoginSubmit} className="login__form">
          <input
            type="email"
            placeholder="Correo"
            name="loginEmail"
            value={loginEmail}
            onChange={onInputChange}
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Contraseña"
            name="loginPassword"
            value={loginPassword}
            onChange={onInputChange}
            autoComplete="current-password"
          />
          <button className="login__form-button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
