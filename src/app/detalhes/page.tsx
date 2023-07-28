'use client'
// Importe os componentes e hooks necessários
import { useDetalhes } from '@/hooks/detalhes';
import React from 'react';

import styled from "styled-components";

const CardPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #289915;
`;
// ... (seu código importando os componentes e hooks necessários)

const Detalhes = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data, isError, error } = useDetalhes(searchParams.id);

  if (isError) {
    return <div>Ocorreu um erro ao carregar os detalhes do produto.</div>;
  }

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      {data.product ? (
        <>
          <p>{data.product.nome}</p>
          {/* Acessando outras propriedades do objeto 'data.product' */}
        </>
      ) : (
        <p>Nome do Produto Desconhecido</p>
      )}
    </div>
  );
};


export default Detalhes;
