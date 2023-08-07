"use client"
import { useState } from "react";
export const useFormData = () => {
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
    const cleaned = ("" + cpf).replace(/\D/g, "");
    const match = cleaned.match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    if (!match) return "";
    return (
      (!match[2] ? match[1] : match[1] + "." + match[2]) +
      (match[3] ? "." + match[3] : "") +
      (match[4] ? "-" + match[4] : "")
    );
  };
  const handleCPFChange = (e: any) => {
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

  return {
    formData,
    setFormData,
    formatarNumero,
    handleCelularChange,
    formatarCPF,
    handleCPFChange,
    formatCEP,
    handleCEPChange,
  };
};