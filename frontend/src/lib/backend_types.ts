export interface Corretor {
  corretor_id: string;
  nome: string;
  telefone: string;
  email: string;
  foto: string;
  conta_ativa: boolean;
}

export interface Imovel {
  imovel_id: string;
  destaque: boolean;
  nome_residencia: string;
  comprar: boolean;
  preco_compra: number;
  alugar: boolean;
  preco_aluguel: number;
  taxa_condominio: number;
  iptu: number;
  metros_quadrados: number;
  quartos_total: number;
  quartos_suite: number;
  banheiros_total: number;
  mobiliado: boolean;
  varanda: boolean;
  direcao_sol: string;
  pet_friendly: boolean;
  acessibilidade: boolean;
  estacionamento: boolean;
  descricao: string;
  data_insercao: string;
  data_ultima_modificacao: string;
  proprietario_id: string;
  corretagem: Corretor[];
}

export interface Casa extends Imovel {
  numero_andares: number;
  quintal: boolean;
}

export interface Apartamento extends Imovel {
  andar: number;
  descricao_predio: string;
}

export interface Endereco {
  imovel_id: string;
  descricao_endereco: string;
  lat: number;
  lon: number;
  perto_transporte_publico: boolean;
}

export interface Multimidia {
  multimidia_id: string;
  imovel_id: string;
  tipo_img_video: string;
  extensao_arquivo: string;
  arquivo: string;
}

export interface Proprietario {
  proprietario_id: string;
  nome: string;
  telefone: string;
  email: string;
}
