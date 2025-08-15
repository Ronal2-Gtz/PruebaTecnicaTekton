import AxiosMockAdapter from 'axios-mock-adapter';

export const setupMockLogin = (mock: AxiosMockAdapter) => {
  mock.onPost('/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);

    if (email === 'prueba@gmail.com' && password === '123456') {
      return [
        200,
        {
          token: import.meta.env.VITE_API_TOKEN,
          name: 'Ronaldo Gutierrez',
          id: '112sad3',
        },
      ];
    }

    return [401, { message: 'Credenciales inválidas' }];
  });
};
