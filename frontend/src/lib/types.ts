export interface VerticalCardProps {
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
}

export interface HorizontalCardListProps {
  name: string;
  cards: HorizontalCardProps[];
}
