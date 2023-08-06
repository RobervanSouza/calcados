"use client";import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledGeral = styled.div`
  /* background-color: green; */
  min-width: 100vw;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  flex-wrap: wrap;
  

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
/* background-color: red; */
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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




// ... (mesmos estilos e componentes definidos anteriormente)

interface PasswordRequirementsProps {
  valid: boolean;
}

const PasswordRequirements = styled.div<PasswordRequirementsProps>`
  font-size: 14px;
  color: ${({ valid }) => (valid ? "green" : "red")};
`;

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false); // Estado para acompanhar a validade da senha

  const checkPasswordRequirements = (password: string) => {
    const hasMinimumLength = password.length >= 8;
    const hasUppercaseLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
      password
    );
    const hasNumber = /\d/.test(password);

    return (
      hasMinimumLength &&
      hasUppercaseLetter &&
      hasSpecialCharacter &&
      hasNumber
    );
  };

  useEffect(() => {
    setPasswordIsValid(checkPasswordRequirements(password));
  }, [password]);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

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
          <Input
            type="email"
            value={email}
            placeholder="Digite seu Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            value={password}
            placeholder="Digite sua Senha"
            onChange={handlePasswordChange}
            required
            style={{
              borderColor: passwordIsValid ? "green" : "#ccc",
            }}
          />
        </InputWrapper>
        <PasswordRequirements valid={passwordIsValid}>
          {password.length >= 8
            ? "✓ no mínimo 8 dígitos; "
            : "x no mínimo 8 dígitos; "}
          {/[A-Z]/.test(password)
            ? "✓ tem que ter uma letra maiúscula; "
            : "x tem que ter uma letra maiúscula; "}
          {/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)
            ? "✓ tem que ter um caractere especial; "
            : "x tem que ter um caractere especial; "}
          {/\d/.test(password) ? "✓ tem que ter um número" : "x tem que ter um número"}
        </PasswordRequirements>
        <CadastroGeral>
          <Button type="submit">Login</Button>
        </CadastroGeral>
      </form>
    </FormContainer>
  );
};

// ... (restante do código é o mesmo)


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
