export interface VerticalCardProps {
  id: string;
  city: string;
  county: string;
  street: string;
  price: number;
  pricePerSquareMeter: number;
  imgSrc: string;
}

export interface VerticalCardListProps {
  name: string;
  cards: VerticalCardProps[];
}

export interface TagProps {
  imageSrc: string;
  value: string;
}

export interface BrokerProps {
  name: string;
  role: string;
  imgSrc: string;
}

export interface HorizontalCardProps {
  imgSrc: string;
  city: string;
  county: string;
  street: string;
  size: number;
  price: number;
  pricePerSquareMeter: number;
  tags: TagProps[];
  broker: BrokerProps;
  isBrokerPage?: boolean;
}

export interface HorizontalCardListProps {
  name: string;
  isBrokerPage?: boolean;
  cards: HorizontalCardProps[];
}

export interface ProductProps {
  city?: string;
  district?: string;
  street?: string;
  county?: string;
  size?: number;
  price?: number;
  pricePerSquareMeter?: number;
  images: string[];
}

export interface ImageGalleryProps {
  images: string[];
  size: string;
}
