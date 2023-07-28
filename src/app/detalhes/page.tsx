'use client'
import { useDetalhes } from "@/hooks/detalhes";
import React from "react";

import styled from "styled-components";

const CardPrice = styled.p`
  font-size: 28px;
  width: 123px;
  margin-left: 128px;
  margin-top: 123px;
  font-weight: bold;
  color: black;
  border: 2px solid red;
  background-color: green;
`;
const Detalhes = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data, error, status } = useDetalhes(searchParams.id);

  console.log(data, "id");

  if (error) {
    return <div>Ocorreu um erro ao carregar os detalhes do produto.</div>;
  }

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <CardPrice>{data.nome}
      
      </CardPrice>
      
    </div>
  );
};


export default Detalhes;
