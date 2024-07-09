"use client";
import { HorizontalCardList } from "@/components/HorizontalCardList";
import { ProductView } from "@/components/ProductView";
import {
  HorizontalCardListProps,
  HorizontalCardProps,
  ProductProps,
} from "@/lib/types";
import { Col } from "antd";

export default async function ProductPage() {
  const card: HorizontalCardProps = {
    id: "1",
    imgSrc: "/house_example.jpg",
    name: "Casa Exemplo",
    size: 100,
    price: 100000,
    pricePerSquareMeter: 1000,
    isPetFriendly: true,
    withFurniture: true,
    withAccessibility: true,
    parkingSpaces: 2,
    bathrooms: 2,
    bedrooms: 2,
    toRent: true,
    broker: {
      name: "Vinicius Menezes",
      role: "Corretor Associado",
      imgSrc: "broker.png",
    },
  };

  const imagesProps: ProductProps = {
    name: "Casa Exemplo",
    district: "Campus Do CTA",
    price: 1000000,
    pricePerSquareMeter: 1000,
    images: [
      "/house_example.jpg",
      "/house_example.jpg",
      "/house_example.jpg",
      "/house_example.jpg",
      // Add more image URLs as needed
    ],
  };
  const cardsList: HorizontalCardListProps = {
    name: "Outras Similares",
    cards: [card, card, card],
  };
  const cardsList2: HorizontalCardListProps = {
    name: "Outros Proximos",
    cards: [card, card, card],
  };
  return (
    <Col>
      <ProductView {...imagesProps} />
      <HorizontalCardList {...cardsList} />
      <HorizontalCardList {...cardsList2} />
    </Col>
  );
}
