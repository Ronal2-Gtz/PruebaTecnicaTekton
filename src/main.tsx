import { StrictMode } from 'react';
import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App.tsx';
import { store } from './store/index.ts';

import './index.css';
import { initMocks } from './api/mock/index.ts';

const queryClient = new QueryClient();

if (import.meta.env.MODE === 'development') {
  initMocks();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
          <ToastContainer role="alert" />
          <ReactQueryDevtools initialIsOpen={false} />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
