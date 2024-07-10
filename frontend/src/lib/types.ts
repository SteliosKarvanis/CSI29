export interface VerticalCardProps {
  id: string;
  name: string;
  toRent: boolean;
  price: number;
  imgSrc: string;
}

export interface VerticalCardListProps {
  name: string;
  cards: VerticalCardProps[];
}

export interface TagProps {
  imageSrc: string;
  value: string | number | undefined;
}

export interface BrokerProps {
  id: string;
  name: string;
  role: string;
  imgSrc: string;
}

export interface HorizontalCardProps {
  id: string;
  imgSrc: string;
  name: string;
  toRent: boolean;
  price: number;
  pricePerSquareMeter: number;
  broker: BrokerProps;
  isBrokerPage?: boolean;
  // Tags
  size: number;
  isPetFriendly: boolean;
  withFurniture: boolean;
  withAccessibility: boolean;
  parkingSpaces: number;
  bathrooms: number;
  bedrooms: number;
}

export interface HorizontalCardListProps {
  name: string;
  isBrokerPage?: boolean;
  cards: HorizontalCardProps[];
}

export interface ProductProps {
  imgSrcs: string[];
  imovel_id: string;
  destaque: boolean;
  nome_residencia: string;
  comprar: boolean;
  preco_compra?: number | null;
  alugar: boolean;
  preco_aluguel?: number | null;
  taxa_condominio?: number | null;
  iptu: number;
  metros_quadrados: number;
  quartos_total: number;
  quartos_suite: number;
  banheiros_total: number;
  mobiliado: boolean;
  varanda: boolean;
  direcao_sol: "M" | "T" | "X";
  pet_friendly: boolean;
  acessibilidade: boolean;
  estacionamento: boolean;
  descricao: string;
  data_insercao: string;  // ISO 8601 format
  data_ultima_modificacao: string;  // ISO 8601 format
  proprietario_id: string;  // Assuming Proprietario model has a string ID
  corretagem: string[];
}

export interface ImageGalleryProps {
  images: string[];
  size: string;
}
