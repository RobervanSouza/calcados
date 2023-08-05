import React from "react";
import styled from "styled-components";

const LoginCardContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const LoginCard = () => {
  return (
    <LoginCardContainer>
      <p>Opção para fazer login</p>
   
    </LoginCardContainer>
  );
};

export default LoginCard;
