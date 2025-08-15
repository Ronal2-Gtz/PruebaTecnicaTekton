import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

const queryClient = new QueryClient();

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
