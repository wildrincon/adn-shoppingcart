import * as React from 'react';
import { AppRouter } from 'app/AppRouter';
import { GlobalErrorBoundary } from './core/errors/GlobalErrorBoundary';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  return (
    <GlobalErrorBoundary>
      <QueryClientProvider client={client}>
        <AppRouter />
      </QueryClientProvider>
    </GlobalErrorBoundary>
  );
}

export default App;
