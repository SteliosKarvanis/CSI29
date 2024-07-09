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
  name: string;
  size?: number;
  price?: number;
  pricePerSquareMeter?: number;
  images: string[];
}

export interface ImageGalleryProps {
  images: string[];
  size: string;
}
