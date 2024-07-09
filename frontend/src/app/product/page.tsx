"use client";
import { HorizontalCardList } from "@/components/HorizontalCardList";
import { ProductView } from "@/components/ProductView";
import {
  HorizontalCardListProps,
  HorizontalCardProps,
  ProductProps,
} from "@/lib/types";
import { Col } from "antd";
import { GET } from "../api/product/route";

export default async function ProductPage() {
  // const product = await GET('http://backend:8000/endpoints/imoveis_destaque');
  const destaques = await GET('http://backend:8000/endpoints/imoveis_ativos_info_completa');

  const imagesProps: ProductProps = {
    name: "Casa Exemplo",
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
    cards: destaques,
  };
  const cardsList2: HorizontalCardListProps = {
    name: "Outros Proximos",
    cards: destaques,
  };
  return (
    <Col>
      <ProductView {...imagesProps} />
      <HorizontalCardList {...cardsList} />
      <HorizontalCardList {...cardsList2} />
    </Col>
  );
}
