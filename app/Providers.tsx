"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "react-use-cart";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  );
}
