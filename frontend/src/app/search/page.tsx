import { HorizontalCardList } from "@/components/HorizontalCardList";
import { Search } from "@/components/Search";
import { HorizontalCardListProps } from "@/lib/types";
import { Col } from "antd";
import { GET } from "../api/product/route";

export default async function SearchPage() {
  const responses = await GET('http://backend:8000/endpoints/imoveis_ativos_info_completa');
  const card = {
    id: "1",
    imgSrc: "/house_example.jpg",
    name: "Casa Exemplo",
    size: 100,
    price: 10000,
    pricePerSquareMeter: 100,
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
  const cardsList: HorizontalCardListProps = {
    name: "Resultados",
    cards: [card, card, card],
  };
  return (
    <Col>
      <Search />
      <HorizontalCardList {...cardsList} />
    </Col>
  );
}
