// detalhes.ts
import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { DetalhesFetch } from "@/types/detalhes";

interface DetalhesResponse {
  data: DetalhesFetch;
}

const url = "https://api-back-kappa.vercel.app/calcadoMasculino";

const fetch = (id: string) => {
  return axios.get<DetalhesResponse>(`${url}/${id}`);
};

export function useDetalhes(id: string) {
  const { data, isError, error, status  }: UseQueryResult<DetalhesResponse> = useQuery(
    ["product", id],
    () => fetch(id),
    {
      enabled: !!id,
      onError: (err) => {
        console.error("Erro na requisição:", err);
      },
    }
  );

  return {
    data: data?.data.data, 
    isError,
    error,
    status,
  };
}
