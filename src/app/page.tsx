"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Categorias from "@/components/header/categorias";
import MaisVendidos from "@/components/maisVendidos/maisVendido";

import { styled } from "styled-components";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./login/page";

export const StyledContainer = styled.div`
  padding: 1rem;
  height: min-content;
  gap: 12px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function Home() {
  const client = new QueryClient();

  return (
    <main>
      <>
        <QueryClientProvider client={client}>
          <MaisVendidos />
          <StyledContainer>Pagina home</StyledContainer>
        </QueryClientProvider>
      </>
    </main>
  );
}
