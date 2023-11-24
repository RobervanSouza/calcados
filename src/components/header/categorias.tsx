"use client";

import CategoriaHooks from "@/hooks/categoria";
import { TypesCategoria } from "@/types/types-categoria";
import Link from "next/link";

import React from "react";
import { styled } from "styled-components";
import LoginIcone from './login';

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

const LinkStyled = styled(Link)`
  text-decoration: none; /* Remover sublinhado */
  color: black; /* Alterar cor do texto para preto */
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
        > <LinkStyled href={"/masculino"}  > MASCULINO </LinkStyled> </Itens>
        <Itens 
        selected={type === TypesCategoria.INFANTIL}
        onClick={() => HandleClick(TypesCategoria.INFANTIL)}
        > <LinkStyled href={"/infantil"}  > INFANTIL </LinkStyled>  </Itens>
        <Itens
        selected={type === TypesCategoria.FEMININO}
        onClick={() => HandleClick(TypesCategoria.FEMININO)}
        > <LinkStyled href={"/feminino"}  > FEMININO </LinkStyled>  </Itens>
        <Itens 
        selected={type === TypesCategoria.LANÇAMENTOS}
        onClick={() => HandleClick(TypesCategoria.LANÇAMENTOS)}
        > <LinkStyled href={"/lancamento"}  > LANÇAMENTOS </LinkStyled>  </Itens>
        <Itens 
        selected={type === TypesCategoria.PROMOÇÃO}
        onClick={() => HandleClick(TypesCategoria.PROMOÇÃO)}
        > <LinkStyled href={"/promocao"}  > PROMOÇÃO </LinkStyled>  </Itens>
        <Itens 
        selected={type === TypesCategoria.LoginIcone}
        onClick={() => HandleClick(TypesCategoria.LoginIcone)}
        > <LinkStyled href={"/login"}  > <LoginIcone /> </LinkStyled>  </Itens>
      </Categoria>
    </div>
  );
};

export default Categorias;
