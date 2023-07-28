"use client"

import CategoriaProvider from "@/context/categoria";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode
}

const theme = {
    desktopBreakpoint: "968px",
    tableBreakpoint: "768px",
}

export function DefaultProviders({ children } : DefaultProvidersProps){
    const client = new QueryClient();
    return(
        <QueryClientProvider client={client}>
            <CategoriaProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </CategoriaProvider>
        </QueryClientProvider>
    )
}