"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

interface CalcadoMasculino {
  _id: string;
  nome: string;
  imageUrl: string;
  descricao: string;
  preco: number;
  tamanho: string[];
  cores: string[];
  lancamento: boolean;
  fechamento: string;
  origem: string;
  desconto: number;
  garantia: string;
  indicacao: string;
  genero: string;
  parcelas: number;
}

const CardContainer = styled.div`
  width: 250px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 8px;
  padding: 6px;
  margin-bottom: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  z-index: 999;
`;

const ImageWrapper = styled.div`
  width: 220px;
  height: 250px;
  margin-top: -13px;
  overflow: hidden;
  border-radius: 8px;

  /* border: 3px solid black; */
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`;

const CardTitle = styled.h2`
  font-size: 14px;
  color: #656564;
`;

const CardPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #289915;
`;

const CardPrecoOriginal = styled.p`
  font-size: 14px;
  color: red;
  text-decoration: line-through;
`;
const CardParcelas = styled.p`
  font-size: 14px;
  color: #090d0a;
  font-weight: 900;
`;

const StiledDesconto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 66px;
  width: 66px;
  margin-left: -10.5rem;
  margin-top: -16rem;
  /* background-color: red; */
  margin-bottom: 5rem;
  transform: rotate(-45deg);
  overflow: hidden;
  position: absolute;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    background-color: #058912;
    height: 60px;
    width: 53px;
    transform: rotate(45deg);
    margin-left: -41px;
    margin-top: -19px;
    /* border-radius: 12px; */
  }

  span::after {
    content: "";
    width: 28px;
    height: 12px;
    background-color: #058912;
    /* border-radius: 3px; */
    position: absolute;
    z-index: 99;
    margin-left: 2.1rem;
    margin-top: -38px;
    z-index: -1;
    transform: rotate(-25deg);
  }
  p {
    font-size: 11px;
    font-weight: 900;
    color: white;
  }
`;
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const pulseAnimation = keyframes`
  0% {
    background-color: ${getRandomColor()};
  }
  50% {
    background-color: #606049;
  }
  100% {
    background-color: ${getRandomColor()};
  }
`;

const StiledLancamento = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 96px;
  margin-left: 9.5rem;
  margin-top: -15.1rem;
  border-radius: 12px;
  background-color: green;
  margin-bottom: 5rem;

  overflow: hidden;
  position: absolute;

  p {
    font-size: 11px;
    font-weight: 900;
    color: white;
  }

  animation: ${pulseAnimation as unknown as string} 8s infinite;
`;

const CalcadoMasculino: React.FC = () => {
  const [calcadoMasculinoList, setCalcadoMasculinoList] = useState<
    CalcadoMasculino[]
  >([]);

  useEffect(() => {
    const fetchCalcadoMasculino = async () => {
      try {
        const response = await axios.get(
          "https://api-back-kappa.vercel.app/calcadoMasculino"
        );
        const data = response.data.data;
        setCalcadoMasculinoList(data);
      } catch (error) {
        console.error("Erro ao obter os dados do calcadoMasculino:", error);
      }
    };

    fetchCalcadoMasculino();
  }, []);

  const calcularPrecoComDesconto = (preco: number, desconto: number) => {
    return preco * (1 - desconto / 100);
  };

  const calcularParcelas = (precoComDesconto: number, parcelas: number) => {
    return precoComDesconto / parcelas;
  };

  return (
    
      <>
        {calcadoMasculinoList.map((calcado) => {
          const precoComDesconto = calcularPrecoComDesconto(
            calcado.preco,
            calcado.desconto
          );

          const valorParcela = calcularParcelas(
            precoComDesconto,
            calcado.parcelas
          );

          return (
            <CardContainer key={calcado._id}>
              <StiledDesconto>
                <div>
                  <span>
                    <p>{calcado.desconto}%</p>
                    <p>OFF</p>
                  </span>
                </div>
              </StiledDesconto>

              {calcado.lancamento && (
                <StiledLancamento>
                  <p>LANÇAMENTO</p>
                </StiledLancamento>
              )}

              <ImageWrapper>
                <CardImage src={calcado.imageUrl} alt={calcado.nome} />
              </ImageWrapper>
              <CardTitle>{calcado.nome}</CardTitle>
              <CardPrecoOriginal>
                <p> De: R${calcado.preco.toFixed(2)}</p>
              </CardPrecoOriginal>
              <CardPrice>Por: R${precoComDesconto.toFixed(2)}</CardPrice>
              <CardParcelas>
                {calcado.parcelas}x de R${valorParcela.toFixed(2)} Sem juros
              </CardParcelas>
              <Link href={`/detalhes`}>Ver detalhes</Link>
            </CardContainer>
          );
        })}
      </>
  
  );
};

export default CalcadoMasculino;
