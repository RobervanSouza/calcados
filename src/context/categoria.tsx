"use client";
 
import { TypesCategoria } from "@/types/types-categoria";
import { ReactNode, createContext, useState } from "react";
 
export const CategoriaContext = createContext({
  pesquisa: "",
  paginas: 0,
  type: TypesCategoria.MASCULINO,
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
  return (
    <div>
      <CategoriaContext.Provider
        value={{ pesquisa, paginas, type, setPaginas, setPesquisa, setType }}>
        {children}
      </CategoriaContext.Provider>
    </div>
  );
};

export default CategoriaProvider;
