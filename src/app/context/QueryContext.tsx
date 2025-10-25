'use client';
import { AmplifyConfig } from '@/libs/amplifyConfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

AmplifyConfig();

export const QueryContext: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
