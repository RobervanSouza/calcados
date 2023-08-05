"use client";import React, { useState } from "react";
import styled from "styled-components";

const StyledGeral = styled.div`
  /* background-color: green; */
  min-width: 100vw;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  div{
    
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const CadastroGeral = styled.div`

  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Senha:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputWrapper>

        <CadastroGeral>
        <Button type="submit">Login</Button>

        </CadastroGeral>

        
        
      </form>
    </FormContainer>
  );
};

const Cadastro: React.FC = () => {

    const [showLoginCard, setShowLoginCard] = useState(false); // Estado para controlar a exibição do card de login

    const handleLoginIconClick = () => {
      setShowLoginCard(!showLoginCard); // Altera o estado para mostrar ou esconder o card de login
    };

  return (
    <StyledGeral>
      <div>
        <h1>Acessar sua Conta</h1>
        <LoginForm />
      </div>
    </StyledGeral>
  );
};

export default Cadastro;
