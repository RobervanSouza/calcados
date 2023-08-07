"use client"
import React, { useState } from "react";
import axios from "axios";

const apiUrl = "https://api-back-kappa.vercel.app/login";

const CadastrarUsuario: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const novoUsuario = {
      email,
      senha,
    };

    try {
      const response = await axios.post(apiUrl, novoUsuario);
      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Erro ao cadastrar novo usuário:", error);
    }
  };

  return (
    <div>
      <h2>Cadastrar Novo Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarUsuario;
