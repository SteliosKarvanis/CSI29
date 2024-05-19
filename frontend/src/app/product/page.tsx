"use client";
import { HorizontalCardList } from "@/components/HorizontalCardList";
import { ProductView } from "@/components/ProductView";
import {
  HorizontalCardListProps,
  HorizontalCardProps,
  ProductProps,
} from "@/lib/types";
import { Col } from "antd";

export default function ProductPage() {
  const card: HorizontalCardProps = {
    imgSrc: "/house_example.jpg",
    city: "Bucuresti",
    county: "Ilfov",
    street: "Strada Exemplu",
    size: 100,
    price: 100000,
    pricePerSquareMeter: 1000,
    tags: [
      {
        imageSrc: "/bathroom.png",
        value: "2",
      },
      {
        imageSrc: "/car.png",
        value: "5",
      },
      {
        imageSrc: "/room.png",
        value: "3",
      },
      {
        imageSrc: "/size.png",
        value: "100",
      },
    ],
    broker: {
      name: "Vinicius Menezes",
      role: "Corretor Associado",
      imgSrc: "broker.png",
    },
  };

  const imagesProps: ProductProps = {
    city: "Sao Jose Dos Campos",
    district: "Campus Do CTA",
    county: "Sao Paulo",
    street: "Rua H8A",
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
