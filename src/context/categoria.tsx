"use client";
 
import { TypesCategoria } from "@/types/types-categoria";
import { TypesMaisVendidos } from "@/types/types-maisVendidos";
import { ReactNode, createContext, useState } from "react";
 
export const CategoriaContext = createContext({
  pesquisa: "",
  paginas: 0,
  type: TypesCategoria.MASCULINO,
  mais: TypesMaisVendidos["MAIS-VENDIDO"],
  setMais: (value: TypesMaisVendidos) => {},
  setPesquisa: (value: string) => {},
  setPaginas: (value: number) => {},
  setType: (valeu: TypesCategoria) => {},
});

interface ProvidesProps {
  children: ReactNode;
}

const CategoriaProvider = ({ children }: ProvidesProps) => {
  const [pesquisa, setPesquisa] = useState("");
  const [paginas, setPaginas] = useState(0);
  const [type, setType] = useState(TypesCategoria.MASCULINO);
  const [mais, setMais] = useState(TypesMaisVendidos["MAIS-VENDIDO"]);
  return (
    <div>
      <CategoriaContext.Provider
        value={{ pesquisa, paginas, type, setPaginas, setPesquisa, setType, setMais, mais }}>
        {children}
      </CategoriaContext.Provider>
    </div>
  );
};

export default CategoriaProvider;
