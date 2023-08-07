"use client";

import {
  anosOptions,
  diasOptions,
  estadosOptions,
  mesesOptions,
} from "@/components/cadastro/estadosNascimento";
import { useFormData } from "@/components/cadastro/formatar";

import PasswordInput from "@/components/senha/senha";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
const apiUrl = "https://api-back-kappa.vercel.app/cadastro";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CadastroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  min-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const Column = styled.div`
  flex: 1;
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
const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

interface PasswordRequirementsProps {
  valid: boolean;
}



const PasswordWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const EyeIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

interface PasswordInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordRequirements = styled.div<PasswordRequirementsProps>`
  font-size: 14px;
  color: ${({ valid }) => (valid ? "green" : "red")};
  width: 334px;
  height: 134px;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Requisitos = styled.div`
  /* background-color: #007bff; */

  width: 334px;
  height: 134px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const RequisitoItem = styled.span<{ valid: boolean }>`
  color: ${({ valid }) => (valid ? "green" : "red")};
`;
// const LinkStyled = styled(Link)`
//   text-decoration: none;
//   color: white;
//   cursor: point;
// `;

const Cadastro: React.FC<PasswordInputProps> = ({ value, onChange })=> {
  const {
    formData,
    setFormData,
    formatarNumero,
    handleCelularChange,
    formatarCPF,
    handleCPFChange,
    formatCEP,
    handleCEPChange,
  } = useFormData();

  const specialCharacters = "!@#$%^&*()_-=[]{};':\"|,.<>/?";
  const initialFormData = {
    nome: "",
    email: "",
    senha: "",
    sobrenome: "",
    sexo: "",
    celular: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    cpf: "",
    diaNascimento: "",
    mesNascimento: "",
    anoNascimento: "",
    cep: "",
  };
  const [formData1, setFormData1] = useState(initialFormData);
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Formatar os dados no formato esperado pela API
    const formattedData = {
      nome: formData.nome,
      email: formData.email,
      senha: formData.senha,
      sobrenome: formData.sobrenome,
      sexo: formData.sexo,
      celular: formData.celular !== "" ? parseInt(formData.celular) : undefined,
      rua: formData.rua,
      bairro: formData.bairro,
      cidade: formData.cidade,
      estado: formData.estado,
      cpf: formData.cpf !== "" ? parseInt(formData.cpf) : undefined,
      diaNascimento:
        formData.diaNascimento !== ""
          ? parseInt(formData.diaNascimento)
          : undefined,
      mesNascimento:
        formData.mesNascimento !== ""
          ? parseInt(formData.mesNascimento)
          : undefined,
      anoNascimento:
        formData.anoNascimento !== ""
          ? parseInt(formData.anoNascimento)
          : undefined,
      cep: formData.cep !== "" ? parseInt(formData.cep) : undefined,
    };

    console.log("Dados a serem enviados:", formattedData);
    try {
      const response = await axios.post(apiUrl, formattedData);
      console.log("Resposta da API:", response.data);
      setFormData({
        nome: "",
        email: "",
        senha: "",
        sobrenome: "",
        sexo: "",
        celular: "",
        rua: "",
        bairro: "",
        cidade: "",
        estado: "",
        cpf: "",
        diaNascimento: "",
        mesNascimento: "",
        anoNascimento: "",
        cep: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar novo usuário:", error);
    }
  };

  return (
    <CadastroContainer>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Column>
            <Label>Nome</Label>
            <Input
              type="text"
              placeholder="Digite seu Nome"
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
              required
            />
          </Column>
          <Column>
            <Label>Sobrenome</Label>
            <Input
              type="text"
              placeholder="Digite seu Sobrenome"
              value={formData.sobrenome}
              onChange={(e) =>
                setFormData({ ...formData, sobrenome: e.target.value })
              }
              required
            />
          </Column>
        </Row>
        <Label>Data de Nascimento</Label>
        <Row>
          <Column>
            <Select
              value={formData.diaNascimento}
              onChange={(e) =>
                setFormData({ ...formData, diaNascimento: e.target.value })
              }
              required>
              {diasOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Column>
          <Column>
            <Select
              value={formData.mesNascimento}
              onChange={(e) =>
                setFormData({ ...formData, mesNascimento: e.target.value })
              }
              required>
              {mesesOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Column>
          <Column>
            <Select
              value={formData.anoNascimento}
              onChange={(e) =>
                setFormData({ ...formData, anoNascimento: e.target.value })
              }
              required>
              {anosOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Sexo</Label>

            <Input
              as="select"
              value={formData.sexo}
              onChange={(e) =>
                setFormData({ ...formData, sexo: e.target.value })
              }
              required>
              <option value="" disabled>
                * Selecione o Sexo
              </option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </Input>
          </Column>
          <Column>
            <Label>Contato</Label>
            <Input
              type="text"
              placeholder="(XX) XXXXX-XXXX"
              value={formData.celular}
              onChange={handleCelularChange}
              required
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>CPF</Label>
            <Input
              type="text"
              placeholder="Digite seu CPF"
              value={formData.cpf}
              onChange={handleCPFChange}
              required
            />
          </Column>{" "}
          <Column>
            <Label>Informe seu CEP</Label>
            <Input
              type="text"
              placeholder="Digite seu CEP"
              value={formData.cep}
              onChange={handleCEPChange}
              required
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Rua</Label>
            <Input
              type="text"
              placeholder="Digite nome da Rua"
              value={formData.rua}
              onChange={(e) =>
                setFormData({ ...formData, rua: e.target.value })
              }
              required
            />
          </Column>
          <Column>
            <Label>Bairro</Label>
            <Input
              type="text"
              placeholder="Digite nome do Bairro"
              value={formData.bairro}
              onChange={(e) =>
                setFormData({ ...formData, bairro: e.target.value })
              }
              required
            />
          </Column>
        </Row>
        <Row>
          {" "}
          <Column>
            <Label>Cidade</Label>
            <Input
              type="text"
              placeholder="Digite da Cidade"
              value={formData.cidade}
              onChange={(e) =>
                setFormData({ ...formData, cidade: e.target.value })
              }
              required
            />
          </Column>
          <Column>
            <Label>Estado</Label>
            <Select
              value={formData.estado}
              onChange={(e) =>
                setFormData({ ...formData, estado: e.target.value })
              }
              required>
              {estadosOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Email</Label>
            <Input
              type="text"
              placeholder="Digite seu Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </Column>
          <Column>
            <Input
              type="text"
              placeholder="Digite senha"
              value={formData.senha}
              onChange={(e) =>
                setFormData({ ...formData, senha: e.target.value })
              }
              required
            />
          </Column>
        </Row>
        <Row>
         
        </Row>
        <Row>
         
        </Row>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </CadastroContainer>
  );
};

export default Cadastro;
