 export interface CalcadoMasculino {
  _id: string;
  nome: string;
  imageUrl: string;
  descricao: string;
  preco: number;
  tamanho: string[];
  cores: string[];
  lancamento: boolean;
  fechamento: string;
  origem: string;
  desconto: number;
  garantia: string;
  indicacao: string;
  genero: string;
  parcelas: number;
}

export interface DetalhesFetch {
  data: {
    _id: string;
    nome: string;
    imageUrl: string;
    descricao: string;
    preco: number;
    tamanho: string[];
    cores: string[];
    lancamento: boolean;
    fechamento: string;
    origem: string;
    desconto: number;
    garantia: string;
    indicacao: string;
    genero: string;
    parcelas: number;
  };
}
