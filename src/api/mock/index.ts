import authApi from '../auth';
import AxiosMockAdapter from 'axios-mock-adapter';
import { setupMockLogin } from './mockLogin';

export const initMocks = () => {
  const mock = new AxiosMockAdapter(authApi, { delayResponse: 1000 });

  setupMockLogin(mock);

  return mock;
};
