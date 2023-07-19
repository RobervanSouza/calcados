"use client";

import React from "react";
import { styled } from "styled-components";

interface CategoriaProps {
  selected: boolean;
}

const Categoria = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  list-style: none;
`;
const Itens = styled.li<CategoriaProps>`
  flex: 1; /* Permite que os itens ocupem espaço disponível igualmente */
  max-width: 200px; /* Define a largura máxima para que não fiquem muito largos */
  font-size: 1em;
  border-bottom: ${(props) => (props.selected ? "4px solid green" : "")};
 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; 
  white-space: nowrap; /* Impede que o texto quebre em várias linhas */
  cursor: pointer;
`;

const Categorias = () => {
  return (
    <div>
      <Categoria>
        <Itens selected>MASCULINO</Itens>
        <Itens selected={false}>INFANTIL</Itens>
        <Itens selected={false}>FEMININO</Itens>
        <Itens selected={false}>LANÇAMENTOS</Itens>
        <Itens selected={false}>OFERTAS</Itens>
        <Itens selected={false}>PROMOÇÃO</Itens>
      </Categoria>
    </div>
  );
};

export default Categorias;
