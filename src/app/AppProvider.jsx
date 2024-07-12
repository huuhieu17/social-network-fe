import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "../utils/react-query";
import { Provider } from "react-redux";
import store from "@/store";

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center"></div>
      }
    >
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </React.Suspense>
  );
};

export default AppProvider;
