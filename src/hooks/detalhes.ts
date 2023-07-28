// detalhes.ts
import axios, { AxiosPromise } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { DetalhesFetch } from "@/types/detalhes";

const url = "https://api-back-kappa.vercel.app/calcadoMasculino";

const fetch = (id: string): AxiosPromise<DetalhesFetch> => {
  return axios.get(`${url}/${id}`);
};

export function useDetalhes(id: string) {
  const { data, isError, error }: UseQueryResult<DetalhesFetch> = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetch(id),
    enabled: !!id,
    onError: (err) => {
      console.error("Erro na requisição:", err);
    },
  });

  return {
    data: data?.data,
    isError,
    error,
  };
}
