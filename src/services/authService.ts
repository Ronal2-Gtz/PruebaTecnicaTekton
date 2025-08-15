import authApi from '../api/auth';

export interface LoginResponse {
  token: string;
  name: string;
  id: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

const authService = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  try {
    const { data } = await authApi.post<LoginResponse>('/login', credentials);
    return data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

export { authService };
