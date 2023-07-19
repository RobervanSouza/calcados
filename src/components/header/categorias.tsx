"use client";

import CategoriaHooks from "@/hooks/categoria";
import { TypesCategoria } from "@/types/types-categoria";
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
  const { type, setType} = CategoriaHooks();

  const HandleClick = (value : TypesCategoria) => {
    setType(value)
  }

  return (
    <div>
      <Categoria>
        <Itens 
        selected={type === TypesCategoria.MASCULINO}
        onClick={() => HandleClick(TypesCategoria.MASCULINO)}
        >MASCULINO</Itens>
        <Itens 
        selected={type === TypesCategoria.INFANTIL}
        onClick={() => HandleClick(TypesCategoria.INFANTIL)}
        >INFANTIL</Itens>
        <Itens
        selected={type === TypesCategoria.FEMININO}
        onClick={() => HandleClick(TypesCategoria.FEMININO)}
        >FEMININO</Itens>
        <Itens 
        selected={type === TypesCategoria.LANÇAMENTOS}
        onClick={() => HandleClick(TypesCategoria.LANÇAMENTOS)}
        >LANÇAMENTOS</Itens>
        <Itens 
        selected={type === TypesCategoria.PROMOÇÃO}
        onClick={() => HandleClick(TypesCategoria.PROMOÇÃO)}
        >PROMOÇÃO</Itens>
      </Categoria>
    </div>
  );
};

export default Categorias;
