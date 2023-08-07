"use client";

import PasswordInput from "@/components/senha/senha";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const apiUrl = "https://api-back-kappa.vercel.app/cadastro";


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

const PasswordRequirements = styled.div<PasswordRequirementsProps>`
  font-size: 14px;
  color: ${({ valid }) => (valid ? "green" : "red")};
  width: 334px;
  height: 134px;
  p{
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


const diasOptions = [
  { value: "", label: "* Dia", disabled: true },
  { value: "01", label: "01" },
  { value: "02", label: "02" },
  { value: "03", label: "03" },
  { value: "04", label: "04" },
  { value: "05", label: "05" },
  { value: "06", label: "06" },
  { value: "07", label: "07" },
  { value: "08", label: "08" },
  { value: "09", label: "09" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
  { value: "26", label: "26" },
  { value: "27", label: "27" },
  { value: "28", label: "28" },
  { value: "29", label: "29" },
  { value: "30", label: "30" },
  { value: "31", label: "31" },
];

const mesesOptions = [
  { value: "", label: "* Mês", disabled: true },
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

const anosOptions = [
  { value: "", label: "* Ano", disabled: true },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
  { value: "2016", label: "2016" },
  { value: "2015", label: "2015" },
  { value: "2014", label: "2014" },
  { value: "2013", label: "2013" },
  { value: "2012", label: "2012" },
  { value: "2011", label: "2011" },
  { value: "2010", label: "2010" },
  { value: "2009", label: "2009" },
  { value: "2008", label: "2008" },
  { value: "2007", label: "2007" },
  { value: "2006", label: "2006" },
  { value: "2005", label: "2005" },
  { value: "2004", label: "2004" },
  { value: "2003", label: "2003" },
  { value: "2002", label: "2002" },
  { value: "2001", label: "2001" },
  { value: "2000", label: "2000" },
  { value: "1999", label: "1999" },
  { value: "1998", label: "1998" },
  { value: "1997", label: "1997" },
  { value: "1996", label: "1996" },
  { value: "1995", label: "1995" },
  { value: "1994", label: "1994" },
  { value: "1993", label: "1993" },
  { value: "1992", label: "1992" },
  { value: "1991", label: "1991" },
  { value: "1990", label: "1990" },
  { value: "1989", label: "1989" },
  { value: "1988", label: "1988" },
  { value: "1987", label: "1987" },
  { value: "1986", label: "1986" },
  { value: "1985", label: "1985" },
  { value: "1984", label: "1984" },
  { value: "1983", label: "1983" },
  { value: "1982", label: "1982" },
  { value: "1981", label: "1981" },
  { value: "1980", label: "1980" },
  { value: "1979", label: "1979" },
  { value: "1978", label: "1978" },
  { value: "1977", label: "1977" },
  { value: "1976", label: "1976" },
  { value: "1975", label: "1975" },
  { value: "1974", label: "1974" },
  { value: "1973", label: "1973" },
  { value: "1972", label: "1972" },
  { value: "1971", label: "1971" },
  { value: "1970", label: "1970" },
  { value: "1969", label: "1969" },
  { value: "1968", label: "1968" },
  { value: "1967", label: "1967" },
  { value: "1966", label: "1966" },
  { value: "1965", label: "1965" },
  { value: "1964", label: "1964" },
  { value: "1963", label: "1963" },
  { value: "1962", label: "1962" },
  { value: "1961", label: "1961" },
  { value: "1960", label: "1960" },
  { value: "1959", label: "1959" },
  { value: "1958", label: "1958" },
  { value: "1957", label: "1957" },
  { value: "1956", label: "1956" },
  { value: "1955", label: "1955" },
  { value: "1954", label: "1954" },
  { value: "1953", label: "1953" },
  { value: "1952", label: "1952" },
  { value: "1951", label: "1951" },
  { value: "1950", label: "1950" },
];
const estadosOptions = [
  { value: "", label: "* Estado", disabled: true },
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
];

const Cadastro = () => {
  const [formData, setFormData] = useState({
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

  

  const formatarNumero = (numero: any) => {
    const cleaned = ("" + numero).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
    if (!match) return "";
    return (
      (match[1] ? "(" + match[1] : "") +
      (match[2] ? ") " + match[2] : "") +
      (match[3] ? "-" + match[3] : "")
    );
  };

  const handleCelularChange = (e: any) => {
    const numeroFormatado = formatarNumero(e.target.value);
    setFormData({ ...formData, celular: numeroFormatado });
  };


    const formatarCPF = (cpf: any) => {
    const cleaned = ('' + cpf).replace(/\D/g, '');
    const match = cleaned.match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    if (!match) return '';
    return (!match[2] ? match[1] : match[1] + '.' + match[2]) +
      (match[3] ? '.' + match[3] : '') +
      (match[4] ? '-' + match[4] : '');
  };

  const handleCPFChange = (e:any) => {
    const cpfFormatado = formatarCPF(e.target.value);
    setFormData({ ...formData, cpf: cpfFormatado });
  };

  
const formatCEP = (cep: any) => {
  if (cep.length <= 5) {
    return cep;
  } else {
    return `${cep.slice(0, 5)}-${cep.slice(5)}`;
  }
};
 const handleCEPChange = (e: any) => {
   const rawValue = e.target.value;
   const cep = rawValue.replace(/\D/g, ""); // Remove caracteres não numéricos
   const formattedCEP = formatCEP(cep); // Função para formatar o CEP

   setFormData({ ...formData, cep: formattedCEP });
 };

  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false); 

  const checkPasswordRequirements = (password: string) => {
    const hasMinimumLength = password.length >= 8;
    const hasUppercaseLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
      password
    );
    const hasNumber = /\d/.test(password);

    return (
      hasMinimumLength && hasUppercaseLetter && hasSpecialCharacter && hasNumber
    );
  };

  useEffect(() => {
    setPasswordIsValid(checkPasswordRequirements(password));
  }, [password]);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  // const handleSubmitSenha = (event: React.FormEvent) => {
  //   event.preventDefault();
  
  // };

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
        {/* <Row>
            <Column>
            <Label>Senha</Label>
            
            <PasswordInput
           
            value={password}
           
            onChange={handlePasswordChange}
           
           
          />
            
          </Column>
       
        </Row>
        <Row>
   <Column>
          
              <PasswordRequirements valid={passwordIsValid}>
          <Requisitos>
            <p>
              <RequisitoItem
                valid={/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)}>
                {/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)
                  ? "✓"
                  : "x"}{" "}
                Caractere Sujeridos: `${specialCharacters}`;
              </RequisitoItem>{" "}
              <RequisitoItem valid={/\d/.test(password)}>
                {/\d/.test(password) ? "✓" : "x"} Tem que ter números
              </RequisitoItem>
              <RequisitoItem valid={password.length >= 8}>
                {password.length >= 8 ? "✓" : "x"} Minimo 08 dígitos;
              </RequisitoItem>{" "}
              <RequisitoItem valid={/[A-Z]/.test(password)}>
                {/[A-Z]/.test(password) ? "✓" : "x"} Letras maiúscula;
              </RequisitoItem>{" "}
            </p>
          </Requisitos>
        </PasswordRequirements></Column>
        </Row> */}

        <Button type="submit">Cadastrar</Button>
      </Form>
    </CadastroContainer>
  );
};

export default Cadastro;
