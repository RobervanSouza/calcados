'use client'

import { useDetalhes } from "@/hooks/detalhes";
import React, { useState } from "react";
import styled from "styled-components";

const DetalhesContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div<{ isCentral: boolean }>`
  width: ${({ isCentral }) => (isCentral ? "500px" : "250px")};
  margin: 20px;
  padding: 20px;
  border: 2px solid ${({ isCentral }) => (isCentral ? "red" : "blue")};
  background-color: ${({ isCentral }) => (isCentral ? "green" : "transparent")};
  cursor: ${({ isCentral }) => (isCentral ? "default" : "pointer")};
`;

const CardPrice = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: black;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
  border: 2px solid red;
`;

const Detalhes = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data, error, status } = useDetalhes(searchParams.id);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  if (error) {
    return <div>Ocorreu um erro ao carregar os detalhes do produto.</div>;
  }

  if (!data) {
    return <div>Carregando...</div>;
  }

  // Verifica se data.imageUrl é um array antes de fazer o mapeamento
  const allImages = Array.isArray(data.imageUrl) ? data.imageUrl : [];

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <DetalhesContainer>
        <Card isCentral>
          <CardPrice>{data.nome}</CardPrice>
          <CardImage src={currentImage || data.imageUrl[0]} alt={data.nome} />
        </Card>
        {allImages.map((imageUrl, index) => (
          <Card
            key={index}
            isCentral={false}
            onClick={() => handleImageClick(imageUrl)}
          >
            <CardImage src={imageUrl} alt={data.nome} />
          </Card>
        ))}
      </DetalhesContainer>
    </div>
  );
};

export default Detalhes;
