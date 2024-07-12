import React, { useMemo } from 'react'
import AppProvider from './AppProvider'
import { useQueryClient } from '@tanstack/react-query'
import createRouter from './routes';
import { RouterProvider } from 'react-router-dom';

const AppRouter = () => {
    const queryClient = useQueryClient();

    const router = useMemo(() => createRouter(queryClient), [queryClient]);
  
    return <RouterProvider router={router} />;
  };
  

const App = () => {
  return (
    <AppProvider>
        <AppRouter/>
    </AppProvider>
  )
}

export default App