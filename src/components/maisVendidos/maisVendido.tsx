"use client";
import { CategoriaContext } from "@/context/categoria";
import CategoriaHooks from "@/hooks/categoria";
import { TypesCategoria } from "@/types/types-categoria";
import { TypesMaisVendidos } from "@/types/types-maisVendidos";
import React, { useState } from "react";
import { styled } from "styled-components";

export function SetaDescer() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24px"
      height="24px"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64">
      <g>
        <polygon points="31.936,46.585 15.643,30.292 14.229,31.854 31.229,49 32.643,49 49.643,31.854 48.229,30.366 	" />
        <polygon points="31.936,31.585 15.643,15.292 14.229,16.854 31.229,34 32.643,34 49.643,16.854 48.229,15.366 	" />
      </g>
    </svg>
  );
}

interface MaisVendidosProps {}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 223px;
  height: 78px;
  gap: 32px;
  z-index: 9999;
  button {
    width: 180px;
    height: 40px;
    font-size: 16px;
    color: black;
    border: transparent;
    background: transparent;
    background-color: #ffffff;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    svg{
        margin-left: 12px;

    }
  }
`;
const StyledVendidos = styled.ul`
  position: absolute;
  width: 180px;
  padding: 0 6px;
  height: 86px;
  background-color: #ffffff;
  box-shadow:  0px 8px 12px rgba(0, 0, 0, 0.3);
  list-style: none;
  cursor: pointer;
`;

const MaisVendidos = (props: MaisVendidosProps) => {
  const [abri, setAbri] = useState(false);

  const {setMais} = CategoriaHooks();
  
  const handleMais = (value: TypesMaisVendidos) => {
     setMais(value)
     setAbri(false)
  }
  const handleOPens = () => setAbri((prev) => !prev);

  return (
    <StyledContainer>
      <div>
        <button onClick={handleOPens} >
          Organizar por
          <SetaDescer />
        </button>
        {abri && 
        <StyledVendidos>
            <li onClick={() => handleMais(TypesMaisVendidos["MAIS-VENDIDO"])} >Mais Vendidos</li>
            <li onClick={() => handleMais(TypesMaisVendidos["MAIOR-PREÇO"])} >Preço: Maior - menor </li>
            <li onClick={() => handleMais(TypesMaisVendidos["MENOR-PREÇO"])} >Preço: Menor - maior</li>
        </StyledVendidos>}
      </div>
    </StyledContainer>
  );
};

export default MaisVendidos;
