"use client";
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
  button {
    width: 160px;
    height: 40px;
    font-size: 16px;
    color: green;
    border:  3px solid ;
    
  }
`;
const StyledVendidos = styled.ul`
  position: absolute;
  width: 160px;
  height: 76px;
  background-color: #b6edb8;
  list-style: none;
  cursor: pointer;
`;

const MaisVendidos = (props: MaisVendidosProps) => {
  const [abri, setAbri] = useState(false);

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
            <li>Mais Vendidos</li>
            <li>Preço: Maior - menor </li>
            <li>Preço: Menor - maior</li>
        </StyledVendidos>}
      </div>
    </StyledContainer>
  );
};

export default MaisVendidos;
