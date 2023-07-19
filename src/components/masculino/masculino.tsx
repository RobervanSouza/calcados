"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

interface CalcadoMasculino {
  _id: string;
  nome: string;
  imageUrl: string;
  descricao: string;
  preco: number;
  tamanho: string[];
  cores: string[];
  linha: string;
  fechamento: string;
  origem: string;
  tecnologia: string;
  garantia: string;
  indicacao: string;
  genero: string;
  __v: number;
}

const CardContainer = styled.div`
  width: 230px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #b9faa7;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImageWrapper = styled.div`
  width: 190px;
  height: 190px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 8px;
`;

const CardPrice = styled.p`
  font-size: 8px;
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-size: 6px;
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

  return (
    <div>
      {calcadoMasculinoList.map((calcado) => (
        <CardContainer key={calcado._id}>
          <ImageWrapper>
            <CardImage src={calcado.imageUrl} alt={calcado.nome} />
          </ImageWrapper>
          <CardTitle>{calcado.nome}</CardTitle>
          <CardPrice>Preço: R${calcado.preco}</CardPrice>
        </CardContainer>
      ))}
    </div>
  );
};

export default CalcadoMasculino;
