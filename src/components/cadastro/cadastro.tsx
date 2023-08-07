import React, { useState } from "react";
import styled from "styled-components";

const CadastroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    sexo: "",
    celular: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    cpf: "",
    nascimento: "",
    cep: "",
  });

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
    console.log(formData);
  };

  return (
    <CadastroContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Sobrenome</Label>
          <Input
            type="text"
            value={formData.sobrenome}
            onChange={(e) =>
              setFormData({ ...formData, sobrenome: e.target.value })
            }
            required
          />
        </FormGroup>
        {/* Adicione os outros campos do formulário aqui */}
        <Button type="submit">Cadastrar</Button>
      </Form>
    </CadastroContainer>
  );
};

export default Cadastro;
