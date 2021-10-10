import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MainRouter from './router/MainRouter';

const queryClient = new QueryClient()

function App() {
  
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <MainRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
